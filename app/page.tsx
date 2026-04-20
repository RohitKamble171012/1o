'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Zap, Code2, Cpu, Layers, Globe, BarChart3 } from 'lucide-react'
import { Section, Badge, Button, Card, TechTag, GridBackground } from '@/components/ui'

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Auth'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { category: 'AI / ML', items: ['OpenAI', 'LangChain', 'NLP', 'Computer Vision'] },
  { category: 'DevOps', items: ['Vercel', 'GitHub', 'Docker', 'CI/CD'] },
]

const services = [
  { icon: Code2, title: 'Frontend Engineering', desc: 'Pixel-perfect, performant UIs built with React & Next.js.' },
  { icon: Layers, title: 'Full Stack Systems', desc: 'End-to-end product development from database to deployment.' },
  { icon: Cpu, title: 'AI Integration', desc: 'Embed intelligent features using modern LLMs and ML models.' },
  { icon: Globe, title: 'Deployment & DevOps', desc: 'Vercel, Docker, CI/CD pipelines that ship fast and reliably.' },
]

const featuredProjects = [
  {
    slug: 'applyflow',
    title: 'ApplyFlow',
    tag: 'Featured',
    desc: 'AI-powered job application tracker with Gmail sync, NLP classification, and ATS-aware extraction across major job platforms.',
    tech: ['JavaScript', 'Node.js', 'NLP', 'Gmail API'],
    status: 'Live',
  },
  {
    slug: 'smart-learn-hub',
    title: 'SmartLearn Hub',
    tag: 'IIT Bombay',
    desc: 'Interactive LMS with AI learning assistant, teacher quiz management, and real-time student evaluation dashboards.',
    tech: ['TypeScript', 'React', 'MongoDB', 'AI'],
    status: 'Live',
  },
  {
    slug: 'sharp-engineering',
    title: 'Sharp Engineering',
    tag: 'Client',
    desc: 'Official company website built with Next.js — fully responsive, SEO-optimized, deployed on Vercel.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    status: 'Live',
  },
]

const ongoingProjects = [
  {
    href: '/deepwork-layer',
    title: 'DeepWork Layer',
    desc: 'Distraction-blocking productivity OS for deep work practitioners.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    href: '/ai-gym-trainer',
    title: 'AI Gym Trainer',
    desc: 'AI fitness assistant with personalized workout generation and real-time feedback.',
    color: 'from-blue-500 to-cyan-500',
  },
]

const stagger = {
  container: { transition: { staggerChildren: 0.08 } },
  item: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } },
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20">
        <GridBackground />
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-300/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Badge variant="brand">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2 animate-pulse inline-block" />
                Open for Projects · 1org.online
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-ink-primary leading-[0.95] mt-8 mb-6"
            >
              We Build<br />
              <span className="gradient-text">Scalable Digital</span><br />
              Products & AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-ink-secondary text-xl leading-relaxed max-w-2xl mb-10"
            >
              1o is a developer-first freelancing agency crafting full-stack web products, AI-integrated applications, and deployment-ready systems for founders and businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="/projects" variant="primary">View Our Work</Button>
              <Button href="/hire" variant="secondary">Hire Us</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-surface-3"
            >
              {[
                { value: '5+', label: 'Projects Shipped' },
                { value: '100+', label: 'Students Impacted' },
                { value: '2', label: 'AI Products in Dev' },
                { value: '∞', label: 'Builder Mindset' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-ink-primary">{stat.value}</p>
                  <p className="text-xs font-mono text-ink-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-surface-1 relative">
        <GridBackground className="opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary mb-4">Services Built<br />for Scale</h2>
            <p className="text-ink-secondary text-lg max-w-xl">From concept to deployment — we handle the full product lifecycle with precision.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-ink-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/services" variant="ghost">Explore All Services</Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary mb-4">Projects That<br />Ship Impact</h2>
          </Section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={i === 0 ? 'lg:col-span-2' : ''}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="border border-surface-3 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-xl hover:shadow-brand-50/30 transition-all duration-300">
                    {/* Image placeholder */}
                    <div className={`h-48 ${i === 0 ? 'lg:h-64' : ''} bg-gradient-to-br from-surface-2 to-surface-3 relative overflow-hidden grid-bg-sm flex items-center justify-center`}>
                      <div className="text-6xl font-display text-ink-faint/30 select-none">
                        {project.title[0]}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant={project.tag === 'Featured' ? 'brand' : 'default'}>
                          {project.tag}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-xl text-ink-primary">{project.title}</h3>
                        <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-brand-500 transition-colors flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-ink-secondary leading-relaxed mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => <TechTag key={t} label={t} />)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/projects" variant="secondary">All Projects</Button>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-24 bg-ink-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-sm opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-12">
            <p className="text-xs font-mono text-brand-400 uppercase tracking-widest mb-3">In Development</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Ongoing Ventures</h2>
            <p className="text-white/50 text-lg max-w-xl">Two AI-powered products in active development — building the future of focus and fitness.</p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link href={proj.href} className="group block">
                  <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${proj.color} mb-6 flex items-center justify-center`}>
                      {i === 0 ? <Zap className="w-6 h-6 text-white" /> : <BarChart3 className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="font-display text-2xl text-white mb-3">{proj.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">{proj.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                      Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-surface-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Section className="mb-14 text-center">
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-3">Technology</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-primary">Our Tech Stack</h2>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-surface-3 rounded-xl p-5"
              >
                <p className="text-xs font-mono text-ink-muted uppercase tracking-widest mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs font-medium text-ink-secondary bg-surface-1 px-2 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <GridBackground />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Section>
            <Badge variant="brand" className="mb-6">Let&apos;s Build Something Great</Badge>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-primary mb-6">
              Ready to ship<br />your idea?
            </h2>
            <p className="text-ink-secondary text-xl mb-10 max-w-2xl mx-auto">
              From MVP to production — we architect, build, and deploy digital products that scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">Start a Project</Button>
              <Button href="/hire" variant="secondary">Hire via Contra</Button>
            </div>
          </Section>
        </div>
      </section>
    </div>
  )
}
