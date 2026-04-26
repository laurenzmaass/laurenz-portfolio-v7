'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isText, setIsText] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 350, damping: 38, mass: 0.6 }
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  const dotX = useTransform(mouseX, (v) => v - 4)
  const dotY = useTransform(mouseY, (v) => v - 4)
  const rX = useTransform(ringX, (v) => v - 16)
  const rY = useTransform(ringY, (v) => v - 16)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      const target = e.target as Element
      const tagName = target?.tagName?.toLowerCase()
      const role = target?.getAttribute('role')
      const computed = window.getComputedStyle(target)

      setIsPointer(
        tagName === 'a' ||
        tagName === 'button' ||
        role === 'button' ||
        role === 'link' ||
        computed.cursor === 'pointer'
      )
      setIsText(
        tagName === 'input' ||
        tagName === 'textarea' ||
        (target as HTMLElement)?.isContentEditable
      )
      setIsDark(!!target.closest('[data-dark-bg]'))
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY, visible])

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: visible ? 1 : 0, scale: isPointer ? 0 : 1 }}
        transition={{ duration: 0.12 }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-colors duration-150 ${isDark ? 'bg-white' : 'bg-ink'}`}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: rX, y: rY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isPointer ? 1.75 : isText ? 0.5 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-colors duration-150 ${isDark ? 'border-white/50' : 'border-ink/30'}`}
        />
      </motion.div>
    </>
  )
}
