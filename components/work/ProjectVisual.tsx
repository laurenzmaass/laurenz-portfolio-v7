import { cn } from '@/lib/utils'

/* ─── Per-project interface-mockup SVG compositions ─────────────
   Dark backgrounds with per-project accent colors.
   viewBox 480×360 matches the 4:3 aspect ratio used on case study pages.
──────────────────────────────────────────────────────────────── */

function VorwerkVisual() {
  // n8n workflow canvas — deep forest dark, green accents
  return (
    <svg viewBox="0 0 480 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="360" fill="#040F08" />
      {/* Dot grid */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={24 + col * 48} cy={24 + row * 44} r="1" fill="#22C55E" opacity="0.08" />
        ))
      )}

      {/* ── Shopify trigger card ── */}
      <rect x="20" y="124" width="112" height="80" rx="4" fill="#0A1F0E" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.35" />
      <rect x="20" y="124" width="112" height="22" rx="4" fill="#0D2D12" />
      <rect x="20" y="142" width="112" height="4" fill="#0D2D12" />
      <rect x="26" y="129" width="46" height="10" rx="2" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="0.5" strokeOpacity="0.5" />
      <text x="49" y="136.5" textAnchor="middle" fontFamily="monospace" fontSize="5.5" fill="#22C55E" letterSpacing="0.1em">TRIGGER</text>
      <text x="30" y="160" fontFamily="monospace" fontSize="7.5" fill="#D4EDD9" fontWeight="500">Shopify</text>
      <text x="30" y="174" fontFamily="monospace" fontSize="6" fill="#6B9A72">on_new_order</text>
      <circle cx="123" cy="130" r="3.5" fill="#22C55E" opacity="0.8" />

      {/* ── n8n processor card ── */}
      <rect x="178" y="90" width="150" height="168" rx="4" fill="#0A1F0E" stroke="#22C55E" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="178" y="90" width="150" height="24" rx="4" fill="#0D2D12" />
      <rect x="178" y="110" width="150" height="4" fill="#0D2D12" />
      <text x="192" y="106" fontFamily="monospace" fontSize="8" fill="#22C55E" fontWeight="600" letterSpacing="0.04em">n8n workflow</text>
      <circle cx="314" cy="102" r="4" fill="#22C55E" opacity="0.7" />
      {[
        { y: 134, label: '01  Deduplicate order ID' },
        { y: 156, label: '02  Cross-check stock' },
        { y: 178, label: '03  Format summary' },
        { y: 200, label: '04  Route to destinations' },
        { y: 222, label: '05  Log to audit trail' },
      ].map((step, i) => (
        <g key={i}>
          <rect x="186" y={step.y - 10} width="134" height="17" rx="2" fill="#22C55E" fillOpacity="0.05" />
          <circle cx="196" cy={step.y} r="3" fill="#22C55E" opacity="0.65" />
          <text x="206" y={step.y + 4} fontFamily="monospace" fontSize="6.5" fill="#6B9A72" letterSpacing="0.02em">{step.label}</text>
        </g>
      ))}

      {/* ── Output cards ── */}
      {[
        { label: 'Airtable', sub: 'write_record', y: 90 },
        { label: 'Slack', sub: 'post_daily_summary', y: 186 },
        { label: 'Slack Alert', sub: 'flag_threshold_sku', y: 278 },
      ].map((node) => (
        <g key={node.label}>
          <rect x="382" y={node.y} width="86" height="64" rx="4" fill="#0A1F0E" stroke="#22C55E" strokeWidth="0.75" strokeOpacity="0.25" />
          <text x="392" y={node.y + 22} fontFamily="monospace" fontSize="7.5" fill="#D4EDD9" fontWeight="500">{node.label}</text>
          <text x="392" y={node.y + 37} fontFamily="monospace" fontSize="5.5" fill="#6B9A72">{node.sub}</text>
          <circle cx="458" cy={node.y + 12} r="3" fill="#22C55E" opacity="0.5" />
        </g>
      ))}

      {/* ── Connection: trigger → processor ── */}
      <line x1="132" y1="164" x2="177" y2="164" stroke="#22C55E" strokeWidth="1.25" strokeOpacity="0.45" strokeDasharray="4 3" />
      <polygon points="173,161 179,164 173,167" fill="#22C55E" fillOpacity="0.55" />

      {/* ── Connections: processor → outputs ── */}
      <path d="M328 136 Q358 136 381 122" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" fill="none" />
      <path d="M328 172 L381 218" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" fill="none" />
      <path d="M328 210 Q358 260 381 310" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="4 3" fill="none" />

      {/* ── Bottom stat ── */}
      <text x="240" y="350" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#22C55E" opacity="0.38" letterSpacing="0.12em">97% REDUCTION IN MANUAL PROCESSING TIME</text>
    </svg>
  )
}

