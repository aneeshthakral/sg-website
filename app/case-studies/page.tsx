// /case-studies — Case Studies
// No case study content exists in the dockets. Structure built with TODO placeholders.

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Case Studies — StoryGrid & Co.',
  description:
    'Before-and-after narrative transformations. Real results from real founders who built stories that drive pipeline, authority, and revenue.',
  openGraph: {
    title: 'Case Studies — StoryGrid & Co.',
    description:
      'Before-and-after narrative transformations. Real results from real founders who built stories that drive pipeline, authority, and revenue.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

const caseStudies = [
  { slot: 1 },
  { slot: 2 },
  { slot: 3 },
]

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        aria-label="Case studies overview"
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
            <SectionLabel>Case Studies</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: 'var(--color-heading)',
                lineHeight: 1.0,
                marginBottom: '24px',
              }}
            >
              Narrative Transformations
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
              Each engagement follows a clear arc: Problem, Strategy, Execution, Outcome. Before-and-after results from founders who built narrative as infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case study cards */}
      <section
        aria-label="Case study entries"
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
            {caseStudies.map((study, i) => (
              <ScrollReveal key={study.slot} delay={i * 0.08}>
                <article
                  aria-label={`Case study ${study.slot}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-elevated)',
                    borderLeft: '2px solid var(--color-blaze)',
                    padding: 'clamp(28px, 4vw, 48px)',
                  }}
                >
                  {/* TODO: Add case study — source from client docket */}

                  {/* Problem */}
                  <div style={{ marginBottom: '32px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-blaze)',
                        marginBottom: '12px',
                      }}
                    >
                      Problem
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '16px',
                        color: 'var(--color-body)',
                        lineHeight: 1.65,
                        maxWidth: '700px',
                      }}
                    >
                      {/* TODO: Add problem statement — source from client docket */}
                      Problem statement from client engagement.
                    </p>
                  </div>

                  {/* Strategy */}
                  <div style={{ marginBottom: '32px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-gold)',
                        marginBottom: '12px',
                      }}
                    >
                      Strategy
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '16px',
                        color: 'var(--color-body)',
                        lineHeight: 1.65,
                        maxWidth: '700px',
                      }}
                    >
                      {/* TODO: Add strategy description — source from client docket */}
                      Narrative strategy and approach.
                    </p>
                  </div>

                  {/* Execution */}
                  <div style={{ marginBottom: '32px' }}>
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
                      Execution
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '16px',
                        color: 'var(--color-body)',
                        lineHeight: 1.65,
                        maxWidth: '700px',
                      }}
                    >
                      {/* TODO: Add execution details — source from client docket */}
                      Deliverables, timeline, and execution details.
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--color-blaze)',
                        marginBottom: '12px',
                      }}
                    >
                      Outcome
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '16px',
                        color: 'var(--color-body)',
                        lineHeight: 1.65,
                        maxWidth: '700px',
                      }}
                    >
                      {/* TODO: Add outcome metrics — source from client docket */}
                      Measurable results and before-and-after metrics.
                    </p>
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
