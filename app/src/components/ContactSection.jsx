import { useState } from 'react'
import { Linkedin, Github, Mail, Phone, MapPin, Code2, Target, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Unable to connect to server. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-singh-a564a1283/', label: 'LinkedIn', color: 'bg-blue-500/20 text-blue-400' },
    { icon: Github, href: 'https://github.com/Amansingh1602', label: 'GitHub', color: 'bg-gray-500/20 text-gray-400' },
    { icon: Code2, href: 'https://www.hackerrank.com/amansingh22745', label: 'HackerRank', color: 'bg-green-500/20 text-green-400' },
    { icon: Target, href: 'https://www.leetcode.com/amansingh22745', label: 'LeetCode', color: 'bg-yellow-500/20 text-yellow-400' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyan/30 text-cyan mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="bg-background border-white/10 focus:border-cyan text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="bg-background border-white/10 focus:border-cyan text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background border-white/10 focus:border-cyan text-white resize-none"
                  required
                />
              </div>

              {submitStatus && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan to-purple hover:opacity-90 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:amansingh22745@gmail.com" className="text-white hover:text-cyan transition-colors">
                      amansingh22745@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+918823027745" className="text-white hover:text-purple transition-colors">
                      +91 88230 27745
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl ${social.color} flex items-center justify-center hover:scale-110 transition-transform`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
