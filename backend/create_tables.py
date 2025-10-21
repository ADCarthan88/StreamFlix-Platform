from app.core.database import engine, Base
from app.models.user import User
from app.models.movie import Movie

# Create all tables
Base.metadata.create_all(bind=engine)
print("Database tables created successfully!")

# Add sample data
from sqlalchemy.orm import sessionmaker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
db = SessionLocal()

# Add sample movies
sample_movies = [
    Movie(
        title="The Matrix",
        description="A computer programmer discovers reality is a simulation",
        genre="Sci-Fi",
        release_year=1999,
        duration_minutes=136,
        rating=8.7,
        poster_url="/images/matrix_poster.jpg",
        trailer_url="/videos/matrix_trailer.mp4"
    ),
    Movie(
        title="Inception",
        description="A thief enters dreams to plant ideas",
        genre="Sci-Fi",
        release_year=2010,
        duration_minutes=148,
        rating=8.8,
        poster_url="/images/inception_poster.jpg",
        trailer_url="/videos/inception_trailer.mp4"
    ),
    Movie(
        title="Interstellar",
        description="Astronauts search for humanity's new home",
        genre="Sci-Fi",
        release_year=2014,
        duration_minutes=169,
        rating=8.6,
        poster_url="/images/interstellar_poster.jpg",
        trailer_url="/videos/interstellar_trailer.mp4"
    )
]

for movie in sample_movies:
    db.add(movie)

db.commit()
db.close()
print("Sample data added successfully!")