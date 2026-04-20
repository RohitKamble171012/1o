import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Badge, TechTag, GridBackground, Button } from '@/components/ui'
import { projectDetails } from '@/lib/projectData'

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectDetails[params.slug]
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.subtitle,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug]
  if (!project) notFound()

  return (
    <div className="pt-24 pb-24 overflow-hidden">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-0">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-16">
        <GridBackground />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant={project.tag === 'Featured' ? 'brand' : 'default'}>{project.tag}</Badge>
            <Badge variant="success">{project.status}</Badge>
            <Badge>{project.type}</Badge>
          </div>
          <h1 className="font-display text-6xl md:text-7xl text-ink-primary mb-3 leading-none">{project.title}</h1>
          <p className="text-brand-500 text-xl font-medium mb-6">{project.subtitle}</p>
          <p className="text-xs font-mono text-ink-muted">{project.year}</p>
        </div>
      </section>

      {/* Image Placeholder */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-80 bg-gradient-to-br from-brand-50 via-surface-2 to-surface-3 grid-bg rounded-3xl flex items-center justify-center mb-16">
          <div className="text-[140px] font-display text-brand-100 select-none leading-none">
            {project.title[0]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500 text-xs font-mono font-bold">P</span>
                <h2 className="font-display text-2xl text-ink-primary">The Problem</h2>
              </div>
              <p className="text-ink-secondary leading-relaxed pl-11">{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-500 text-xs font-mono font-bold">S</span>
                <h2 className="font-display text-2xl text-ink-primary">The Solution</h2>
              </div>
              <p className="text-ink-secondary leading-relaxed pl-11">{project.solution}</p>
            </div>

            {/* Outcome */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 text-xs font-mono font-bold">O</span>
                <h2 className="font-display text-2xl text-ink-primary">The Outcome</h2>
              </div>
              <p className="text-ink-secondary leading-relaxed pl-11">{project.outcome}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-2xl text-ink-primary mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 p-4 bg-surface-1 rounded-xl border border-surface-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ink-secondary leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="border border-surface-3 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-ink-primary mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => <TechTag key={t} label={t} />)}
              </div>
            </div>

            {/* Links */}
            <div className="border border-surface-3 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-ink-primary mb-4">Links</h3>
              <div className="flex flex-col gap-3">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-brand-50 rounded-xl text-sm font-medium text-brand-600 hover:bg-brand-100 transition-colors group">
                    View Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.researchLink && (
                  <a href={project.researchLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-surface-1 rounded-xl text-sm font-medium text-ink-secondary hover:bg-surface-2 transition-colors group border border-surface-3">
                    Research Paper <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                <Link href="/contact"
                  className="flex items-center justify-between p-3 bg-surface-1 rounded-xl text-sm font-medium text-ink-secondary hover:bg-surface-2 transition-colors group border border-surface-3">
                  Discuss Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="border border-brand-100 bg-brand-50 rounded-2xl p-6">
              <h3 className="font-semibold text-ink-primary mb-2">Want something like this?</h3>
              <p className="text-sm text-ink-muted mb-4">We build custom solutions tailored to your needs.</p>
              <Button href="/hire" variant="primary" className="w-full justify-center">
                Hire Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
