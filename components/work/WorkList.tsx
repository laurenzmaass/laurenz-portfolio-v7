'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { Tag } from '@/components/ui/Tag'

const easeOut = [0.16, 1, 0.3, 1] as const

interface WorkRowProps {
  project: Project
  index: number
}

function WorkRow({ project, index }: WorkRowProps) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <li
      className="border-b border-border transition-colors duration-200"
      style={{ backgroundColor: open ? project.hoverTint : '' }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block group"
        aria-label={`${project.client} — ${project.title}`}
        onMouseEnter={() => !reduce && setOpen(true)}
        onMouseLeave={() => !reduce && setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {/* Always-visible row */}
        <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[28px_1fr_auto] gap-4 sm:gap-6 py-8 px-0 items-start">
          {/* Index */}
          <span className="font-mono text-xs text-subtle pt-1 hidden sm:block">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Title block */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <Tag>{project.typeLabel}</Tag>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </div>
            <h2
              className={`font-sans font-medium text-xl sm:text-2xl leading-tight tracking-[-0.01em] mb-1 transition-colors duration-150 ${open ? 'text-accent' : 'text-ink group-hover:text-accent'}`}
            >
              {project.client}
            </h2>
            <p className="font-display italic text-base sm:text-lg text-muted leading-tight">
              {project.title}
            </p>
          </div>

          {/* Stat */}
          <div className="text-right shrink-0 pt-1">
            <p className="font-display italic text-[1.75rem] sm:text-[2.25rem] leading-none tracking-[-0.02em] text-ink">
              {project.outcome.stat}
            </p>
            <p className="font-mono text-[0.6rem] text-muted mt-1 max-w-[14ch] ml-auto leading-tight">
              {project.outcome.label}
            </p>
          </div>
        </div>

        {/* Expandable detail */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="detail"
              initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: easeOut }}
              className="overflow-hidden"
              aria-hidden="true"
            >
              <div className="pb-8 max-w-[60ch]">
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((s) => (
                    <Tag key={s} className="text-[0.625rem]">{s}</Tag>
                  ))}
                </div>
                <p className="font-mono text-xs text-accent flex items-center gap-1.5">
                  Read case study
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </li>
  )
}

interface WorkListProps {
  projects: Project[]
}

export function WorkList({ projects }: WorkListProps) {
  return (
    <ul className="list-none m-0 p-0" role="list">
      {projects.map((project, i) => (
        <WorkRow key={project.slug} project={project} index={i} />
      ))}
    </ul>
  )
}
