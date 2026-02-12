import { useEffect, useState } from 'react'
import { Code2, Mail, ChevronDown, Sparkles, Target, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    "Passionate Fullstack Developer from India 🇮🇳",
    "Building Amazing Web Experiences 🚀",
    "Always Learning New Technologies 📚",
    "Let's Build Something Great Together! 🤝"
  ]

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    const typeSpeed = isDeleting ? 30 : 50
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentText.slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-cyan text-sm font-medium">Available for Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
              Hey there! I'm
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Aman Singh
            </h2>
            
            <div className="h-12 mb-8">
              <p className="text-xl sm:text-2xl text-gray-300 font-mono">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-cyan ml-1 animate-blink" />
              </p>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Fullstack Developer specializing in MERN stack. Building scalable web applications 
              with modern technologies and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan to-purple hover:opacity-90 text-white font-semibold px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-cyan/30 text-cyan hover:bg-cyan/10 font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { value: '1000+', label: 'DSA Problems' },
                { value: '5+', label: 'Projects' },
                { value: 'MSLA', label: 'Microsoft' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              <img 
                src="/hero-illustration.jpg" 
                alt="Developer Illustration" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-purple/20 rounded-2xl blur-xl -z-10" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-card border border-cyan/30 rounded-lg p-3 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-green" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Top 26%</div>
                  <div className="text-gray-400 text-xs">LeetCode</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-purple/30 rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-purple" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Patent</div>
                  <div className="text-gray-400 text-xs">Accepted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-subtle">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-cyan" />
        </div>
      </div>
    </section>
  )
}
