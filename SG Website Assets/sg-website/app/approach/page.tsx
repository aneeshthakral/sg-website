// /approach — How We Work sub-page
// Dark hero, 3 principles cards, 7-principle framework (cream), reuse HowWeWork, CTABanner

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HowWeWork from '@/components/sections/HowWeWork'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'How We Work | StoryGrid & Co.',
  description:
    'Our approach to narrative strategy: three principles and seven frameworks that underpin every engagement. Built by a practitioner, not a theorist.',
}

const principles = [
  {
    number: '01',
    title: 'Narrative First',
    body: 'Strategy without story is just spreadsheets. We start every engagement by building the narrative before we touch a single piece of content. The story is the brief, the guide, and the filter for every decision that follows.',
  },
  {
    number: '02',
    title: 'Systems Over Sprints',
    body: 'One brilliant campaign fades. A narrative system compounds. We build infrastructure that keeps producing consistent, on-brand content long after the initial engagement, without you having to reinvent your voice every month.',
  },
  {
    number: '03',
    title: 'AI as Accelerant',
    body: 'We use AI to do more of the right things faster: sharper personalisation, broader reach, faster iteration. We do not use it to replace strategic judgment. The thinking is human. The throughput is enhanced.',
  },
]

const frameworks = [
  {
    number: '01',
    title: 'The Narrative Audit',
    description:
      'We start by reading what you have said, how competitors talk, and what your audience actually responds to. This surfaces the gaps between what you think your story is and what the market hears.',
  },
  {
    number: '02',
    title: 'The Core Story Framework',
    description:
      'We distil your positioning into one ownable narrative spine: a single story that makes every piece of content easier to write and harder to forget.',
  },
  {
    number: '03',
    title: 'Audience Psychology Mapping',
    description:
      'We identify the specific fears, ambitions, and mental models your buyers carry into any conversation. Narrative that speaks to psychology converts at a different rate than narrative that speaks to features.',
  },
  {
    number: '04',
    title: 'Channel Architecture',
    description:
      'Different channels carry different social contracts. We map the story to each surface (LinkedIn, long-form, pitch deck, homepage) so the message adapts without losing coherence.',
  },
  {
    number: '05',
    title: 'Voice and Tone Calibration',
    description:
      'We document the parameters of your voice precisely enough that any writer, AI or human, can produce content that sounds like you wrote it on your best day.',
  },
  {
    number: '06',
    title: 'Content System Design',
    description:
      'We build the engine: content pillars, format templates, editorial calendar logic, and production workflows that let your team execute at scale without starting from scratch every time.',
  },
  {
    number: '07',
    title: 'Performance Feedback Loop',
    description:
      'We track what the market responds to and iterate the system accordingly. Strategy that does not learn from results is just expensive guesswork.',
  },
]

export default function ApproachPage() {
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
            <SectionLabel color="#E8451A">Methodology</SectionLabel>
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
              How We Work
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
              Three principles drive every engagement. Seven frameworks make them operational.
              This is not a process we invented to sell consulting. It is what we found to
              actually work in competitive B2B markets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Principles */}
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
            <SectionLabel color="#2DD881">Principles</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                color: '#F2EAE4',
                lineHeight: 1.05,
                marginBottom: '56px',
              }}
            >
              Three Things We Always Believe
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {principles.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: '#141012',
                    border: '1px solid #1E181C',
                    borderLeft: '2px solid #E8451A',
                    padding: '32px',
                    height: '100%',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#E8451A',
                      marginBottom: '12px',
                    }}
                  >
                    {p.number}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: '28px',
                      color: '#F2EAE4',
                      marginBottom: '16px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: '#C4A08A',
                      lineHeight: 1.7,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Frameworks — cream background */}
      <section
        style={{
          backgroundColor: '#F0E8E2',
          padding: 'clamp(80px, 10vw, 120px) 0',
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
            <SectionLabel color="#685040">The Frameworks</SectionLabel>
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                color: '#181012',
                lineHeight: 1.05,
                marginBottom: '16px',
              }}
            >
              Seven Frameworks. One Coherent System.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: '18px',
                color: '#3A2820',
                lineHeight: 1.6,
                maxWidth: '540px',
                marginBottom: '64px',
              }}
            >
              These frameworks have been stress-tested across eight years of enterprise sales
              and growth-stage marketing. They are not theory. They are the tools we reach for.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {frameworks.map((f, i) => (
              <ScrollReveal key={f.number} delay={i * 0.08}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '32px',
                    padding: '32px 0',
                    borderBottom: i < frameworks.length - 1 ? '1px solid #D4C8BC' : 'none',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: '40px',
                      color: '#E8451A',
                      lineHeight: 1,
                      paddingTop: '4px',
                    }}
                  >
                    {f.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '28px',
                        color: '#181012',
                        marginBottom: '8px',
                        lineHeight: 1.1,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: '16px',
                        color: '#3A2820',
                        lineHeight: 1.7,
                        maxWidth: '640px',
                      }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse the How We Work 4-step component */}
      <HowWeWork />

      <CTABanner />
    </>
  )
}
