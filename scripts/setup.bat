@echo off
echo Setting up StreamFlix Platform...

REM Create environment file from template
if not exist .env (
    copy .env.example .env
    echo Created .env file from template. Please update with your secure values.
) else (
    echo .env file already exists
)

REM Create directories
if not exist security\certificates mkdir security\certificates
if not exist backend\logs mkdir backend\logs
if not exist frontend\logs mkdir frontend\logs

REM Install Python dependencies
echo Installing backend dependencies...
cd backend
python -m pip install --upgrade pip
pip install -r requirements.txt
cd ..

REM Install Node.js dependencies
echo Installing frontend dependencies...
cd frontend
npm install
cd ..

echo Setup complete! Update .env with secure values, then run scripts\deploy.bat
pause