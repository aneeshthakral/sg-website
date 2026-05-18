'use client'

// Problem Frame — 2-3 sentences using exact problem framing from foundation docket
// Source: Section 3.1 Market Landscape (page 7 of docket)

import { motion, useReducedMotion } from 'framer-motion'

export default function ProblemFrame() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="The problem — content saturation and narrative gaps"
      style={{
        backgroundColor: 'var(--color-deep)',
        position: 'relative',
      }}
    >
      {/* Blaze fade gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-blaze-fade)',
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
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
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
            The Problem
          </p>

          {/* Problem framing — verbatim from docket section 3.1 */}
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              color: 'var(--color-heading)',
              lineHeight: 1.55,
              maxWidth: '780px',
              marginBottom: '24px',
            }}
          >
            Content saturation is at an all-time high. AI tools have made content production trivially easy. The average B2B company is drowning in generic, undifferentiated content.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'clamp(17px, 2vw, 20px)',
              color: 'var(--color-body)',
              lineHeight: 1.65,
              maxWidth: '700px',
            }}
          >
            Founders and senior leaders increasingly lose deals not because of product weakness but because of perception weakness. The narrative gap shows up in pipeline, talent acquisition, fundraising, and partnership development simultaneously.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
