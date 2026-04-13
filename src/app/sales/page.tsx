'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useEditorialMotion } from '@/hooks/useEditorialMotion'
import { CheckCircle2, Phone, ShieldCheck, Wrench } from 'lucide-react'
import CheckoutModal from '@/components/CheckoutModal'
import SellMachineForm from '@/components/SellMachineForm'

import { machines } from '@/lib/data'
export default function Sales() {
  const containerRef = useRef<HTMLElement>(null)
  useEditorialMotion(containerRef)
  
  const [selectedMachine, setSelectedMachine] = useState<{ title: string; price: number } | null>(null)
  const [view, setView] = useState<'buy' | 'sell'>('buy')

  return (
    <>
      <main
        ref={containerRef}
        className="min-h-screen bg-void pt-[64px] font-sans text-foreground md:pt-[100px]"
      >

      {/* ───────────────── HERO ───────────────── */}
      <section className="pt-24 pb-16 border-b border-line bg-surface animate-up">
        

        

        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
            Marketplace
          </p>

          <h1 className="font-display text-5xl font-medium tracking-tight md:text-7xl">
            Buy & Sell
          </h1>

          <p className="mt-5 text-sm md:text-base text-mist max-w-xl mx-auto leading-relaxed">
            Explore our collection of brand new and fully-serviced second-hand machines, or upload your own unused machine to sell through our verified marketplace.
          </p>

          {/* TRUST ROW */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-mist">
            {[
              'Engineer approved',
              'Warranty included',
              'Support after purchase',
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-brand-teal" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:07419380778"
              className="bg-brand-teal text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-brand-terracotta hover:text-white transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Enquire about stock
            </a>

            <span className="text-[10px] uppercase tracking-[0.2em] text-mist self-center">
              Stock changes weekly — call for availability
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────── TRUST STRIP ───────────────── */}
      <section className="border-b border-line bg-surface py-6">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-sm text-mist">
          {[
            'Fully serviced before sale',
            'Engineer tested machines only',
            'Support & guidance included',
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 justify-center md:justify-start">
              <CheckCircle2 size={14} className="text-brand-teal" />
              {t}
            </div>
          ))}
        </div>
      </section>

      
      {/* ───────────────── TOGGLE VIEW ───────────────── */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex flex-col sm:flex-row justify-center gap-4 border-b border-line pb-8">
          <button 
            onClick={() => setView('buy')}
            className={`px-8 py-4 rounded-md font-semibold transition-all ${view === 'buy' ? 'bg-brand-teal text-white' : 'bg-surface border border-line text-mist hover:text-foreground'}`}
          >
            Buy a Machine
          </button>
          <button 
            onClick={() => setView('sell')}
            className={`px-8 py-4 rounded-md font-semibold transition-all ${view === 'sell' ? 'bg-brand-teal text-white' : 'bg-surface border border-line text-mist hover:text-foreground'}`}
          >
            Sell Your Machine
          </button>
        </div>
      </section>

      {view === 'buy' && (
        <>
          {/* ───────────────── VALUE STATEMENT ───────────────── */}
      <section className="max-w-6xl mx-auto border-b border-line p-8 md:p-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl mb-4">
          Why buy from us?
        </h2>

        <p className="text-mist max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Unlike standard resale shops, every machine is inspected by a working technician —
          not just cleaned. We ensure timing, tension, motor performance, and stitching quality
          are fully verified before handover.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-mist">
          {[
            'No faulty resale units',
            'Pre-delivery testing',
            'Real engineer inspection',
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Wrench size={12} />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ───────────────── GRID ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up border-b border-line">
        <div className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">

          {machines.map((c) => (
            <div key={c.title} className="group flex flex-col border border-line bg-white transition-all">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-void/5 p-4">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
              </div>

              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h2 className="mb-2 font-display text-2xl font-medium text-foreground">
                  {c.title}
                </h2>

                <p className="text-sm leading-relaxed text-mist mb-4">
                  {c.body}
                </p>

                {/* highlights */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {c.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[11px] border border-line px-2 py-1 text-mist bg-surface"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-line pt-4">
                  <span className="font-display text-xl text-brand-teal font-semibold">£{c.price}</span>
                  <button 
                    onClick={() => setSelectedMachine({ title: c.title, price: c.price })}
                    className="bg-brand-teal text-white px-5 py-2 rounded-md text-xs font-semibold hover:bg-brand-teal-mid transition-colors text-center"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      
        </>
      )}

      {view === 'sell' && (
        <section className="py-16 px-6 bg-surface animate-up min-h-[60vh]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-brand-teal font-semibold mb-4">Sell Your Machine</h2>
            <p className="text-mist">Upload the details of your unused machine here. Our engineers will securely review the model and condition, and we will get back to you with an offer or a listing placement.</p>
          </div>
          <SellMachineForm />
        </section>
      )}

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="text-center py-24 bg-void">
        <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
          Need help choosing?
        </p>

        <h2 className="font-display text-3xl md:text-5xl mb-4">
          Let’s match you with the right machine
        </h2>

        <p className="text-sm text-mist max-w-xl mx-auto mb-8">
          Tell us what you need — we’ll recommend the right machine for your skill level,
          budget, and usage.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="tel:07419380778"
            className="bg-brand-teal text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-terracotta hover:text-white transition-all flex items-center gap-2"
          >
            <Phone size={14} />
            Call for advice
          </a>

          <span className="border border-line px-6 py-3 rounded-md text-sm text-mist">
            Free recommendations included
          </span>
        </div>
      </section>

    </main>
      
      <CheckoutModal 
        isOpen={!!selectedMachine}
        onClose={() => setSelectedMachine(null)}
        productName={selectedMachine?.title || ''}
        priceAmount={selectedMachine?.price || 0}
      />
    </>
  )
}