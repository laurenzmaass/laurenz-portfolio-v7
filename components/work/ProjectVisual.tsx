import { cn } from '@/lib/utils'

/* ─── Per-project abstract SVG compositions ─────────────────────
   Each one is unique and thematically related to the project type.
   Hardcoded palette matches the design tokens:
     ink   #0C0C0B  accent  #1C4532  muted  #6B6862
     border #E4E0D8  surface #EDE9E2  paper  #F5F2EC
──────────────────────────────────────────────────────────────── */

function VorwerkVisual() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background dots grid */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 52}
            cy={30 + row * 48}
            r="1.5"
            fill="#0C0C0B"
            opacity="0.06"
          />
        ))
      )}
      {/* Shopify (trigger) node */}
      <circle cx="72" cy="150" r="28" fill="#1C4532" fillOpacity="0.1" stroke="#1C4532" strokeWidth="1.5" />
      <text x="72" y="153" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#1C4532" fontWeight="500" letterSpacing="0.06em">TRIGGER</text>
      {/* Central n8n node */}
      <circle cx="240" cy="150" r="38" fill="#0C0C0B" fillOpacity="0.04" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="240" cy="150" r="28" fill="#1C4532" fillOpacity="0.08" stroke="#1C4532" strokeWidth="1.5" />
      <text x="240" y="154" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#1C4532" fontWeight="500">n8n</text>
      {/* Output nodes */}
      <circle cx="400" cy="80" r="22" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <text x="400" y="84" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#6B6862">Airtable</text>
      <circle cx="400" cy="150" r="22" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <text x="400" y="154" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#6B6862">Shopify</text>
      <circle cx="400" cy="220" r="22" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <text x="400" y="224" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#6B6862">Slack</text>
      {/* Connector: trigger → n8n */}
      <line x1="100" y1="150" x2="212" y2="150" stroke="#1C4532" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3" />
      <polygon points="208,146 216,150 208,154" fill="#1C4532" fillOpacity="0.5" />
      {/* Connectors: n8n → outputs */}
      <line x1="268" y1="136" x2="378" y2="88" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="268" y1="150" x2="378" y2="150" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="268" y1="164" x2="378" y2="212" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
    </svg>
  )
}

function BasecampVisual() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Large background circle */}
      <circle cx="260" cy="160" r="130" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.07" />
      {/* Overlapping design circle */}
      <circle cx="180" cy="140" r="95" fill="#1C4532" fillOpacity="0.05" stroke="#1C4532" strokeWidth="1.5" strokeOpacity="0.25" />
      {/* Rectangle overlay */}
      <rect x="140" y="60" width="200" height="160" rx="2" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.12" />
      {/* Accent small circle */}
      <circle cx="360" cy="100" r="32" fill="#1C4532" fillOpacity="0.08" stroke="#1C4532" strokeWidth="1.5" />
      {/* Horizontal rule lines */}
      <line x1="40" y1="108" x2="440" y2="108" stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.08" />
      <line x1="40" y1="200" x2="440" y2="200" stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.08" />
      {/* Corner marks */}
      <path d="M40 40 L60 40 M40 40 L40 60" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M440 40 L420 40 M440 40 L440 60" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M40 260 L60 260 M40 260 L40 240" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M440 260 L420 260 M440 260 L440 240" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      {/* Typography element */}
      <text x="178" y="178" fontFamily="Georgia, serif" fontSize="88" fontStyle="italic" fill="#0C0C0B" fillOpacity="0.06" fontWeight="400" letterSpacing="-0.04em">B</text>
    </svg>
  )
}

function WanderFurtherVisual() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Topographic background lines */}
      <ellipse cx="240" cy="160" rx="200" ry="110" stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.06" />
      <ellipse cx="240" cy="160" rx="155" ry="82" stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.06" />
      <ellipse cx="240" cy="160" rx="108" ry="55" stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.06" />
      {/* Route path — bezier curve */}
      <path
        d="M48 220 C100 180 130 80 200 90 C270 100 290 200 360 160 C400 140 420 100 440 90"
        stroke="#1C4532"
        strokeWidth="2"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      {/* Waypoint circles */}
      <circle cx="48" cy="220" r="6" fill="#1C4532" fillOpacity="0.2" stroke="#1C4532" strokeWidth="1.5" />
      <circle cx="118" cy="145" r="5" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1.25" strokeOpacity="0.4" />
      <circle cx="220" cy="94" r="5" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1.25" strokeOpacity="0.4" />
      <circle cx="362" cy="158" r="5" fill="#EDE9E2" stroke="#0C0C0B" strokeWidth="1.25" strokeOpacity="0.4" />
      <circle cx="440" cy="90" r="6" fill="#1C4532" fillOpacity="0.2" stroke="#1C4532" strokeWidth="1.5" />
      {/* Labels */}
      <text x="32" y="244" fontFamily="monospace" fontSize="7.5" fill="#6B6862" letterSpacing="0.05em">START</text>
      <text x="422" y="82" fontFamily="monospace" fontSize="7.5" fill="#6B6862" letterSpacing="0.05em">END</text>
      {/* Scale bar */}
      <line x1="40" y1="270" x2="120" y2="270" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="40" y1="266" x2="40" y2="274" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="120" y1="266" x2="120" y2="274" stroke="#0C0C0B" strokeWidth="1" strokeOpacity="0.2" />
      <text x="80" y="283" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6B6862" opacity="0.6">40+ articles</text>
    </svg>
  )
}

