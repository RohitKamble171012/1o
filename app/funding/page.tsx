import type { Metadata } from 'next'
import { Heart, Zap, ExternalLink, Copy } from 'lucide-react'
import { Section, Badge, GridBackground, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Support Our Projects',
  description: 'Support the development of DeepWork Layer and AI Gym Trainer by contributing via PayPal or UPI.',
}

const tiers = [
  {
    label: 'Supporter',
    amount: '$5',
    desc: 'Buy the dev a coffee. Every contribution helps keep the build going.',
    perks: ['Name in contributors list', 'Early access updates', 'Gratitude 🙏'],
  },
  {
    label: 'Backer',
    amount: '$25',
    desc: 'Back the product with a real contribution. You believe in the vision.',
    perks: ['Everything in Supporter', 'Priority early access', 'Feature request input', 'Direct founder contact'],
    featured: true,
  },
  {
    label: 'Champion',
    amount: '$100+',
    desc: 'You\'re all in. This level of support directly accelerates the timeline.',
    perks: ['Everything in Backer', 'Lifetime access (if applicable)', 'Co-creator credit', 'Strategy call with founder'],
  },
]

export default function FundingPage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-surface-1">
        <GridBackground />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-400/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <div className="max-w-3xl">
              <Badge variant="brand">
                <Heart className="w-3 h-3 mr-1.5 text-red-400" />
                Community Funding
              </Badge>
              <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.92]">
                Support the<br />
                <span className="gradient-text">Build.</span>
              </h1>
              <p className="text-ink-secondary text-xl leading-relaxed">
                We're independently building two AI-powered products: DeepWork Layer and AI Gym Trainer. If you believe in what we're building, your support directly accelerates the timeline from vision to reality.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Section>
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-4">The Mission</p>
            <h2 className="font-display text-4xl text-ink-primary mb-6">Why This Matters</h2>
            <div className="prose-custom space-y-4">
              <p>
                Most of the best productivity and fitness tools are built by VC-backed companies with millions in funding. They're optimized for growth metrics, not user outcomes. DeepWork Layer and AI Gym Trainer are being built with a different philosophy: start with the real problem, solve it well, and keep it lean.
              </p>
              <p>
                As an independent developer, external funding means the difference between building these as nights-and-weekends side projects versus committing full development cycles to them. Your contribution funds server costs, API usage, design tools, and time.
              </p>
              <p>
                This isn't a Kickstarter — there's no campaign deadline, no stretch goals. Just an honest ask: if the vision resonates with you, support it at whatever level feels right.
              </p>
            </div>
          </Section>
          <Section>
            <div className="space-y-4">
              <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-ink-primary">DeepWork Layer</h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  A distraction-blocking productivity OS that protects deep work time and builds lasting focus habits.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-sm">🏋️</span>
                  </div>
                  <h3 className="font-semibold text-ink-primary">AI Gym Trainer</h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  AI-powered personal fitness coaching that adapts to your body, goals, and schedule — at a fraction of PT cost.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Contribution Tiers</p>
            <h2 className="font-display text-4xl text-ink-primary">How to Support</h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl p-8 border ${
                  tier.featured
                    ? 'bg-ink-primary border-ink-primary text-white'
                    : 'bg-white border-surface-3'
                }`}
              >
                {tier.featured && (
                  <p className="text-xs font-mono text-brand-400 mb-3">Most Popular</p>
                )}
                <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${tier.featured ? 'text-white/40' : 'text-ink-muted'}`}>
                  {tier.label}
                </p>
                <p className={`font-display text-5xl mb-4 ${tier.featured ? 'text-white' : 'text-ink-primary'}`}>
                  {tier.amount}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${tier.featured ? 'text-white/60' : 'text-ink-muted'}`}>
                  {tier.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`flex items-center gap-2 text-sm ${tier.featured ? 'text-white/70' : 'text-ink-secondary'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.featured ? 'bg-brand-400' : 'bg-brand-500'}`} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Section className="mb-12 text-center">
            <h2 className="font-display text-4xl text-ink-primary mb-4">Payment Options</h2>
            <p className="text-ink-muted">Choose whichever is easiest for you.</p>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PayPal */}
            <Card className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                <span className="font-bold text-blue-600 text-xl">PP</span>
              </div>
              <h3 className="font-display text-2xl text-ink-primary mb-2">PayPal</h3>
              <p className="text-ink-muted text-sm mb-6">Send any amount via PayPal</p>
              <div className="bg-surface-1 border border-surface-3 rounded-xl p-4 mb-6 font-mono text-sm text-ink-secondary break-all">
                rohikamble171012@gmail.com
              </div>
              <a
                href="https://paypal.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Send via PayPal <ExternalLink className="w-4 h-4" />
              </a>
            </Card>

            {/* UPI */}
            <Card className="p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
                <span className="font-bold text-green-600 text-xl">₹</span>
              </div>
              <h3 className="font-display text-2xl text-ink-primary mb-2">UPI</h3>
              <p className="text-ink-muted text-sm mb-6">Send via any UPI app (India)</p>
              <div className="bg-surface-1 border border-surface-3 rounded-xl p-4 mb-6 font-mono text-sm text-ink-secondary">
                [UPI ID coming soon]
              </div>
              <button
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
                disabled
              >
                Copy UPI ID <Copy className="w-4 h-4" />
              </button>
            </Card>
          </div>

          <div className="mt-10 p-6 bg-brand-50 border border-brand-100 rounded-2xl text-center">
            <p className="text-sm text-brand-700 leading-relaxed">
              <strong>Note:</strong> This is a direct contribution to an independent developer building open-minded, honest software. It is not a product purchase or investment. Contributor perks are offered in good faith and best effort.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
