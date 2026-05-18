import Image from 'next/image'

type LogoSize = 'navbar' | 'footer'

interface LogoProps {
  size?: LogoSize
  className?: string
}

export default function Logo({ size = 'navbar', className = '' }: LogoProps) {
  return (
    <Image
      src="/images/logo/logo.png"
      alt="StoryGrid & Co. — AI-First Narrative Strategy Firm"
      width={160}
      height={100}
      priority={size === 'navbar'}
      className={`${size === 'navbar' ? '' : ''} ${className}`.trim()}
      style={{
        objectFit: 'contain',
        filter: 'brightness(1.08)',
        height: size === 'navbar' ? '70px' : '70px',
        mixBlendMode: 'screen' as React.CSSProperties['mixBlendMode'],
      }}
    />
  )
}
