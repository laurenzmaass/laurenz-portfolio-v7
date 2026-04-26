import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { labEntries, getLabEntry } from '@/data/lab'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui/Tag'
import { FadeIn } from '@/components/motion/FadeIn'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return labEntries.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = getLabEntry(slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.summary,
  }
}

export default async function LabEntryPage({ params }: PageProps) {
  const { slug } = await params
  const entry = getLabEntry(slug)
  if (!entry) notFound()

  return (
    <>
      <ScrollProgress />
      <div className="pt-28">
        <Container narrow>
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 list-none m-0 p-0">
                <li>
                  <Link href="/lab" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150">
                    Lab
                  </Link>
                </li>
                <li className="font-mono text-xs text-subtle" aria-hidden="true">/</li>
                <li>
                  <span className="font-mono text-xs text-ink">{entry.title}</span>
                </li>
              </ol>
            </nav>

            <header className="mb-12 pb-8 border-b border-border">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Tag>{entry.category}</Tag>
                <time dateTime={entry.date} className="font-mono text-xs text-muted">
                  {new Date(entry.date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h1 className="font-display italic text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] mb-4">
                {entry.title}
              </h1>
              <p className="font-sans font-light text-lg text-muted leading-relaxed">
                {entry.summary}
              </p>
            </header>
          </FadeIn>

          <article aria-label={entry.title}>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {entry.content.map((para, i) => (
                  <p key={i} className="font-sans text-base text-ink/85 leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-10 pt-8 border-t border-border">
                {entry.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </FadeIn>
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/lab"
              className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
            >
              ← Back to Lab
            </Link>
          </div>

          <div className="section-padding" />
        </Container>
      </div>
    </>
  )
}
