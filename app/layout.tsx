import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '1o — Digital Products & AI Solutions',
    template: '%s | 1o'
  },
  description: 'We build scalable digital products and AI solutions. Freelancing agency specializing in full-stack engineering, AI integration, and deployment.',
  metadataBase: new URL('https://1org.online'),
  openGraph: {
    title: '1o — Digital Products & AI Solutions',
    description: 'We build scalable digital products and AI solutions.',
    url: 'https://1org.online',
    siteName: '1o',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1o — Digital Products & AI Solutions',
    description: 'We build scalable digital products and AI solutions.',
  },
  icons: {
    icon: '/logo.ico',         // tab bar icon
    shortcut: '/logo.ico',     // shortcut icon
    apple: '/logo.ico',        // iOS home screen icon
  },

  keywords: ['freelancing', 'web development', 'AI solutions', 'full stack', 'Next.js', 'React'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