function RelaisVisual() {
  const stages = [
    { label: 'Intake', x: 40 },
    { label: 'Notion', x: 140 },
    { label: 'CRM', x: 240 },
    { label: 'Email', x: 340 },
    { label: 'Done', x: 420 },
  ]
  const boxW = 68
  const boxH = 36
  const y = 130

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Background horizontal guide line */}
      <line x1="20" y1={y + boxH / 2} x2="460" y2={y + boxH / 2} stroke="#0C0C0B" strokeWidth="0.75" strokeOpacity="0.07" strokeDasharray="4 4" />
      {/* Stages */}
      {stages.map((s, i) => {
        const done = i < 3
        return (
          <g key={s.label}>
            <rect
              x={s.x}
              y={y}
              width={boxW}
              height={boxH}
              rx="3"
              fill={done ? '#1C4532' : '#EDE9E2'}
              fillOpacity={done ? 0.1 : 0.8}
              stroke={done ? '#1C4532' : '#0C0C0B'}
              strokeWidth="1.25"
              strokeOpacity={done ? 0.6 : 0.15}
            />
            <text
              x={s.x + boxW / 2}
              y={y + boxH / 2 + 4}
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="8.5"
              fill={done ? '#1C4532' : '#6B6862'}
              fontWeight={done ? '500' : '400'}
              letterSpacing="0.04em"
            >
              {s.label}
            </text>
            {/* Arrow to next stage */}
            {i < stages.length - 1 && (
              <path
                d={`M${s.x + boxW + 2} ${y + boxH / 2} L${stages[i + 1].x - 3} ${y + boxH / 2}`}
                stroke={done ? '#1C4532' : '#0C0C0B'}
                strokeWidth="1.25"
                strokeOpacity={done ? 0.5 : 0.15}
                markerEnd="url(#arrowhead)"
              />
            )}
          </g>
        )
      })}
      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#1C4532" fillOpacity="0.5" />
        </marker>
      </defs>
      {/* Duration labels */}
      <text x="74" y={y + boxH + 16} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6B6862" opacity="0.6">automated</text>
      <text x="174" y={y + boxH + 16} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6B6862" opacity="0.6">automated</text>
      <text x="274" y={y + boxH + 16} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6B6862" opacity="0.6">automated</text>
      <text x="374" y={y + boxH + 16} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#6B6862" opacity="0.6">automated</text>
      <text x="454" y={y + boxH + 16} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#1C4532" opacity="0.8">✓</text>
      {/* Result stat */}
      <text x="240" y="80" textAnchor="middle" fontFamily="Georgia, serif" fontSize="36" fontStyle="italic" fill="#0C0C0B" fillOpacity="0.08" letterSpacing="-0.02em">3h → 20m</text>
    </svg>
  )
}

function SchreiberVisual() {
  const gridLines = 6
  const chartW = 400
  const chartH = 200
  const ox = 40
  const oy = 240

  /* Data points for upward trend */
  const points = [
    [0, 0], [60, 18], [120, 40], [190, 72], [260, 108], [330, 150], [400, 200],
  ].map(([dx, dy]) => ({ x: ox + dx, y: oy - dy }))

  const pathD = points
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(' ')

  const fillD = `${pathD} L${ox + chartW},${oy} L${ox},${oy} Z`

  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Fine grid */}
      {Array.from({ length: gridLines + 1 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={ox}
          y1={oy - (i * chartH) / gridLines}
          x2={ox + chartW}
          y2={oy - (i * chartH) / gridLines}
          stroke="#0C0C0B"
          strokeWidth="0.75"
          strokeOpacity={i === 0 ? 0.15 : 0.06}
        />
      ))}
      {Array.from({ length: gridLines + 1 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={ox + (i * chartW) / gridLines}
          y1={oy - chartH}
          x2={ox + (i * chartW) / gridLines}
          y2={oy}
          stroke="#0C0C0B"
          strokeWidth="0.75"
          strokeOpacity={i === 0 ? 0.15 : 0.06}
        />
      ))}
      {/* Area fill under line */}
      <path d={fillD} fill="#1C4532" fillOpacity="0.05" />
      {/* Trend line */}
      <path d={pathD} stroke="#1C4532" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 5 : 3} fill="#1C4532" fillOpacity={i === points.length - 1 ? 0.7 : 0.3} />
      ))}
      {/* Axes labels */}
      <text x={ox} y={oy + 14} fontFamily="monospace" fontSize="7.5" fill="#6B6862" opacity="0.6" letterSpacing="0.04em">Day 0</text>
      <text x={ox + chartW} y={oy + 14} textAnchor="end" fontFamily="monospace" fontSize="7.5" fill="#6B6862" opacity="0.6" letterSpacing="0.04em">Day 60</text>
      {/* Conversion rate label */}
      <text x={ox + chartW - 10} y={oy - chartH - 10} textAnchor="end" fontFamily="monospace" fontSize="8" fill="#1C4532" opacity="0.8" letterSpacing="0.04em">4.2% CVR</text>
    </svg>
  )
}

/* ─── Map from slug to component ─────────────────────────────── */
const visuals: Record<string, () => React.ReactElement> = {
  'vorwerk-digital': VorwerkVisual,
  'basecamp-studio': BasecampVisual,
  'wanderfurther': WanderFurtherVisual,
  'relais-consulting': RelaisVisual,
  'schreiber-co': SchreiberVisual,
}

interface ProjectVisualProps {
  slug: string
  className?: string
}

export function ProjectVisual({ slug, className }: ProjectVisualProps) {
  const Visual = visuals[slug]
  if (!Visual) return null
  return (
    <div
      className={cn(
        'w-full h-full bg-surface flex items-center justify-center overflow-hidden',
        className
      )}
    >
      <Visual />
    </div>
  )
}

export function hasVisual(slug: string): boolean {
  return slug in visuals
}
