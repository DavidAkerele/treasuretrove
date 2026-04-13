import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Phone, ShieldCheck, ChevronRight, History, Award, Settings } from 'lucide-react'
import { brands, machines } from '@/lib/data'

export function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.id,
  }))
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = brands.find(b => b.id === params.brand)
  
  if (!brand) {
    notFound()
  }

  const brandMachines = machines.filter(m => m.brandId === brand.id)

  return (
    <main className="min-h-screen bg-void pt-[64px] font-sans text-foreground md:pt-[100px]">

      {/* ───────────────── EDITORIAL HERO ───────────────── */}
      <section className="pt-24 pb-20 border-b border-line bg-surface animate-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-mist uppercase tracking-[0.3em] mb-12">
            <Link href="/machines" className="hover:text-brand-terracotta transition-colors">Brands</Link>
            <ChevronRight size={10} className="text-line" />
            <span className="text-brand-teal">{brand.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <h1 className="font-display text-7xl md:text-9xl font-medium tracking-tighter text-foreground mb-8 leading-[0.85]">
                {brand.name}
              </h1>
              <div className="h-px w-24 bg-brand-teal mb-8" />
              <p className="text-base md:text-lg text-mist leading-relaxed max-w-2xl font-light">
                {brand.description}
              </p>
            </div>
            
            <div className="lg:w-1/3">
               <div className="flex items-center justify-center mix-blend-multiply">
                  <Image 
                    src={brand.logoUrl} 
                    alt={`${brand.name} logo`} 
                    width={400} 
                    height={200} 
                    className="object-contain"
                  />
               </div>
               <p className="text-[10px] font-bold text-mist uppercase tracking-widest text-center lg:text-right mt-4">
                 Official Maintenance Partner
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── BRAND DNA SNAPSHOT ───────────────── */}
      <section className="border-b border-line bg-void/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-4">
             <div className="w-10 h-10 border border-line flex items-center justify-center text-brand-teal shrink-0">
                <History size={18} />
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Technician Approval</h4>
                <p className="text-xs text-mist leading-relaxed">Every {brand.name} unit undergoes a 20-point mechanical verification before listing.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-10 h-10 border border-line flex items-center justify-center text-brand-teal shrink-0">
                <Settings size={18} />
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Genuine Components</h4>
                <p className="text-xs text-mist leading-relaxed">We source only authentic {brand.name} parts for repairs and restoration projects.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="w-10 h-10 border border-line flex items-center justify-center text-brand-teal shrink-0">
                <Award size={18} />
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Lifetime Support</h4>
                <p className="text-xs text-mist leading-relaxed">Purchasing through Treasure Trove includes direct engineer consultation.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ───────────────── EXPERT STRIP ───────────────── */}
      <section className="bg-void border-b border-line py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-line bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-medium mb-3 text-foreground">Specialized Procurement</h3>
              <p className="text-sm text-mist max-w-xl">
                 Looking for a professional {brand.name} model not listed below? Our engineering team maintains a global sourcing network for specific industrial requirements.
              </p>
            </div>
            <a
              href="tel:07419380778"
              className="group whitespace-nowrap flex items-center gap-3 bg-brand-teal text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-terracotta transition-all"
            >
              <Phone size={14} />
              Consult an Engineer
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── PRODUCT GRID ───────────────── */}
      <section className="mx-auto max-w-7xl animate-up py-24 px-6 md:px-12">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-4xl font-medium text-foreground">
             The Inventory
          </h2>
          <div className="h-px flex-1 mx-8 bg-line" />
          <p className="text-brand-terracotta text-[10px] font-bold uppercase tracking-widest">
            {brandMachines.length} Models Verified
          </p>
        </div>

        {brandMachines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {brandMachines.map((c) => (
              <div key={c.id} className="group flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-white p-12 transition-all duration-700">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    className="object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Glass Tag */}
                  <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md border border-line px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-teal">
                    Fully Serviced
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-3xl font-medium text-foreground group-hover:text-brand-teal transition-colors">
                      {c.title}
                    </h3>
                    <span className="font-display text-2xl font-semibold text-foreground">£{c.price}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-mist mb-8 line-clamp-2 font-light">
                    {c.body}
                  </p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 border-l border-brand-teal/20 pl-6">
                    {c.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-bold tracking-widest uppercase text-brand-teal/80"
                      >
                         {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-line pt-8 flex items-center justify-between group-hover:border-brand-teal/30 transition-colors">
                    <Link 
                      href="/sales"
                      className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-terracotta hover:text-brand-teal transition-colors"
                    >
                      View Full Details &rarr;
                    </Link>
                    <div className="flex gap-1 text-mist">
                       <ShieldCheck size={12} />
                       <span className="text-[9px] font-bold uppercase">Engineer Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border-t border-b border-line flex flex-col items-center justify-center bg-white">
            <ShieldCheck size={48} className="text-line mb-6" />
            <h3 className="font-display text-3xl font-medium text-foreground mb-4">Awaiting Certified Stock</h3>
            <p className="text-mist max-w-sm mx-auto text-sm leading-relaxed mb-10">
              We currently do not have any fully restored {brand.name} models in our retail stock. However, we source and service specific {brand.name} machines on request.
            </p>
            <a
              href="tel:07419380778"
              className="flex items-center gap-3 bg-brand-teal text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-terracotta transition-all"
            >
              <Phone size={14} />
              Start a Commission
            </a>
          </div>
        )}
      </section>
    </main>
  )
}