function BasecampVisual() {
  // Browser mockup with agency site — dark warm, orange accents
  return (
    <svg viewBox="0 0 480 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="360" fill="#120B03" />

      {/* Browser window */}
      <rect x="16" y="16" width="448" height="328" rx="8" fill="#1A0D04" stroke="#E8943A" strokeWidth="0.75" strokeOpacity="0.22" />

      {/* Chrome bar */}
      <rect x="16" y="16" width="448" height="36" rx="8" fill="#221205" />
      <rect x="16" y="44" width="448" height="8" fill="#221205" />
      <circle cx="38" cy="34" r="5" fill="#FF5F57" opacity="0.85" />
      <circle cx="54" cy="34" r="5" fill="#FEBC2E" opacity="0.85" />
      <circle cx="70" cy="34" r="5" fill="#28C840" opacity="0.85" />
      <rect x="94" y="26" width="264" height="16" rx="3" fill="#120B03" stroke="#E8943A" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="226" y="37" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#B8946A" letterSpacing="0.03em">basecamp-studio.com</text>

      {/* Site nav */}
      <rect x="16" y="52" width="448" height="34" fill="#0E0803" />
      <line x1="16" y1="52" x2="464" y2="52" stroke="#E8943A" strokeWidth="0.5" strokeOpacity="0.15" />
      <text x="36" y="74" fontFamily="Georgia, serif" fontSize="10" fontStyle="italic" fill="#F5E6C8" letterSpacing="-0.01em">Basecamp</text>
      {['Work', 'Studio', 'Journal', 'Contact'].map((link, i) => (
        <text key={link} x={286 + i * 46} y="74" fontFamily="monospace" fontSize="6" fill="#B8946A" letterSpacing="0.06em">{link}</text>
      ))}

      {/* Hero text */}
      <text x="36" y="126" fontFamily="Georgia, serif" fontSize="30" fontStyle="italic" fill="#F5E6C8" letterSpacing="-0.03em" opacity="0.96">Design that</text>
      <text x="36" y="162" fontFamily="Georgia, serif" fontSize="30" fontStyle="italic" fill="#E8943A" letterSpacing="-0.03em" opacity="0.96">moves people.</text>
      <text x="38" y="186" fontFamily="monospace" fontSize="6.5" fill="#B8946A" letterSpacing="0.06em">HAMBURG · BRANDING · DIGITAL</text>

      {/* Portfolio thumbnails */}
      {[
        { x: 36, label: 'Identity ·01', sub: 'Branding · 2024' },
        { x: 172, label: 'Digital ·02', sub: 'Web · 2024' },
        { x: 308, label: 'Event ·03', sub: 'Print · 2023' },
      ].map((card) => (
        <g key={card.label}>
          <rect x={card.x} y={206} width={124} height={86} rx="2" fill="#1F1208" stroke="#E8943A" strokeWidth="0.75" strokeOpacity="0.22" />
          <rect x={card.x} y={206} width={124} height={36} rx="2" fill="#2A1A0A" />
          <text x={card.x + 62} y={229} textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fontStyle="italic" fill="#B8946A" opacity="0.65">{card.label}</text>
          <text x={card.x + 62} y={274} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#6B5040" opacity="0.8">{card.sub}</text>
        </g>
      ))}

      {/* Lighthouse scores */}
      <rect x="16" y="300" width="448" height="44" fill="#0D0802" />
      <line x1="16" y1="300" x2="464" y2="300" stroke="#E8943A" strokeWidth="0.5" strokeOpacity="0.2" />
      {[
        { label: 'PERFORMANCE', score: '97', x: 76 },
        { label: 'ACCESSIBILITY', score: '100', x: 192 },
        { label: 'BEST PRACTICES', score: '100', x: 310 },
        { label: 'SEO', score: '98', x: 416 },
      ].map((s) => (
        <g key={s.label}>
          <text x={s.x} y="316" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#B8946A" letterSpacing="0.08em" opacity="0.6">{s.label}</text>
          <text x={s.x} y="336" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fill="#E8943A" letterSpacing="-0.02em">{s.score}</text>
        </g>
      ))}
    </svg>
  )
}

