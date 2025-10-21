from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.movie import Movie
import random

router = APIRouter()

@router.get("/")
async def get_recommendations(db: Session = Depends(get_db)):
    # Simple recommendation logic for now
    movies = db.query(Movie).all()
    recommendations = random.sample(movies, min(6, len(movies)))
    return recommendations