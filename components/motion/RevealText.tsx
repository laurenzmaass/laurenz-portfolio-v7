'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as const

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.12,
  as: Tag = 'span',
}: RevealTextProps) {
  const reduce = useReducedMotion()

  /* Split into words, reveal each */
  const words = children.split(' ')

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  }

  const word: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    show: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: { duration: reduce ? 0.01 : 0.7, ease: easeOut },
    },
  }

  const MotionTag = motion[Tag] as typeof motion.span

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={children}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block mr-[0.25em] last:mr-0"
          aria-hidden="true"
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  )
}
