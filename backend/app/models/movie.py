from sqlalchemy import Column, String, Integer, Text, DECIMAL, DateTime
from sqlalchemy.dialects.postgresql import UUID
from app.core.database import Base
import uuid
from datetime import datetime

class Movie(Base):
    __tablename__ = "movies"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    genre = Column(String(100))
    release_year = Column(Integer)
    duration_minutes = Column(Integer)
    rating = Column(DECIMAL(3,1))
    poster_url = Column(String(500))
    trailer_url = Column(String(500))
    video_url = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)