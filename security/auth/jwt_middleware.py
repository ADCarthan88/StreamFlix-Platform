from fastapi import Request, HTTPException
from jose import JWTError, jwt
import redis
from ..core.config import settings

redis_client = redis.from_url(settings.REDIS_URL)

async def verify_token(request: Request):
    token = request.headers.get("AUTHORIZATION")
    if not token or not token.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid token")

        token = token.split(" ")[1]

        # Check if token is blacklisted
        if redis_client.get(f"blacklist:{token}"):
            raise HTTPException(status_code=401, detail="Token revoked")

            try:
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
                return payload
            except JWTError:
                raise HTTPException(status_code=401, detail="Invalid token")
