from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import redis
from app.auth.security import verify_password, create_access_token, hash_password, create_salt
from app.models.user import User
from app.core.config import settings
from app.core.database import get_db

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
redis_client = redis.from_url(settings.REDIS_URL)

@router.post("/register")
async def register(email: str, password: str, first_name: str, last_name: str, db: Session = Depends(get_db)):
    # Check if user exists
    if db.query(User).filter(User.email == email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
   
    # Create secure user
    salt = create_salt()
    hashed_password = hash_password(password, salt)

    user = User(
        email=email,
        password_hash=hashed_password,
        salt=salt,
        first_name=first_name,
        last_name=last_name
    )

    db.add(user)
    db.commit()

    return {"message": "User created successfully"}

@router.post("/login")
async def login(request: Request, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
   
    if not user or (user.locked_until and user.locked_until > datetime.utcnow()):
        raise HTTPException(status_code=401, detail="Invalid credentials")
   
    if not verify_password(form_data.password, user.salt, user.password_hash):
        # Increment failed attempts
        user.failed_login_attempts = (user.failed_login_attempts or 0) + 1
        if user.failed_login_attempts >= settings.MAX_LOGIN_ATTEMPTS:
            user.locked_until = datetime.utcnow() + timedelta(minutes=settings.LOCKOUT_DURATION_MINUTES)
        db.commit()
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Reset failed attempts on successful login
    user.failed_login_attempts = 0
    user.locked_until = None
    db.commit()

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}