function WanderFurtherVisual() {
  // Travel blog — deep blue, sky-blue accents
  return (
    <svg viewBox="0 0 480 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="360" fill="#020C14" />

      {/* Column divider */}
      <line x1="244" y1="0" x2="244" y2="276" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* ── Left: Article list ── */}
      <text x="20" y="38" fontFamily="Georgia, serif" fontSize="12" fontStyle="italic" fill="#C8E6F5" letterSpacing="-0.02em">WanderFurther</text>
      <line x1="20" y1="48" x2="224" y2="48" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />

      {[
        { y: 58, title: 'Best day hikes', location: 'Chiang Mai, Thailand', imgFill: '#0A1E2C' },
        { y: 136, title: 'Walking Oaxaca city', location: 'Oaxaca, Mexico', imgFill: '#081C18' },
        { y: 214, title: 'Lisbon without a car', location: 'Lisbon, Portugal', imgFill: '#0A182A' },
      ].map((art, i) => (
        <g key={i}>
          <rect x="20" y={art.y} width="56" height="62" rx="2" fill={art.imgFill} stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx="48" cy={art.y + 31} r="9" fill="#38BDF8" fillOpacity="0.12" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.4" />
          <circle cx="48" cy={art.y + 31} r="2.5" fill="#38BDF8" opacity="0.7" />
          <text x="86" y={art.y + 18} fontFamily="Georgia, serif" fontSize="9" fontStyle="italic" fill="#C8E6F5" letterSpacing="-0.01em">{art.title}</text>
          <text x="86" y={art.y + 33} fontFamily="monospace" fontSize="6" fill="#6899B4" letterSpacing="0.04em">{art.location}</text>
          <rect x="86" y={art.y + 42} width="36" height="10" rx="1.5" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4" />
          <text x="104" y={art.y + 49.5} textAnchor="middle" fontFamily="monospace" fontSize="5.5" fill="#38BDF8" letterSpacing="0.06em">PAGE 1</text>
          {i < 2 && <line x1="20" y1={art.y + 74} x2="224" y2={art.y + 74} stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.1" />}
        </g>
      ))}

      {/* ── Right: Map ── */}
      <rect x="244" y="0" width="236" height="276" fill="#030D16" />
      {[130, 95, 64, 38, 18].map((r, i) => (
        <ellipse key={i} cx="368" cy="128" rx={r * 1.45} ry={r} stroke="#38BDF8" strokeWidth="0.5" strokeOpacity={0.05 + i * 0.01} fill="none" />
      ))}
      <path d="M256 216 C284 178 312 106 354 122 C396 138 416 94 468 76" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.65" strokeLinecap="round" fill="none" />
      {[
        { cx: 256, cy: 216 },
        { cx: 310, cy: 122 },
        { cx: 354, cy: 124 },
        { cx: 416, cy: 96 },
        { cx: 468, cy: 76 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r={i === 0 || i === 4 ? 6 : 4} fill="#020C14" stroke="#38BDF8" strokeWidth="1.25" strokeOpacity="0.8" />
          <circle cx={p.cx} cy={p.cy} r={i === 0 || i === 4 ? 3 : 1.8} fill="#38BDF8" opacity="0.9" />
        </g>
      ))}
      <text x="250" y="234" fontFamily="monospace" fontSize="6" fill="#6899B4" letterSpacing="0.06em">START</text>
      <text x="464" y="68" textAnchor="end" fontFamily="monospace" fontSize="6" fill="#6899B4" letterSpacing="0.06em">END</text>

      {/* ── Bottom stats strip ── */}
      <rect x="0" y="276" width="480" height="84" fill="#020C14" />
      <line x1="0" y1="276" x2="480" y2="276" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
      {[
        { label: 'LOAD TIME', stat: '<1s', x: 76 },
        { label: 'ARTICLES', stat: '40+', x: 192 },
        { label: 'LIGHTHOUSE', stat: '99', x: 314 },
        { label: 'INFRA COST', stat: '$0', x: 416 },
      ].map((m) => (
        <g key={m.label}>
          <text x={m.x} y="302" textAnchor="middle" fontFamily="monospace" fontSize="5.5" fill="#6899B4" letterSpacing="0.1em">{m.label}</text>
          <text x={m.x} y="334" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fill="#38BDF8" letterSpacing="-0.02em">{m.stat}</text>
        </g>
      ))}
    </svg>
  )
}

