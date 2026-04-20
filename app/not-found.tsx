import Link from 'next/link'
import { GridBackground } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <GridBackground />
      <div className="relative text-center px-6">
        <p className="font-mono text-[120px] md:text-[200px] font-bold text-surface-3 leading-none select-none">404</p>
        <div className="-mt-8 relative z-10">
          <h1 className="font-display text-4xl text-ink-primary mb-4">Page not found</h1>
          <p className="text-ink-muted mb-8">This page doesn't exist or has been moved.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
