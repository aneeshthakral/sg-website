'use client'

// Hero — brand statement + tagline + primary CTA
// Copy sourced from foundation docket: brand philosophy + positioning

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Hero — AI-First Narrative Strategy Firm"
      style={{
        backgroundColor: 'var(--color-deep)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dual Temperature gradient — hero only */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-dual-temperature)',
          pointerEvents: 'none',
        }}
      />
      {/* Infrared wash overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-infrared-wash)',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(80px, 12vw, 160px) 24px clamp(64px, 8vw, 120px)',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-family-condensed)',
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-blaze)',
            marginBottom: '24px',
          }}
        >
          AI-First Narrative Strategy Firm
        </motion.p>

        {/* Tagline — verbatim, no changes */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'clamp(3rem, 7vw + 0.5rem, 5.5rem)',
            color: 'var(--color-heading)',
            lineHeight: 1.0,
            maxWidth: '800px',
            marginBottom: '28px',
          }}
        >
          Build the story that builds your pipeline.
        </motion.h1>

        {/* Supporting line — from docket brand philosophy */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            color: 'var(--color-body)',
            lineHeight: 1.65,
            maxWidth: '560px',
            marginBottom: '40px',
          }}
        >
          Narrative is infrastructure. The layer between a founder's vision and their market's perception.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            aria-label="Talk to Us — contact StoryGrid & Co."
            data-interactive
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-family-condensed)',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-blaze)',
              border: '1px solid var(--color-blaze)',
              padding: '16px 40px',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'background 200ms ease, color 200ms ease',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-blaze)'
              e.currentTarget.style.color = 'var(--color-deep)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-blaze)'
            }}
          >
            Talk to Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