function RelaisVisual() {
  // Before/after ops split — deep indigo, purple accents
  const beforeSteps = [
    'Export intake CSV', 'Open spreadsheet', 'Copy to Notion',
    'Create CRM contact', 'Set up CRM deal', 'Draft welcome email',
    'Send email manually', 'Book kickoff call', 'Update checklist',
    'File internal report', 'Archive thread',
  ]
  const afterSteps = [
    { label: 'Typeform submission', human: false },
    { label: 'Create Notion workspace', human: false },
    { label: 'Pipedrive deal + contact', human: false },
    { label: 'Gmail sequence triggered', human: false },
    { label: 'Slack context brief sent', human: false },
    { label: 'Assign account lead', human: true },
    { label: 'Confirm kickoff date', human: true },
  ]

  return (
    <svg viewBox="0 0 480 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="360" fill="#060819" />

      {/* Faded background stat */}
      <text x="240" y="210" textAnchor="middle" fontFamily="Georgia, serif" fontSize="72" fontStyle="italic" fill="#A78BFA" fillOpacity="0.04" letterSpacing="-0.04em">3h→20m</text>

      {/* Center divider */}
      <line x1="240" y1="0" x2="240" y2="360" stroke="#A78BFA" strokeWidth="0.75" strokeOpacity="0.18" />

      {/* ── Left: Before ── */}
      <text x="20" y="38" fontFamily="monospace" fontSize="7.5" fill="#A78BFA" letterSpacing="0.15em" opacity="0.65">BEFORE</text>
      <text x="20" y="60" fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#DDD8F8" letterSpacing="-0.02em">~3 hours</text>
      <text x="20" y="76" fontFamily="monospace" fontSize="6" fill="#7A78B0" letterSpacing="0.05em">11 manual steps · error-prone</text>
      <line x1="20" y1="88" x2="228" y2="88" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.15" />
      {beforeSteps.map((step, i) => (
        <g key={i}>
          <rect x="20" y={100 + i * 22} width="9" height="9" rx="1.5" fill="#A78BFA" fillOpacity="0.08" stroke="#A78BFA" strokeWidth="0.75" strokeOpacity="0.2" />
          <text x="36" y={100 + i * 22 + 7} fontFamily="monospace" fontSize="6.5" fill="#7A78B0" letterSpacing="0.02em">{step}</text>
        </g>
      ))}

      {/* ── Right: After ── */}
      <text x="252" y="38" fontFamily="monospace" fontSize="7.5" fill="#A78BFA" letterSpacing="0.15em" opacity="0.95">AFTER</text>
      <text x="252" y="60" fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#A78BFA" letterSpacing="-0.02em">~20 min</text>
      <text x="252" y="76" fontFamily="monospace" fontSize="6" fill="#7A78B0" letterSpacing="0.05em">automated · zero misses · 6 months</text>
      <line x1="252" y1="88" x2="460" y2="88" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.2" />
      {afterSteps.map((step, i) => (
        <g key={i}>
          {!step.human && (
            <rect x="252" y={100 + i * 30 - 2} width="210" height="19" rx="2" fill="#A78BFA" fillOpacity="0.04" />
          )}
          <circle cx="264" cy={100 + i * 30 + 7} r="6" fill="#A78BFA" fillOpacity={step.human ? 0.1 : 0.22} stroke="#A78BFA" strokeWidth="0.75" strokeOpacity={step.human ? 0.3 : 0.65} />
          {!step.human ? (
            <path d={`M261 ${100 + i * 30 + 7} L263.5 ${100 + i * 30 + 9.5} L268 ${100 + i * 30 + 4.5}`} stroke="#A78BFA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <text x="264" y={100 + i * 30 + 11} textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#A78BFA" opacity="0.7">H</text>
          )}
          <text x="279" y={100 + i * 30 + 11} fontFamily="monospace" fontSize="6.5" fill={step.human ? '#7A78B0' : '#DDD8F8'} letterSpacing="0.02em">{step.label}</text>
        </g>
      ))}

      {/* Legend */}
      <circle cx="258" cy="316" r="5" fill="#A78BFA" fillOpacity="0.22" stroke="#A78BFA" strokeWidth="0.75" strokeOpacity="0.65" />
      <path d="M255 316 L257.5 318.5 L262 313.5" stroke="#A78BFA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <text x="270" y="320" fontFamily="monospace" fontSize="6" fill="#7A78B0" letterSpacing="0.04em">automated</text>
      <circle cx="344" cy="316" r="5" fill="#A78BFA" fillOpacity="0.1" stroke="#A78BFA" strokeWidth="0.75" strokeOpacity="0.3" />
      <text x="344" y="320" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#A78BFA" opacity="0.7">H</text>
      <text x="356" y="320" fontFamily="monospace" fontSize="6" fill="#7A78B0" letterSpacing="0.04em">human decision</text>
    </svg>
  )
}

