'use client'

// Card — reusable surface container
// Dark variant: bg var(--color-card), hover to var(--color-elevated)
// Light variant: bg #FFFFFF, hover to var(--color-section-break)
// activeIndicator: 2px left blaze border (used on Problem section pain-point cards)

interface CardProps {
  variant?: 'dark' | 'light'
  children: React.ReactNode
  className?: string
  activeIndicator?: boolean
  style?: React.CSSProperties
}

export default function Card({
  variant = 'dark',
  children,
  className = '',
  activeIndicator = false,
  style,
}: CardProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`card-surface card-${variant}${activeIndicator ? ' card-active' : ''} ${className}`}
      style={{
        background: isDark ? 'var(--color-card)' : '#FFFFFF',
        border: isDark ? '1px solid var(--color-elevated)' : '1px solid #D0C4B8',
        borderLeft: activeIndicator ? '2px solid var(--color-blaze)' : undefined,
        padding: '32px',
        transition: 'background 200ms ease, border-color 200ms ease',
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = isDark ? 'var(--color-elevated)' : 'var(--color-section-break)'
        el.style.borderColor = isDark ? 'var(--color-body-light)' : 'var(--color-body)'
        if (activeIndicator) el.style.borderLeftColor = 'var(--color-blaze)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = isDark ? 'var(--color-card)' : '#FFFFFF'
        el.style.borderColor = isDark ? 'var(--color-elevated)' : '#D0C4B8'
      }}
    >
      {children}
    </div>
  )
}
