// StoryGrid & Co. — Home Page
// Section alternation: Dark → Dark → Dark → Cream → Dark → Dark → Cream → Dark → Dark

import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import HowWeWork from '@/components/sections/HowWeWork'
import Results from '@/components/sections/Results'
import Pricing from '@/components/sections/Pricing'
import Founder from '@/components/sections/Founder'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/sections/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'StoryGrid & Co. | AI-First Narrative Strategy Agency',
  description:
    'StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore. AI-augmented storytelling, content systems, and founder brand development.',
  alternates: { canonical: 'https://storygrid.co' },
}

export default function Home() {
  return (
    <>
      {/* Scroll progress bar — homepage only */}
      <ScrollProgress />

      <main>
        {/* S1 — Hero: dark, dual-temperature + infrared-wash */}
        <Hero />

        {/* S2 — Problem: dark, blaze-fade */}
        <Problem />

        {/* S3 — What We Build: dark, cool-atmosphere */}
        <WhatWeBuild />

        {/* S4 — How We Work: CREAM, section-break bg */}
        <HowWeWork />

        {/* S5 — Results: dark, infrared-wash */}
        <Results />

        {/* S6 — Pricing: dark, blaze-fade behind featured card */}
        <Pricing />

        {/* S7 — Founder: CREAM, light-card bg */}
        <Founder />

        {/* S8 — CTA Banner: dark, dual-temperature + infrared-wash */}
        <CTABanner />

        {/* S9 — Footer: dark, clean */}
        <Footer />
      </main>
    </>
  )
}
