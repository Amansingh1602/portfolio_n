#!/bin/bash

# MERN Stack Portfolio Startup Script
# Starts both frontend and backend servers concurrently

echo "🚀 Starting MERN Stack Portfolio..."
echo ""

# Check if in correct directory
if [ ! -d "app" ] || [ ! -d "app/server" ]; then
    echo "❌ Error: Please run this script from the 'Portfolio Design' directory"
    exit 1
fi

# Start backend server in background
echo "📡 Starting backend server..."
cd app/server
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend server
echo "🎨 Starting frontend server..."
cd ..
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting..."
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for user to stop
wait
