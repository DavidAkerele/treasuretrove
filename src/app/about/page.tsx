'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { useEditorialMotion } from '@/hooks/useEditorialMotion'

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  useEditorialMotion(containerRef)

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-void pt-[64px] font-sans text-foreground md:pt-[100px]"
    >

      {/* ───────────────── HERO ───────────────── */}
      <section className="pt-24 pb-16 border-b border-line bg-surface animate-up">

        

        

        <div className="max-w-5xl mx-auto px-6">

          {/* GOLD micro context */}
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-brand-teal/70">
            Treasure Trove • Workshop Story
          </p>

          <h1 className="font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl">
            About <span className="text-brand-terracotta italic">Us</span>
          </h1>

          {/* GOLD supporting line */}
          <p className="mt-4 text-xs text-brand-terracotta/80">
            Craftsmanship • Precision • Reliability
          </p>

        </div>
      </section>

      {/* ───────────────── FOUNDER STORY ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up border-b border-line md:border-x-0 bg-white">
        <div className="grid lg:grid-cols-2 divide-y divide-line lg:divide-x lg:divide-y-0">
          <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
            <h2 className="mb-8 font-display text-3xl md:text-4xl font-medium text-foreground">
              The Founder&apos;s Story
            </h2>
            <div className="space-y-6 text-sm text-mist leading-relaxed">
              <p>
                Born in Nigeria, Dayo came to the UK in 2005 to study fashion design, completing his course with distinction. His early raw talent caught eyes at a London Fashion Week exhibition, which led to a prestigious apprenticeship in Saville Row studying bespoke tailoring where he won the Outstanding Student Award.
              </p>
              <p>
                Awarded a masterclass at the legendary Henry Poole &amp; Co., Dayo was inspired to set up his own workshop. Purchasing his first machine ignited a deep passion for the engineering behind tailoring, pivoting his focus to sewing machinery.
              </p>
              <p>
                Working as a specialist sewing machine engineer, Dayo gained exclusive opportunities behind the scenes with iconic British fashion houses—including <span className="text-brand-terracotta font-medium">Alexander McQueen, Christopher Kane, and Burberry</span>. Seeing these machines as a true &ldquo;Treasure Trove&rdquo; of the creative world, the brand was born.
              </p>
            </div>
          </div>
          <div className="relative h-[30rem] lg:h-auto bg-surface overflow-hidden">
             <Image 
               src="/about-workshop.png" 
               alt="Dayo in his Treasure Trove Workshop" 
               fill 
               className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ───────────────── MAIN GRID ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up border-x border-line md:border-x-0">

        <div className="grid divide-y divide-line border-b border-line lg:grid-cols-2 lg:divide-x lg:divide-y-0">

          {/* LEFT */}
          <div className="p-8 md:p-16 lg:p-20">

            <h2 className="mb-12 font-display text-3xl md:text-4xl font-medium">
              We work with
            </h2>

            <ul className="space-y-0 text-sm font-medium uppercase tracking-[0.14em] text-mist">

              {[
                'Home sewers & hobbyists',
                'Students & designers',
                'Alteration shops & small business',
                'Schools & universities',
                'Studios & production',
                'Multi-machine industry',
              ].map((label, i) => (
                <li
                  key={label}
                  className="flex items-center gap-5 border-b border-line py-6 first:pt-0"
                >
                  <span className="font-display text-sm text-brand-terracotta">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="text-foreground/90">{label}</span>
                </li>
              ))}

            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-card p-8 md:p-16 lg:p-20">

            <h2 className="mb-12 font-display text-3xl md:text-4xl font-medium">
              Why choose us
            </h2>

            <div className="space-y-10">

              {[
                {
                  t: '15+ years hands-on expertise',
                  d: 'Mechanical, computerised, industrial, and embroidery—not a general repair shop.',
                },
                { t: 'Fast turnaround', d: 'Typically 2–3 days; longer only when parts are rare.' },
                { t: 'No fix, no fee guarantee', d: 'If it cannot be repaired, you do not pay.' },
                {
                  t: 'All-in-one workshop',
                  d: 'Repairs, servicing, sales, hire—domestic and industrial under one roof.',
                },
                { t: 'Pickup & delivery available', d: 'Available in selected areas—ask when you call.' },
                { t: 'Open 7 days', d: 'Mon–Sat 8–8, Sun 10–5. Call before visiting.' },
              ].map((x) => (
                <div key={x.t}>

                  {/* GOLD heading accent */}
                  <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                    {x.t}
                  </h4>

                  <p className="text-sm leading-relaxed text-mist">
                    {x.d}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up border-b border-line md:border-x-0">

        <div className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">

          <div className="border-b border-line bg-surface p-8 md:p-14 lg:border-b-0">

            <p className="text-[11px] uppercase tracking-[0.35em] text-brand-terracotta mb-3">
              Support hub
            </p>

            <h2 className="mb-6 font-display text-3xl md:text-4xl">
              FAQ
            </h2>

            <p className="text-sm leading-relaxed text-mist">
              Repairs, warranties, and logistics. Call us for anything specific.
            </p>

          </div>

          <div className="flex flex-col divide-y divide-line lg:col-span-2">

            {[
              [
                'How much will my repair cost?',
                'Domestic mechanical from £55, computerised from £68. We confirm before starting work.',
              ],
              [
                'How long will it take?',
                'Most domestic jobs 2–3 days; allow longer if parts are ordered.',
              ],
              ['Can you collect?', 'Yes in many areas—ask when you call. Drop-off always welcome.'],
              [
                'Can I send by post?',
                'Yes—secure packaging, tracked return. Postage is yours each way.',
              ],
              ['Industrial servicing?', 'Yes—workshop and on-site across Greater Manchester and London.'],
              ['What if you cannot fix it?', 'No fix, no charge—we always confirm first.'],
              ['Do you sell machines?', 'New and used stock—call for current availability.'],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group cursor-pointer bg-void px-6 py-8 transition-colors hover:bg-elevated/80 md:px-10 md:py-9 [&_summary::-webkit-details-marker]:hidden"
              >

                <summary className="flex list-none items-center justify-between gap-4 text-left text-sm font-medium">

                  {q}

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-brand-terracotta transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mist">
                  {a}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative mx-auto max-w-7xl animate-up overflow-hidden border-b border-line">

        <div className="relative h-[55vh] min-h-[22rem]">
          <Image 
            src="/about-workshop.png" 
            alt="Treasure Trove Workshop Atmosphere" 
            fill 
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-brand-teal-fill/80" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

            <p className="text-[10px] uppercase tracking-[0.35em] text-brand-terracotta mb-3">
              Ready when you are
            </p>

            <h2 className="mb-6 font-display text-brand-terracotta text-3xl md:text-5xl">
              Let’s fix your machine
            </h2>

            <a
              href="tel:07419380778"
              className="rounded-sm border border-brand-terracotta bg-brand-terracotta px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-foreground"
            >
              Call now
            </a>

          </div>
        </div>
      </section>

    </main>
  )
}