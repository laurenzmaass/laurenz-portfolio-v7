'use client'

import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Container } from '@/components/layout/Container'

const easeOut = [0.16, 1, 0.3, 1] as const

const lineVariants: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  show: (i: number) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.14, ease: easeOut },
  }),
}

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.55 + i * 0.1, ease: easeOut },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative min-h-dvh flex flex-col justify-end pb-16 pt-32"
      aria-label="Introduction"
    >
      {/* Background grid lines — subtle structural element */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-[0.035]"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={`${(i + 1) * 12.5}%`}
              y1="0"
              x2={`${(i + 1) * 12.5}%`}
              y2="100%"
              stroke="#0C0C0B"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${(i + 1) * 16.66}%`}
              x2="100%"
              y2={`${(i + 1) * 16.66}%`}
              stroke="#0C0C0B"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container className="relative">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs text-muted uppercase tracking-[0.12em] mb-10"
          variants={fadeVariants}
          initial={reduce ? 'show' : 'hidden'}
          animate="show"
          custom={0}
        >
          Portfolio · v7 · 2025
        </motion.p>

        {/* Name — large display type */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-display italic text-[clamp(4rem,12vw,8.5rem)] leading-[0.95] tracking-[-0.03em] text-ink"
            variants={lineVariants}
            initial={reduce ? 'show' : 'hidden'}
            animate="show"
            custom={0}
          >
            Laurenz M.{/* TODO: replace M. with real surname initial */}
          </motion.h1>
        </div>

        {/* Ruled line */}
        <motion.div
          className="border-t border-ink/20 mb-8"
          initial={reduce ? { scaleX: 1 } : { scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        />

        {/* Positioning lines */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div className="overflow-hidden">
            <motion.p
              className="font-sans font-light text-[clamp(1rem,2.5vw,1.375rem)] text-ink/80 leading-[1.4] max-w-[22ch]"
              variants={lineVariants}
              initial={reduce ? 'show' : 'hidden'}
              animate="show"
              custom={1}
            >
              Builds web products.{' '}
              <span className="text-muted">Ships automation.</span>{' '}
              <span className="text-muted">Germany-based.</span>
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col gap-3 sm:items-end"
            variants={fadeVariants}
            initial={reduce ? 'show' : 'hidden'}
            animate="show"
            custom={2}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 border border-ink text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-ink hover:text-paper transition-colors duration-200 whitespace-nowrap"
            >
              View work
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <span className="font-mono text-xs text-muted">
              5 case studies · frontend + automation
            </span>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        variants={fadeVariants}
        initial={reduce ? 'show' : 'hidden'}
        animate="show"
        custom={4}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-ink/20 overflow-hidden">
          <motion.div
            className="w-full bg-ink/60"
            initial={{ height: 0, y: 0 }}
            animate={{ height: '100%', y: ['0%', '100%'] }}
            transition={{ duration: 1.2, delay: 1.2, repeat: Infinity, repeatDelay: 0.8, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
