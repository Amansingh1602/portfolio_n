import { Calendar, Globe } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-green/30 text-green mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple to-transparent md:-translate-x-1/2" />
          
          {/* Experience Card */}
          <div className="relative pl-12 md:pl-0">
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-cyan border-4 border-background md:-translate-x-1/2" />
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-8">
                <span className="text-cyan font-medium">Oct 2024 - Present</span>
              </div>
              
              <div className="mt-2 md:mt-0">
                <div className="p-6 rounded-2xl bg-card border border-white/5 hover:border-cyan/30 transition-all duration-300 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Microsoft MLSA</h3>
                      <p className="text-gray-400">Beta MLSA - Campus Ambassador</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      Delivered immersive workshops on Microsoft Azure and GitHub technologies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      Leveraged AI-powered development tools and GitHub Copilot
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      Architected responsive UI/UX components across multiple web applications
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Azure', 'GitHub', 'GitHub Actions', 'Copilot', 'UI/UX'].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md text-xs bg-cyan/10 text-cyan">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
