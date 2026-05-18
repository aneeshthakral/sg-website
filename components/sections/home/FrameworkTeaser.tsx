'use client'

// Framework Teaser — three blocks: Architecture, Engine, Distribution
// Copy sourced verbatim from docket section 2.2 Service Architecture (page 5)

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const frameworks = [
  {
    num: '01',
    title: 'Architecture',
    description:
      'Brand positioning audit, founder voice extraction, messaging framework, ICP-aligned narrative strategy, competitive positioning document.',
  },
  {
    num: '02',
    title: 'Engine',
    description:
      'Purpose-built content systems that compound. Not a content calendar. A narrative machine that runs consistently without burning you out.',
  },
  {
    num: '03',
    title: 'Distribution',
    description:
      'Strategy plus hands-on execution. We write, refine, and publish. You stay in the conversation. Your story compounds every week.',
  },
]

export default function FrameworkTeaser() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Service framework — three-tier value progression"
      style={{
        backgroundColor: 'var(--color-deep)',
        position: 'relative',
      }}
    >
      {/* Cool atmosphere gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-cool-atmosphere)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(80px, 10vw, 120px) 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: 'var(--font-family-condensed)',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-blaze)',
            marginBottom: '24px',
          }}
        >
          The Framework
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'var(--text-section)',
            color: 'var(--color-heading)',
            lineHeight: 1.05,
            marginBottom: '56px',
          }}
        >
          Three Tiers. Clear Value Progression.
        </h2>

        {/* Three blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {frameworks.map((fw, i) => (
            <motion.div
              key={fw.num}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-elevated)',
                borderLeft: '2px solid var(--color-blaze)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tier number */}
              <span
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '48px',
                  color: 'rgba(232, 69, 26, 0.15)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {fw.num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'var(--text-card)',
                  color: 'var(--color-heading)',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                }}
              >
                {fw.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '15px',
                  color: 'var(--color-body)',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                  flex: 1,
                }}
              >
                {fw.description}
              </p>

              <Link
                href="/services"
                aria-label={`Explore ${fw.title} services`}
                data-interactive
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-blaze)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-blaze-glow)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-blaze)'
                }}
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
