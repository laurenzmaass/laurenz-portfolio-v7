'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { Container } from '@/components/layout/Container'
import { Tag } from '@/components/ui/Tag'
import { ProjectVisual } from '@/components/work/ProjectVisual'

const easeOut = [0.16, 1, 0.3, 1] as const

interface HomeWorkProps {
  projects: Project[]
}

export function HomeWork({ projects }: HomeWorkProps) {
  const reduce = useReducedMotion()
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  return (
    <section className="section-padding border-t border-border" aria-labelledby="work-heading">
      <Container>
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-2">
              Selected work
            </p>
            <h2 id="work-heading" className="font-display italic text-3xl tracking-[-0.02em]">
              Recent projects
            </h2>
          </div>
          <Link href="/work" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150 hidden sm:block">
            All projects →
          </Link>
        </div>

        <ul className="list-none m-0 p-0 divide-y divide-border" role="list">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              className={activeSlug === project.slug ? 'bg-surface' : ''}
              style={{ transition: 'background-color 200ms ease' }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="block group"
                aria-label={`${project.title} — ${project.summary}`}
                onMouseEnter={() => !reduce && setActiveSlug(project.slug)}
                onMouseLeave={() => !reduce && setActiveSlug(null)}
              >
                <motion.div
                  initial={reduce ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                >
                  {/* Always-visible compact row */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 py-8">
                    <div className="flex items-center gap-4 sm:w-56 shrink-0">
                      <span className="font-mono text-xs text-muted w-6">{String(i + 1).padStart(2, '0')}</span>
                      <Tag>{project.typeLabel}</Tag>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className={`font-sans font-medium text-lg leading-tight transition-colors duration-150 ${activeSlug === project.slug ? 'text-accent' : 'text-ink'}`}>
                          {project.client}
                        </h3>
                        <span className="font-mono text-xs text-muted shrink-0">{project.year}</span>
                      </div>
                      <p className="font-sans text-sm text-muted leading-relaxed line-clamp-2">{project.summary}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-display italic text-[1.75rem] leading-none tracking-[-0.02em] text-ink mb-0.5">
                        {project.outcome.stat}
                      </p>
                      <p className="font-mono text-xs text-muted max-w-[16ch] sm:text-right">{project.outcome.label}</p>
                    </div>
                  </div>

                  {/* Expand on hover — shows visual */}
                  <AnimatePresence>
                    {activeSlug === project.slug && (
                      <motion.div
                        key="preview"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="overflow-hidden"
                        aria-hidden="true"
                      >
                        <div className="pb-8">
                          <div className="aspect-[4/1.5] sm:aspect-[4/1.2] lg:aspect-[4/0.9] border border-border overflow-hidden w-full max-w-2xl">
                            <ProjectVisual slug={project.slug} className="w-full h-full" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pt-8 sm:hidden">
          <Link href="/work" className="font-mono text-xs text-muted hover:text-ink transition-colors duration-150">
            All projects →
          </Link>
        </div>
      </Container>
    </section>
  )
}
