'use client'

// Showreel placeholder — 16:9 container, Cool Smoke palette, JetBrains Mono label
// Colors from docket: Cool Smoke var(--color-smoke), Smoke Muted var(--color-smoke-muted)

import { motion, useReducedMotion } from 'framer-motion'

export default function ShowreelPlaceholder() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Showreel — coming soon"
      style={{
        backgroundColor: 'var(--color-deep)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(80px, 10vw, 120px) 24px',
        }}
      >
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            paddingTop: '56.25%',
            borderRadius: '4px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, var(--color-smoke-muted) 0%, var(--color-elevated) 40%, var(--color-smoke-muted) 100%)',
            border: '1px solid rgba(74, 96, 128, 0.25)',
            boxShadow: '0 0 80px rgba(74, 96, 128, 0.06), inset 0 1px 0 rgba(74, 96, 128, 0.1)',
          }}
        >
          {/* Inner atmospheric texture */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 50% 50%, rgba(74, 96, 128, 0.08), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Centered label */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            {/* Play icon hint */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '1px solid rgba(74, 96, 128, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4px',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-smoke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 3 20 12 6 21 6 3" fill="rgba(74, 96, 128, 0.2)" stroke="var(--color-smoke)" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-smoke)',
              }}
            >
              Showreel -- Coming Soon
            </p>
          </div>

          {/* Corner accents */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '24px',
              height: '24px',
              borderTop: '1px solid rgba(74, 96, 128, 0.2)',
              borderLeft: '1px solid rgba(74, 96, 128, 0.2)',
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '24px',
              height: '24px',
              borderBottom: '1px solid rgba(74, 96, 128, 0.2)',
              borderRight: '1px solid rgba(74, 96, 128, 0.2)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
