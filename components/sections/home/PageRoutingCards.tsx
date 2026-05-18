'use client'

// Page Routing Cards — one card per major page
// Descriptions sourced from docket where available

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const pages = [
  {
    name: 'Services',
    href: '/services',
    description:
      'Narrative architecture, content systems, and ongoing strategic execution for growth-stage companies.',
  },
  {
    name: 'Packages',
    href: '/packages',
    description:
      'Three monthly retainers and two one-time engagements. Natural client journey from audit to full narrative system.',
  },
  {
    name: 'Company',
    href: '/company',
    description:
      'AI-first narrative strategy firm at the intersection of AI-augmented content production and founder-led narrative architecture.',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    /* TODO: Insert portfolio description — source from client docket */
    description:
      'Proof of work. Before-and-after metrics. Case studies and narrative transformations.',
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    /* TODO: Insert case study description — source from client docket */
    description:
      'Real results from narrative-led strategy across growth-stage B2B companies.',
  },
  {
    name: 'Resources',
    href: '/resources',
    /* TODO: Insert resources description — source from client docket */
    description:
      'Frameworks, guides, and tools for building narrative-led growth.',
  },
]

export default function PageRoutingCards() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Explore StoryGrid & Co. pages"
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
          Explore
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'var(--text-section)',
            color: 'var(--color-heading)',
            lineHeight: 1.05,
            marginBottom: '48px',
          }}
        >
          Where to Go Next
        </h2>

        {/* Card grid — 3 across desktop, stacked mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {pages.map((page, i) => (
            <motion.div
              key={page.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={page.href}
                aria-label={`Go to ${page.name}`}
                data-interactive
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-elevated)',
                  padding: '28px',
                  minHeight: '180px',
                  textDecoration: 'none',
                  transition: 'border-color 200ms ease, transform 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-blaze)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-elevated)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'var(--text-card)',
                    color: 'var(--color-heading)',
                    lineHeight: 1.15,
                    marginBottom: '12px',
                  }}
                >
                  {page.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '14px',
                    color: 'var(--color-caption)',
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: '20px',
                  }}
                >
                  {page.description}
                </p>

                <span
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-blaze)',
                  }}
                >
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
