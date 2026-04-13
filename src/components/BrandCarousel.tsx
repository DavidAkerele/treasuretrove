'use client'

import React from 'react'
import Image from 'next/image'

const brands = [
  { name: 'Bernette', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/bernette-2-300x115.png' },
  { name: 'JACK', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/jack-v2-300x115.png' },
  { name: 'PEGASUS', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/pegasus-v2-300x115.png' },
  { name: 'BERNINA', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/bernia-2-300x115.png' },
  { name: 'JAGUAR', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/jaguar-v2-300x115.png' },
  { name: 'PFAFF', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/pfaff-v2-300x115.png' },
  { name: 'JANOME', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/janome-v2-300x115.png' },
  { name: 'SCHMETZ', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/schmetz-v2-300x115.png' },
  { name: 'Brother', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/brother-v2-300x115.png' },
  { name: 'JUKI', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/juki-2-300x115.png' },
  { name: 'SINGER', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/singer-v2-300x115.png' },
  { name: 'Husqvarna', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/husq-v2-300x115.png' },
  { name: 'M-TECH', url: 'https://www.directsewingmachines.co.uk/wp-content/uploads/2023/08/mtech-v2-300x115.png' },
]

const BrandLogo = ({ brand }: { brand: typeof brands[0] }) => {
  return (
    <div className="relative h-16 w-56 md:h-24 md:w-72">
      <Image 
        src={brand.url} 
        alt={`${brand.name} logo`} 
        fill
        className="object-contain select-none"
      />
    </div>
  )
}

export default function BrandCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white border-y border-line py-24">
      <div className="relative flex w-full max-w-7xl mx-auto items-center">
        
        <div className="animate-marquee flex whitespace-nowrap items-center hover:pause">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="px-16 min-w-[300px] flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            width: fit-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </div>
  )
}
