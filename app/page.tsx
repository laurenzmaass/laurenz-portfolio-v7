import type { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'
import { Hero } from '@/components/home/Hero'
import { HomeWork } from '@/components/home/HomeWork'
import { ProcessSection } from '@/components/home/ProcessSection'
import { Marquee } from '@/components/home/Marquee'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'

export const metadata: Metadata = {
  title: 'Laurenz M. — Web Builder & Automation Architect',
}

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Laurenz M.',
            jobTitle: 'Web Builder & Automation Architect',
            url: 'https://laurenz.work',
            sameAs: [
              'https://github.com/laurenzmaass',
              'https://linkedin.com/in/laurenzmaass',
            ],
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'DE',
            },
          }),
        }}
      />

      <Hero />
      <Marquee />
      <HomeWork projects={featured} />
      <ProcessSection />

      {/* Contact tease */}
      <section className="section-padding border-t border-border" aria-labelledby="cta-heading">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                  Start a conversation
                </p>
                <h2
                  id="cta-heading"
                  className="font-display italic text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] max-w-[14ch]"
                >
                  Have a project in mind?
                </h2>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-ink text-paper font-sans text-sm font-medium px-6 py-3.5 hover:bg-accent transition-colors duration-200"
                >
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <span className="font-mono text-xs text-muted">
                  hello@laurenz.work {/* TODO: replace with real email */}
                </span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
