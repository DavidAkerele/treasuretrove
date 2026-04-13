'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Cpu, ShieldCheck, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { machines } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered stagger for a more "organic" feel
      gsap.from('.product-card', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: {
          amount: 0.4,
          from: "start",
          ease: "power2.out"
        },
        ease: 'editorial',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-void py-32 border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-terracotta uppercase tracking-[0.4em] mb-6">
              Curated Masterpieces
            </p>
            <h2 className="font-display text-6xl md:text-7xl font-medium text-foreground tracking-tighter leading-[0.9] mb-8">
              Featured <br /> <span className="text-brand-teal italic">Inventory</span>
            </h2>
            <div className="h-1 w-24 bg-brand-terracotta/30" />
          </div>
          <div className="max-w-md">
            <p className="text-sm text-mist leading-relaxed mb-8">
              Every unit in our featured collection has undergone a rigorous 40-point mechanical certification. We don't just sell machines; we preserve engineering history.
            </p>
            <Link 
              href="/machines" 
              className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-foreground hover:text-brand-teal transition-all"
            >
              <span>Explore the Exhibition</span>
              <div className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-brand-teal transition-all" />
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {machines.slice(0, 4).map((product, i) => (
            <div key={i} className="product-card group flex flex-col h-full bg-void">
              {/* Product Image Container */}
              <div className="relative aspect-[4/5] mb-10 overflow-hidden bg-white border border-line p-10 transition-all duration-700 group-hover:border-brand-teal/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                <Image 
                  src={product.src} 
                  alt={product.title} 
                  fill 
                  className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                />
                
                {/* Visual Status Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                   <div className="bg-void border border-line text-foreground px-3 py-1 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-sm">
                     <ShieldCheck size={10} className="text-brand-teal" />
                     Certified
                   </div>
                   {product.price > 1000 && (
                     <div className="bg-brand-terracotta text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Zap size={10} />
                       Pro
                     </div>
                   )}
                </div>

                {/* Hover Highlight Overlay */}
                <div className="absolute inset-0 bg-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                   <div className="flex flex-col gap-1 items-center">
                     {product.highlights.slice(0, 2).map((h, idx) => (
                       <span key={idx} className="bg-white/90 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-brand-teal translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-[100ms]">
                         {h}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold text-brand-terracotta uppercase tracking-[0.2em]">
                      {product.brandId}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-line" />
                    <span className="text-[9px] font-bold text-mist uppercase tracking-[0.1em]">
                      Saville Row Approved
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-foreground leading-tight group-hover:text-brand-teal transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                <p className="text-xs text-mist leading-relaxed mb-10 font-light line-clamp-3">
                   {product.body}
                </p>

                <div className="mt-auto pt-8 border-t border-line flex items-center justify-between group-hover:border-brand-teal/30 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-mist uppercase font-bold tracking-widest mb-1">Investment</span>
                    <span className="font-display text-2xl font-semibold text-foreground tracking-tighter italic">£{product.price}</span>
                  </div>
                  <Link 
                    href="/sales" 
                    className="group-hover:translate-x-1 transition-transform p-3 border border-line rounded-full text-foreground hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-colors"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
