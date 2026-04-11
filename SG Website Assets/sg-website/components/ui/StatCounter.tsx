'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// StatCounter — animated number counter for Results section (S5)
// Parses string values: "$5M+" → { prefix: "$", numericValue: 5, suffix: "M+" }
// Animates count-up from 0 → target using easeOutQuart + requestAnimationFrame
// Immediately shows final value when prefers-reduced-motion is set

interface StatCounterProps {
  value: string
  label: string
  className?: string
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

function parseStatString(raw: string): { prefix: string; numericValue: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) return { prefix: '', numericValue: 0, suffix: raw }
  return {
    prefix: match[1],
    numericValue: parseFloat(match[2]),
    suffix: match[3],
  }
}

const ANIMATION_DURATION = 2000 // ms

export default function StatCounter({ value, label, className = '' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const { prefix, numericValue, suffix } = parseStatString(value)
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? numericValue : 0)

  useEffect(() => {
    if (!isInView) return
    if (shouldReduceMotion) {
      setDisplayValue(numericValue)
      return
    }

    const startTime = performance.now()

    function tick(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1)
      const eased = easeOutQuart(progress)
      setDisplayValue(Math.round(eased * numericValue))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplayValue(numericValue)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isInView, numericValue, shouldReduceMotion])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: 'clamp(44px, 6.8vw, 68px)',
          color: '#F2EAE4',
          lineHeight: 1,
          textAlign: 'center',
          marginBottom: '12px',
        }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: '15px',
          color: '#C4A08A',
          lineHeight: 1.6,
          maxWidth: '180px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {label}
      </p>
    </div>
  )
}
