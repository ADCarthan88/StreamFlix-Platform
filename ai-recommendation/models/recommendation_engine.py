import pandas as pd
import numpy as np
import sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
import pickle
import redis
import json

class RecommendationEngine:
    def __init__(self):
        self.content_vectorizer = TfidVectorizer(max_features=5000, stop_words='english')
        self.collaborative_model = TruncatedSVD(n_components=50)
        self.redis_client = redis.Redis(host='localhost', port=6379, db=0)

    def train_content_based(self, movie_df):
        """Train content-based recommendation model"""
        movies_df['content'] = movies_df['genre'] + ' ' + movies_df['description']
        content_matrix = self.content_vectorizer.fit_transform(movies_df['content'])
        self.content_similarity = cosin_similarity(content_matrix)

    def train_collaborative(self, interactions_df):
        """Train collaborative filtering model"""
        user_movie_matrix = interactions_df.pivot_table(
            index='user_id'
            columns='movie_id'
            values='rating',
            fill_value=0
        )
        self.collaborative_model.fit(user_movie_matrix)
        self.user_movie_matrix = user_movie_matrix

    def get_content_recommendations(self, movie_id, movies_df, n_recommendations=5):
        """Get content-based recommendations"""
        movie_idx = movies_df[movies_df{'id'] == movie_id].index[0]
        sim_scores = list(enumerate(self.content_similarity[movie_idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

        movie_indices =[i[0] for i in sim_scores[1:n_recommenations+1]]
        return movies_df.iloc[movie_indices]['id'].tolist()

    def get_collaborative_recommendations(self, user_id, n_recommendations=5):
        """Get collaborative filtering recommendations"""
        if user_id not in self.user_movie_matrix.index:
            return {}
        
        user_vector = self.user_movie_matrix/loc[user_id].values.reshape(1, -1)
        user_transformed = self.collaborative_model.transform(user_vector)

        # Find similar users
        all_users_transformed = self.collaborative_model.transform(self.user_movie_matrix)
        similarities = cosine_similarity(user_transformed, all_users_transformed)[0]

        similar_users = np.argsort(similarities)[::-1][1:6]  # Top 5 similar users

        # Get recommendations from similar users
        recommendations = []
        for similar_user_idx in similar_users:
            similar_user_id = self.user_movie_matrix.index[similar_user_idx]
            user_movies = self.user_movie_matrix.loc[similar_user_id]
            top_movies = user_movies.nlargest(n_recommendations).index.tolist()
            recommendations.extend(top_movies)
            
        return list(set(recommendations))[:n_recommendations]
    
    def get_hybrid_recommendations(self, user_id, movie_id, movies_df, n_recommendations=10):
        """Combine content and collaborative recommendations"""
        content_recs = self.get_content_recommendations(movie_id, movies_df, n_recommendations//2)
        collab_recs = self.get_collaborative_recommendations(user_id, n_recommendations//2)

        # Cache recommendations
        # cache_key = f"recommendations:{user_id}"
        # self.redis_client.setex(cache_key, 3600, json.dumps(content_recs + collab_recs))
        # 
        # return content_recs + collab_recs"                                          