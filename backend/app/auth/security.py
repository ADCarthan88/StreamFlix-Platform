from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
import secrets
import hashlib
from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_salt() -> str:
    return secrets.token_hex(32)

def hash_password(password: str, salt: str) -> str:
    return pwd_context.hash(password + salt)

def verify_password(plain_password: str, salt: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password + salt, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def encrypt_sensitive_data(data: str) -> str:
    """Encrypt sensitive user data"""
    from cryptography.fernet import Fernet
    key = Fernet.generate_key()
    f = Fernet(key)
    return f.encrypt(data.encode()).decode()
