import { Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AchievementsSection() {
  const certifications = [
    {
      title: 'Postman API Fundamentals',
      issuer: 'POSTMAN',
      description: 'Certificate focused on API fundamentals, request workflows, and testing basics.',
      certificateUrl: 'https://github.com/Amansingh1602/Postman_api/blob/main/Screenshot%202025-09-19%20103629.png',
      cardGradient: 'from-orange-500/20 via-amber-500/10 to-cyan/10',
      borderColor: 'border-orange-400/30',
      issuerColor: 'text-orange-300'
    },
    {
      title: 'Prompt Engineering ChatGpt-4',
      issuer: 'INFOSYS',
      description: 'Certificate covering prompt design patterns and practical AI-assisted problem solving.',
      certificateUrl: 'https://github.com/Amansingh1602/prompt_engineering/blob/main/Screenshot%202025-12-24%20104558.png',
      cardGradient: 'from-cyan/20 via-blue-500/10 to-purple/15',
      borderColor: 'border-cyan/30',
      issuerColor: 'text-cyan'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NEPTEL',
      description: 'Certificate focused on core cloud concepts, service models, and distributed systems basics.',
      certificateUrl: 'https://github.com/Amansingh1602/Neptel_cloud/blob/main/d3228a5a-c507-44c1-9bb9-cd42d6e1ff70.jpg',
      cardGradient: 'from-indigo-500/20 via-purple/15 to-sky-500/10',
      borderColor: 'border-indigo-400/30',
      issuerColor: 'text-indigo-300'
    }
  ]

  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-purple/30 text-purple mb-4">
            <Award className="w-4 h-4 mr-2" />
            Patent
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Milestones & <span className="text-gradient">Recognition</span>
          </h2>
        </div>

        {/* Featured Achievement - Patent */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple/20 to-cyan/20 border border-purple/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-purple/20 flex items-center justify-center">
              <Award className="w-10 h-10 text-purple" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Patent Accepted by DRD Coordinator</h3>
              <p className="text-gray-300 max-w-2xl">
                "A Method for Integrated Steering Wheel-Based Driver Safety Monitoring" - Officially accepted with IPR filing request and subsequent application submission on the Government Intellectual Property Portal.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="border-cyan/30 text-cyan">
              Certifications
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-2xl bg-gradient-to-br ${cert.cardGradient} border ${cert.borderColor} hover:scale-[1.02] transition-all duration-300`}
              >
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className={`${cert.issuerColor} text-sm mb-3`}>{cert.issuer}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
