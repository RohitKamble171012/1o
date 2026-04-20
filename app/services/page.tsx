import type { Metadata } from 'next'
import { Section, Badge, GridBackground, Card, TechTag, Button } from '@/components/ui'
import { Code2, Server, Database, Layers, Cpu, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: '1o offers frontend development, backend systems, AI integration, and full-stack engineering services.',
}

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    shortDesc: 'Pixel-perfect, performant user interfaces.',
    description: 'We build modern, accessible, and fast frontends using React and Next.js. From landing pages to complex dashboards, every UI is crafted with attention to detail, performance, and user experience.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    useCases: ['SaaS dashboards', 'Landing pages', 'E-commerce storefronts', 'Admin panels', 'Marketing sites'],
  },
  {
    icon: Server,
    title: 'Backend Systems',
    shortDesc: 'Robust APIs and server-side logic that scales.',
    description: 'We architect and build RESTful APIs, authentication systems, and server-side logic using Node.js and Express.js. We design for scale from day one — clean code, proper error handling, and structured architecture.',
    tech: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware', 'Rate Limiting'],
    useCases: ['API development', 'Authentication systems', 'Webhook integrations', 'Background jobs', 'Microservices'],
  },
  {
    icon: Database,
    title: 'Database Architecture',
    shortDesc: 'Schema design and data management done right.',
    description: 'From MongoDB document design to relational SQL schemas — we design data models that support your product logic efficiently. We handle indexing, query optimization, and data migrations.',
    tech: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Prisma'],
    useCases: ['Data modeling', 'Query optimization', 'Schema design', 'Database migrations', 'Caching layers'],
  },
  {
    icon: Layers,
    title: 'Full Stack Engineering',
    shortDesc: 'Complete product development, end-to-end.',
    description: 'We take products from zero to production. Architecture, database design, API, frontend — all handled cohesively with a single engineering standard. Perfect for founders who need a technical co-founder without the equity.',
    tech: ['MERN Stack', 'Next.js', 'TypeScript', 'Docker', 'GitHub Actions', 'Vercel'],
    useCases: ['MVP development', 'SaaS platforms', 'LMS systems', 'Job/application trackers', 'Analytics dashboards'],
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    shortDesc: 'Embed intelligence into your product workflows.',
    description: 'We integrate AI into existing products or build AI-native applications from scratch. From LLM-powered chatbots to NLP pipelines and computer vision features — we make AI practical and useful, not just flashy.',
    tech: ['OpenAI API', 'LangChain', 'NLP / Regex Engines', 'Embeddings', 'Vector DBs', 'Computer Vision'],
    useCases: ['AI chatbots', 'Document parsing', 'Email classification', 'Recommendation engines', 'Resume scoring'],
  },
  {
    icon: Cloud,
    title: 'Deployment & DevOps',
    shortDesc: 'Ship fast. Stay live. Automate everything.',
    description: 'We set up CI/CD pipelines, configure cloud deployments, and ensure your product is production-ready. From first deploy to auto-scaling architecture — we handle the operational complexity so you can focus on the product.',
    tech: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Environment Management'],
    useCases: ['Vercel deployments', 'CI/CD setup', 'Environment config', 'Domain setup', 'Performance monitoring'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-surface-1">
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <Badge variant="brand">Services</Badge>
            <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.95]">
              Everything You<br />
              Need to<br />
              <span className="gradient-text">Build & Ship.</span>
            </h1>
            <p className="text-ink-secondary text-xl leading-relaxed max-w-2xl">
              We offer end-to-end engineering services — from frontend to DevOps to AI integration. No hand-offs, no coordination overhead. One team, one standard of quality.
            </p>
          </Section>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <Section key={service.title}>
                <div className="border border-surface-3 rounded-2xl p-8 lg:p-10 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50/30 transition-all duration-300 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-brand-500" />
                        </div>
                        <div>
                          <p className="text-xs font-mono text-ink-muted mb-1">0{i + 1}</p>
                          <h3 className="font-display text-2xl text-ink-primary">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-ink-muted text-sm leading-relaxed">{service.shortDesc}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-ink-secondary leading-relaxed text-sm mb-6">{service.description}</p>
                      <div>
                        <p className="text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => <TechTag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">Use Cases</p>
                      <ul className="space-y-2">
                        {service.useCases.map((uc) => (
                          <li key={uc} className="flex items-center gap-2 text-sm text-ink-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Section>
            <h2 className="font-display text-5xl text-ink-primary mb-6">Need a custom scope?</h2>
            <p className="text-ink-secondary text-lg mb-10">Tell us about your project and we'll put together the right solution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">Get in Touch</Button>
              <Button href="/hire" variant="secondary">Hire via Contra</Button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
