from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.models.movie import Movie
from app.core.database import get_db

router = APIRouter()

@router.get("/")
async def get_movies(db: Session = Depends(get_db)):
    movies = db.query(Movie).all()
    return movies

@router.get("/{movie_id}")
async def get_movie(movie_id: str, db: Session = Depends(get_db)):
    movie = db.query(Movie).filter(Movie.id == movie_id).first()
    if not movie:
        raise HTTPException(status_code=404, detail="Movie not found")
    return movie