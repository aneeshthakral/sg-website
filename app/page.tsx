// StoryGrid & Co. — Home Page
// Rebuilt from foundation docket content only. No invented copy.

import type { Metadata } from 'next'
import HeroSection from '@/components/sections/home/HeroSection'
import ProblemFrame from '@/components/sections/home/ProblemFrame'
import FrameworkTeaser from '@/components/sections/home/FrameworkTeaser'
import ShowreelPlaceholder from '@/components/sections/home/ShowreelPlaceholder'
import SocialProofStrip from '@/components/sections/home/SocialProofStrip'
import PageRoutingCards from '@/components/sections/home/PageRoutingCards'

export const metadata: Metadata = {
  title: 'Home — StoryGrid & Co.',
  description:
    'AI-First Narrative Strategy Firm. StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore.',
  openGraph: {
    title: 'Home — StoryGrid & Co.',
    description:
      'AI-First Narrative Strategy Firm. StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore.',
    images: [{ url: '/images/logo/logo.png' }],
  },
  alternates: { canonical: 'https://storygrid.co' },
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemFrame />
      <FrameworkTeaser />
      <ShowreelPlaceholder />
      <SocialProofStrip />
      <PageRoutingCards />
    </main>
  )
}
