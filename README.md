# StreamFlix Platform

A modern, secure streaming platform with AI-powered recommendations, built with FastAPI, Next.js, and PostgreSQL.

## Features

- 🔐 **Enterprise Security**: JWT authentication, password hashing, rate limiting
- 🎬 **Movie Streaming**: High-quality video playback with progress tracking
- 🤖 **AI Recommendations**: Hybrid content-based and collaborative filtering
- 🎨 **Modern UI**: Responsive design with smooth animations
- 📱 **Interactive Features**: Like/dislike, watchlist, user preferences
- 🚀 **Scalable Architecture**: Docker containerization, Redis caching

## Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker (optional)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ADCarthan88/StreamFlix-Platform.git
   cd StreamFlix-Platform
   ```

2. **Run setup script**
   
   **Windows:**
   ```cmd
   scripts\setup.bat
   ```
   
   **Linux/Mac:**
   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

3. **Configure environment**
   - Update `.env` with your secure database credentials
   - Generate a strong SECRET_KEY

4. **Start the platform**
   ```bash
   docker-compose -f infrastructure/docker/docker-compose.yml up -d
   ```

## Architecture

```
StreamFlix-Platform/
├── backend/           # FastAPI application
├── frontend/          # Next.js application  
├── ai-recommendation/ # ML recommendation engine
├── database/          # PostgreSQL schemas
├── security/          # Security configurations
├── infrastructure/    # Docker & deployment
└── scripts/          # Setup & deployment scripts
```

## Security Features

- Password hashing with bcrypt and salt
- JWT token authentication
- Rate limiting and account lockout
- SQL injection prevention
- XSS protection headers
- HTTPS/SSL encryption
- Input validation and sanitization

## API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/movies` - Get all movies
- `GET /api/recommendations` - Get personalized recommendations

## Development

### Backend Development
```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development
```bash
cd frontend
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub.