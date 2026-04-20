import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section, Badge, GridBackground, TechTag } from '@/components/ui'
import { projects } from '@/lib/projectData'   

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects built by 1o — including ApplyFlow, SmartLearn Hub, and Sharp Engineering.',
}

export const projects = [
  {
    slug: 'applyflow',
    title: 'ApplyFlow',
    subtitle: 'AI-Powered Job Application Tracker',
    tag: 'Featured',
    description: 'A full-stack job application tracker with automatic Gmail sync, NLP-based email classification, and ATS-aware company extraction. Built to eliminate the chaos of job searching.',
    tech: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'NLP', 'Gmail API', 'Regex Engine'],
    status: 'Live',
    type: 'Open Source / Research',
    year: '2025',
  },
  {
    slug: 'smart-learn-hub',
    title: 'SmartLearn Hub',
    subtitle: 'Learning Management System with AI',
    tag: 'IIT Bombay',
    description: 'An interactive LMS built during an internship at IIT Bombay. Features teacher quiz management, real-time student evaluation, progress tracking dashboards, and an AI learning assistant.',
    tech: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AI'],
    status: 'Live',
    type: 'Internship Project',
    year: '2025',
  },
  {
    slug: 'sharp-engineering',
    title: 'Sharp Engineering',
    subtitle: 'Official Company Website',
    tag: 'Client',
    description: 'Designed and developed the official company website from scratch. Fully responsive, SEO-optimized, and deployed on Vercel with fast load times and high uptime.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    status: 'Live',
    type: 'Freelance Contract',
    year: '2025',
  },
  
]

export default function ProjectsPage() {
  const featured = projects.filter(p => p.tag === 'Featured')
  const rest = projects.filter(p => p.tag !== 'Featured')

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-surface-1">
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Section>
            <Badge variant="brand">Projects</Badge>
            <h1 className="font-display text-6xl md:text-7xl text-ink-primary mt-6 mb-6 leading-[0.95]">
              Work That<br />
              <span className="gradient-text">Speaks.</span>
            </h1>
            <p className="text-ink-secondary text-xl max-w-xl leading-relaxed">
              From AI-powered tools to production SaaS platforms — every project shipped with precision.
            </p>
          </Section>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-8">Featured Case Study</p>
          {featured.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
              <div className="border border-surface-3 rounded-3xl overflow-hidden hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-50/30 transition-all duration-400 bg-white">
                <div className="h-72 bg-gradient-to-br from-brand-50 via-surface-2 to-surface-3 grid-bg-sm flex items-center justify-center relative">
                  <div className="text-[120px] font-display text-brand-100 select-none leading-none">A</div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <Badge variant="brand">Featured</Badge>
                    <Badge variant="success">Live</Badge>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-500 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-ink-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <p className="text-xs font-mono text-ink-muted mb-2">{project.type} · {project.year}</p>
                      <h2 className="font-display text-4xl text-ink-primary mb-2">{project.title}</h2>
                      <p className="text-brand-500 font-medium mb-4">{project.subtitle}</p>
                      <p className="text-ink-secondary leading-relaxed">{project.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => <TechTag key={t} label={t} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-8">All Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((project, i) => (
              <Section key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="border border-surface-3 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50/30 transition-all duration-300 bg-white h-full">
                    <div className="h-44 bg-gradient-to-br from-surface-1 to-surface-2 grid-bg-sm flex items-center justify-center relative">
                      <div className="text-[80px] font-display text-ink-faint/20 select-none leading-none">
                        {project.title[0]}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge>{project.tag}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-brand-500 transition-colors" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-mono text-ink-muted mb-2">{project.type} · {project.year}</p>
                      <h3 className="font-display text-2xl text-ink-primary mb-1">{project.title}</h3>
                      <p className="text-brand-500 text-sm font-medium mb-3">{project.subtitle}</p>
                      <p className="text-sm text-ink-secondary leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((t) => <TechTag key={t} label={t} />)}
                      </div>
                    </div>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
