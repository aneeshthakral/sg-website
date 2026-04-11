// /story — The StoryGrid origin story sub-page
// Dark hero, 3 narrative editorial blocks with pull quotes, reuse Founder, CTABanner

import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Founder from '@/components/sections/Founder'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Our Story | StoryGrid & Co.',
  description:
    'Why StoryGrid & Co. exists: the origin, the belief, and the problem we were built to solve. Narrative strategy for the companies that are worth believing in.',
}

const narrativeBlocks = [
  {
    number: '01',
    label: 'The Origin',
    title: 'Great Products Were Losing to Better Stories',
    body: [
      'I spent eight years in enterprise sales, working in some of the most competitive B2B categories in existence. I watched deals worth millions get lost because the buyer remembered the competitor\'s story more clearly than ours. The product was often better. The team was often stronger. But the story was weaker.',
      'The companies that won consistently had one thing in common: they had built a narrative that was impossible to ignore. Not a tagline. Not a value proposition written by committee. A genuine story that made every sales conversation, every piece of content, and every investor pitch feel like it was building toward something.',
    ],
    pullQuote: 'Great products lose to better stories. Average products win because someone took the time to build a narrative that stuck.',
  },
  {
    number: '02',
    label: 'The Belief',
    title: 'Narrative Is Infrastructure, Not Decoration',
    body: [
      'Most companies treat narrative as something that happens after the strategy is done. A layer of language applied on top of the real work. A brand exercise that lives in a style guide no one reads.',
      'We believe the opposite. Narrative is the infrastructure that holds everything else together. When a company has a clear, ownable story, content gets easier to produce, sales conversations get sharper, and investors understand the vision faster. The story is not cosmetic. It is structural.',
    ],
    pullQuote: 'When the story is right, everything downstream costs less: every piece of content, every pitch, every hire.',
  },
  {
    number: '03',
    label: 'The Method',
    title: 'AI as Accelerant. Strategy as the Engine.',
    body: [
      'StoryGrid & Co. was built from day one to use AI as a core part of the production process. Not because AI is a trend to capitalise on, but because it genuinely allows a small, high-judgment team to produce at the scale of a much larger agency without losing the quality that matters.',
      'The intelligence is artificial. The strategy, the voice, and the judgment about what matters are not. We use AI to do more of the right things faster. We do not use it to replace the thinking that makes the right things right.',
    ],
    pullQuote: 'The models get smarter every month. The need for genuine strategic judgment gets stronger at the same rate.',
  },
]

export default function StoryPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#080507',
          padding: 'clamp(120px, 14vw, 180px) 0 clamp(80px, 10vw, 120px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--gradient-dual-temperature)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gradient-infrared-wash)',
            opacity: 0.6,
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
            <SectionLabel color="#E8451A">Our Story</SectionLabel>
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
              Why This Exists
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
              StoryGrid & Co. was not built from theory. It was built from eight years of
              watching great companies lose because their story was not clear enough, not
              consistent enough, or not compelling enough to matter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Narrative Blocks */}
      <section
        style={{
          backgroundColor: '#080507',
          padding: 'clamp(80px, 10vw, 120px) 0',
          position: 'relative',
          overflow: 'hidden',
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
              display: 'flex',
              flexDirection: 'column',
              gap: '80px',
            }}
          >
            {narrativeBlocks.map((block, i) => (
              <ScrollReveal key={block.number} delay={0.1}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '64px',
                    alignItems: 'start',
                    borderTop: i > 0 ? '1px solid #1E181C' : 'none',
                    paddingTop: i > 0 ? '80px' : '0',
                  }}
                >
                  {/* Left: number + label + title */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#E8451A',
                        marginBottom: '8px',
                      }}
                    >
                      {block.number} / {block.label}
                    </p>
                    <h2
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        color: '#F2EAE4',
                        lineHeight: 1.05,
                        marginBottom: '32px',
                      }}
                    >
                      {block.title}
                    </h2>
                    {/* Pull quote */}
                    <blockquote
                      style={{
                        borderLeft: '2px solid #E8451A',
                        paddingLeft: '20px',
                        margin: 0,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-family-body)',
                          fontSize: '17px',
                          color: '#C4A08A',
                          lineHeight: 1.65,
                          fontStyle: 'italic',
                        }}
                      >
                        &ldquo;{block.pullQuote}&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  {/* Right: body copy */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    {block.body.map((paragraph, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: 'var(--font-family-body)',
                          fontSize: '17px',
                          color: '#C4A08A',
                          lineHeight: 1.8,
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse Founder section */}
      <Founder />

      <CTABanner />
    </>
  )
}
