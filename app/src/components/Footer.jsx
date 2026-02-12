import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Snake Animation */}
        <div className="mb-12 overflow-hidden">
          <svg viewBox="0 0 800 100" className="w-full h-24">
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q100,10 200,50 T400,50 T600,50 T800,50"
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20,10"
              className="animate-pulse"
            />
            {/* Contribution dots */}
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={i * 40 + 20}
                cy={50 + Math.sin(i * 0.5) * 20}
                r={4 + Math.random() * 4}
                fill={i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#22c55e'}
                opacity={0.6 + Math.random() * 0.4}
                className="animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </svg>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Connect and Build Something <span className="text-gradient">Amazing</span> Together!
          </h3>
          
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Amansingh1602" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aman-singh-a564a1283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:amansingh22745@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Aman Singh. All rights reserved. Built with MERN Stack & ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
