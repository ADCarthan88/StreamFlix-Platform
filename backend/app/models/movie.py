from sqlalchemy import Column, String, Integer, Text, Float, DateTime
from app.core.database import Base
import uuid
from datetime import datetime

class Movie(Base):
    __tablename__ = "movies"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String(255), nullable=False)
    description = Column(Text)
    genre = Column(String(100))
    release_year = Column(Integer)
    duration_minutes = Column(Integer)
    rating = Column(Float)
    poster_url = Column(String(500))
    trailer_url = Column(String(500))
    video_url = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)