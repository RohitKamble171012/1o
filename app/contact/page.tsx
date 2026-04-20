'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react'
import { Section, Badge, GridBackground } from '@/components/ui'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'rohikamble171012@gmail.com', href: 'mailto:rohikamble171012@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8010409600', href: 'tel:+918010409600' },
  { icon: MapPin, label: 'Location', value: 'Kolhapur, Maharashtra, India', href: null },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-surface-1">
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <Badge variant="brand">Contact</Badge>
            <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.92]">
              Let's Build<br />
              <span className="gradient-text">Something.</span>
            </h1>
            <p className="text-ink-secondary text-xl max-w-xl leading-relaxed">
              Have a project in mind, want to collaborate, or just want to say hello? We respond to every message.
            </p>
          </Section>
        </div>
      </section>

      {/* Main */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-6">
              <Section>
                <h2 className="font-display text-2xl text-ink-primary mb-6">Get in Touch</h2>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 py-4 border-b border-surface-3 last:border-0">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-ink-muted mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-medium text-ink-primary hover:text-brand-500 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-ink-primary">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </Section>

              <Section>
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                  <p className="font-semibold text-ink-primary mb-2">Prefer Contra?</p>
                  <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                    You can also reach us and view our services directly on Contra — a freelancing platform with secure payments.
                  </p>
                  <a
                    href="https://contra.com/rohit_kamble_b069r56n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    View Contra Profile <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Section>

              <Section>
                <div className="border border-surface-3 rounded-2xl p-6">
                  <p className="font-semibold text-ink-primary mb-3">Response Time</p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm text-ink-muted">Usually within 24 hours</p>
                  </div>
                </div>
              </Section>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Section>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-green-100 bg-green-50 rounded-3xl p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-3xl text-ink-primary mb-3">Message Sent!</h3>
                    <p className="text-ink-muted leading-relaxed max-w-md mx-auto">
                      Thanks for reaching out. We'll get back to you within 24 hours at <span className="font-medium">{formState.email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="border border-surface-3 rounded-3xl p-8 lg:p-10 bg-white space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-ink-muted uppercase tracking-widest mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 text-ink-primary placeholder:text-ink-faint text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-ink-muted uppercase tracking-widest mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 text-ink-primary placeholder:text-ink-faint text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-ink-muted uppercase tracking-widest mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 text-ink-primary text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a topic...</option>
                        <option value="project">New Project Inquiry</option>
                        <option value="freelance">Freelance Engagement</option>
                        <option value="ai">AI Integration</option>
                        <option value="collab">Collaboration</option>
                        <option value="funding">Funding / Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-ink-muted uppercase tracking-widest mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, timeline, and what you're trying to build..."
                        className="w-full px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 text-ink-primary placeholder:text-ink-faint text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-ink-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 group"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-ink-faint">
                      We'll respond to your message within 24 hours.
                    </p>
                  </form>
                )}
              </Section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
