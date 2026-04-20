'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

// Section wrapper with fade-in
export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Badge / pill label
export function Badge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'brand' | 'success' }) {
  const styles = {
    default: 'bg-surface-2 text-ink-secondary border border-surface-3',
    brand: 'bg-brand-50 text-brand-600 border border-brand-100',
    success: 'bg-green-50 text-green-700 border border-green-100',
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}

// Primary button
export function Button({ href, children, external = false, variant = 'primary', className = '' }: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const styles = {
    primary: 'bg-ink-primary text-white hover:bg-brand-600',
    secondary: 'bg-surface-2 text-ink-primary hover:bg-surface-3 border border-surface-3',
    ghost: 'text-ink-primary hover:bg-surface-2',
  }

  const cls = `inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 group ${styles[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </Link>
  )
}

// Card
export function Card({ children, className = '', hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white border border-surface-3 rounded-2xl p-6 ${hover ? 'hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50/50 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}

// Section heading
export function SectionHeading({ eyebrow, title, description }: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-mono font-medium text-brand-500 uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-ink-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-ink-secondary leading-relaxed text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

// Tech tag
export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-surface-1 border border-surface-3 rounded-full text-xs font-mono text-ink-muted">
      {label}
    </span>
  )
}

// Grid background
export function GridBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 grid-bg opacity-60 ${className}`} />
  )
}

// Divider
export function Divider({ className = '' }: { className?: string }) {
  return <div className={`border-t border-surface-3 ${className}`} />
}
