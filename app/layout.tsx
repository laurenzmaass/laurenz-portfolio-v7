import type { Metadata, Viewport } from 'next'
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import { SmoothScrollProvider } from '@/components/providers/SmoothScroll'
import { SkipNav } from '@/components/layout/SkipNav'

/* ─── Fonts ─────────────────────────────────────────────────── */
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

/* ─── Metadata ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://laurenz.work'), /* TODO: replace with production URL */
  title: {
    default: 'Laurenz M. — Web Builder & Automation Architect',
    template: '%s · Laurenz M.',
  },
  description:
    'Digital product builder based in Germany. I design and build web products, automate operational workflows, and ship things that work.',
  keywords: ['web development', 'automation', 'n8n', 'Next.js', 'frontend', 'Germany', 'freelance'],
  authors: [{ name: 'Laurenz M.' }],
  creator: 'Laurenz M.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laurenz.work',
    siteName: 'Laurenz M.',
    title: 'Laurenz M. — Web Builder & Automation Architect',
    description:
      'Digital product builder based in Germany. I design and build web products, automate operational workflows, and ship things that work.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laurenz M. — Web Builder & Automation Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laurenz M. — Web Builder & Automation Architect',
    description: 'Digital product builder based in Germany.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F2EC',
}

/* ─── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-paper text-ink">
        <SmoothScrollProvider>
          <SkipNav />
          <CustomCursor />
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
