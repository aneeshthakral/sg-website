'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimate, useInView, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'

// PricingCard — individual pricing tier card
// featured=true: 2px blaze border, blaze-fade gradient bg, pulse animation on scroll entry
// featured=true CTA uses variant='solid' (permanently filled blaze)

export interface PricingPlan {
  name: string
  price: string
  per: string
  commitment: string
  subtitle: string
  deliverables: string[]
  ctaText: string
  ctaHref?: string
}

interface PricingCardProps {
  plan: PricingPlan
  featured?: boolean
  className?: string
}

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
        stroke="#E8451A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingCard({ plan, featured = false, className = '' }: PricingCardProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()
  const hasAnimated = useRef(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isInView && featured && !shouldReduceMotion && !hasAnimated.current) {
      hasAnimated.current = true
      animate(
        scope.current,
        { scale: [1, 1.02, 1] },
        { duration: 0.6, ease: 'easeOut', delay: 0.3 }
      )
    }
  }, [isInView, featured, shouldReduceMotion, animate, scope])

  const cardStyle: React.CSSProperties = featured
    ? {
        background: 'var(--gradient-blaze-fade), #141012',
        border: '2px solid #E8451A',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }
    : {
        background: '#141012',
        border: `1px solid ${hovered ? 'rgba(232,69,26,0.4)' : '#1E181C'}`,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 200ms ease',
      }

  return (
    <div
      ref={scope}
      style={cardStyle}
      className={className}
      onMouseEnter={() => !featured && setHovered(true)}
      onMouseLeave={() => !featured && setHovered(false)}
    >
      {/* Featured badge */}
      {featured && (
        <div style={{ marginBottom: '16px' }}>
          <Tag variant="brand">MOST CHOSEN</Tag>
        </div>
      )}

      {/* Plan name */}
      <h3
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '32px',
          color: '#F2EAE4',
          marginBottom: '8px',
        }}
      >
        {plan.name}
      </h3>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
        <span
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '56px',
            color: '#F2EAE4',
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-family-condensed)',
            fontSize: '13px',
            color: '#887060',
            textTransform: 'uppercase',
          }}
        >
          {plan.per}
        </span>
      </div>

      {/* Commitment */}
      <p
        style={{
          fontFamily: 'var(--font-family-condensed)',
          fontSize: '11px',
          color: '#887060',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '16px',
        }}
      >
        {plan.commitment}
      </p>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: '#1E181C',
          marginBottom: '16px',
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '16px',
          color: '#C4A08A',
          lineHeight: 1.65,
          marginBottom: '24px',
        }}
      >
        {plan.subtitle}
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
        {plan.deliverables.map((item, i) => (
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
                color: '#C4A08A',
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
        variant={featured ? 'solid' : 'primary'}
        href={plan.ctaHref ?? 'mailto:hello@storygrid.co'}
        style={{ width: '100%', justifyContent: 'center' } as React.CSSProperties}
      >
        {plan.ctaText}
      </Button>
    </div>
  )
}
