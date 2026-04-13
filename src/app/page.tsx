'use client'

import Image from 'next/image'
import Link from 'next/link'
import BrandCarousel from '@/components/BrandCarousel'
import FeaturedProducts from '@/components/FeaturedProducts'
import { Phone, CheckCircle2, Clock, ArrowRight, Star, Zap, Scissors, Settings, Package, Wrench, ShoppingCart } from 'lucide-react'

import { brands, machines } from '@/lib/data'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const heroUSPs = [
  'Free diagnostic',
  '10+ years experience',
  'All brands covered',
]

const stats = [
  { value: '2,000+', label: 'Happy customers' },
  { value: '10+',    label: 'Years trading' },
  { value: '4.9★',  label: 'Average rating' },
]

const whyUsItems = [
  'Buying & Selling Sewing Machines',
  'Servicing & Maintenance',
  'Parts & Accessories',
  'Customised Embroidery & Alterations',
  'Training & Installation',
]

const serviceCards = [
  {
    num: '01',
    category: 'Domestic',
    title: 'Domestic Repairs',
    price: 'From £55',
    desc: 'Full servicing, timing correction, needle bar issues, and complete restoration. All makes and models accepted.',
    cta: 'Book domestic repair',
    href: '/services',
    featured: false,
    icon: <Scissors size={28} className="text-brand-teal" />,
  },
  {
    num: '02',
    category: 'Industrial',
    title: 'Industrial Servicing',
    price: 'Custom quote',
    desc: 'On-site repairs and routine servicing for factories, production floors, and tailoring studios. Minimal downtime guaranteed.',
    cta: 'Get a quote',
    href: '/services',
    featured: true,
    icon: <Settings size={28} className="text-white" />,
  },
  {
    num: '03',
    category: 'Postal',
    title: 'UK Postal Repairs',
    price: 'Nationwide',
    desc: 'Send your machine anywhere in the UK. We diagnose, repair, and return it — fully packaged and insured.',
    cta: 'Postal enquiry',
    href: '/services',
    featured: false,
    icon: <Package size={28} className="text-brand-teal" />,
  },
]

const testimonials = [
  {
    quote: 'Fixed my 30-year-old Bernina when two other shops said it was beyond repair. Absolutely fantastic service.',
    author: 'Margaret H.',
    location: 'Manchester',
  },
  {
    quote: 'Used the postal service — incredibly easy. Machine came back perfectly tuned within the week. Highly recommend.',
    author: 'James R.',
    location: 'Edinburgh',
  },
  {
    quote: 'Our factory has 12 industrial machines. Spica services them all quarterly — reliable, fair priced, and always on time.',
    author: 'Claire B.',
    location: 'Production Manager',
  },
]

const blogPosts = [
  {
    tag: 'Maintenance',
    title: 'How Often Should You Service Your Sewing Machine?',
    href: '/blog/service-frequency',
    readTime: '4 min read',
  },
  {
    tag: 'Industrial',
    title: 'Signs Your Industrial Machine Needs a Repair',
    href: '/blog/industrial-repair-signs',
    readTime: '3 min read',
  },
  {
    tag: 'Postal Service',
    title: 'How Our UK Postal Repair Service Works',
    href: '/blog/postal-repair-guide',
    readTime: '5 min read',
  },
]

const finalReassurance = [
  'Free diagnostic included',
  'No fix, no fee guarantee',
  'Friendly, expert advice',
]

/* ─────────────────────────────────────────────
   STYLES  (inject once, server-safe)
───────────────────────────────────────────── */

