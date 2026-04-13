'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { useEditorialMotion } from '@/hooks/useEditorialMotion'

const hireOptions = [
  {
    title: 'Domestic Machines',
    desc: 'Perfect for home use, students, and hobby projects. Fully set up before collection or delivery.',
    price: 'From £25/week',
    highlight: 'Most Popular',
  },
  {
    title: 'Industrial Machines',
    desc: 'Heavy-duty machines for studios, tailoring shops, and production environments.',
    price: 'From £60/week',
    highlight: 'Professional',
  },
  {
    title: 'Event & Training Hire',
    desc: 'Bulk machines for workshops, training sessions, schools, and fashion events.',
    price: 'Custom pricing',
    highlight: 'Flexible',
  },
  {
    title: 'Short-Term Emergency Hire',
    desc: 'Urgent replacement machines while yours is being repaired.',
    price: 'From £35/week',
    highlight: 'Fast Turnaround',
  },
]

const benefits = [
  'Fully serviced before hire',
  'Setup & calibration included',
  'Delivery & collection available',
  'Flexible weekly or monthly terms',
  'Support from technicians',
]

export default function Hire() {
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
            Flexible Hire Options
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-medium">
            Machine <span className="text-brand-terracotta italic">Hire</span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-foreground-muted max-w-xl mx-auto leading-relaxed">
            Short-term and long-term sewing machine hire for individuals, studios,
            events, and production environments across the UK.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="bg-brand-teal text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-brand-terracotta hover:text-white transition-all flex items-center gap-2"
            >
              View All Services <ArrowRight size={14} />
            </Link>

            <a
              href="tel:07419380778"
              className="border border-line px-5 py-3 rounded-md text-sm font-semibold hover:border-brand-terracotta transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── BENEFITS STRIP ───────────────── */}
      <section className="border-b border-line bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 p-6 md:p-10">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm font-medium text-foreground-muted">
              <CheckCircle2 size={14} className="text-brand-terracotta" />
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── HIRE OPTIONS GRID ───────────────── */}
      <section className="max-w-6xl mx-auto border-b border-line">
        <div className="grid md:grid-cols-2">
          {hireOptions.map((item) => (
            <div
              key={item.title}
              className="p-10 md:p-14 border border-line hover:bg-surface transition-all group relative"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-3">
                {item.highlight}
              </p>

              <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-brand-terracotta transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-foreground-muted leading-relaxed mb-5 max-w-xl">
                {item.desc}
              </p>

              <p className="text-lg font-semibold text-foreground mb-6">
                {item.price}
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-terracotta hover:gap-3 transition-all"
              >
                Enquire <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── INFO / HOW IT WORKS ───────────────── */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 border-b border-line">

        <div className="bg-brand-teal-fill p-10 md:p-14 flex flex-col justify-center">
          <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
            How it works
          </p>

          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Simple, fast, reliable
          </h2>

          <p className="text-sm text-foreground-muted leading-relaxed max-w-md">
            We prepare every machine before hire so you can plug in and start immediately.
            No setup stress, no hidden issues.
          </p>

          <div className="mt-8 space-y-3 text-sm text-foreground-muted">
            <p>1. Choose your machine type</p>
            <p>2. We service & prepare it</p>
            <p>3. Delivery or collection arranged</p>
            <p>4. Start using immediately</p>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14">
          <h3 className="text-[11px] uppercase tracking-[0.35em] text-brand-terracotta mb-4">
            Why hire from us
          </h3>

          <ul className="space-y-4 text-sm">
            {[
              'Every machine fully serviced before dispatch',
              'Technical support during hire period',
              'Flexible return dates',
              'Affordable weekly rates',
              'Upgrade options available anytime',
            ].map((i) => (
              <li key={i} className="flex items-start gap-2 text-foreground-muted">
                <CheckCircle2 size={14} className="text-brand-teal mt-1" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── FINAL CTA ───────────────── */}
      <section className="text-center py-24 bg-void">
        <p className="uppercase tracking-[0.35em] text-[11px] text-brand-terracotta mb-4">
          Ready when you are
        </p>

        <h2 className="font-display text-3xl md:text-5xl mb-4">
          Need a machine today?
        </h2>

        <p className="text-sm text-foreground-muted max-w-xl mx-auto mb-8">
          Call us now and we’ll match you with the right machine for your project.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="tel:07419380778"
            className="bg-brand-teal text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-terracotta hover:text-white transition-all flex items-center gap-2"
          >
            <Phone size={14} />
            Call 07419 380 778
          </a>

          <Link
            href="/services"
            className="border border-line px-6 py-3 rounded-md font-semibold hover:border-brand-terracotta transition-all"
          >
            View All Services
          </Link>
        </div>
      </section>

    </main>
  )
}