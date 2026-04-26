'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap } from 'gsap'

const items = [
  'Next.js', '·', 'n8n', '·', 'React', '·', 'TypeScript',
  '·', 'Automation', '·', 'Airtable', '·', 'GSAP', '·',
  'Framer Motion', '·', 'Figma', '·', 'Vercel', '·', 'API Design',
  '·', 'Shopify', '·', 'Notion', '·', 'HTML / CSS', '·',
]

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !trackRef.current) return

    const track = trackRef.current
    const clone = track.cloneNode(true) as HTMLDivElement
    track.parentElement?.appendChild(clone)

    const tl = gsap.to([track, clone], {
      xPercent: -100,
      ease: 'none',
      duration: 28,
      repeat: -1,
    })

    return () => {
      tl.kill()
      clone.remove()
    }
  }, [reduce])

  return (
    <div
      className="border-t border-b border-border py-3 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap">
        <div ref={trackRef} className="flex items-center gap-6 pr-6">
          {items.map((item, i) => (
            <span
              key={i}
              className={
                item === '·'
                  ? 'font-mono text-xs text-subtle'
                  : 'font-mono text-xs text-muted uppercase tracking-[0.08em]'
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
