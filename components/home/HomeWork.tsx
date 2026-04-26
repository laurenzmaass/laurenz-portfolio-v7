'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui/Tag'

interface HomeWorkProps {
  projects: Project[]
}

export function HomeWork({ projects }: HomeWorkProps) {
  const reduce = useReducedMotion()

  return (
    <section className="section-padding border-t border-border" aria-labelledby="work-heading">
      <Container>
        {/* Header row */}
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-2">
              Selected work
            </p>
            <h2 id="work-heading" className="font-display italic text-3xl tracking-[-0.02em]">
              Recent projects
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150 hidden sm:block"
          >
            All projects →
          </Link>
        </div>

        {/* Project list */}
        <ul className="list-none m-0 p-0 divide-y divide-border" role="list">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group block py-8 hover:pl-3 transition-all duration-300"
                aria-label={`${project.title} — ${project.summary}`}
              >
                <motion.div
                  initial={reduce ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Left: index + type */}
                    <div className="flex items-center gap-4 sm:w-56 shrink-0">
                      <span className="font-mono text-xs text-muted w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <Tag>{project.typeLabel}</Tag>
                    </div>

                    {/* Center: title + summary */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="font-sans font-medium text-lg text-ink leading-tight group-hover:text-accent transition-colors duration-150">
                          {project.client}
                        </h3>
                        <span className="font-mono text-xs text-muted shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-muted leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Right: outcome stat */}
                    <div className="sm:text-right shrink-0">
                      <p className="font-display italic text-[1.75rem] leading-none tracking-[-0.02em] text-ink mb-0.5">
                        {project.outcome.stat}
                      </p>
                      <p className="font-mono text-xs text-muted max-w-[16ch] sm:text-right">
                        {project.outcome.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pt-8 sm:hidden">
          <Link
            href="/work"
            className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150"
          >
            All projects →
          </Link>
        </div>
      </Container>
    </section>
  )
}
