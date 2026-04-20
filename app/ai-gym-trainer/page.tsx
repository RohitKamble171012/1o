import type { Metadata } from 'next'
import { Dumbbell, Brain, Camera, TrendingUp, Heart, Zap, DollarSign, ArrowUpRight } from 'lucide-react'
import { Section, Badge, GridBackground, Card, Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'AI Gym Trainer',
  description: 'AI-powered fitness assistant with personalized workout generation and real-time feedback.',
}

const features = [
  { icon: Brain, title: 'Personalized Workout Generation', desc: 'AI analyzes your fitness level, goals, equipment access, and schedule to generate fully customized training plans — not generic templates.' },
  { icon: Camera, title: 'Computer Vision Feedback', desc: 'Future integration: real-time form analysis using your device camera. AI detects posture errors and gives instant corrective cues.' },
  { icon: TrendingUp, title: 'Adaptive Progression', desc: 'Workouts evolve with you. The AI adjusts intensity, volume, and exercise selection based on your logged performance and recovery data.' },
  { icon: Heart, title: 'Recovery Intelligence', desc: 'Tracks workout load, rest days, and perceived exertion to recommend optimal recovery strategies and prevent overtraining.' },
]

const aiStack = [
  { label: 'LLM Core', desc: 'GPT-4o / Claude for workout reasoning and conversational coaching interface.' },
  { label: 'Computer Vision', desc: 'MediaPipe / TensorFlow.js for real-time pose estimation and form checking in browser.' },
  { label: 'Personalization Engine', desc: 'User history + goal vectors used to fine-tune recommendations over time.' },
  { label: 'Data Analytics', desc: 'Workout data aggregated into progress charts and performance trend reports.' },
]

const monetization = [
  { icon: Zap, title: 'Freemium SaaS', desc: 'Free tier with basic workouts. Premium subscription unlocks AI personalization and real-time feedback.' },
  { icon: DollarSign, title: 'Gym Partnerships', desc: 'White-label version sold to gyms as an AI trainer tool for members — reducing staffing overhead.' },
  { icon: Heart, title: 'Health Platform API', desc: 'API licensing to fitness apps, wearables, and health platforms for AI coaching integrations.' },
]

export default function AIGymTrainerPage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <GridBackground />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <Badge variant="brand">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse inline-block" />
                In Development
              </Badge>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ink-primary leading-[0.9] mb-6">
              AI Gym<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Trainer.</span>
            </h1>
            <p className="text-ink-secondary text-xl leading-relaxed max-w-2xl mb-10">
              Your personal AI fitness coach that knows your body, adapts to your schedule, and delivers personalized workouts — without the $100/hr personal trainer price tag.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Get Early Access</Button>
              <Button href="/funding" variant="secondary">Support the Build</Button>
            </div>
          </Section>
        </div>
      </section>

      {/* Why It Exists */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="font-display text-4xl text-ink-primary mb-6">Personal Training Is Broken.</h2>
            <div className="prose-custom space-y-4">
              <p>
                Most people who want to get fit face one of two problems: they either pay $100–$200/hr for a human personal trainer (unaffordable for most), or they follow generic YouTube workouts with no personalization (ineffective at best, injurious at worst).
              </p>
              <p>
                The fitness app market is crowded with pre-packaged programs that don't adapt. They don't know that you skipped leg day because of knee pain. They don't know you have 20 minutes today instead of 60. They don't know you've been making zero progress on your bench press for 6 weeks.
              </p>
              <p>
                AI Gym Trainer is built to fill this gap — bringing the intelligence of a world-class personal trainer to anyone with a smartphone, at a fraction of the cost.
              </p>
            </div>
          </Section>
          <Section>
            <div className="bg-ink-primary rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="relative space-y-4">
                {[
                  { label: 'Average PT Session Cost', value: '$80–$200', color: 'text-red-400' },
                  { label: 'People Who Can Afford PT', value: '< 5%', color: 'text-red-400' },
                  { label: 'AI Gym Trainer Target Price', value: '$9.99/mo', color: 'text-green-400' },
                  { label: 'Personalization Level', value: '100%', color: 'text-blue-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-white/50 text-sm font-mono">{item.label}</span>
                    <span className={`font-display text-2xl ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">Product Features</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">Intelligence at Every Rep.</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <Section key={f.title}>
                <Card className="h-full p-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-display text-xl text-ink-primary mb-3">{f.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{f.desc}</p>
                </Card>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stack */}
      <section className="py-24 bg-ink-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Tech Architecture</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">The AI Stack</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiStack.map((item, i) => (
              <div key={item.label} className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors">
                <p className="text-xs font-mono text-blue-400 mb-2">Layer 0{i + 1}</p>
                <h3 className="font-semibold text-white mb-3">{item.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Business Model</p>
            <h2 className="font-display text-4xl text-ink-primary">Monetization Strategy</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {monetization.map((m) => (
              <Section key={m.title}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                    <m.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-ink-primary mb-2">{m.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{m.desc}</p>
                </Card>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Section>
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-5xl text-ink-primary mb-6">Want Early Access?</h2>
            <p className="text-ink-secondary text-lg mb-10">
              Join the waitlist or support the development of AI Gym Trainer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">Join Waitlist</Button>
              <Button href="/funding" variant="secondary">Support the Build</Button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
