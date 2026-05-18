import type { Metadata } from 'next'
import HowWeWork from '@/components/sections/HowWeWork'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'How We Work — StoryGrid & Co.',
  description:
    'Four steps from fog to framework to full execution. Discover, Architect, Produce, Scale.',
  openGraph: {
    title: 'How We Work — StoryGrid & Co.',
    description:
      'Four steps from fog to framework to full execution. Discover, Architect, Produce, Scale.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

export default function HowWeWorkPage() {
  return (
    <main>
      <HowWeWork asPageTitle />
      <CTABanner />
    </main>
  )
}
