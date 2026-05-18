'use client'

// Section 6 — Pricing
// Background: dark (var(--color-deep)) | Gradient: blaze-fade behind featured card
// Cards: stagger + scale entrance (0.97→1.0); non-featured: hover lift translateY -4px

import { motion, useReducedMotion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { tiers } from '@/data/pricing'
import { useCurrency } from '@/hooks/useCurrency'
import { formatPrice, type TierPricing } from '@/lib/currency'

const addOns = [
  {
    name: 'Brand Narrative Sprint',
    pricing: { INR: 29950, USD: 399, EUR: 369 } as TierPricing,
    detail: '2-week intensive',
    description:
      'Core story, messaging pillars, content framework. Built for founders pre-launch, pre-fundraise, or mid-pivot.',
  },
  {
    name: 'Brand Story Audit',
    pricing: { INR: 9950, USD: 149, EUR: 139 } as TierPricing,
    detail: '5-day written report',
    description:
      'A standalone audit of your current narrative, messaging gaps, and positioning. Applicable as credit toward any retainer.',
  },
]

// Checkmark icon — inline SVG, 16px, blaze color
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <path
        d="M3 8L6.5 11.5L13 4.5"
        stroke="var(--color-blaze)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

export default function Pricing({ asPageTitle = false }: { asPageTitle?: boolean }) {
  const shouldReduceMotion = useReducedMotion()
  const { currency, setCurrency, mounted } = useCurrency()
  const variants = shouldReduceMotion ? cardVariantsReduced : cardVariants

  return (
    <section
      id="pricing"
      aria-label="Pricing — three narrative strategy tiers with multi-currency support"
      style={{
        backgroundColor: 'var(--color-deep)',
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
          <SectionLabel color="var(--color-blaze)">Investment</SectionLabel>
          {asPageTitle ? (
            <h1
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'var(--text-section)',
                color: 'var(--color-heading)',
                lineHeight: 1.05,
                marginBottom: '12px',
                textAlign: 'left',
              }}
            >
              Choose Your Narrative Layer
            </h1>
          ) : (
            <h2
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 'var(--text-section)',
                color: 'var(--color-heading)',
                lineHeight: 1.05,
                marginBottom: '12px',
                textAlign: 'left',
              }}
            >
              Choose Your Narrative Layer
            </h2>
          )}
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '18px',
              color: 'var(--color-body)',
              marginBottom: '32px',
              maxWidth: '520px',
            }}
          >
            Every engagement starts with strategy. The tier determines scale.
          </p>
        </ScrollReveal>

        {/* Currency toggle */}
        {mounted && (
          <ScrollReveal>
            <div
              style={{
                display: 'inline-flex',
                gap: '0',
                marginBottom: '48px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid var(--color-elevated)',
              }}
            >
              {(['INR', 'EUR', 'USD'] as const).map((c) => (
                <button
                  key={c}
                  aria-label={`Show prices in ${c}`}
                  aria-pressed={currency === c}
                  onClick={() => setCurrency(c)}
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '10px 24px',
                    border: 'none',
                    cursor: 'pointer',
                    background: currency === c ? 'var(--color-blaze)' : 'var(--color-card)',
                    color: currency === c ? 'var(--color-deep)' : 'var(--color-caption)',
                    transition: 'background 200ms ease, color 200ms ease',
                  }}
                >
                  {c === 'INR' ? '₹ INR' : c === 'EUR' ? '€ EUR' : '$ USD'}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Three tier cards */}
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {tiers.map((tier) => {
            const isFeatured = tier.highlighted === true
            return (
              <motion.div
                key={tier.id}
                variants={variants}
                whileHover={
                  !isFeatured && !shouldReduceMotion
                    ? { y: -4, transition: { duration: 0.2, ease: 'easeOut' } }
                    : {}
                }
                style={{ height: '100%' }}
              >
                <div
                  className={isFeatured ? '' : 'card-hover'}
                  style={{
                    background: isFeatured
                      ? 'var(--gradient-blaze-fade), var(--color-card)'
                      : 'var(--color-card)',
                    border: isFeatured
                      ? '2px solid var(--color-blaze)'
                      : '1px solid var(--color-elevated)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  {/* Featured badge */}
                  {isFeatured && (
                    <div style={{ marginBottom: '16px' }}>
                      <Tag variant="brand">MOST CHOSEN</Tag>
                    </div>
                  )}

                  {/* Tier name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: '32px',
                      color: 'var(--color-heading)',
                      marginBottom: '8px',
                    }}
                  >
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '6px',
                      marginBottom: '4px',
                    }}
                  >
                    <span
                      className="tabular-nums"
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: '56px',
                        color: 'var(--color-heading)',
                        lineHeight: 1,
                      }}
                    >
                      {formatPrice(tier.pricing, currency)}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-family-condensed)',
                        fontSize: '13px',
                        color: 'var(--color-caption)',
                        textTransform: 'uppercase',
                      }}
                    >
                      / month
                    </span>
                  </div>

                  {/* Commitment */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '11px',
                      color: 'var(--color-caption)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '16px',
                    }}
                  >
                    {tier.minCommitment}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: 'var(--color-elevated)',
                      marginBottom: '16px',
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '16px',
                      color: 'var(--color-body)',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                    }}
                  >
                    {tier.description}
                  </p>

                  {/* Deliverables */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: 1,
                      marginBottom: '32px',
                    }}
                  >
                    {tier.deliverables.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <CheckIcon />
                        <span
                          style={{
                            fontFamily: 'var(--font-family-body)',
                            fontSize: '15px',
                            color: 'var(--color-body)',
                            lineHeight: 1.55,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={isFeatured ? 'solid' : 'primary'}
                    href={tier.ctaHref}
                    style={{ width: '100%', justifyContent: 'center' } as React.CSSProperties}
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Add-ons */}
        <div
          style={{
            marginTop: '64px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(232, 69, 26, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {addOns.map((addOn) => (
            <ScrollReveal key={addOn.name} delay={0.05}>
              <div
                className="card-hover"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-elevated)',
                  padding: '32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <SectionLabel color="var(--color-gold)">One-Time</SectionLabel>
                <h3
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: '32px',
                    color: 'var(--color-heading)',
                    marginBottom: '8px',
                    lineHeight: 1.05,
                  }}
                >
                  {addOn.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '20px',
                    color: 'var(--color-blaze)',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                  className="tabular-nums"
                >
                  {formatPrice(addOn.pricing, currency)}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '12px',
                    color: 'var(--color-caption)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '16px',
                  }}
                >
                  {addOn.detail}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: '16px',
                    color: 'var(--color-body)',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '28px',
                  }}
                >
                  {addOn.description}
                </p>
                <a
                  href="mailto:hello@storygrid.co"
                  data-interactive
                  className="link-underline"
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-blaze)',
                    textDecoration: 'none',
                    transition: 'color 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-blaze-glow)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-blaze)'
                  }}
                >
                  Email to book &rarr;
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enterprise footer line */}
        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '15px',
              color: 'var(--color-caption)',
              textAlign: 'center',
              marginTop: '48px',
              lineHeight: 1.6,
            }}
          >
            Running a corporate narrative program at scale?{' '}
            <a
              href="mailto:hello@storygrid.co"
              data-interactive
              className="link-underline"
              style={{
                color: 'var(--color-body)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-heading)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-body)'
              }}
            >
              Email hello@storygrid.co
            </a>{' '}
            for enterprise engagements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
