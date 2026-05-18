import type { Metadata } from 'next'
import Founder from '@/components/sections/Founder'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'About — StoryGrid & Co.',
  description:
    'Meet Aneesh Thakral, founder of StoryGrid & Co. 8+ years enterprise B2B sales, $6M+ closed revenue, building narrative infrastructure for growth-stage companies.',
  openGraph: {
    title: 'About — StoryGrid & Co.',
    description:
      'Meet Aneesh Thakral, founder of StoryGrid & Co. 8+ years enterprise B2B sales, $6M+ closed revenue, building narrative infrastructure for growth-stage companies.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

export default function AboutPage() {
  return (
    <main>
      <Founder asPageTitle />
      <CTABanner />
    </main>
  )
}
