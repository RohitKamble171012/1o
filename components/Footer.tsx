import Link from 'next/link'
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  Products: [
    { label: 'DeepWork Layer', href: '/deepwork-layer' },
    { label: 'AI Gym Trainer', href: '/ai-gym-trainer' },
    { label: 'ApplyFlow', href: '/projects/applyflow' },
  ],
  Work: [
    { label: 'Hire Us', href: '/hire' },
    { label: 'Funding', href: '/funding' },
    { label: 'Contra Profile', href: 'https://contra.com/rohit_kamble_b069r56n', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              
              <span className="font-display text-white font-semibold text-lg">1o</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              We build scalable digital products and AI-powered solutions for ambitious founders and businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:rohikamble171012@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/RohitKamble171012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kamble-8b0098318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-mono font-medium text-white/30 uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono">
            © 2025 1o. All rights reserved. · 1org.online
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
