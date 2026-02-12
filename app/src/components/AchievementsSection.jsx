import { Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AchievementsSection() {
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
      </div>
    </section>
  )
}
