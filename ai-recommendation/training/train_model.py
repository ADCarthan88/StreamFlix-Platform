import pandas as pd
import ..models.recommendation_engine import RecommendationEngine
import pickle

def train_recommendation_models():
    # Load data
    movies_df = pd.read_sql("SELECT * FROM movies", connection)
    interactions_df = pd.read_sql("SELECT * FROM user_interactioins", connection)

    # Initialize and train models
    engine = RecommendationEngine()
    engine.train_content_based(movies_df)
    engine.train_collaborative(interactions_df)

    # Save models
    with open('models/recommendation_engine.pkl', 'wb') as f:
        pickle.dump(engine, f)

    print("Models trained and saved successfuly")

if __name__ == "__main__":
    train_recommendation_models()
