import { Code2, Palette, Server, Database, Layers, Users, Cpu } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C++', 'JavaScript', 'C', 'PHP', 'Java', 'Python'],
      color: 'cyan'
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'GSAP', 'jQuery'],
      color: 'purple'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'Mongoose'],
      color: 'green'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'cyan'
    },
    {
      title: 'Tools',
      icon: Layers,
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Canva'],
      color: 'purple'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Collaboration', 'Time Management', 'Punctuality'],
      color: 'green'
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-purple/30 text-purple mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit I've built through hands-on project experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-cyan/30 transition-all duration-300 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Icons Grid */}
        <div className="mt-16">
          <p className="text-center text-gray-400 mb-8">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['cpp', 'javascript', 'c', 'php', 'java', 'python', 'html', 'css', 'react', 'tailwind', 'nodejs', 'express', 'mongodb', 'mysql', 'git', 'github', 'postman', 'figma'].map((tech) => (
              <img 
                key={tech}
                src={`https://skillicons.dev/icons?i=${tech}`}
                alt={tech}
                className="w-12 h-12 skill-icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
