// /testimonials — Social proof sub-page
// Dark hero, 6 placeholder testimonial cards, stats bar (3 StatCounters), CTABanner

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StatCounter from '@/components/ui/StatCounter'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Results & Testimonials | StoryGrid & Co.',
  description:
    'Client results and social proof from enterprise founders and growth-stage companies. Real outcomes from narrative-led strategy.',
}

const placeholderTestimonials = [
  {
    id: 'T1',
    company: 'Enterprise SaaS Client',
    role: 'VP of Marketing',
    text: 'Real results from real campaigns. A testimonial from an enterprise client will appear here before launch.',
  },
  {
    id: 'T2',
    company: 'Series B Startup',
    role: 'Founder and CEO',
    text: 'The proof is in the pipeline. A founder story about narrative impact will be featured here.',
  },
  {
    id: 'T3',
    company: 'B2B Services Firm',
    role: 'Chief Revenue Officer',
    text: 'Sales conversations changed immediately. Client attribution data and results will appear here.',
  },
  {
    id: 'T4',
    company: 'Growth-Stage Tech Company',
    role: 'Head of Content',
    text: 'Our content finally had a spine. A detailed client case study will be published here before launch.',
  },
  {
    id: 'T5',
    company: 'Professional Services Firm',
    role: 'Managing Director',
    text: 'Investors responded differently after we rebuilt the story. Case study data will be featured here.',
  },
  {
    id: 'T6',
    company: 'Pre-Seed Startup',
    role: 'Co-founder',
    text: 'We closed our seed round two months after completing the narrative sprint. Full case study coming.',
  },
]

const stats = [
  {
    value: '$5M+',
    label: 'in closed enterprise deals attributed to narrative-led positioning',
  },
  {
    value: '8+',
    label: 'years building B2B narratives across competitive markets',
  },
  {
    value: '3x',
    label: 'average content engagement lift for narrative-led brands',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#080507',
          padding: 'clamp(120px, 14vw, 180px) 0 clamp(80px, 10vw, 120px)',
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
            <SectionLabel color="#E8451A">Client Results</SectionLabel>
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(52px, 9vw, 96px)',
                color: '#F2EAE4',
                lineHeight: 1.0,
                marginBottom: '24px',
                marginTop: '16px',
              }}
            >
              Numbers That Mean Something
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(17px, 2.2vw, 20px)',
                color: '#C4A08A',
                lineHeight: 1.65,
                maxWidth: '600px',
              }}
            >
              Every framework here has been tested inside real sales rooms and real campaigns.
              Client stories and attributed results are being compiled before launch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          backgroundColor: '#080507',
          padding: '0 0 clamp(80px, 10vw, 120px)',
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '48px',
              borderTop: '1px solid #1E181C',
              paddingTop: '64px',
            }}
          >
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.value} delay={i * 0.1}>
                <StatCounter value={stat.value} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial grid — 6 placeholder cards */}
      <section
        style={{
          backgroundColor: '#080507',
          padding: 'clamp(80px, 10vw, 120px) 0',
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
            <SectionLabel color="#887060">Client Stories</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                color: '#F2EAE4',
                lineHeight: 1.05,
                marginBottom: '56px',
              }}
            >
              In Their Own Words
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {placeholderTestimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.08}>
                <div
                  style={{
                    backgroundColor: '#141012',
                    border: '1px solid #1E181C',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    height: '100%',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: '#887060',
                      lineHeight: 1.75,
                      fontStyle: 'italic',
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    style={{
                      borderTop: '1px solid #1E181C',
                      paddingTop: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#C4A08A',
                        marginBottom: '4px',
                      }}
                    >
                      {t.role}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#887060',
                      }}
                    >
                      {t.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Placeholder note */}
          <ScrollReveal delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: '14px',
                color: '#685040',
                lineHeight: 1.6,
                textAlign: 'center',
                marginTop: '48px',
                maxWidth: '480px',
                margin: '48px auto 0',
              }}
            >
              Client case studies and attributed testimonials will be published before launch.
              These placeholders show the structure and format of what is coming.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