const globalStyles = `
  

  

  * { box-sizing: border-box; margin: 0; padding: 0; }

  

  

  /* ── Animations ── */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .anim-float { animation: float 4s ease-in-out infinite; }
  .anim-fadeup { animation: fadeUp 0.7s ease forwards; }

  /* ── Gold shimmer text ── */
  .text-shimmer {
    background: linear-gradient(90deg, var(--brand-terracotta) 0%, #e8c060 40%, var(--brand-terracotta) 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }

  /* ── Noise texture overlay ── */
  .noise::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* ── Diagonal separator ── */
  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
  }
  .clip-diagonal-top {
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
  }

  /* ── Card hover lift ── */
  .card-lift {
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .card-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(13,79,82,0.12);
  }

  /* ── Utility bar marquee ── */
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-inner { animation: marquee 40s linear infinite; white-space: nowrap; }
`

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function StarRow({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="var(--brand-terracotta)" stroke="transparent" />
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <style>{globalStyles}</style>
      <main style={{ background: 'var(--void)', color: 'var(--foreground)' }}>

        {/* ── UTILITY BAR — scrolling marquee ──────── */}
        <div style={{
          background: 'var(--brand-teal)',
          color: 'white',
          fontSize: 12,
          padding: '9px 0',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div className="marquee-inner mt-24 pt-2`" style={{ display: 'inline-flex', gap: 56 }}>
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="text-brand-terracotta" />
                  <a href="tel:07419380778" style={{ color: 'var(--brand-terracotta)', fontWeight: 700 }}>
                    07419 380 778
                  </a>
                  {' '}· Mon–Sat 9am–5pm
                </span>
                <span style={{
                  background: 'var(--brand-terracotta)', color: 'black',
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 12px', borderRadius: 20,
                  display: 'flex', alignItems: 'center', gap: 4
                }}>
                  <Zap size={10} /> SPRING OFFER — 20% OFF ALL SERVICING THIS MONTH
                </span>
                <span style={{ opacity: 0.5 }}>Trusted by customers across the UK</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── HERO ─────────────────────────────────── */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: 750,
          position: 'relative',
        }}>

          {/* Left */}
          <div style={{
            background: 'linear-gradient(155deg, var(--brand-teal) 0%, #0a3a3d 100%)',
            color: 'white',
            padding: '72px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative circle */}
            <div style={{
              position: 'absolute', bottom: -120, left: -120,
              width: 480, height: 480,
              borderRadius: '50%',
              border: '1px solid rgba(200,153,58,0.15)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -60, left: -60,
              width: 320, height: 320,
              borderRadius: '50%',
              border: '1px solid rgba(200,153,58,0.1)',
              pointerEvents: 'none',
            }} />

            {/* Social proof pill */}
            <div className="anim-fadeup" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 40, padding: '6px 14px',
              width: 'fit-content', marginBottom: 24,
              animationDelay: '0.1s', opacity: 0,
            }}>
              <StarRow size={12} />
              <span style={{ fontSize: 12, opacity: 0.85, fontWeight: 500 }}>
                4.9 · 340+ verified reviews
              </span>
            </div>

            <h1 className="font-display anim-fadeup" style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 600,
              lineHeight: 1.18,
              maxWidth: 480,
              letterSpacing: '-0.01em',
              animationDelay: '0.2s', opacity: 0,
            }}>
              Sewing Machines for{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--brand-terracotta)' }}>Creative Minds</em>
            </h1>

            <p className="anim-fadeup" style={{
              marginTop: 20,
              color: 'rgba(255,255,255,0.65)',
              fontSize: 15,
              maxWidth: 400,
              lineHeight: 1.7,
              animationDelay: '0.35s', opacity: 0,
            }}>
              We buy and sell new and second-hand sewing machines at affordable prices. Specialising in Domestic and Industrial machines, alongside expert servicing, repairs, and parts for all your needs.
            </p>

            {/* USP chips */}
            <div className="anim-fadeup" style={{
              marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8,
              animationDelay: '0.45s', opacity: 0,
            }}>
              {heroUSPs.map((u) => (
                <span key={u} style={{
                  background: 'rgba(200,153,58,0.15)',
                  border: '1px solid rgba(200,153,58,0.3)',
                  color: 'var(--brand-terracotta)',
                  fontSize: 11, fontWeight: 600,
                  padding: '5px 12px', borderRadius: 4,
                  letterSpacing: '0.02em',
                }}>
                  ✓ {u}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="anim-fadeup" style={{
              marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center',
              animationDelay: '0.55s', opacity: 0,
            }}>
              <Link href="/services" style={{
                background: 'var(--brand-terracotta)',
                color: '#000',
                fontWeight: 700,
                padding: '14px 28px',
                borderRadius: 6,
                fontSize: 14,
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 8,
                letterSpacing: '0.01em',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                Book a Repair <ArrowRight size={14} />
              </Link>
              <Link href="/services" style={{
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: 'white',
                fontWeight: 600,
                padding: '13px 22px',
                borderRadius: 6,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}>
                View Services
              </Link>
            </div>

            <p className="anim-fadeup" style={{
              marginTop: 16,
              color: 'rgba(255,255,255,0.35)',
              fontSize: 12,
              display: 'flex', alignItems: 'center', gap: 6,
              animationDelay: '0.65s', opacity: 0,
            }}>
              <Clock size={12} />
              Most repairs completed within 5–7 working days
            </p>
          </div>

          {/* Right — image */}
          <div style={{ position: 'relative', minHeight: 400 }}>
            <Image
              src="/jonas-kakaroto-zPBv_AubB58-unsplash.jpg"
              alt="Sewing machine repair technician at work"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(13,79,82,0.3) 0%, transparent 60%)',
            }} />

            {/* Floating review card */}
            <div className="anim-float" style={{
              position: 'absolute', bottom: 28, left: 24,
              background: 'rgba(255,255,255,0.97)',
              borderRadius: 14,
              padding: '14px 18px',
              maxWidth: 290,
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-mid))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Scissors size={18} className="text-white" />
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-teal)' }}>Repair booked today</p>
                  <StarRow size={10} />
                </div>
              </div>
              <p style={{ fontSize: 11, color: 'var(--foreground-muted)', lineHeight: 1.5 }}>
                "Fixed my Bernina in 4 days — brilliant service!"
              </p>
              <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--brand-teal)', marginTop: 5 }}>
                — Sarah T., Verified Customer
              </p>
            </div>

            {/* Floating stat chip */}
            <div style={{
              position: 'absolute', top: 28, right: 24,
              background: 'var(--brand-terracotta)',
              borderRadius: 10,
              padding: '10px 16px',
              boxShadow: '0 8px 24px rgba(200,153,58,0.4)',
            }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: 'black', lineHeight: 1 }}>2,000+</p>
              <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(0,0,0,0.6)', marginTop: 2 }}>
                happy customers
              </p>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP — scrolling marquee ──────── */}
        <div style={{
          background: 'white',
          padding: '32px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderBottom: '1px solid var(--line)',
          position: 'relative'
        }}>
          <div className="marquee-inner" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 100,
            width: 'max-content' 
          }}>
            {[...brands, ...brands].map((item, idx) => (
              <div key={`${item.name}-${idx}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 12, fontSize: 13, fontWeight: 700, color: '#000', height: 40,
                flexShrink: 0
              }}>
                <img 
                  src={item.logoUrl} 
                  alt={item.name} 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const span = document.createElement('span');
                    span.style.paddingLeft = '10px';
                    span.innerText = item.name;
                    e.currentTarget.parentElement!.appendChild(span);
                  }}
                  className="h-full w-auto object-contain mix-blend-multiply opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── QUICK ACTIONS ────────────────────────── */}
        <section style={{
          background: 'var(--surface)',
          padding: '64px 24px',
          borderBottom: '1px solid var(--line)',
        }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p style={{
              textAlign: 'center', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--brand-terracotta)',
              textTransform: 'uppercase', marginBottom: 12,
            }}>
              What we offer
            </p>
            <h2 className="font-display" style={{
              textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'var(--brand-teal)', fontWeight: 600, marginBottom: 40,
            }}>
              Everything Your Machine Needs
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {[
                { title: 'Book a Repair', icon: <Wrench size={22} className="text-brand-teal" />, desc: 'Fast workshop servicing for all machines. Most jobs done in under a week.', href: '/services', cta: 'Get started' },
                { title: 'Buy a Machine', icon: <ShoppingCart size={22} className="text-brand-teal" />, desc: 'New & refurbished machines, tested and set up before delivery.', href: '/sales', cta: 'Browse machines' },
                { title: 'Hire a Machine', icon: <Package size={22} className="text-brand-teal" />, desc: 'Short-term and event hire for studios and events. Delivery included.', href: '/hire', cta: 'View hire options' },
              ].map((item) => (
                <Link key={item.title} href={item.href} className="card-lift" style={{
                  background: 'var(--void)',
                  border: '1px solid var(--line)',
                  borderRadius: 10,
                  padding: '28px 24px',
                  textDecoration: 'none',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: 3,
                    background: 'linear-gradient(90deg, var(--brand-teal), var(--brand-terracotta))',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                  }} className="card-accent" />
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--brand-teal-fill)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, marginBottom: 16,
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: 'var(--brand-teal)', marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--foreground-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                    {item.desc}
                  </p>
                  <span style={{
                    fontSize: 13, fontWeight: 700, color: 'var(--brand-terracotta)',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    {item.cta} <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────── */}
        <section style={{ padding: '80px 24px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{
              textAlign: 'center', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--brand-terracotta)',
              textTransform: 'uppercase', marginBottom: 12,
            }}>
              Repair options
            </p>
            <h2 className="font-display" style={{
              textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: 'var(--brand-teal)', fontWeight: 600, marginBottom: 10,
            }}>
              Repair &amp; Servicing Options
            </h2>
            <p style={{
              textAlign: 'center', color: 'var(--foreground-muted)',
              maxWidth: 480, margin: '0 auto 48px', fontSize: 14, lineHeight: 1.7,
            }}>
              Whether you have a hobby machine at home or a fleet of industrial workhorses,
              we have a repair solution to suit you.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {serviceCards.map((card) => (
                <div key={card.title} className="card-lift" style={{
                  position: 'relative',
                  border: card.featured ? '2px solid var(--brand-teal)' : '1px solid var(--line)',
                  borderRadius: 12,
                  padding: '32px 28px',
                  background: card.featured
                    ? 'linear-gradient(165deg, var(--brand-teal) 0%, #0a3a3d 100%)'
                    : 'var(--void)',
                  color: card.featured ? 'white' : 'var(--foreground)',
                  overflow: 'hidden',
                }}>
                  {/* BG pattern for featured */}
                  {card.featured && (
                    <div style={{
                      position: 'absolute', top: -40, right: -40,
                      width: 180, height: 180, borderRadius: '50%',
                      border: '1px solid rgba(200,153,58,0.2)',
                      pointerEvents: 'none',
                    }} />
                  )}

                  {card.featured && (
                    <span style={{
                      position: 'absolute', top: 16, right: 16,
                      background: 'var(--brand-terracotta)', color: '#000',
                      fontSize: 10, fontWeight: 800,
                      padding: '4px 10px', borderRadius: 20,
                      letterSpacing: '0.05em',
                    }}>
                      MOST POPULAR
                    </span>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <span>{card.icon}</span>
                    <div>
                      <p style={{
                        fontSize: 10, fontWeight: 800,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: card.featured ? 'rgba(200,153,58,0.9)' : 'var(--brand-terracotta)',
                        marginBottom: 2,
                      }}>
                        {card.num} — {card.category}
                      </p>
                      <h3 style={{
                        fontSize: 16, fontWeight: 700,
                        color: card.featured ? 'white' : 'var(--brand-teal)',
                      }}>
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-display" style={{
                    fontSize: 28, fontWeight: 600,
                    color: card.featured ? 'var(--brand-terracotta)' : 'var(--brand-teal)',
                    marginBottom: 12,
                  }}>
                    {card.price}
                  </p>

                  <p style={{
                    fontSize: 13,
                    color: card.featured ? 'rgba(255,255,255,0.65)' : 'var(--foreground-muted)',
                    lineHeight: 1.7, marginBottom: 24,
                  }}>
                    {card.desc}
                  </p>

                  <Link href={card.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontWeight: 700,
                    padding: '11px 20px', borderRadius: 6,
                    textDecoration: 'none',
                    background: card.featured ? 'var(--brand-terracotta)' : 'var(--brand-teal)',
                    color: card.featured ? '#000' : 'white',
                  }}>
                    {card.cta} <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────── */}
        <section style={{
          padding: '80px 24px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--line)',
        }}>
          <div style={{
            maxWidth: 1040, margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 56, alignItems: 'start',
          }}>

            {/* Left */}
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.12em', color: 'var(--brand-terracotta)',
                textTransform: 'uppercase', marginBottom: 12,
              }}>
                Our Expertise
              </p>
              <h2 className="font-display" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--brand-teal)', fontWeight: 600, marginBottom: 16, lineHeight: 1.3,
              }}>
                Complete Care for Your Machinery
              </h2>
              <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                We deliver monthly or annual machine service and maintenance packages. We tailor schedules to your exact requirements—even during annual shutdowns to avoid delaying your production. We also service domestic machines in our dedicated workshop.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {whyUsItems.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 500 }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'var(--brand-teal)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <CheckCircle2 size={12} color="white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {stats.map((s) => (
                  <div key={s.label} style={{
                    background: 'var(--void)',
                    border: '1px solid var(--line)',
                    borderRadius: 10,
                    padding: '16px 10px',
                    textAlign: 'center',
                  }}>
                    <p className="font-display" style={{
                      fontSize: 22, fontWeight: 700, color: 'var(--brand-teal)', lineHeight: 1,
                    }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: 11, color: 'var(--foreground-muted)', marginTop: 4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — testimonials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {testimonials.map((t, i) => (
                <div key={t.author} className="card-lift" style={{
                  background: 'var(--void)',
                  borderRadius: 12,
                  padding: '22px 22px 20px',
                  borderLeft: '3px solid var(--brand-terracotta)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  <StarRow size={12} />
                  <p style={{
                    fontSize: 14, lineHeight: 1.75,
                    color: 'var(--foreground)', fontStyle: 'italic',
                    margin: '10px 0 12px',
                  }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-mid))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, color: 'white', fontWeight: 700,
                    }}>
                      {t.author[0]}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-teal)' }}>
                        {t.author}
                      </p>
                      <p style={{ fontSize: 11, color: 'var(--foreground-muted)' }}>{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SALES / HIRE ─────────────────────────── */}
        <section style={{ padding: '80px 24px', borderBottom: '1px solid var(--line)' }}>
          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>

            <Link href="/sales" className="card-lift" style={{
              background: 'linear-gradient(155deg, var(--brand-teal) 0%, #0a3a3d 100%)',
              color: 'white', borderRadius: 12, padding: '44px 36px',
              textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', bottom: -60, right: -60,
                width: 260, height: 260, borderRadius: '50%',
                border: '1px solid rgba(200,153,58,0.15)', pointerEvents: 'none',
              }} />
              <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.4, marginBottom: 8 }}>
                Machines for sale
              </p>
              <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, color: 'var(--brand-terracotta)', marginBottom: 14 }}>
                New &amp; Refurbished Machines
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 28 }}>
                Domestic &amp; industrial machines, prepared and tested before delivery.
                Every machine comes with a 3-month warranty.
              </p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'var(--brand-terracotta)', color: '#000',
                fontWeight: 700, fontSize: 13,
                padding: '11px 22px', borderRadius: 6,
              }}>
                View Machines <ArrowRight size={13} />
              </span>
            </Link>

            <Link href="/hire" className="card-lift" style={{
              border: '2px solid var(--brand-teal)',
              borderRadius: 12, padding: '44px 36px',
              background: 'var(--void)',
              textDecoration: 'none', display: 'block',
            }}>
              <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--foreground-muted)', marginBottom: 8 }}>
                Flexible hire
              </p>
              <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, color: 'var(--brand-teal)', marginBottom: 14 }}>
                Machine Hire
              </h3>
              <p style={{ fontSize: 14, color: 'var(--foreground-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                Short-term hire for studios, training days, and events. Delivery and
                collection available from just £35/week.
              </p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'var(--brand-teal)', color: 'white',
                fontWeight: 700, fontSize: 13,
                padding: '11px 22px', borderRadius: 6,
              }}>
                View Hire Options <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </section>

        {/* ── BLOG / GUIDES ────────────────────────── */}
        <section style={{
          padding: '80px 24px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--line)',
        }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{
              textAlign: 'center', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--brand-terracotta)',
              textTransform: 'uppercase', marginBottom: 12,
            }}>
              Knowledge base
            </p>
            <h2 className="font-display" style={{
              textAlign: 'center', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: 'var(--brand-teal)', fontWeight: 600, marginBottom: 10,
            }}>
              Guides &amp; Articles
            </h2>
            <p style={{
              textAlign: 'center', color: 'var(--foreground-muted)', fontSize: 14,
              maxWidth: 380, margin: '0 auto 48px', lineHeight: 1.7,
            }}>
              Tips, advice, and technical guides from our repair team.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
              {blogPosts.map((post) => (
                <Link key={post.title} href={post.href} className="card-lift" style={{
                  background: 'var(--void)',
                  border: '1px solid var(--line)',
                  borderRadius: 10,
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'block',
                }}>
                  <div style={{
                    height: 120,
                    background: 'linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-teal-mid) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 36,
                    position: 'relative', overflow: 'hidden',
                  }}>
                    🧵
                    <div style={{
                      position: 'absolute', bottom: -20, right: -20,
                      width: 80, height: 80, borderRadius: '50%',
                      border: '1px solid rgba(200,153,58,0.3)',
                    }} />
                  </div>
                  <div style={{ padding: '20px 20px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 800,
                        color: 'var(--brand-terracotta)', textTransform: 'uppercase', letterSpacing: '0.1em',
                      }}>
                        {post.tag}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--foreground-muted)' }}>{post.readTime}</span>
                    </div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.5, marginBottom: 14 }}>
                      {post.title}
                    </h4>
                    <span style={{
                      fontSize: 12, fontWeight: 700, color: 'var(--brand-teal)',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────── */}
        <section className="noise" style={{
          padding: '100px 24px',
          textAlign: 'center',
          background: 'linear-gradient(155deg, var(--brand-teal) 0%, #0a3a3d 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative rings */}
          {[400, 560, 720].map((size) => (
            <div key={size} style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: size, height: size,
              borderRadius: '50%',
              border: '1px solid rgba(200,153,58,0.08)',
              pointerEvents: 'none',
            }} />
          ))}

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--brand-terracotta)',
              textTransform: 'uppercase', marginBottom: 14,
            }}>
              Let's get started
            </p>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 600, marginBottom: 14,
            }}>
              Need Your Machine Fixed?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 420, margin: '0 auto 12px', fontSize: 15, lineHeight: 1.7 }}>
              Call now or book online — we'll tell you exactly what your machine needs,
              with no surprises.
            </p>
            <p style={{ color: 'var(--brand-terracotta)', fontSize: 13, fontWeight: 600, marginBottom: 36 }}>
              📅 Spring offer ends 30 April — 20% off all servicing bookings
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:07419380778" style={{
                background: 'var(--brand-terracotta)', color: '#000',
                fontWeight: 700, padding: '14px 28px',
                borderRadius: 6, fontSize: 14,
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <Phone size={15} />
                Call 07419 380 778
              </a>
              <Link href="/services" style={{
                background: 'white', color: 'var(--brand-teal)',
                fontWeight: 700, padding: '14px 24px',
                borderRadius: 6, fontSize: 14, textDecoration: 'none',
              }}>
                Book a Repair Online
              </Link>
              <Link href="/services" style={{
                border: '1.5px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontWeight: 600, padding: '13px 22px',
                borderRadius: 6, fontSize: 14, textDecoration: 'none',
              }}>
                Postal Enquiry
              </Link>
            </div>

            <div style={{
              display: 'flex', justifyContent: 'center',
              flexWrap: 'wrap', gap: 24, marginTop: 28,
            }}>
              {finalReassurance.map((item) => (
                <span key={item} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FeaturedProducts />
    </main>
    </>
  )
}