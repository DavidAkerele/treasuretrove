'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

/** On-brand hero rotation — assets from /public */
const HERO_SLIDES = [
  {
    src: '/jonas-kakaroto-zPBv_AubB58-unsplash.jpg',
    alt: 'Treasure Trove sewing workshop hero',
  },
  {
    src: '/pierre-bamin-tYPQu6YFO5g-unsplash.jpg',
    alt: 'Workshop and trust in repair quality',
  },
  {
    src: '/every-angle-cVqmAHQ1xj4-unsplash.jpg',
    alt: 'Sewing machines and service',
  },
  {
    src: '/services_domestic_1775741167288.png',
    alt: 'Domestic sewing machine servicing',
  },
  {
    src: '/services_industrial_1775741207624.png',
    alt: 'Industrial sewing machine engineering',
  },
] as const

const INTERVAL_MS = 6000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(advance, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [advance, reducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.45,0,0.15,1)] ${
            i === index ? 'z-0 opacity-100' : 'z-0 opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover hero-carousel-img"
            sizes="100vw"
            quality={88}
            priority={i === 0}
          />
        </div>
      ))}
      {/* Light colour grade — keeps brown/navy mood without crushing the photo */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#2a2218]/25 via-transparent to-[#0f1824]/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#090807]/35 via-transparent to-[#090807]/65"
        aria-hidden
      />
      {/* Subtle centre dim only — text card handles readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_65%_at_50%_45%,rgba(9,8,7,0.2),transparent_65%)]"
        aria-hidden
      />
      {/* Soft gold slide indicators */}
      <div
        className="absolute bottom-24 left-1/2 z-[3] flex -translate-x-1/2 gap-2 md:bottom-28"
        role="tablist"
        aria-label="Hero images"
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ease-editorial ${
              i === index ? 'w-8 bg-gold/70' : 'w-1.5 bg-gold/25 hover:bg-gold/45'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
