/**
 * MERN Stack Portfolio - Backend Server
 * Express.js + MongoDB API
 * 
 * @author Aman Singh
 * @version 1.0.0
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const contactRoutes = require('./routes/contact');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// API Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Portfolio info endpoint
app.get('/api/info', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Aman Singh',
      role: 'Fullstack Developer',
      location: 'Punjab, India',
      email: 'amansingh22745@gmail.com',
      skills: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'JavaScript', 'C++', 'Python', 'Tailwind CSS'
      ],
      socials: {
        github: 'https://github.com/Amansingh1602',
        linkedin: 'https://www.linkedin.com/in/aman-singh-a564a1283/',
        leetcode: 'https://www.leetcode.com/amansingh22745',
        hackerrank: 'https://www.hackerrank.com/amansingh22745'
      }
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════════╗
    ║                                                ║
    ║   🚀 MERN Stack Portfolio Server Running!      ║
    ║                                                ║
    ║   📡 Port: ${PORT}                              ║
    ║   🌐 Environment: ${process.env.NODE_ENV || 'development'}                    ║
    ║   📊 Health: http://localhost:${PORT}/api/health     ║
    ║                                                ║
    ╚════════════════════════════════════════════════╝
    `);
  });
});

module.exports = app;
