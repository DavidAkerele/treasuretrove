'use client'

import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle2, Clock } from 'lucide-react'
import { useEditorialMotion } from '@/hooks/useEditorialMotion'

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)
  useEditorialMotion(containerRef)

  return (
    <main
      ref={containerRef}
      className="bg-void pt-[70px] md:pt-[110px] text-foreground"
    >

      {/* ───────────────── HERO ───────────────── */}
      <section className="pt-24 pb-16 border-b border-line bg-surface animate-up">
        

        

        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
            Workshop Services
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight">
            Repairs &amp; <span className="text-brand-terracotta italic">Servicing</span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-mist max-w-xl mx-auto leading-relaxed">
            Domestic, industrial, and embroidery machines repaired with precision.
            Honest diagnostics. Fast turnaround. Nationwide coverage.
          </p>

          {/* TRUST MINI STRIP */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-mist">
            {['All brands covered', 'Free diagnosis', 'No fix no fee (workshop)'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={12} /> {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="bg-brand-teal text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-brand-terracotta hover:text-white transition-all flex items-center gap-2"
            >
              Book a Repair <ArrowRight size={14} />
            </Link>

            <a
              href="tel:07419380778"
              className="border border-line px-5 py-3 rounded-md text-sm font-semibold hover:border-brand-terracotta transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── PROCESS STRIP ───────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-b border-line">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {[
            ['1. Send Your Machine', 'Use parcel2go.com to arrange delivery to our workshop (approx £8). Include a note detailing the issues.'],
            ['2. Diagnostics & Repair', 'Once received, our engineers begin work. We aim to complete repairs/servicing within 5-7 days.'],
            ['3. Return Journey', 'We will contact you when the repair is complete. You can then book the return via parcel2go.com.'],
          ].map(([t, d]) => (
            <div key={t} className="p-4 border border-line rounded-md">
              <p className="font-semibold text-brand-terracotta mb-2">{t}</p>
              <p className="text-mist text-xs leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── SERVICES GRID ───────────────── */}
      <section className="max-w-6xl mx-auto border-b border-line">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: 'Domestic Machines',
              desc: 'Workshop servicing for all home machines including Singer, Brother, Janome, Bernina & more.',
              highlight: 'From £55 • 3–7 day turnaround',
            },
            {
              title: 'Industrial Servicing',
              desc: 'On-site servicing for factories, tailoring units, and production lines with minimal downtime.',
              highlight: 'On-site support',
            },
            {
              title: 'Embroidery Machines',
              desc: 'Single & multi-needle diagnostics, timing correction, thread issues & full recalibration.',
              highlight: 'Specialist care',
            },
            {
              title: 'On-site Visits',
              desc: 'We come to you when transport is not possible. Ideal for heavy industrial setups.',
              highlight: 'Greater Manchester & London',
            },
            {
              title: 'UK Postal Repairs',
              desc: 'Send your machine securely. We diagnose, repair, and return fully tested & tracked.',
              highlight: 'Nationwide service',
              span: true,
            },
          ].map((s) => (
            <div
              key={s.title}
              className={`p-10 border border-line hover:bg-surface transition-all duration-300 group ${
                s.span ? 'md:col-span-2 lg:col-span-3 text-center' : ''
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-3">
                {s.highlight}
              </p>

              <h3 className="font-display text-xl md:text-2xl mb-3 group-hover:text-brand-terracotta transition-colors">
                {s.title}
              </h3>

              <p className="text-sm text-mist leading-relaxed max-w-xl mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── PRICING ───────────────── */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 border-b border-line">

        <div className="bg-brand-teal-fill p-10 md:p-14 flex flex-col justify-center">
          <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
            Transparent pricing
          </p>

          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Clear, honest, upfront
          </h2>

          <p className="text-sm text-mist leading-relaxed max-w-md">
            We always diagnose before repair. Pricing depends on fault severity and parts required.
            You approve before any work begins.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-mist">
            <Clock size={14} /> Average turnaround: 3–7 working days
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-terracotta text-black px-5 py-3 rounded-md text-sm font-semibold"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14">

          <div className="mb-10">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-brand-terracotta mb-4">
              Domestic (Workshop)
            </h3>

            {[
              ['Mechanical', 'from £55'],
              ['Computerised', 'from £68'],
              ['Embroidery', 'from £138'],
            ].map(([l, p]) => (
              <div key={l} className="flex justify-between py-2 border-b border-line text-sm">
                <span>{l}</span>
                <span className="font-medium">{p}</span>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="text-[11px] uppercase tracking-[0.35em] text-brand-terracotta mb-4">
              Industrial (On-site)
            </h3>

            {[
              ['Manchester', 'from £75'],
              ['London', 'from £98'],
            ].map(([l, p]) => (
              <div key={l} className="flex justify-between py-2 border-b border-line text-sm">
                <span>{l}</span>
                <span className="font-medium">{p}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── FAQ LIGHT ───────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-b border-line">
        <h3 className="font-display text-2xl mb-6 text-center">Important Mail-In &amp; Repair Terms</h3>

        <div className="space-y-4 text-sm text-mist">
          {[
            ['What do I need to include in the box?', 'Pop a note in explaining the fault alongside a sewn sample of fabric showing the stitching problem. Please also send the foot control, power lead, bobbin case, and spool. For embroidery faults, include the embroidery unit and hoop.'],
            ['How do I pack my machine?', 'It is crucial to pack the machine securely in its original box with packaging. If insufficiently packed and damaged in transit, we cannot process a claim with the courier. Please take care to protect your investment.'],
            ['What is the turnaround time?', 'Our usual repair turnaround is between 5 and 7 days after receiving the machine at our workshop, dependent on parts availability.'],
          ].map(([q, a]) => (
            <div key={q} className="border border-line p-4 rounded-md bg-white">
              <p className="font-semibold mb-2 text-foreground">{q}</p>
              <p className="leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="text-center py-24 bg-void">
        <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
          Need help now?
        </p>

        <h2 className="font-display text-3xl md:text-5xl mb-4">
          Let’s fix your machine
        </h2>

        <p className="text-sm text-mist max-w-xl mx-auto mb-8">
          Call us or book online — we’ll diagnose your machine and give you a clear repair plan before any work begins.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="tel:07419380778"
            className="bg-brand-teal text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-terracotta hover:text-white transition-all"
          >
            Call 07419 380 778
          </a>

          <Link
            href="/services"
            className="border border-line px-6 py-3 rounded-md font-semibold hover:border-brand-terracotta transition-all"
          >
            Book Online
          </Link>
        </div>
      </section>

    </main>
  )
}