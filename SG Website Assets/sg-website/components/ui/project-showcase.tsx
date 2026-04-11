'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Narrative Sprint',
    description: 'Brand story and positioning for a growth-stage SaaS.',
    year: '2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Content Engine',
    description: 'AI-augmented content system for a B2B scale-up.',
    year: '2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Founder Brand',
    description: 'LinkedIn presence built for a Series A founder.',
    year: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1553484771-689f30bd2a3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Launch Story',
    description: 'Go-to-market narrative for a new product category.',
    year: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  // Update container rect on scroll/resize so the floating preview stays correctly positioned
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect())
      }
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setContainerRect(rect)
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', paddingTop: '64px' }}
    >
      <SectionLabel color="#E8451A">Selected Work</SectionLabel>

      {/* Floating image preview — fixed positioning offset by container rect */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          left: (containerRect?.left ?? 0) + smoothPosition.x + 20,
          top: (containerRect?.top ?? 0) + smoothPosition.y - 100,
          zIndex: 50,
          width: '280px',
          height: '180px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isVisible ? 1 : 0.88})`,
          transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#141012' }}>
          {projects.map((project, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: hoveredIndex === index ? 1 : 0,
                transform: `scale(${hoveredIndex === index ? 1 : 1.08})`,
                filter: hoveredIndex === index ? 'none' : 'blur(8px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, filter 0.5s ease-out',
              }}
            />
          ))}
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,5,7,0.3), transparent)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Project list */}
      <div style={{ marginTop: '32px' }}>
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div
              style={{
                position: 'relative',
                padding: '20px 0',
                borderTop: '1px solid #1E181C',
                transition: 'all 0.3s ease-out',
              }}
            >
              {/* Hover background highlight */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  margin: '0 -16px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(20, 16, 18, 0.8)',
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: `scale(${hoveredIndex === index ? 1 : 0.97})`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Title row */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: 'clamp(22px, 3vw, 32px)',
                        color: '#F2EAE4',
                        lineHeight: 1.05,
                        position: 'relative',
                        display: 'inline-block',
                      }}
                    >
                      {project.title}
                      {/* Animated underline */}
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: '-2px',
                          height: '1px',
                          backgroundColor: '#E8451A',
                          width: hoveredIndex === index ? '100%' : '0%',
                          transition: 'width 0.3s ease-out',
                        }}
                      />
                    </h3>

                    {/* Arrow icon */}
                    <ArrowUpRight
                      size={18}
                      style={{
                        color: '#887060',
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index
                          ? 'translate(0, 0)'
                          : 'translate(-6px, 6px)',
                        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: '15px',
                      color: hoveredIndex === index ? 'rgba(196, 160, 138, 0.85)' : '#887060',
                      marginTop: '6px',
                      lineHeight: 1.6,
                      transition: 'color 0.3s ease-out',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Year */}
                <span
                  style={{
                    fontFamily: 'var(--font-family-condensed)',
                    fontSize: '12px',
                    color: hoveredIndex === index ? '#C4A08A' : '#887060',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    flexShrink: 0,
                    paddingTop: '4px',
                    transition: 'color 0.3s ease-out',
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        {/* Bottom border */}
        <div style={{ borderTop: '1px solid #1E181C' }} />
      </div>
    </div>
  )
}
