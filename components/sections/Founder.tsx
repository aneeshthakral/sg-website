'use client'

// Section 7 — Founder (CREAM / light break 2)
// Background: var(--color-light-card) | Gradient: none | Grain: none
// Image: blur-in entrance (filter blur(8px) to blur(0px) + opacity)
// LINKEDIN_PROFILE_URL — update before launch

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import ScrollReveal from '@/components/ui/ScrollReveal'

const LINKEDIN_PROFILE_URL = 'https://linkedin.com/in/aneeshthakral'

export default function Founder({ asPageTitle = false }: { asPageTitle?: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  const imageVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: -40, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: 'easeOut' as const },
        },
      }

  return (
    <section
      id="about"
      aria-label="Founder — Aneesh Thakral, 8+ years enterprise B2B sales"
      style={{
        backgroundColor: 'var(--color-light-card)',
        padding: 'clamp(80px, 10vw, 120px) 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <ScrollReveal>
          <SectionLabel color="var(--color-caption-light)">The Founder</SectionLabel>
          {asPageTitle ? (
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'var(--text-section)',
                color: 'var(--color-heading-light)',
                lineHeight: 1.05,
                marginBottom: '64px',
                textAlign: 'left',
              }}
            >
              Who Built This
            </h1>
          ) : (
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'var(--text-section)',
                color: 'var(--color-heading-light)',
                lineHeight: 1.05,
                marginBottom: '64px',
                textAlign: 'left',
              }}
            >
              Who Built This
            </h2>
          )}
        </ScrollReveal>

        {/* Two-column layout */}
        <style>{`
          @media (max-width: 768px) {
            #founder-grid { grid-template-columns: 1fr !important; }
            #founder-image-col { justify-content: center; }
          }
        `}</style>
        <div
          id="founder-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left — Founder image with blur entrance */}
          <motion.div
            id="founder-image-col"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '280px', height: '340px', flexShrink: 0, borderRadius: 0, overflow: 'hidden' }}>
              <Image
                src="/images/founder.jpg"
                alt="Aneesh Thakral, Founder and Chief Storyteller of StoryGrid & Co. 8+ years enterprise B2B sales, $6M+ closed revenue"
                fill={true}
                sizes="280px"
                style={{ objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
          </motion.div>

          {/* Right — Bio */}
          <ScrollReveal delay={0.15}>
            <div style={{ minWidth: 0 }}>
              {asPageTitle ? (
                <h2
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--color-heading-light)',
                    lineHeight: 1.05,
                    marginTop: '16px',
                    marginBottom: '4px',
                  }}
                >
                  Aneesh Thakral
                </h2>
              ) : (
                <h3
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--color-heading-light)',
                    lineHeight: 1.05,
                    marginTop: '16px',
                    marginBottom: '4px',
                  }}
                >
                  Aneesh Thakral
                </h3>
              )}

              <p
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-caption-light)',
                  marginBottom: '28px',
                }}
              >
                Founder, StoryGrid & Co.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '17px',
                    color: 'var(--color-body-light)',
                    lineHeight: 1.85,
                  }}
                >
                  I spent eight years closing enterprise deals across some of the most
                  competitive B2B categories. I watched great products lose to better
                  stories, and average products win because someone took the time to
                  build a narrative that stuck.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '17px',
                    color: 'var(--color-body-light)',
                    lineHeight: 1.85,
                  }}
                >
                  StoryGrid & Co. is what I wish had existed when I was in those rooms.
                  A firm that treats narrative as infrastructure, not decoration, and that
                  uses AI as an accelerant rather than a replacement for genuine thinking.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '17px',
                    color: 'var(--color-body-light)',
                    lineHeight: 1.85,
                  }}
                >
                  If you&apos;re building something worth believing in, I want to help you
                  tell it right.
                </p>
              </div>

              {/* LinkedIn CTA */}
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Aneesh Thakral on LinkedIn"
                data-interactive
                style={{
                  display: 'inline-block',
                  marginTop: '32px',
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-blaze)',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--color-blaze)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }}
              >
                Follow the journey on LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
