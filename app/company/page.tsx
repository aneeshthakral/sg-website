// /company — Mission, Philosophy, Founder
// Copy from foundation docket sections 2.1, 2.4

import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Company — StoryGrid & Co.',
  description:
    'AI-First Narrative Strategy Firm. StoryGrid & Co. treats storytelling not as a marketing tactic but as a foundational business system.',
  openGraph: {
    title: 'Company — StoryGrid & Co.',
    description:
      'AI-First Narrative Strategy Firm. StoryGrid & Co. treats storytelling not as a marketing tactic but as a foundational business system.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

const stats = [
  { value: '8+', label: 'Years Enterprise B2B Sales' },
  { value: '$6M+', label: 'Closed Revenue' },
  { value: '50+', label: 'Founders Served' },
  { value: 'AI-First', label: 'Practitioner & Builder' },
]

export default function CompanyPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Company overview"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: 'clamp(120px, 14vw, 180px) 0 clamp(64px, 8vw, 96px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gradient-dual-temperature)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gradient-infrared-wash)',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <ScrollReveal>
            <SectionLabel>Company</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              The Story Behind the Firm
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(17px, 2.2vw, 20px)',
                color: 'var(--color-body)',
                lineHeight: 1.65,
                maxWidth: '600px',
              }}
            >
              AI-First Narrative Strategy Firm. StoryGrid & Co. treats storytelling not as a marketing tactic but as a foundational business system. The layer between a founder&#39;s vision and their market&#39;s perception.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section
        aria-label="Brand philosophy — Controlled Combustion creative direction"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: 'clamp(64px, 8vw, 96px) 0',
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
            <p
              style={{
                fontFamily: 'var(--font-family-condensed)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-caption)',
                marginBottom: '16px',
              }}
            >
              Brand Philosophy
            </p>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'var(--color-body)',
                lineHeight: 1.65,
                maxWidth: '700px',
                marginBottom: '24px',
              }}
            >
              The brand operates under the creative direction of "Controlled Combustion." Warmth, depth, and sustained energy rather than loud, singular bursts.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: '16px',
                color: 'var(--color-caption)',
                lineHeight: 1.65,
                maxWidth: '700px',
              }}
            >
              Strategic over tactical. Creative over formulaic. Vibrant over muted. Premium over accessible. AI-forward over AI-skeptical. Precise over verbose.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder */}
      <section
        aria-label="Founder — Aneesh Thakral, 8+ years enterprise B2B sales"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: 'clamp(64px, 8vw, 96px) 0',
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
            <SectionLabel color="var(--color-gold)">Founder</SectionLabel>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(200px, 360px) 1fr',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'start',
            }}
            className="company-founder-grid"
          >
            <style>{`
              @media (max-width: 768px) {
                .company-founder-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>

            {/* Founder image */}
            <ScrollReveal>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  borderRadius: 0,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Aneesh Thakral, Founder and Chief Storyteller of StoryGrid & Co. 8+ years enterprise B2B sales, $6M+ closed revenue"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                  style={{ objectFit: 'cover', borderRadius: 0 }}
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={0.1}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    color: 'var(--color-heading)',
                    lineHeight: 1.05,
                    marginBottom: '4px',
                  }}
                >
                  Aneesh Thakral
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-gold)',
                    marginBottom: '28px',
                  }}
                >
                  Founder & Chief Storyteller
                </p>

                {/* Stats */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '24px',
                    marginBottom: '32px',
                  }}
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-display)',
                          fontSize: '28px',
                          color: 'var(--color-heading)',
                          display: 'block',
                          lineHeight: 1.1,
                          marginBottom: '4px',
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-family-body)',
                          fontSize: '12px',
                          color: 'var(--color-caption)',
                          lineHeight: 1.4,
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Origin story from docket section 2.4 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: 'var(--color-body)',
                      lineHeight: 1.75,
                    }}
                  >
                    Aneesh Thakral is not a marketer who learned sales. He is a sales professional who understood, through 8+ years of enterprise selling and $6M+ in closed revenue, that narrative is the invisible infrastructure behind every deal.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: 'var(--color-body)',
                      lineHeight: 1.75,
                    }}
                  >
                    Even as a student, he gravitated toward the mechanics of persuasion: how words land, why certain pitches close, what makes a story stick. That instinct sharpened in B2B sales. Crafting proposals, presenting IT solutions to foreign markets, learning that setting the narrative right determined outcomes more than features or pricing ever could.
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: 'var(--color-body)',
                      lineHeight: 1.75,
                    }}
                  >
                    When AI entered the picture, the convergence of his two core fascinations became StoryGrid & Co.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA to services */}
      <section
        aria-label="View services"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: '0 0 clamp(80px, 10vw, 120px)',
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
            <Button variant="primary" size="lg" href="/services">
              View Services
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
