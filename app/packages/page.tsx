// /packages — Offer Architecture & Pricing
// All copy from foundation docket section 5.7

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Packages — StoryGrid & Co.',
  description:
    'Three monthly retainers and two one-time engagements. Natural client journey from audit to full narrative system.',
  openGraph: {
    title: 'Packages — StoryGrid & Co.',
    description:
      'Three monthly retainers and two one-time engagements. Natural client journey from audit to full narrative system.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

const retainers = [
  {
    label: 'Tier 01',
    name: 'Narrative Architecture',
    price: '₹49,950',
    per: '/ mo',
    commitment: '3-Month Minimum',
    badge: null,
    description:
      'For early-stage founders who need a clear, ownable narrative before they scale content volume.',
    inclusions: [
      'Brand narrative document: core story, positioning, messaging pillars',
      'Founder voice extraction (2 deep-dive interviews)',
      'LinkedIn content system: 8 posts per month, ghostwritten in your voice',
      'Founder profile audit and full rewrite',
      'Monthly strategy call (60 minutes)',
      'Dedicated Slack channel, 48-hour response',
    ],
  },
  {
    label: 'Tier 02',
    name: 'Narrative Engine',
    price: '₹69,950',
    per: '/ mo',
    commitment: '3-Month Minimum',
    badge: 'Most Chosen',
    description:
      'For growth-stage founders building a content system that compounds into pipeline over time.',
    inclusions: [
      'Full narrative strategy and brand story framework',
      'LinkedIn content system: 16 posts per month (founder + company page)',
      'AI-augmented content production pipeline',
      'Weekly strategy calls (30 minutes)',
      'Founder brand development: LinkedIn plus long-form thought leadership',
      'One designed content format per month (carousel, infographic, or newsletter)',
      'Monthly performance report with reach and engagement data',
    ],
  },
  {
    label: 'Tier 03',
    name: 'Full Narrative System',
    price: '₹99,950',
    per: '/ mo',
    commitment: '6-Month Minimum',
    badge: null,
    description:
      'For growth-stage companies ready to own their narrative category across every channel they show up in.',
    inclusions: [
      'Full narrative audit and multi-channel rebuild',
      '24 posts per month across LinkedIn, Instagram, and long-form',
      'AI integration into existing marketing stack',
      'Dedicated narrative strategist, single point of contact',
      'Executive and founder brand programs (up to 2 founders)',
      'Campaign and launch narrative support',
      'Bi-weekly strategy sessions',
      'Quarterly narrative review and system evolution',
    ],
  },
]

const oneTime = [
  {
    name: 'Brand Narrative Sprint',
    price: '₹29,950',
    duration: '2-Week Intensive',
    description:
      'Core story, messaging pillars, content framework. Built for founders pre-launch, pre-fundraise, or mid-pivot. Entry point before committing to a retainer.',
  },
  {
    name: 'Brand Story Audit',
    price: '₹9,950',
    duration: '5-Day Written Report',
    description:
      'A standalone audit of current narrative, messaging gaps, and positioning. Applicable as credit toward any retainer. Lowest-friction way to start working together.',
  },
]

export default function PackagesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Packages and pricing overview"
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
            background: 'var(--gradient-blaze-fade)',
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
            <SectionLabel>Packages</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              Pricing
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
              Five-tier model: three monthly retainers and two one-time engagements. Natural client journey from low-friction audit to full narrative category ownership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section
        aria-label="Monthly retainer packages"
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
          <p
            style={{
              fontFamily: 'var(--font-family-condensed)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-caption)',
              marginBottom: '32px',
            }}
          >
            Monthly Retainers
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {retainers.map((tier, i) => (
              <ScrollReveal key={tier.label} delay={i * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: tier.badge ? '2px solid var(--color-blaze)' : '1px solid var(--color-elevated)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  {tier.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '24px',
                        transform: 'translateY(-50%)',
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-deep)',
                        background: 'var(--color-blaze)',
                        padding: '4px 12px',
                      }}
                    >
                      {tier.badge}
                    </span>
                  )}

                  <span
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-caption)',
                      marginBottom: '8px',
                    }}
                  >
                    {tier.label}
                  </span>

                  <h2
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 'var(--text-card)',
                      color: 'var(--color-heading)',
                      lineHeight: 1.15,
                      marginBottom: '12px',
                    }}
                  >
                    {tier.name}
                  </h2>

                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '32px',
                        color: 'var(--color-heading)',
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '14px',
                        color: 'var(--color-caption)',
                        marginLeft: '4px',
                      }}
                    >
                      {tier.per}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-caption)',
                      marginBottom: '16px',
                    }}
                  >
                    {tier.commitment}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: 'var(--color-body)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {tier.description}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: 1,
                    }}
                  >
                    {tier.inclusions.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <span style={{ color: 'var(--color-blaze)', fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>
                          &#x2192;
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-family-body)',
                            fontSize: '13px',
                            color: 'var(--color-caption)',
                            lineHeight: 1.55,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Engagements */}
      <section
        aria-label="One-time engagement packages"
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
          <p
            style={{
              fontFamily: 'var(--font-family-condensed)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-gold)',
              marginBottom: '32px',
            }}
          >
            One-Time Engagements
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {oneTime.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.08}>
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-elevated)',
                    padding: '32px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-gold)',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    One-Time
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 'var(--text-card)',
                      color: 'var(--color-heading)',
                      lineHeight: 1.15,
                      marginBottom: '12px',
                    }}
                  >
                    {item.name}
                  </h3>

                  <div style={{ marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '28px',
                        color: 'var(--color-heading)',
                      }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-caption)',
                      marginBottom: '16px',
                    }}
                  >
                    {item.duration}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: 'var(--color-body)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client journey */}
      <section
        aria-label="Client journey and contact"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: '0 0 clamp(64px, 8vw, 96px)',
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
            <div
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-elevated)',
                padding: '24px 32px',
                marginBottom: '48px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-caption)',
                  marginBottom: '12px',
                }}
              >
                Natural Client Journey
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '15px',
                  color: 'var(--color-body)',
                  lineHeight: 1.65,
                }}
              >
                Brand Story Audit → Brand Narrative Sprint → Narrative Architecture → Narrative Engine → Full Narrative System
              </p>
            </div>
          </ScrollReveal>

          {/* CTA to contact */}
          <ScrollReveal>
            <Button variant="primary" size="lg" href="/contact">
              Talk to Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
