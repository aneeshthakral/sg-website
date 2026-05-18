'use client'

// Section 9 — Footer
// Background: dark (var(--color-deep)) | Gradient: none — clean grounding close

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

// LinkedIn and Instagram SVG icons — inline, no icon library
function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="LinkedIn"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Instagram"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Company', href: '/company' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Talk to Us', href: '/contact' },
]

const socialLinks = [
  {
    icon: LinkedInIcon,
    href: 'https://linkedin.com/company/storygrid-co',
    label: 'LinkedIn',
  },
  {
    icon: InstagramIcon,
    href: 'https://instagram.com/storygrid.co',
    label: 'Instagram',
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-deep)',
        borderTop: '1px solid var(--color-elevated)',
      }}
    >
      {/* Footer hook — brand moment, no button nearby */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '64px',
          paddingBottom: '32px',
          borderBottom: '1px solid var(--color-elevated)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-family-condensed)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--color-blaze)',
          }}
        >
          Build the story that builds your pipeline.
        </p>
      </div>

      {/* Three-column layout */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(24px, 4vw, 48px)',
        }}
      >
        {/* Left — Wordmark + tagline + email */}
        <div>
          <div style={{ marginBottom: '6px' }}>
            <Logo size="footer" />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '14px',
              color: 'var(--color-caption)',
              marginBottom: '20px',
            }}
          >
            Where narrative meets intelligence.
          </p>
          <a
            href="mailto:hello@storygrid.co"
            aria-label="Email StoryGrid & Co. at hello@storygrid.co"
            data-interactive
            className="link-underline"
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: '14px',
              color: 'var(--color-body)',
              textDecoration: 'none',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-heading)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-body)'
            }}
          >
            hello@storygrid.co
          </a>
        </div>

        {/* Centre — Navigation */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-family-condensed)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-caption)',
              marginBottom: '16px',
            }}
          >
            Navigation
          </p>
          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    data-interactive
                    style={{
                      fontFamily: 'var(--font-family-condensed)',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-caption)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-heading)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-caption)'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right — Social */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-family-condensed)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-caption)',
              marginBottom: '16px',
            }}
          >
            Follow
          </p>
          <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-interactive
                aria-label={social.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--color-caption)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                  originX: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-heading)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-caption)'
                }}
              >
                <social.icon />
                <span
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '24px 24px 32px',
          borderTop: '1px solid var(--color-elevated)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: '13px',
            color: 'var(--color-caption)',
          }}
        >
          © 2026 StoryGrid & Co. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Service'].map((label) => (
            <a
              key={label}
              href="#"
              data-interactive
              style={{
                fontFamily: 'var(--font-family-condensed)',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-caption)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-heading)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-caption)'
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
