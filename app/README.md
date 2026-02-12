# 🚀 Aman Singh Portfolio

A modern, responsive portfolio website built with **React + MongoDB**. Features stunning animations, dark theme UI, comprehensive project showcases, and serverless API functions for seamless deployment on Vercel.

![Portfolio Preview](./public/hero-illustration.jpg)

## ✨ Features

- 🎨 **Modern Dark Theme** with cyan & purple accent colors
- ⌨️ **Typing Animation** in hero section
- 📱 **Fully Responsive** design for all devices
- 🎯 **Smooth Scroll** navigation
- ✨ **Scroll-triggered Animations** with Intersection Observer
- 🖼️ **Project Showcase** with detailed descriptions
- 📊 **Skills Display** with tech stack icons
- 🏆 **Achievements Section** with patent & DSA stats
- 📧 **Contact Form** with MongoDB backend
- 🌐 **Social Links** integration
- 🐍 **Animated Footer** with contribution graph
- ☁️ **Vercel Serverless Functions** for backend API
- 🔧 **Modular Component Architecture** for easy maintenance

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI Library
- **Vite 7** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **GSAP** - Advanced animations

### Backend
- **Vercel Serverless Functions** - API endpoints
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **Express.js** - Local development server (optional)

## 📁 Project Structure

```
app/
├── api/                     # Vercel Serverless Functions
│   └── contact.js          # Contact form API endpoint
├── public/                  # Static assets
│   ├── hero-illustration.jpg
│   ├── medicare-plus.jpg
│   ├── society-management.jpg
│   └── link-shortener.jpg
├── server/                  # Local Backend API (Optional)
│   ├── config/             # Database config
│   │   └── db.js
│   ├── models/             # Mongoose models
│   │   └── Contact.js
│   ├── routes/             # API routes
│   │   └── contact.js
│   ├── server.js           # Entry point
│   └── package.json
├── src/
│   ├── components/         # React components
│   │   ├── AboutSection.jsx        # About me section
│   │   ├── AchievementsSection.jsx # Patent & achievements
│   │   ├── ContactSection.jsx      # Contact form
│   │   ├── ExperienceSection.jsx   # Work experience
│   │   ├── Footer.jsx              # Footer with social links
│   │   ├── HeroSection.jsx         # Hero with typing animation
│   │   ├── Navigation.jsx          # Navbar & mobile menu
│   │   ├── ProjectsSection.jsx     # Project showcase
│   │   ├── SkillsSection.jsx       # Skills & tech stack
│   │   └── ui/                     # shadcn/ui components
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       └── textarea.jsx
│   ├── lib/
│   │   └── utils.js        # Utility functions
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env.example            # Environment variables template
├── .env.production         # Production environment config
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json             # Vercel configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 20.19+** or **22.12+**
- **MongoDB Atlas** account (free tier available) - [Sign up here](https://www.mongodb.com/cloud/atlas)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Amansingh1602/portfolio.git
cd portfolio/app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example file
cp .env.example .env
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

### Using with Local Backend (Optional)

If you want to run the full backend locally:

1. **Install backend dependencies**
```bash
cd server
npm install
cd ..
```

2. **Configure backend environment**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI
```
### Vercel Serverless Functions

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form (saves to MongoDB) |

### Local Backend (Optional)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/info` | Portfolio info |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts (admin) |
| GET | `/api/contact/stats` | Get contact stats |
| DELETE | `/api/contact/:id` | Delete contact (admin)
# Linux/Mac
./start.sh
```

Or start them separately:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server
npm run dev
```

## ☁️ Deploy to Vercel

### Quick Deploy

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Set root directory to `app`

3. **Add Environment Variable**
   - Go to Settings → Environment Variables
   - Add `MONGODB_URI` with your MongoDB Atlas connection string

4. **Deploy!**
   - Click Deploy
   - Your site will be live in ~1 minute

### Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add MONGODB_URI

# Deploy to production
vercel --prod
```

📖 For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](../VERCEL_DEPLOYMENT.md)

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/info` | Portfolio info |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts |
| GET | `/api/contact/stats` | Get contact stats |
| DELETE | `/api/contact/:id` | Delete contact |

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Primary background |
| Card | `#161616` | Card backgrounds |
| Cyan | `#00d4ff` | Primary accent |
| Purple | `#a855f7` | Secondary accent |
| Green | `#22c55e` | Success states |
| Text | `#ffffff` | Primary text |
| Muted | `#a0a0a0` | Secondary text |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🏆 Achievements Highlighted

- ✅ **Patent Accepted** - Driver Safety Monitoring System
- 🎯 **1000+ DSA Problems** Solved
- 📊 **LeetCode Rating 1578** (Top 26%)
- 🎓 **Microsoft MLSA** Beta Ambassador
- 🥉� Environment Variables

### Development (.env)
```env
VITE_API_URL=http://localhost:5000/api  # For local backend
# Or leave empty to use Vercel serverless functions
```

### Production (.env.production)
```env
VITE_API_URL=                    # Leave empty for Vercel
MONGODB_URI=your_mongodb_uri     # Set in Vercel dashboard
```

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-singh-a564a1283/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Amansingh1602)
[![HackerRank](https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white)](https://www.hackerrank.com/amansingh22745)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://www.leetcode.com/amansingh22745)

## 📧 Contact

- **Email**: [amansingh22745@gmail.com](mailto:amansingh22745@gmail.com)
- **Phone**: +91 88230 27745
- **Location**: Punjab, India

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Amansingh1602/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!ields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Amansingh1602)
[![HackerRank](https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white)](https://www.hackerrank.com/amansingh22745)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://www.leetcode.com/amansingh22745)

## 📧 Contact

- Email: [amansingh22745@gmail.com](mailto:amansingh22745@gmail.com)
- Phone: +91 88230 27745
- Location: Punjab, India

## 📝 License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ❤️ by <strong>Aman Singh</strong>
</p>
