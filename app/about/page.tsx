import type { Metadata } from 'next'
import { Section, Badge, GridBackground, Card } from '@/components/ui'
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about 1o — our story, mission, and developer-first philosophy.',
}

const values = [
  { icon: Code2, title: 'Code-First Thinking', desc: 'We treat code as craft. Every function, every component is written with intention, performance, and maintainability in mind.' },
  { icon: Lightbulb, title: 'Builder Mindset', desc: 'We ship. We iterate. We improve. Perfectionism is the enemy of progress — we believe in getting to v1 and refining from there.' },
  { icon: Target, title: 'Outcome-Driven', desc: 'We measure success not in lines of code but in real-world impact. Does it solve the problem? Does it scale? Does it delight?' },
  { icon: Rocket, title: 'Always Shipping', desc: 'From solo MVPs to complex multi-team platforms — we maintain a relentless bias toward delivering and deploying.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-0 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-surface-1">
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <Badge variant="brand">About 1o</Badge>
            <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.95]">
              Built by a<br />
              <span className="gradient-text">Developer,</span><br />
              for Builders.
            </h1>
            <p className="text-ink-secondary text-xl leading-relaxed max-w-2xl">
              1o is a solo developer and freelancing agency founded by Rohit Kamble — a full-stack engineer and AI enthusiast building products from Kolhapur, India.
            </p>
          </Section>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <Section>
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="font-display text-4xl text-ink-primary mb-6">How 1o Started</h2>
            <div className="prose-custom space-y-4 text-ink-secondary leading-relaxed">
              <p>
                1o started with a simple belief: that a single determined developer can build products that matter. Founded during the final year of a Computer Science degree at D.Y. Patil College of Engineering and Technology, Kolhapur — it began not with funding or a big team, but with a laptop, an internet connection, and an obsessive curiosity for building things.
              </p>
              <p>
                The name "1o" represents both "one" and "zero" — the binary foundation of all software, and a nod to the idea that powerful things are built from simple, fundamental units. It also reflects our philosophy: start minimal, iterate ruthlessly, and expand.
              </p>
              <p>
                What started as freelance projects quickly evolved into a full-service digital agency offering frontend engineering, AI integration, and complete full-stack product development. Today, 1o has shipped products used by students at IIT Bombay, powered business websites for engineering firms, and is building AI-native applications in productivity and fitness.
              </p>
            </div>
          </Section>

          <Section>
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">Vision & Mission</p>
            <h2 className="font-display text-4xl text-ink-primary mb-6">What Drives Us</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-brand-400 pl-6">
                <p className="font-semibold text-ink-primary mb-2">Vision</p>
                <p className="text-ink-secondary leading-relaxed">
                  To be the go-to engineering partner for ambitious founders and businesses seeking to ship fast, scale smart, and integrate AI meaningfully into their products.
                </p>
              </div>
              <div className="border-l-2 border-brand-200 pl-6">
                <p className="font-semibold text-ink-primary mb-2">Mission</p>
                <p className="text-ink-secondary leading-relaxed">
                  To bring startup-grade engineering quality and speed to every project we touch — regardless of its size. From MVPs to production systems, we build with the same precision and care.
                </p>
              </div>
              <div className="border-l-2 border-surface-3 pl-6">
                <p className="font-semibold text-ink-primary mb-2">Philosophy</p>
                <p className="text-ink-secondary leading-relaxed">
                  Developer-first. Product-obsessed. Outcome-driven. We write clean code, ship often, and let the work speak.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Core Values</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">The Builder Mindset</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <Card key={v.title} className="h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-semibold text-ink-primary mb-3">{v.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <div className="border border-surface-3 rounded-3xl p-10 lg:p-14 bg-white grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 mb-5 flex items-center justify-center">
                  <span className="font-display text-4xl text-white">R</span>
                </div>
                <h3 className="font-display text-2xl text-ink-primary mb-1">Rohit Kamble</h3>
                <p className="text-sm font-mono text-brand-500 mb-4">Founder & Lead Engineer</p>
                <div className="flex flex-col gap-1 text-sm text-ink-muted font-mono">
                  <span>rohikamble171012@gmail.com</span>
                  <span>+91 8010409600</span>
                  <span>Kolhapur, India</span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">The Person Behind 1o</p>
                <div className="prose-custom space-y-4">
                  <p>
                    Rohit is a Computer Science & Data Science student at D.Y. Patil College of Engineering and Technology, graduating in 2026. He brings hands-on experience from a Full Stack Web Development internship at IIT Bombay, where he contributed to SmartLearn Hub — an LMS serving 100+ students — and freelance contract work at Sharp Engineering.
                  </p>
                  <p>
                    He builds with the MERN stack, loves TypeScript, and has a growing obsession with AI integration — specifically how LLMs can be embedded into real workflows to solve non-trivial problems. His project ApplyFlow is a testament to that: a full NLP engine built from scratch using 60+ regex patterns for job application classification.
                  </p>
                  <p>
                    When he's not writing code, he's researching AI papers, building side projects, or thinking about the next product that needs to exist.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
