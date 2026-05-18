// /portfolio — Portfolio items
// No portfolio items exist in the dockets. Structure built with TODO placeholders.

import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Portfolio — StoryGrid & Co.',
  description:
    'Before-and-after metrics, case studies, and narrative transformations built by StoryGrid & Co. for growth-stage companies.',
  openGraph: {
    title: 'Portfolio — StoryGrid & Co.',
    description:
      'Before-and-after metrics, case studies, and narrative transformations built by StoryGrid & Co. for growth-stage companies.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

export default function PortfolioPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Portfolio overview"
        style={{
          backgroundColor: 'var(--color-deep)',
          padding: 'clamp(120px, 14vw, 180px) 0 clamp(64px, 8vw, 96px)',
          position: 'relative',
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
            <SectionLabel>Portfolio</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              Proof of Work
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(17px, 2.2vw, 20px)',
                color: 'var(--color-body)',
                lineHeight: 1.65,
                maxWidth: '560px',
              }}
            >
              Before-and-after metrics, case studies, and narrative transformations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio grid */}
      <section
        aria-label="Portfolio project cards"
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[1, 2, 3].map((slot) => (
              <ScrollReveal key={slot} delay={(slot - 1) * 0.08}>
                <article
                  aria-label={`Portfolio project ${slot}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-elevated)',
                    padding: '32px',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {/* TODO: Add portfolio item — source from client files */}
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
                    {/* TODO: Project type — source from client files */}
                    Project Type
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 'var(--text-card)',
                      color: 'var(--color-heading)',
                      lineHeight: 1.15,
                      marginBottom: '12px',
                    }}
                  >
                    {/* TODO: Project name — source from client files */}
                    Project Name
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: 'var(--color-caption)',
                      lineHeight: 1.55,
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    {/* TODO: One-line context — source from client files */}
                    One-line project context.
                  </p>
                  <Link
                    href="/case-studies"
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
                    View Case Study →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to case studies */}
      <section
        aria-label="View case studies"
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
            <Button variant="primary" size="lg" href="/case-studies">
              View Case Studies
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
