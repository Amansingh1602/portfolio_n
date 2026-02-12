import { Github, ExternalLink, FileCode } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'MediCare Plus',
      description: 'AI-Driven Hospital Management System with Role-Based Access Control, enabling secure workflows for 3 user roles and increasing administrative data processing speed by 45%.',
      image: '/medicare-plus.jpg',
      tech: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'WebSockets', 'Cloudinary'],
      github: 'https://github.com/Amansingh1602/Hospital_management_with_ai',
      highlights: [
        'AI-powered diagnostic module for symptom analysis',
        'Cloudinary API for medical report management',
        'HTTP-only cookies with JWT for secure data'
      ]
    },
    {
      title: 'All-in-one Society Management',
      description: 'Real-time society management platform with WebSockets, reducing message delivery delays and increasing resident platform interaction by 60%.',
      image: '/society-management.jpg',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'WebSockets', 'Docker'],
      github: 'https://github.com/Amansingh1602/all-in-one-society',
      highlights: [
        'Real-time notification system using WebSockets',
        'JWT authentication with refresh token flow',
        'Interactive voting system for residents'
      ]
    },
    {
      title: 'Link Shortener',
      description: 'High-performance link management system using Supabase for real-time data synchronization, reducing database latency and improving link redirection speed by 40%.',
      image: '/link-shortener.jpg',
      tech: ['React', 'Tailwind CSS', 'Supabase', 'Dub', 'CI/CD'],
      github: 'https://github.com/Amansingh1602/Link-Shortner',
      highlights: [
        'Secure user ecosystem with Supabase Auth',
        'CI/CD pipelines on Vercel',
        'Protected routes and session persistence'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyan/30 text-cyan mb-4">
            <FileCode className="w-4 h-4 mr-2" />
            Projects
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work - from AI-powered healthcare solutions to real-time community platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-cyan/30 transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-cyan mt-0.5">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 rounded-md text-xs bg-cyan/10 text-cyan">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-xs bg-cyan/10 text-cyan">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                
                {/* GitHub Link */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-cyan/30 text-cyan hover:bg-cyan/10"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
