'use client'

// Section 6 — Pricing
// Background: dark (#080507) | Gradient: blaze-fade behind featured card
// Cards: stagger + scale entrance (0.97→1.0); non-featured: hover lift translateY -4px

import { motion, useReducedMotion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import PricingCard, { type PricingPlan } from '@/components/ui/PricingCard'

const plans: PricingPlan[] = [
  {
    name: 'Story Starter',
    price: '$2,500',
    per: '/ month',
    commitment: '3-MONTH MINIMUM',
    subtitle: 'For early-stage founders who need a clear, ownable narrative before they scale.',
    deliverables: [
      'Brand narrative document: core story, positioning, messaging pillars',
      'LinkedIn content system: 8 posts/month, ghostwritten in your voice',
      'Founder profile audit and full rewrite',
      'Monthly strategy call (60 min)',
      'Dedicated Slack channel, 48-hour response',
    ],
    ctaText: 'Get Started',
    ctaHref: 'mailto:hello@storygrid.co',
  },
  {
    name: 'Narrative Engine',
    price: '$4,900',
    per: '/ month',
    commitment: '3-MONTH MINIMUM',
    subtitle: 'For growth-stage companies building a content system that compounds over time.',
    deliverables: [
      'Full narrative strategy and brand story framework',
      'LinkedIn content system: 16 posts/month (founder + company page)',
      'AI-augmented content production pipeline',
      'Weekly strategy calls (30 min)',
      'Founder brand development: LinkedIn + long-form thought leadership',
      'One designed content format per month (carousel, infographic, or newsletter)',
      'Monthly performance report with reach and engagement data',
    ],
    ctaText: 'Start Your Engine',
    ctaHref: 'mailto:hello@storygrid.co',
  },
  {
    name: 'Scale',
    price: '$8,500',
    per: '/ month',
    commitment: '6-MONTH MINIMUM',
    subtitle: 'For growth-stage companies ready to own their narrative category.',
    deliverables: [
      'Full narrative audit and multi-channel rebuild',
      '24 posts/month across LinkedIn, Instagram, and long-form',
      'AI integration into existing marketing stack',
      'Dedicated narrative strategist, single point of contact',
      'Executive and founder brand programs (up to 2 founders)',
      'Campaign and launch narrative support',
      'Bi-weekly strategy sessions',
      'Quarterly narrative review and system evolution',
    ],
    ctaText: 'Start Scaling',
    ctaHref: 'mailto:hello@storygrid.co',
  },
]

// Stagger container: cards enter with scale 0.97→1.0 + opacity
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1.0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

const cardVariantsReduced = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1 },
}

export default function Pricing() {
  const shouldReduceMotion = useReducedMotion()
  const variants = shouldReduceMotion ? cardVariantsReduced : cardVariants

  return (
    <section
      id="pricing"
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
        <ScrollReveal>
          <SectionLabel color="#E8451A">Investment</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              color: '#F2EAE4',
              lineHeight: 1.05,
              marginBottom: '12px',
              textAlign: 'left',
            }}
          >
            Choose Your Narrative Layer
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '18px',
              color: '#C4A08A',
              marginBottom: '56px',
              maxWidth: '520px',
            }}
          >
            Every engagement starts with strategy. The tier determines the scale.
          </p>
        </ScrollReveal>

        {/* Three pricing cards — stagger + scale entrance */}
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
        >
          {plans.map((plan) => {
            const isFeatured = plan.name === 'Narrative Engine'
            return (
              <motion.div
                key={plan.name}
                variants={variants}
                whileHover={
                  !isFeatured && !shouldReduceMotion
                    ? { y: -4, transition: { duration: 0.2, ease: 'easeOut' } }
                    : {}
                }
                style={{ height: '100%' }}
              >
                <PricingCard plan={plan} featured={isFeatured} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enterprise block */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              backgroundColor: '#1E181C',
              padding: '40px',
              borderRadius: '4px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '32px',
            }}
          >
            <div style={{ flex: '1', minWidth: '280px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '40px',
                  color: '#F2EAE4',
                  marginBottom: '8px',
                }}
              >
                Enterprise
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '17px',
                  color: '#C4A08A',
                  marginBottom: '8px',
                }}
              >
                For corporations building narrative at organisational scale.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '13px',
                  color: '#887060',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}
              >
                Custom · Starting at $15,000 / month · 6-month minimum
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px 20px',
                }}
              >
                {[
                  'Multi-team narrative programs',
                  'Multi-channel content at scale',
                  'AI stack integration',
                  'Dedicated strategist',
                  'Quarterly reviews',
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '14px',
                      color: '#C4A08A',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="primary" href="mailto:hello@storygrid.co">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* One-time engagements */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Brand Narrative Sprint */}
          <ScrollReveal delay={0.05}>
            <div
              style={{
                backgroundColor: '#141012',
                border: '1px solid #1E181C',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <SectionLabel color="#D4912A">No Retainer Required</SectionLabel>
              <h3
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '40px',
                  color: '#F2EAE4',
                  marginBottom: '8px',
                  lineHeight: 1.05,
                }}
              >
                Brand Narrative Sprint
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '20px',
                  color: '#E8451A',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                $2,000
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '16px',
                  color: '#C4A08A',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '28px',
                }}
              >
                A 2-week intensive. Core story, messaging pillars, content framework. Built
                for founders pre-launch, pre-fundraise, or mid-pivot.
              </p>
              <Button variant="primary" href="mailto:hello@storygrid.co">
                Book the Sprint
              </Button>
            </div>
          </ScrollReveal>

          {/* Brand Story Audit */}
          <ScrollReveal delay={0.1}>
            <div
              style={{
                backgroundColor: '#141012',
                border: '1px solid #1E181C',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <SectionLabel color="#D4912A">Start Here</SectionLabel>
              <h3
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '40px',
                  color: '#F2EAE4',
                  marginBottom: '8px',
                  lineHeight: 1.05,
                }}
              >
                Brand Story Audit
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-family-condensed)',
                  fontSize: '20px',
                  color: '#E8451A',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                $750
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '16px',
                  color: '#C4A08A',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: '28px',
                }}
              >
                A 5-day standalone audit of your current narrative, messaging gaps, and
                positioning. Delivered as a written report. Applicable as credit toward
                any retainer.
              </p>
              <Button variant="primary" href="mailto:hello@storygrid.co">
                Book the Audit
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
