#!/bin/bash

echo "Deploying StreamFlix Platform..."

# Build and start services
docker-compose -f infrastructure/docker/docker-compose.yml up -d --build

# Wait for database
sleep 30

# Run migrations
docker-compose exec backend python -m alembic upgrade head

# Train AI models
docker-compose exec backend python ai-recommendation/training/train_model.py

echo "Deployment complete! StreamFlix is running on https://localhost"
