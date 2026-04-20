import type { Metadata } from 'next'
import { ExternalLink, CheckCircle2, Star, Clock, Shield, Zap } from 'lucide-react'
import { Section, Badge, GridBackground, Card, TechTag } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Hire Us',
  description: 'Hire Rohit Kamble via Contra for full-stack web development, AI integration, and more.',
}

const services = [
  {
    title: 'Full Stack Web App',
    desc: 'Complete product from database schema to deployed frontend. Ideal for MVPs, SaaS platforms, and web tools.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Vercel'],
    timeline: '2–6 weeks',
  },
  {
    title: 'Frontend Engineering',
    desc: 'Pixel-perfect, responsive UI built with React/Next.js. From design system implementation to complex interactive UIs.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    timeline: '1–3 weeks',
  },
  {
    title: 'AI Feature Integration',
    desc: 'Embed LLMs, build NLP pipelines, or add intelligent automation to your existing product.',
    tech: ['OpenAI API', 'LangChain', 'NLP', 'Embeddings'],
    timeline: '1–4 weeks',
  },
  {
    title: 'Company / Product Website',
    desc: 'Professional business website built with Next.js — SEO-optimized, fast, and deployed on Vercel.',
    tech: ['Next.js', 'Tailwind CSS', 'SEO', 'Vercel'],
    timeline: '1–2 weeks',
  },
]

const reasons = [
  { icon: Zap, title: 'Ships Fast', desc: 'No endless back-and-forth. We scope clearly, build efficiently, and deliver on time.' },
  { icon: Shield, title: 'Production Quality', desc: 'Clean code, proper architecture, and deployment-ready output — every time.' },
  { icon: Star, title: 'Full-Stack Capable', desc: 'One person, full product coverage. No coordination overhead across multiple vendors.' },
  { icon: Clock, title: 'Async-Friendly', desc: 'Works well remotely across time zones. Clear communication and structured updates.' },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your problem, goals, and timeline. No obligation.' },
  { step: '02', title: 'Proposal & Scope', desc: 'You receive a clear, itemized scope with timeline and pricing.' },
  { step: '03', title: 'Build Phase', desc: 'Regular updates, staged deliverables, and open communication throughout.' },
  { step: '04', title: 'Delivery & Handoff', desc: 'Full code handoff, deployment, and documentation. You own everything.' },
]

export default function HirePage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 bg-surface-1">
        <GridBackground />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <div className="max-w-3xl">
              <Badge variant="brand">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 inline-block animate-pulse" />
                Available for Projects
              </Badge>
              <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.92]">
                Hire a Developer<br />Who<br />
                <span className="gradient-text">Actually Ships.</span>
              </h1>
              <p className="text-ink-secondary text-xl leading-relaxed mb-10">
                We're available for freelance and contract projects via Contra — a commission-free platform for independent professionals. View our full profile, reviews, and service packages there.
              </p>
              <a
                href="https://contra.com/rohit_kamble_b069r56n/services?r=rohit_kamble_b069r56n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ink-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-600 transition-all duration-200 group"
              >
                Hire via Contra
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Service Packages</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">What We Offer</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <Section key={s.title}>
                <Card className="h-full p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-2xl text-ink-primary">{s.title}</h3>
                    <span className="text-xs font-mono text-ink-muted bg-surface-1 border border-surface-3 px-3 py-1 rounded-full flex-shrink-0 ml-4">
                      {s.timeline}
                    </span>
                  </div>
                  <p className="text-ink-muted leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tech.map((t) => <TechTag key={t} label={t} />)}
                  </div>
                </Card>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Why 1o</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">Why Work With Us</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r) => (
              <Card key={r.title}>
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-semibold text-ink-primary mb-2">{r.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">Our Process</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-surface-3 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(100% - 0.5rem)' }} />
                )}
                <div className="relative bg-white border border-surface-3 rounded-2xl p-6 hover:border-brand-200 transition-colors">
                  <p className="font-mono text-3xl font-bold text-brand-100 mb-4">{p.step}</p>
                  <h3 className="font-semibold text-ink-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contra CTA */}
      <section className="py-24 bg-ink-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Section>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              Ready to start<br />your project?
            </h2>
            <p className="text-white/50 text-xl mb-10">
              View our full service listing, past work, and pricing on Contra.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://contra.com/rohit_kamble_b069r56n/services?r=rohit_kamble_b069r56n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-all group"
              >
                View on Contra <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Send a Message
              </a>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
