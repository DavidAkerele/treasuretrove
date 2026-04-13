'use client'

import { Menu, Phone, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { brands } from '@/lib/data'

function NavItem({
  href,
  label,
  onClick,
  active,
}: {
  href: string
  label: string
  onClick?: () => void
  active?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-[15px] font-medium transition-colors hover:text-terracotta
        ${active ? 'text-terracotta' : 'text-foreground'}
      `}
    >
      {label}

      {/* underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-terracotta transition-transform duration-300
          ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
        `}
      />
    </Link>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-line'
            : 'bg-white border-b border-transparent'
        }`}
      >
        {/* TOP BAR */}
        <div className="hidden md:flex justify-between font-display items-center px-8 py-2 text-xs border-b border-line bg-[var(--brand-terracotta)]">
          <span className="text-foreground-muted">
            Sewing Machine Specialists • Repairs • Sales • Hire
          </span>
          <a
            href="tel:07419380778"
            className="flex items-center gap-2 font-semibold text-brand-teal hover:text-terracotta"
          >
            <Phone size={14} />
            07419 380 778
          </a>
        </div>

        {/* MAIN NAV */}
        <div className="flex items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/TREASURE TROVE LOGO.png"
              alt="Treasure Trove Sewing Machines"
              width={180}
              height={50}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center font-display gap-10">
            {/* DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link 
                href="/machines"
                className={`flex items-center gap-1 relative text-[15px] font-medium transition-colors hover:text-terracotta ${pathname.includes('/machines') ? 'text-terracotta' : 'text-foreground'}`}
              >
                Sewing Machines
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-terracotta transition-transform duration-300 ${pathname.includes('/machines') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
              
              {/* DROPDOWN MENU */}
              <div 
                className={`absolute top-[calc(100%-1px)] left-0 w-[540px] bg-white border border-line rounded-b-md overflow-hidden transition-all duration-200 origin-top-left p-8 ${dropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className="text-[10px] font-bold tracking-widest text-mist uppercase border-b border-line pb-4 mb-6">Shop by Brand</div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  {brands.map(brand => (
                    <Link
                      key={brand.id}
                      href={`/machines/${brand.id}`}
                      className="py-3 text-sm font-medium hover:text-terracotta transition-all flex items-center gap-4 group border-b border-transparent hover:border-line/50"
                    >
                      <div className="relative w-14 h-8 flex-shrink-0 bg-void/50 rounded p-1 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Image 
                          src={brand.logoUrl} 
                          alt={brand.name} 
                          fill 
                          className="object-contain mix-blend-multiply"
                        />
                      </div>
                      <span className="flex-1">{brand.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-all text-terracotta translate-x-[-4px] group-hover:translate-x-0">&rarr;</span>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                   <p className="text-[10px] text-mist font-medium italic">Can't find a model? We source specialized machines on request.</p>
                   <Link href="/machines" className="text-[10px] font-bold uppercase tracking-widest text-brand-teal hover:text-brand-terracotta transition-colors">
                     View All Brands &rarr;
                   </Link>
                </div>
              </div>
            </div>

            <NavItem
              href="/services"
              label="Repairs & Servicing"
              active={pathname === '/services'}
            />
            <NavItem
              href="/sales"
              label="Buy & Sell"
              active={pathname === '/sales'}
            />
            <NavItem
              href="/hire"
              label="Machine Hire"
              active={pathname === '/hire'}
            />
            <NavItem
              href="/about"
              label="About Us"
              active={pathname === '/about'}
            />
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:07419380778"
              className="hidden md:flex font-display items-center gap-2 rounded-md bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:bg-brand-teal-mid"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 flex flex-col gap-6 lg:hidden overflow-y-auto">
          
          <div className="flex flex-col">
            <button 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full py-2 text-[15px] font-medium text-foreground transition-colors hover:text-terracotta"
            >
              Sewing Machines
              <ChevronDown size={18} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-[400px] pt-4 pb-2' : 'max-h-0'}`}>
              <div className="text-[10px] font-bold tracking-widest text-mist uppercase">Shop by Brand</div>
              {brands.map(brand => (
                <Link
                  key={brand.id}
                  href={`/machines/${brand.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-mist hover:text-terracotta flex items-center gap-3 group"
                >
                  <div className="relative w-8 h-4 flex-shrink-0 bg-void/50 rounded p-0.5">
                    <Image 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      fill 
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  {brand.name}
                </Link>
              ))}
              <Link
                href="/machines"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold tracking-widest uppercase text-brand-terracotta pt-2"
              >
                View All Brands &rarr;
              </Link>
            </div>
          </div>

          <NavItem
            href="/services"
            label="Repairs & Servicing"
            onClick={() => setIsOpen(false)}
            active={pathname === '/services'}
          />
          <NavItem
            href="/sales"
            label="Buy & Sell"
            onClick={() => setIsOpen(false)}
            active={pathname === '/sales'}
          />
          <NavItem
            href="/hire"
            label="Machine Hire"
            onClick={() => setIsOpen(false)}
            active={pathname === '/hire'}
          />
          <NavItem
            href="/about"
            label="About Us"
            onClick={() => setIsOpen(false)}
            active={pathname === '/about'}
          />

          <a
            href="tel:07419380778"
            className="mt-6 flex items-center justify-center gap-2 bg-brand-teal py-3 text-white font-semibold rounded-md"
          >
            <Phone size={16} />
            Call 07419 380 778
          </a>
        </div>
      )}
    </>
  )
}