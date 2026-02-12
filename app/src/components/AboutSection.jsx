import { useEffect, useState, useRef } from 'react'
import { Code2, BookOpen, Users, MessageSquare, Target, Zap, Terminal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AboutSection() {
  const codeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (codeRef.current) {
      observer.observe(codeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const codeLines = [
    { content: 'const', className: 'code-keyword' },
    { content: ' aman = {', className: 'text-white' },
    { content: '    name: ', className: 'text-white' },
    { content: '"Aman Singh"', className: 'code-string' },
    { content: ',', className: 'text-white' },
    { content: '    role: ', className: 'text-white' },
    { content: '"Fullstack Developer"', className: 'code-string' },
    { content: ',', className: 'text-white' },
    { content: '    location: ', className: 'text-white' },
    { content: '"India 🇮🇳"', className: 'code-string' },
    { content: ',', className: 'text-white' },
    { content: '    available: ', className: 'text-white' },
    { content: 'true', className: 'code-boolean' },
    { content: ',', className: 'text-white' },
    { content: '    skills: [', className: 'text-white' },
    { content: '"Web Dev"', className: 'code-string' },
    { content: ', ', className: 'text-white' },
    { content: '"DSA"', className: 'code-string' },
    { content: ', ', className: 'text-white' },
    { content: '"Problem Solving"', className: 'code-string' },
    { content: '],', className: 'text-white' },
    { content: '    motto: ', className: 'text-white' },
    { content: '"Code. Create. Innovate. Repeat! 🚀"', className: 'code-string' },
    { content: '', className: 'text-white' },
    { content: '};', className: 'text-white' },
  ]

  const aboutPoints = [
    { icon: Code2, text: 'Currently Building: Personal Portfolio & Doctor\'s Website' },
    { icon: BookOpen, text: 'Leveling Up: C++, DSA, React & Node.js' },
    { icon: Users, text: 'Open To: Exciting Development Collaborations' },
    { icon: MessageSquare, text: 'Ask Me About: Web Development & Problem Solving' },
    { icon: Target, text: '2026 Goals: Master MERN Stack & Contribute to Open Source' },
    { icon: Zap, text: 'Fun Fact: I mass-produce console.log() statements and call it debugging! 😄' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyan/30 text-cyan mb-4">
            <Terminal className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Who Am <span className="text-gradient">I?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Block */}
          <div 
            ref={codeRef}
            className={`code-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-sm ml-2">aman.js</span>
            </div>
            <pre className="text-sm md:text-base overflow-x-auto">
              {codeLines.map((line, index) => (
                <div 
                  key={index}
                  className={`code-line ${line.className} transition-opacity duration-300`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {line.content}
                </div>
              ))}
            </pre>
          </div>

          {/* About Points */}
          <div className="space-y-6">
            {aboutPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-white/5 hover:border-cyan/30 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-cyan" />
                </div>
                <p className="text-gray-300">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
