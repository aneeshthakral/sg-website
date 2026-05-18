// /services — Service Architecture
// All copy from foundation docket section 2.2 Service Architecture

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services — StoryGrid & Co.',
  description:
    'Narrative architecture, content systems, and ongoing strategic execution. Three-tier service model with clear value progression.',
  openGraph: {
    title: 'Services — StoryGrid & Co.',
    description:
      'Narrative architecture, content systems, and ongoing strategic execution. Three-tier service model with clear value progression.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

const services = [
  {
    tier: '01',
    category: 'Architecture',
    name: 'Narrative Architecture',
    scope:
      'Brand positioning audit, founder voice extraction (2x 60-min interviews), messaging framework, ICP-aligned narrative strategy, competitive positioning document.',
    deliverables: [
      'Positioning Document',
      'Voice & Tone Guide',
      'Competitive Narrative Map',
      'Story Architecture Blueprint',
    ],
    who: 'For early-stage founders who need a clear, ownable narrative before they scale content volume.',
  },
  {
    tier: '02',
    category: 'Engine',
    name: 'Content & Distribution Systems',
    scope:
      'Purpose-built content systems that compound. Not a content calendar. A narrative machine that runs consistently without burning you out.',
    deliverables: [
      'Content System Design',
      'Channel Strategy',
      'Templatized Frameworks',
      'AI Workflow Integration',
    ],
    who: 'For growth-stage founders building a content system that compounds into pipeline over time.',
  },
  {
    tier: '03',
    category: 'Distribution',
    name: 'Ongoing Strategic Execution',
    scope:
      'Strategy plus hands-on execution. We write, refine, and publish. You stay in the conversation. Your story compounds every week.',
    deliverables: [
      'Weekly Content Production',
      'Narrative Review Cadence',
      'Founder Coaching',
      'Story Performance Reporting',
    ],
    who: 'For growth-stage companies ready to own their narrative category across every channel they show up in.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Services overview"
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
            background: 'var(--gradient-cool-atmosphere)',
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
            <SectionLabel>Services</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              What We Build
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
              StoryGrid & Co. operates a three-tier service model with clear value progression.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service tiers */}
      <section
        aria-label="Three-tier service architecture"
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {services.map((service, i) => (
              <ScrollReveal key={service.tier} delay={i * 0.08}>
                <article
                  aria-label={`Tier ${service.tier} — ${service.name}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-elevated)',
                    borderLeft: '2px solid var(--color-blaze)',
                    padding: 'clamp(28px, 4vw, 48px)',
                  }}
                >
                  {/* Tier + Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '48px',
                        color: 'rgba(232, 69, 26, 0.15)',
                        lineHeight: 1,
                      }}
                    >
                      {service.tier}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-caption)',
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 'var(--text-card)',
                      color: 'var(--color-heading)',
                      lineHeight: 1.15,
                      marginBottom: '16px',
                    }}
                  >
                    {service.name}
                  </h2>

                  {/* Scope */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: 'var(--color-body)',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                      maxWidth: '700px',
                    }}
                  >
                    {service.scope}
                  </p>

                  {/* Deliverables */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px',
                    }}
                  >
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        style={{
                          fontFamily: 'var(--font-family-condensed)',
                          fontSize: '11px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-blaze)',
                          border: '1px solid rgba(232, 69, 26, 0.25)',
                          padding: '4px 10px',
                          borderRadius: '2px',
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Who it serves */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: 'var(--color-caption)',
                      lineHeight: 1.55,
                    }}
                  >
                    {service.who}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section
        aria-label="Service differentiation and compounding value"
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
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'var(--color-body)',
                lineHeight: 1.65,
                maxWidth: '700px',
                marginBottom: '16px',
              }}
            >
              This architecture allows clients to enter at strategy-only (Tier 01) and expand into execution (Tier 02-03), creating natural upsell paths.
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
              Narrative, when architected as a system rather than produced as content, compounds over time, building authority, trust, and pipeline simultaneously.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA to packages */}
      <section
        aria-label="View packages"
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
            <Button variant="primary" size="lg" href="/packages">
              View Packages
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
