'use client'

import { useScroll, useSpring, motion, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (reduce) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-accent origin-left z-[25]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
