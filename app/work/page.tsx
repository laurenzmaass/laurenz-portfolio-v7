import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui/Tag'
import { FadeIn } from '@/components/motion/FadeIn'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in frontend development, automation, and digital product work.',
}

export default function WorkPage() {
  return (
    <div className="pt-32">
      <Container>
        {/* Page header */}
        <FadeIn>
          <div className="mb-16 pb-12 border-b border-border">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-4">
              Case studies
            </p>
            <div className="flex items-baseline justify-between">
              <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em]">
                Work
              </h1>
              <span className="font-mono text-xs text-muted">
                {projects.length} projects
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Project list */}
        <ul className="list-none m-0 p-0 divide-y divide-border" role="list">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <FadeIn delay={i * 0.06}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 py-10 hover:pl-4 transition-all duration-300"
                  aria-label={`${project.title} — ${project.summary}`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6">
                    {/* Index */}
                    <span className="font-mono text-xs text-subtle pt-1 w-8 shrink-0 hidden sm:block">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Tag>{project.typeLabel}</Tag>
                        <span className="font-mono text-xs text-muted">{project.year}</span>
                        {project.fictional && (
                          <span className="font-mono text-2xs text-subtle italic">
                            case study
                          </span>
                        )}
                      </div>

                      {/* Client + title */}
                      <h2 className="font-sans font-medium text-2xl leading-tight tracking-[-0.01em] mb-2 group-hover:text-accent transition-colors duration-150">
                        {project.client}
                      </h2>
                      <p className="font-display italic text-lg text-muted leading-tight mb-4">
                        {project.title}
                      </p>

                      {/* Summary */}
                      <p className="font-sans text-sm text-muted leading-relaxed max-w-[60ch]">
                        {project.summary}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.stack.map((s) => (
                          <Tag key={s} className="text-2xs">{s}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcome stat */}
                  <div className="text-left md:text-right pt-1">
                    <p className="font-display italic text-[2.5rem] leading-none tracking-[-0.02em] text-ink">
                      {project.outcome.stat}
                    </p>
                    <p className="font-mono text-xs text-muted mt-1 max-w-[18ch] md:ml-auto">
                      {project.outcome.label}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>

        {/* Bottom padding */}
        <div className="section-padding" />
      </Container>
    </div>
  )
}
