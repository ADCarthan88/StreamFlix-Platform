#!/bin/bash

echo "Setting up StreamFlix Platform..."

# Create environment file from template
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from template. Please update with your secure values."
else
    echo ".env file already exists"
fi

# Create directories
mkdir -p security/certificates
mkdir -p backend/logs
mkdir -p frontend/logs

# Generate SSL certificates (self-signed for development)
if [ ! -f security/certificates/streamflix.crt ]; then
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout security/certificates/streamflix.key \
        -out security/certificates/streamflix.crt \
        -subj "/C=US/ST=State/L=City/O=StreamFlix/CN=localhost"
    echo "SSL certificates generated"
fi

# Install Python dependencies
echo "Installing backend dependencies..."
cd backend
python -m pip install --upgrade pip
pip install -r requirements.txt
cd ..

# Install Node.js dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "Setup complete! Update .env with secure values, then run ./scripts/deploy.sh"
