import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import Navigation from '@/components/ui/Navigation'
import PageTransition from '@/components/ui/PageTransition'
import LenisProvider from '@/components/ui/LenisProvider'
import Footer from '@/components/sections/Footer'

// ─────────────────────────────────────────
// FONT CONFIGURATION
// Bricolage Grotesque: display / headings (variable font, weights 600–700)
// JetBrains Mono: mono accent / AI labels / data (weight 400)
// Satoshi: body + captions — loaded via Fontshare CDN @import in globals.css
// ─────────────────────────────────────────

const bricolageGrotesque = localFont({
  src: './fonts/BricolageGrotesque-latin.woff2',
  weight: '600 700',
  variable: '--font-bricolage',
  display: 'swap',
})

const jetbrainsMono = localFont({
  src: './fonts/jetbrains-mono-latin-400-normal.woff2',
  weight: '400',
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// ─────────────────────────────────────────
// SITE METADATA
// ─────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://storygrid.co'),
  title: 'StoryGrid & Co. | AI-First Narrative Strategy Agency',
  description:
    'StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore. AI-augmented storytelling, content systems, and founder brand development.',
  keywords: [
    'narrative strategy',
    'brand storytelling',
    'content marketing',
    'AI marketing',
    'B2B content',
    'founder brand',
    'startup marketing',
    'growth stage marketing',
    'StoryGrid',
  ],
  authors: [{ name: 'Aneesh Thakral' }],
  creator: 'StoryGrid & Co.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://storygrid.co',
    siteName: 'StoryGrid & Co.',
    title: 'StoryGrid & Co. | AI-First Narrative Strategy Agency',
    description:
      'StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore. AI-augmented storytelling, content systems, and founder brand development.',
    images: [{ url: '/images/logo/logo.png', width: 1200, height: 630, alt: 'StoryGrid & Co. — AI-First Narrative Strategy Firm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoryGrid & Co. | AI-First Narrative Strategy Agency',
    description:
      'StoryGrid & Co. builds the narrative infrastructure that makes growth-stage companies impossible to ignore.',
    creator: '@storygridco',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${jetbrainsMono.variable}`}
    >
      <head />
      <body>
        {/* Lenis smooth scroll — client component, wraps entire page tree */}
        <LenisProvider>
          {/* Custom cursor — client component, disabled on touch devices (pointer: coarse) */}
          <CustomCursor />
          {/* Fixed navigation — present on all pages */}
          <Navigation />
          {/* Page transition wrapper — animates between routes */}
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
