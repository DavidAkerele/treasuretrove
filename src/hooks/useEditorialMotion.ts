'use client'

import { type RefObject, useEffect } from 'react'

type Options = {
  /** Stagger-in `.hero-text` elements on first paint (home hero). */
  staggerHero?: boolean
}

function revealAll(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('.hero-text, .animate-up').forEach((el) => {
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
}

/**
 * Lazy-loads GSAP + ScrollTrigger so initial JS stays smaller.
 * Scroll sections use `once: true` ScrollTriggers to avoid repeat work.
 */
export function useEditorialMotion(
  containerRef: RefObject<HTMLElement | null>,
  options: Options = {}
) {
  const { staggerHero = false } = options

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    if (typeof window === 'undefined') return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAll(root)
      return
    }

    let ctx: { revert: () => void } | undefined
    let cancelled = false

    void (async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled || !containerRef.current) return
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        if (staggerHero && root.querySelector('.hero-text')) {
          gsap.from('.hero-text', {
            y: 44,
            opacity: 0,
            duration: 0.95,
            stagger: 0.14,
            ease: 'power3.out',
          })
        }

        gsap.utils.toArray<HTMLElement>(root.querySelectorAll('.animate-up')).forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
            y: 36,
            opacity: 0,
            duration: 0.78,
            ease: 'power2.out',
          })
        })
      }, root)
    })()

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [containerRef, staggerHero])
}
