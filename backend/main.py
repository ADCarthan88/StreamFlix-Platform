from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer
from app.api.auth import router as auth_router
from app.api.movies import router as movies_router
from app.api.recommendations import router as recommendations_router

app = FastAPI(title="StreamFlix API", version="1.0.0")

# Security
security = HTTPBearer()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router, prefix="/api/auth", tags=["auth"])
app.include_router(movies_router, prefix="/api/movies", tags=["movies"])
app.include_router(recommendations_router, prefix="/api/recommendations", tags=["recommendations"])

@app.get("/")
async def root():
    return {"message": "StreamFlix API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}