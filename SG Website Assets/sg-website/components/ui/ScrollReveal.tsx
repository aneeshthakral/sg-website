'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// ScrollReveal — Framer Motion scroll animation wrapper
// Sections use this as their client boundary — section files can stay as Server Components
// prefers-reduced-motion: children visible immediately with no animation

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

type MotionVariants = {
  hidden: { opacity: number; y?: number; x?: number }
  visible: { opacity: number; y?: number; x?: number }
}

const directionVariants: Record<NonNullable<ScrollRevealProps['direction']>, MotionVariants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once, margin: '-100px' })

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || shouldReduceMotion ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  )
}
