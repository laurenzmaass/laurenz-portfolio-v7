import type { Metadata } from 'next'
import Link from 'next/link'
import { labEntries } from '@/data/lab'
import { Container } from '@/components/layout/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Notes, essays, and experiments. Thinking in public.',
}

export default function LabPage() {
  return (
    <div className="pt-32">
      <Container>
        <FadeIn>
          <div className="mb-16 pb-12 border-b border-border">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
              Lab
            </p>
            <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em]">
              Notes &amp; essays.
            </h1>
            <p className="font-sans font-light text-lg text-muted mt-6 max-w-[48ch]">
              Thinking in public — on automation, craft, building, and the decisions that don&#39;t fit in a commit message.
            </p>
          </div>
        </FadeIn>

        <ul className="list-none m-0 p-0 divide-y divide-border" role="list">
          {labEntries.map((entry, i) => (
            <li key={entry.slug}>
              <FadeIn delay={i * 0.06}>
                <Link
                  href={`/lab/${entry.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 py-10 hover:pl-3 transition-all duration-300"
                  aria-label={`${entry.title} — ${entry.summary}`}
                >
                  <div className="sm:pt-1">
                    <time
                      dateTime={entry.date}
                      className="font-mono text-xs text-muted block mb-2"
                    >
                      {new Date(entry.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <Tag>{entry.category}</Tag>
                  </div>

                  <div>
                    <h2 className="font-sans font-medium text-xl leading-tight tracking-[-0.01em] mb-3 group-hover:text-accent transition-colors duration-150">
                      {entry.title}
                    </h2>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4 max-w-[60ch]">
                      {entry.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((t) => (
                        <Tag key={t} className="text-2xs">{t}</Tag>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="section-padding" />
      </Container>
    </div>
  )
}