function SchreiberVisual() {
  // Analytics dashboard — near-black, gold accents
  const gridLines = 5
  const chartX = 24
  const chartY = 254
  const chartW = 270
  const chartH = 120

  const pts = [
    [0, 0], [45, 12], [90, 28], [135, 52], [180, 80], [225, 106], [270, 118],
  ].map(([dx, dy]) => ({ x: chartX + dx, y: chartY - dy }))

  const pathD = pts.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ')
  const fillD = `${pathD} L${chartX + chartW},${chartY} L${chartX},${chartY} Z`

  const funnel = [
    { label: 'Ad impressions', w: 188, pct: '—' },
    { label: 'Clicks through', w: 156, pct: '79%' },
    { label: 'Engaged >30s', w: 112, pct: '54%' },
    { label: 'Booked call', w: 76, pct: '4.2%' },
  ]

  return (
    <svg viewBox="0 0 480 360" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="360" fill="#0C0B09" />

      {/* ── KPI cards ── */}
      {[
        { label: 'CONV. RATE', stat: '4.2%', x: 16 },
        { label: 'QUALIFIED LEADS', stat: '40', x: 168 },
        { label: 'DAYS TO RESULT', stat: '60', x: 308 },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={16} width={136} height={60} rx="3" fill="#1A1608" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.28" />
          <text x={m.x + 12} y={34} fontFamily="monospace" fontSize="5.5" fill="#9C9080" letterSpacing="0.1em">{m.label}</text>
          <text x={m.x + 12} y={63} fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#D4AF37" letterSpacing="-0.02em">{m.stat}</text>
        </g>
      ))}

      {/* ── Trend chart label ── */}
      <text x={chartX} y="110" fontFamily="monospace" fontSize="6" fill="#9C9080" letterSpacing="0.1em" opacity="0.7">CONVERSION TREND — 60 DAYS</text>

      {/* Grid lines */}
      {Array.from({ length: gridLines + 1 }).map((_, i) => (
        <line key={i} x1={chartX} y1={chartY - (i * chartH) / gridLines} x2={chartX + chartW} y2={chartY - (i * chartH) / gridLines} stroke="#D4AF37" strokeWidth="0.5" strokeOpacity={i === 0 ? 0.2 : 0.06} />
      ))}

      {/* Area + line */}
      <path d={fillD} fill="#D4AF37" fillOpacity="0.06" />
      <path d={pathD} stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === pts.length - 1 ? 5.5 : 2.5} fill="#D4AF37" opacity={i === pts.length - 1 ? 0.95 : 0.45} />
      ))}

      {/* Axis labels */}
      <text x={chartX} y={chartY + 16} fontFamily="monospace" fontSize="6" fill="#9C9080" opacity="0.6">Day 0</text>
      <text x={chartX + chartW} y={chartY + 16} textAnchor="end" fontFamily="monospace" fontSize="6" fill="#9C9080" opacity="0.6">Day 60</text>
      <text x={chartX + chartW} y={chartY - chartH - 8} textAnchor="end" fontFamily="monospace" fontSize="7" fill="#D4AF37" opacity="0.85" letterSpacing="0.04em">4.2% CVR</text>

      {/* ── Funnel (right side) ── */}
      <text x="330" y="110" fontFamily="monospace" fontSize="6" fill="#9C9080" letterSpacing="0.1em" opacity="0.7">SEARCH FUNNEL</text>
      {funnel.map((stage, i) => (
        <g key={i}>
          <rect x={480 - stage.w - 16} y={120 + i * 46} width={stage.w} height={30} rx="2" fill="#D4AF37" fillOpacity={0.03 + (funnel.length - i) * 0.025} stroke="#D4AF37" strokeWidth="0.75" strokeOpacity={0.1 + (funnel.length - i) * 0.06} />
          <text x={480 - stage.w - 8} y={120 + i * 46 + 19} fontFamily="monospace" fontSize="6.5" fill="#9C9080" letterSpacing="0.02em">{stage.label}</text>
          <text x="460" y={120 + i * 46 + 19} textAnchor="end" fontFamily="monospace" fontSize="7" fill="#D4AF37" opacity={0.4 + (funnel.length - i) * 0.15} letterSpacing="0.04em">{stage.pct}</text>
        </g>
      ))}
    </svg>
  )
}

/* ─── Map from slug to component ─── */
const visuals: Record<string, () => React.ReactElement> = {
  'vorwerk-digital':  VorwerkVisual,
  'basecamp-studio':  BasecampVisual,
  'wanderfurther':    WanderFurtherVisual,
  'relais-consulting': RelaisVisual,
  'schreiber-co':     SchreiberVisual,
}

interface ProjectVisualProps {
  slug: string
  className?: string
}

export function ProjectVisual({ slug, className }: ProjectVisualProps) {
  const Visual = visuals[slug]
  if (!Visual) return null
  return (
    <div className={cn('w-full h-full overflow-hidden', className)}>
      <Visual />
    </div>
  )
}

export function hasVisual(slug: string): boolean {
  return slug in visuals
}
