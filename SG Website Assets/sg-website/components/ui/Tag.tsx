// Tag — badge/pill component for categorising content
// Variants map to brand colour system exactly per spec

interface TagProps {
  variant: 'brand' | 'ai' | 'founder' | 'tech'
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<TagProps['variant'], React.CSSProperties> = {
  brand: {
    color: '#E8451A',
    border: '1px solid #E8451A',
    background: 'transparent',
  },
  ai: {
    color: '#2DD881',
    background: '#0A1210',
    border: '1px solid #1A3020',
  },
  founder: {
    color: '#D4912A',
    background: '#141008',
    border: '1px solid #282010',
  },
  tech: {
    color: '#4A6080',
    background: '#0A1018',
    border: '1px solid #1A2838',
  },
}

export default function Tag({ variant, children, className = '' }: TagProps) {
  return (
    <span
      className={className}
      style={{
        ...variantStyles[variant],
        fontFamily: 'var(--font-family-condensed)',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        padding: '4px 10px',
        borderRadius: '2px',
        display: 'inline-block',
        lineHeight: '1.4',
      }}
    >
      {children}
    </span>
  )
}
