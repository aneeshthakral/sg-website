import type { Metadata } from 'next'
import Results from '@/components/sections/Results'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Results — StoryGrid & Co.',
  description:
    '$6M+ in enterprise deals attributed to narrative-led positioning. 8+ years building B2B narratives that close.',
  openGraph: {
    title: 'Results — StoryGrid & Co.',
    description:
      '$6M+ in enterprise deals attributed to narrative-led positioning. 8+ years building B2B narratives that close.',
    images: [{ url: '/images/logo/logo.png' }],
  },
}

export default function ResultsPage() {
  return (
    <main>
      <Results asPageTitle />
      <CTABanner />
    </main>
  )
}
