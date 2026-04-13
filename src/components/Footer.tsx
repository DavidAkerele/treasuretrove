'use client'

import Link from 'next/link'
import { Phone, Mail, Globe } from 'lucide-react'

const col = [
  {
    title: 'Repairs',
    links: [
      ['Domestic', '/services'],
      ['Industrial', '/services'],
      ['Postal Service', '/services'],
      ['Pricing', '/services'],
    ],
  },
  {
    title: 'Workshop',
    links: [
      ['About Us', '/about'],
      ['FAQ', '/about'],
      ['Buy & Sell', '/sales'],
      ['Hire', '/hire'],
    ],
  },
  {
    title: 'Information',
    links: [
      ['Privacy', '#'],
      ['Terms', '#'],
      ['Sitemap', '#'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">

        <div className="mb-14 border-b border-black/10 pb-14 text-center md:text-left">
          <p className="uppercase tracking-[0.35em] text-[13px] text-terracotta font-semibold mb-1">
            Treasure Trove Sewing Machines
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal-fill/60 mb-4">
            For creative minds
          </p>

          <h2 className="text-2xl md:text-3xl font-display text-brand-teal-fill leading-snug">
            Sewing machines · Repairs · Sales · Hire
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-black/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="uppercase text-[11px] tracking-[0.3em] text-terracotta mb-4">
              Workshop
            </p>

            <p className="text-sm text-brand-teal-fill leading-relaxed">
              518 Claremont Road
              <br />
              Manchester M14 5WA
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a href="tel:07419380778" className="text-sm text-brand-teal-fill hover:text-white transition-colors flex items-center gap-2">
                <Phone size={14} /> 07419 380 778
              </a>
              <a href="mailto:info@thetreasuretrove.com" className="text-sm text-brand-teal-fill hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} /> info@thetreasuretrove.com
              </a>
              <a href="https://www.treasuretrovesewingmachines.com" target="_blank" rel="noreferrer" className="text-sm text-brand-teal-fill hover:text-white transition-colors flex items-center gap-2">
                <Globe size={14} /> www.treasuretrovesewingmachines.com
              </a>
            </div>
          </div>

          {/* Columns */}
          {col.map((c) => (
            <div key={c.title}>
              <p className="uppercase text-[11px] tracking-[0.3em] text-terracotta mb-5">
                {c.title}
              </p>

              <ul className="space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-brand-teal-fill transition-colors hover:text-brand-teal"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">

          <div className="text-xs tracking-[0.25em] text-terracotta">
            TEL.{' '}
            <a
              href="tel:07419380778"
              className="font-semibold hover:text-white transition-colors"
            >
              07419 380 778
            </a>
          </div>

          <p className="text-[10px] tracking-[0.3em] text-terracotta">
            © {new Date().getFullYear()} Treasure Trove Sewing Machines
          </p>

        </div>
      </div>
    </footer>
  )
}