import type { Metadata } from 'next'
import { ExternalLink, Zap, Focus, Clock, Shield, BarChart3, ArrowUpRight } from 'lucide-react'
import { Section, Badge, GridBackground, Card, Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'DeepWork Layer',
  description: 'A distraction-blocking productivity OS for deep work practitioners.',
}

const features = [
  { icon: Shield, title: 'Distraction Blocking', desc: 'Intelligently blocks apps, sites, and notifications during scheduled deep work sessions.' },
  { icon: Focus, title: 'Focus Sessions', desc: 'Structured work blocks with customizable timers and break intervals based on your productivity pattern.' },
  { icon: Clock, title: 'Work Scheduling', desc: 'Calendar-integrated scheduling that protects your most cognitively demanding hours.' },
  { icon: BarChart3, title: 'Productivity Analytics', desc: 'Track focus time, session consistency, and distraction patterns over time.' },
]

const roadmap = [
  { phase: 'Phase 1', title: 'Core Focus Engine', status: 'In Development', items: ['App & site blocking', 'Pomodoro timer integration', 'Session logging'] },
  { phase: 'Phase 2', title: 'AI-Enhanced Scheduling', status: 'Planned', items: ['AI work session recommendations', 'Calendar sync', 'Energy level tracking'] },
  { phase: 'Phase 3', title: 'Analytics & Insights', status: 'Planned', items: ['Focus time dashboards', 'Weekly productivity reports', 'Pattern recognition'] },
  { phase: 'Phase 4', title: 'Team DeepWork', status: 'Future', items: ['Shared focus sessions', 'Team-wide quiet hours', 'Manager productivity insights'] },
]

export default function DeepWorkPage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 bg-ink-primary overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Badge variant="brand">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2 animate-pulse inline-block" />
                In Active Development
              </Badge>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
              DeepWork<br />
              <span className="text-violet-400">Layer</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-10">
              A distraction-blocking productivity OS built for knowledge workers who understand the value of deep, uninterrupted focus. Not just another timer app — a complete focus environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://forms.gle/33fR6Jt7cH9dw4XJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-50 transition-all duration-200 group"
              >
                Take the Survey
                <ExternalLink className="w-4 h-4" />
              </a>
              <Button href="/funding" variant="ghost" className="text-white border border-white/20 hover:bg-white/10">
                Support This Project
              </Button>
            </div>
          </Section>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Section>
              <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">The Problem</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink-primary mb-6 leading-tight">
                The World Is Designed<br />to Distract You.
              </h2>
              <div className="prose-custom space-y-4">
                <p>
                  Knowledge workers today spend 60-80% of their workday in reactive mode — emails, Slack pings, social media, and notifications. The average person checks their phone 96 times a day. Deep, focused work — the kind that produces real creative and intellectual output — is becoming increasingly rare.
                </p>
                <p>
                  Cal Newport's research shows that deep work is the killer skill of the 21st century. Yet no existing tool is built specifically to protect and enable it. Productivity apps focus on task management. Focus apps offer superficial timers. None address the systemic problem.
                </p>
                <p>
                  DeepWork Layer is built from the ground up to solve exactly this — creating a complete environmental stack that makes deep work the default, not the exception.
                </p>
              </div>
            </Section>
            <Section>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '96×', label: 'avg phone checks per day' },
                  { stat: '23 min', label: 'to refocus after interruption' },
                  { stat: '60%', label: 'of workday in shallow mode' },
                  { stat: '∞', label: 'cost of lost deep work time' },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-surface-3 rounded-2xl p-6">
                    <p className="font-display text-4xl text-ink-primary mb-2">{item.stat}</p>
                    <p className="text-xs font-mono text-ink-muted leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Features</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">Built for Focus.<br />Engineered for Flow.</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <Section key={f.title}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-ink-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{f.desc}</p>
                </Card>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">The Build Plan</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.map((phase) => (
              <div key={phase.phase} className="bg-white border border-surface-3 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-mono text-brand-500">{phase.phase}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    phase.status === 'In Development' ? 'bg-green-50 text-green-700' :
                    phase.status === 'Planned' ? 'bg-brand-50 text-brand-600' :
                    'bg-surface-2 text-ink-muted'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <h3 className="font-semibold text-ink-primary mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey CTA */}
      <section className="py-24 bg-ink-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Section>
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-5xl text-white mb-6">Help Shape DeepWork Layer</h2>
            <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
              We're actively researching what focus and productivity tools people actually need. Take our 2-minute survey and help us build the right thing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://forms.gle/33fR6Jt7cH9dw4XJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ink-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-all group"
              >
                Take the Survey <ExternalLink className="w-4 h-4" />
              </a>
              <Button href="/funding" variant="ghost" className="text-white border border-white/20 hover:bg-white/10">
                Support via Funding
              </Button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
