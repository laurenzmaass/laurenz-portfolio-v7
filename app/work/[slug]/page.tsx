import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, getProject, getAdjacentProjects } from '@/data/projects'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui/Tag'
import { FadeIn } from '@/components/motion/FadeIn'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ProjectVisual } from '@/components/work/ProjectVisual'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)
  const { theme } = project

  return (
    <>
      <ScrollProgress />

      {/* ── Dark immersive case study header ── */}
      <header
        className="pt-28"
        style={{
          backgroundColor: theme.pageBg,
          borderBottom: `1px solid ${theme.accent}20`,
        }}
      >
        <Container>
          <FadeIn>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 list-none m-0 p-0">
                <li>
                  <Link
                    href="/work"
                    className="font-mono text-xs transition-opacity duration-150 hover:opacity-70"
                    style={{ color: theme.muted }}
                  >
                    Work
                  </Link>
                </li>
                <li className="font-mono text-xs" style={{ color: theme.muted }} aria-hidden="true">/</li>
                <li>
                  <span className="font-mono text-xs" style={{ color: theme.text }}>{project.client}</span>
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 pb-16 items-center">
              {/* Left: title + meta */}
              <div>
                {/* Meta tags — styled for dark bg */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {[project.typeLabel, project.year].map((label) => (
                    <span
                      key={label}
                      className="font-mono text-[0.6875rem] px-2.5 py-1 rounded-[2px]"
                      style={{
                        color: theme.muted,
                        border: `1px solid ${theme.accent}35`,
                        background: `${theme.accent}10`,
                      }}
                    >
                      {label}
                    </span>
                  ))}
                  {project.fictional && (
                    <span
                      className="font-mono text-[0.6875rem] italic px-2.5 py-1 rounded-[2px]"
                      style={{
                        color: theme.muted,
                        border: `1px solid ${theme.accent}20`,
                        background: `${theme.accent}08`,
                      }}
                    >
                      fictional
                    </span>
                  )}
                </div>

                <h1
                  className="font-display italic text-[clamp(2.5rem,7vw,5rem)] leading-[1.0] tracking-[-0.03em] mb-3 max-w-[20ch]"
                  style={{ color: theme.text }}
                >
                  {project.client}
                </h1>
                <p
                  className="font-sans font-light text-xl mb-10 max-w-[44ch]"
                  style={{ color: theme.muted }}
                >
                  {project.title}
                </p>

                <div className="border-l-2 pl-6 py-1" style={{ borderColor: theme.accent }}>
                  <p
                    className="font-display italic text-[3rem] leading-none tracking-[-0.02em]"
                    style={{ color: theme.accent }}
                  >
                    {project.outcome.stat}
                  </p>
                  <p className="font-mono text-xs mt-1" style={{ color: theme.muted }}>
                    {project.outcome.label}
                  </p>
                </div>
              </div>

              {/* Right: project visual */}
              <div
                className="hidden lg:block aspect-[4/3] overflow-hidden"
                style={{ border: `1px solid ${theme.accent}25` }}
              >
                <ProjectVisual slug={slug} className="w-full h-full" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </header>

      {/* ── Article body ── */}
      <article aria-label={`${project.client} case study`}>
        {/* Stack strip */}
        <div className="border-b border-border bg-paper">
          <Container>
            <div className="py-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-muted uppercase tracking-[0.12em] mr-2">Stack</span>
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Container>
        </div>

        <Container narrow>
          <Section title="The problem" label="01 / Problem">
            {project.problem.map((para, i) => (
              <p key={i} className="font-sans text-base text-ink/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </Section>

          <Section title="The approach" label="02 / Approach">
            {project.approach.map((para, i) => (
              <p key={i} className="font-sans text-base text-ink/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </Section>

          <Section title="The solution" label="03 / Solution">
            {project.solution.map((para, i) => (
              <p key={i} className="font-sans text-base text-ink/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </Section>

          <Section title="Results" label="04 / Outcome">
            <div className="bg-surface p-6 mb-6 border-l-2 border-accent">
              <p className="font-display italic text-[2.5rem] leading-none tracking-[-0.02em] text-ink">{project.outcome.stat}</p>
              <p className="font-mono text-xs text-muted mt-1">{project.outcome.label}</p>
            </div>
            {project.results.map((para, i) => (
              <p key={i} className="font-sans text-base text-ink/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </Section>

          <Section title="Reflection" label="05 / Reflection">
            {project.reflection.map((para, i) => (
              <p key={i} className="font-sans text-base text-ink/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </Section>
        </Container>
      </article>

      {/* ── Project nav ── */}
      <nav className="border-t border-border" aria-label="Case study navigation">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group p-8 hover:bg-surface transition-colors duration-200">
              <p className="font-mono text-xs text-muted mb-2">← Previous</p>
              <p className="font-sans font-medium text-base group-hover:text-accent transition-colors duration-150">{prev.client}</p>
              <p className="font-display italic text-sm text-muted mt-0.5">{prev.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group p-8 hover:bg-surface transition-colors duration-200 sm:text-right">
              <p className="font-mono text-xs text-muted mb-2">Next →</p>
              <p className="font-sans font-medium text-base group-hover:text-accent transition-colors duration-150">{next.client}</p>
              <p className="font-display italic text-sm text-muted mt-0.5">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      </nav>

      <div className="section-padding bg-surface border-t border-border">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-sm text-muted">Interested in working together?</p>
            <Link href="/contact" className="font-sans text-sm font-medium text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors duration-200">
              Get in touch
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

function Section({ title, label, children }: { title: string; label: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <section className="py-12 border-b border-border last:border-0">
        <div className="mb-6">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-2">{label}</p>
          <h2 className="font-display italic text-2xl leading-tight tracking-[-0.01em]">{title}</h2>
        </div>
        {children}
      </section>
    </FadeIn>
  )
}
