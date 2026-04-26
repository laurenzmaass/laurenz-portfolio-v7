'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/* ─── Animated SVG workflow diagram ─────────────────────────────
   Shows the arc of a typical engagement. Paths draw themselves
   on scroll using GSAP + IntersectionObserver fallback.
──────────────────────────────────────────────────────────────── */

const stages = [
  { id: 'brief',     label: 'Brief',     sub: 'Define the problem',   cx: 80  },
  { id: 'map',       label: 'Map',        sub: 'Process & constraints', cx: 230 },
  { id: 'build',     label: 'Build',      sub: 'Implement & iterate',  cx: 400 },
  { id: 'review',    label: 'Review',     sub: 'Test & refine',        cx: 570 },
  { id: 'ship',      label: 'Ship',       sub: 'Deploy & document',    cx: 720 },
]

const CIRCLE_Y = 72
const CIRCLE_R = 26
const connectors = stages.slice(0, -1).map((s, i) => ({
  x1: s.cx + CIRCLE_R + 2,
  x2: stages[i + 1].cx - CIRCLE_R - 2,
  y: CIRCLE_Y,
}))

export function WorkflowDiagram() {
  const svgRef = useRef<SVGSVGElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!svgRef.current) return

    const paths = Array.from(svgRef.current.querySelectorAll<SVGLineElement>('.wf-connector'))
    const nodes = Array.from(svgRef.current.querySelectorAll<SVGGElement>('.wf-node'))
    const labels = Array.from(svgRef.current.querySelectorAll<SVGGElement>('.wf-label'))

    if (reduce) {
      /* Skip animation — show everything immediately */
      paths.forEach((p) => p.style.removeProperty('strokeDashoffset'))
      nodes.forEach((n) => { n.style.opacity = '1'; n.style.transform = '' })
      labels.forEach((l) => { l.style.opacity = '1' })
      return
    }

    /* Set initial state: lines invisible, nodes invisible */
    paths.forEach((line) => {
      const len = Math.abs(
        parseFloat(line.getAttribute('x2') || '0') - parseFloat(line.getAttribute('x1') || '0')
      )
      line.style.strokeDasharray = `${len}`
      line.style.strokeDashoffset = `${len}`
      line.style.transition = 'none'
    })
    nodes.forEach((n) => {
      n.style.opacity = '0'
      n.style.transform = 'scale(0.7)'
      n.style.transformOrigin = `${n.getAttribute('data-cx')}px ${CIRCLE_Y}px`
      n.style.transition = 'none'
    })
    labels.forEach((l) => {
      l.style.opacity = '0'
      l.style.transition = 'none'
    })

    const animate = () => {
      /* First node */
      requestAnimationFrame(() => {
        nodes[0].style.transition = 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)'
        nodes[0].style.opacity = '1'
        nodes[0].style.transform = 'scale(1)'
        labels[0].style.transition = 'opacity 0.4s ease 0.15s'
        labels[0].style.opacity = '1'

        /* Draw connectors + reveal subsequent nodes in sequence */
        paths.forEach((line, i) => {
          const delay = 200 + i * 280
          const nodDelay = delay + 320

          setTimeout(() => {
            line.style.transition = `stroke-dashoffset 0.5s cubic-bezier(0.4,0,0.2,1)`
            line.style.strokeDashoffset = '0'
          }, delay)

          setTimeout(() => {
            nodes[i + 1].style.transition = 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)'
            nodes[i + 1].style.opacity = '1'
            nodes[i + 1].style.transform = 'scale(1)'
            labels[i + 1].style.transition = 'opacity 0.4s ease 0.1s'
            labels[i + 1].style.opacity = '1'
          }, nodDelay)
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          animate()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(svgRef.current)
    return () => observer.disconnect()
  }, [reduce])

  return (
    <div className="w-full overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0">
      <svg
        ref={svgRef}
        viewBox="0 0 800 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[560px]"
        aria-label="Diagram showing the stages of a typical engagement: Brief, Map, Build, Review, Ship"
        role="img"
      >
        {/* Connector lines */}
        {connectors.map((c, i) => (
          <line
            key={i}
            className="wf-connector"
            x1={c.x1}
            y1={c.y}
            x2={c.x2}
            y2={c.y}
            stroke="#1C4532"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        ))}

        {/* Arrow tips on connectors */}
        {connectors.map((c, i) => (
          <polygon
            key={`arrow-${i}`}
            points={`${c.x2 - 6},${c.y - 4} ${c.x2 + 1},${c.y} ${c.x2 - 6},${c.y + 4}`}
            fill="#1C4532"
            fillOpacity="0.35"
          />
        ))}

        {/* Stage nodes */}
        {stages.map((s, i) => (
          <g
            key={s.id}
            className="wf-node"
            data-cx={s.cx}
          >
            {/* Outer ring */}
            <circle
              cx={s.cx}
              cy={CIRCLE_Y}
              r={CIRCLE_R + 8}
              fill="#1C4532"
              fillOpacity={i === 2 ? 0.06 : 0.03}
              stroke="#1C4532"
              strokeWidth="0.75"
              strokeOpacity={i === 2 ? 0.2 : 0.08}
            />
            {/* Main circle */}
            <circle
              cx={s.cx}
              cy={CIRCLE_Y}
              r={CIRCLE_R}
              fill={i === 2 ? '#1C4532' : '#EDE9E2'}
              fillOpacity={i === 2 ? 0.12 : 1}
              stroke={i === 2 ? '#1C4532' : '#0C0C0B'}
              strokeWidth={i === 2 ? 1.5 : 1}
              strokeOpacity={i === 2 ? 0.6 : 0.15}
            />
            {/* Stage number */}
            <text
              x={s.cx}
              y={CIRCLE_Y + 4}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="11"
              fill={i === 2 ? '#1C4532' : '#6B6862'}
              fontWeight={i === 2 ? '600' : '400'}
              letterSpacing="0.01em"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
          </g>
        ))}

        {/* Stage labels */}
        {stages.map((s, i) => (
          <g key={`label-${s.id}`} className="wf-label">
            <text
              x={s.cx}
              y={CIRCLE_Y + CIRCLE_R + 22}
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="11"
              fontWeight="500"
              fill={i === 2 ? '#1C4532' : '#0C0C0B'}
              letterSpacing="-0.01em"
            >
              {s.label}
            </text>
            <text
              x={s.cx}
              y={CIRCLE_Y + CIRCLE_R + 37}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="8.5"
              fill="#6B6862"
              letterSpacing="0.02em"
            >
              {s.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
