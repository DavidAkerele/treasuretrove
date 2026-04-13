import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/lib/data'
import { ChevronRight, ShieldCheck, Mail } from 'lucide-react'

export default function MachinesIndex() {
  return (
    <main className="min-h-screen bg-void pt-[64px] font-sans text-foreground md:pt-[100px]">
      
      {/* ───────────────── HERO SECTION ───────────────── */}
      <section className="pt-32 pb-20 border-b border-line bg-surface animate-up">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.4em] text-[10px] font-bold text-brand-terracotta mb-4">
            Authorized Specialists
          </p>

          <h1 className="font-display text-5xl font-medium tracking-tight md:text-8xl text-foreground">
            The Brands
          </h1>

          <div className="h-px w-20 bg-brand-teal mt-8 mb-8" />

          <p className="text-sm md:text-lg text-mist max-w-xl leading-relaxed">
            We maintain direct expertise across the world's most prestigious sewing machine manufacturers. Experience precision with a verified lineage.
          </p>
        </div>
      </section>

      {/* ───────────────── BRANDS GRID ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up border-b border-line">
        <div className="grid divide-y divide-line md:grid-cols-2 lg:grid-cols-3 md:divide-x md:divide-y-0">
          {brands.map((brand) => (
            <Link 
              key={brand.id}
              href={`/machines/${brand.id}`}
              className="group flex flex-col bg-white transition-all duration-500 overflow-hidden border-b border-line lg:border-b-0"
            >
              {/* Logo Container */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-void/30 p-12">
                <Image 
                  src={brand.logoUrl} 
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col flex-1 p-10 lg:p-12">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-3xl font-medium text-foreground">
                    {brand.name}
                  </h2>
                  <ChevronRight size={18} className="text-line group-hover:text-brand-teal transition-all group-hover:translate-x-1" />
                </div>

                <p className="text-sm text-mist leading-relaxed mb-8 flex-1">
                  {brand.description}
                </p>

                <div className="pt-6 border-t border-line flex items-center justify-between">
                   <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-teal">
                    Explore Collection
                   </span>
                   <div className="flex gap-1">
                      <ShieldCheck size={12} className="text-brand-teal" />
                      <span className="text-[9px] text-mist font-semibold uppercase">Authorized</span>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────── SOURCING CTA ───────────────── */}
      <section className="bg-surface py-20 border-b border-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-line flex flex-col md:flex-row items-stretch overflow-hidden">
            <div className="md:w-1/3 bg-brand-teal p-12 flex items-center justify-center text-white">
              <Mail size={64} strokeWidth={1} />
            </div>
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center bg-white">
              <h3 className="font-display text-3xl md:text-4xl font-medium mb-4 text-foreground">Looking for a specific model?</h3>
              <p className="text-mist text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                Our network of international partners allows us to source specialized industrial and domestic machines upon request. Contact our engineers to start a custom procurement.
              </p>
              <div>
                <a 
                  href="tel:07419380778"
                  className="inline-flex items-center gap-3 border border-brand-teal text-brand-teal px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all shadow-none"
                >
                  Contact Technical Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
