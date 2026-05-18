// /resources — Frameworks, Templates, and Guides
// All content sourced from foundation docket appendices A-D
// Voice Interview Prompt Guide referenced but not in docket — TODO placeholder

import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Resources — StoryGrid & Co.',
  description:
    'Frameworks, templates, and guides for building narrative-led growth. ICP interviews, outreach templates, discovery call frameworks, and proposal structures.',
  openGraph: {
    title: 'Resources — StoryGrid & Co.',
    description:
      'Frameworks, templates, and guides for building narrative-led growth. ICP interviews, outreach templates, discovery call frameworks, and proposal structures.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

const resources = [
  {
    category: 'Framework',
    name: 'ICP Interview Question Bank',
    source: 'Appendix A',
    description:
      '15 structured questions across three categories: understanding current state, understanding pain, and understanding buying behavior. Built to qualify and diagnose narrative gaps in discovery conversations.',
  },
  {
    category: 'Template',
    name: 'Outreach Templates',
    source: 'Appendix B',
    description:
      'Connection request templates (150 chars max) and a three-step DM sequence. Three formats: observation-based, content-based, and mutual connection. Designed for LinkedIn-first outreach to growth-stage founders.',
  },
  {
    category: 'Framework',
    name: 'Discovery Call Framework',
    source: 'Appendix C',
    description:
      '25-30 minute structured call: Opening (2 min), Discovery (12 min), Insight Delivery (8 min), Fit Assessment (5 min), Close (3 min). Connects directly to the Narrative Architecture framework.',
  },
  {
    category: 'Template',
    name: 'Proposal One-Pager Structure',
    source: 'Appendix D',
    description:
      'Single-page PDF structure: The Challenge, The Approach, What You Get, Expected Outcomes, Investment, Next Step. StoryGrid & Co. brand design with dark background and Blaze accents.',
  },
  {
    category: 'Guide',
    name: 'Voice Interview Prompt Guide',
    source: null,
    description:
      '{/* TODO: Add Voice Interview Prompt Guide content — source from client docket */}',
  },
]

const categories = ['All', 'Framework', 'Template', 'Guide']

export default function ResourcesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Resources overview"
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
            <SectionLabel>Resources</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              Tools for Founders
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
              Frameworks, templates, and guides pulled directly from our operational playbook. The same tools we use with clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filter pills */}
      <section
        aria-label="Filter resources by category"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: '0 0 clamp(32px, 4vw, 48px)',
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
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: cat === 'All' ? 'var(--color-deep)' : 'var(--color-blaze)',
                    backgroundColor: cat === 'All' ? 'var(--color-blaze)' : 'transparent',
                    border: '1px solid rgba(232, 69, 26, 0.25)',
                    padding: '6px 14px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Resource cards */}
      <section
        aria-label="Frameworks, templates, and guides"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: 'clamp(32px, 4vw, 48px) 0 clamp(64px, 8vw, 96px)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.name} delay={i * 0.08}>
                <article
                  aria-label={`${resource.category} — ${resource.name}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-elevated)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Category + Source */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-blaze)',
                        border: '1px solid rgba(232, 69, 26, 0.25)',
                        padding: '3px 8px',
                        borderRadius: '2px',
                      }}
                    >
                      {resource.category}
                    </span>
                    {resource.source && (
                      <span
                        style={{
                          fontFamily: 'var(--font-family-condensed)',
                          fontSize: '10px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--color-caption)',
                        }}
                      >
                        {resource.source}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 'var(--text-card)',
                      color: 'var(--color-heading)',
                      lineHeight: 1.15,
                      marginBottom: '12px',
                    }}
                  >
                    {resource.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: resource.source ? 'var(--color-body)' : 'var(--color-caption)',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {resource.source
                      ? resource.description
                      : 'Content for this guide has not yet been added to the docket.'}
                  </p>

                  {/* Access link */}
                  <div style={{ marginTop: '20px' }}>
                    {resource.source ? (
                      <Link
                        href="/contact"
                        style={{
                          fontFamily: 'var(--font-family-condensed)',
                          fontSize: '13px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-blaze)',
                          textDecoration: 'none',
                        }}
                      >
                        Request Access →
                      </Link>
                    ) : (
                      <span
                        style={{
                          fontFamily: 'var(--font-family-condensed)',
                          fontSize: '13px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-caption)',
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to contact */}
      <section
        aria-label="Contact StoryGrid & Co."
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
            <Button variant="primary" size="lg" href="/contact">
              Talk to Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
