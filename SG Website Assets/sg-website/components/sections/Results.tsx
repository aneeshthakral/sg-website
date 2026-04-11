// Section 5 — Results
// Background: dark (#080507) | Gradient: infrared-wash

import SectionLabel from '@/components/ui/SectionLabel'
import StatCounter from '@/components/ui/StatCounter'
import Tag from '@/components/ui/Tag'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const stats = [
  {
    value: '$5M+',
    label: 'in closed enterprise deals attributed to narrative-led positioning',
  },
  {
    value: '8+',
    label: 'years building B2B narratives in competitive markets',
  },
  {
    value: '3x',
    label: 'average content engagement lift for narrative-led brands',
  },
]

export default function Results() {
  return (
    <section
      id="results"
      style={{
        backgroundColor: '#080507',
        padding: 'clamp(80px, 10vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Infrared wash overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-infrared-wash)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <ScrollReveal>
          <SectionLabel color="#E8451A">Results</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              color: '#F2EAE4',
              lineHeight: 1.05,
              marginBottom: '64px',
              textAlign: 'left',
            }}
          >
            Numbers That Mean Something
          </h2>
        </ScrollReveal>

        {/* Stat callouts */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.value} delay={i * 0.1}>
              <StatCounter value={stat.value} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>

        {/* Credibility line */}
        <ScrollReveal delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '18px',
              color: '#C4A08A',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto 40px',
              textAlign: 'center',
            }}
          >
            StoryGrid & Co. was built by a practitioner, not a theorist. Every framework
            here has been tested inside real sales rooms and real campaigns.
          </p>
        </ScrollReveal>

        {/* Founder badge + CTA */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            <Tag variant="founder">Aneesh Thakral, Founder</Tag>
            <Button variant="primary" href="#pricing">
              Start Building
            </Button>
          </div>
        </ScrollReveal>

        {/* Testimonial placeholder cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              id: 'TESTIMONIAL_1',
              text: 'Real results from real campaigns. Testimonials from enterprise clients will appear here before launch.',
            },
            {
              id: 'TESTIMONIAL_2',
              text: 'The proof is in the pipeline. Client case studies and attribution data will be featured here.',
            },
          ].map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: '#141012',
                  border: '1px solid #1E181C',
                  padding: '32px',
                }}
              >
                <SectionLabel color="#887060">Client Story Coming Soon</SectionLabel>
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '16px',
                    color: '#887060',
                    lineHeight: 1.7,
                    marginTop: '12px',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
