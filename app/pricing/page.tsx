import type { Metadata } from 'next'
import Pricing from '@/components/sections/Pricing'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Pricing — StoryGrid & Co.',
  description:
    'Three tiers of narrative strategy with transparent pricing and multi-currency support. From early-stage founders to growth-stage category owners.',
  openGraph: {
    title: 'Pricing — StoryGrid & Co.',
    description:
      'Three tiers of narrative strategy with transparent pricing and multi-currency support. From early-stage founders to growth-stage category owners.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

export default function PricingPage() {
  return (
    <main>
      <Pricing asPageTitle />
      <CTABanner />
    </main>
  )
}
