@echo off
REM MERN Stack Portfolio Startup Script
REM Starts both frontend and backend servers

echo 🚀 Starting MERN Stack Portfolio...
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error: Node.js is not installed
    pause
    exit /b 1
)

REM Start backend server in new window
echo 📡 Starting backend server...
start "Portfolio Backend" cmd /k "cd /d %~dp0app\server && npm run dev"

REM Wait a moment
timeout /t 2 /nobreak >nul

REM Start frontend server in new window
echo 🎨 Starting frontend server...
start "Portfolio Frontend" cmd /k "cd /d %~dp0app && npm run dev"

echo.
echo ✅ Both servers are starting in separate windows...
echo    Frontend: http://localhost:5173
echo    Backend:  http://localhost:5000
echo.
echo Close the terminal windows to stop the servers.
pause
