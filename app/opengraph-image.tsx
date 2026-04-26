import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Laurenz M. — Web Builder & Automation Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          backgroundColor: '#F5F2EC',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Grid lines background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            opacity: 0.04,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${i * 12.5}%`,
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: '#0C0C0B',
              }}
            />
          ))}
        </div>

        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6B6862',
            margin: '0 0 24px',
          }}
        >
          Portfolio · 2025
        </p>

        <h1
          style={{
            fontSize: '96px',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: '#0C0C0B',
            margin: '0 0 24px',
          }}
        >
          Laurenz M.
        </h1>

        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(12,12,11,0.15)',
            margin: '0 0 24px',
          }}
        />

        <p
          style={{
            fontSize: '22px',
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 300,
            color: 'rgba(12,12,11,0.7)',
            margin: 0,
          }}
        >
          Web Builder · Automation Architect · Germany
        </p>
      </div>
    ),
    { ...size }
  )
}
