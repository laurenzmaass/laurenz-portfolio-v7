import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Available for web development projects, automation work, and consulting.',
}

export default function ContactPage() {
  return (
    <div className="pt-32">
      <Container>
        <FadeIn>
          <div className="mb-16 pb-12 border-b border-border">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
              Contact
            </p>
            <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em]">
              Let&#39;s talk.
            </h1>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 pb-section">
          {/* Form */}
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>

          {/* Contact details */}
          <aside>
            <FadeIn delay={0.15}>
              <div className="space-y-8">
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                    Direct
                  </p>
                  <a
                    href="mailto:hello@laurenz.work"
                    className="font-sans text-base text-ink hover:text-accent transition-colors duration-150 block mb-1"
                  >
                    hello@laurenz.work {/* TODO: replace with real email */}
                  </a>
                  <p className="font-mono text-xs text-muted">Response within 24–48h</p>
                </div>

                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
                    Elsewhere
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://linkedin.com/in/laurenzmaass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-ink hover:text-accent transition-colors duration-150 flex items-center gap-2"
                    >
                      LinkedIn
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/laurenzmaass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-ink hover:text-accent transition-colors duration-150 flex items-center gap-2"
                    >
                      GitHub
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-surface p-5">
                  <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-3">
                    Good fit for
                  </p>
                  <ul className="space-y-2 list-none m-0 p-0">
                    {[
                      'Web product builds (Next.js, custom HTML/CSS)',
                      'Workflow automation (n8n, API integrations)',
                      'Operations design & process improvement',
                      'Early-stage projects where scope needs defining',
                    ].map((item) => (
                      <li key={item} className="font-sans text-sm text-ink/80 flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </Container>
    </div>
  )
}
