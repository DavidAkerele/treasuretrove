import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Treasure Trove | Premium Sewing Machine Engineering & Sales',
  description: 'Master engineering for industrial and domestic machines. Manchester-based workshop specializing in high-end repairs, servicing, and certified sales for Brother, Juki, Bernina, and more.',
  keywords: ['Sewing Machine Repair', 'Industrial Sewing Machines', 'Manchester', 'Bernina Service', 'Brother Repair', 'Bespoke Tailoring', 'Juki Sales', 'Treasure Trove'],
  authors: [{ name: 'Treasure Trove Engineering' }],
  metadataBase: new URL('https://www.treasuretrovesewingmachines.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Treasure Trove | Sewing Machine Engineering & Repairs',
    description: 'Bespoke repair and sales of professional sewing equipment. Saville Row quality in the heart of Manchester.',
    url: 'https://www.treasuretrovesewingmachines.com',
    siteName: 'Treasure Trove',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 1200,
        alt: 'Treasure Trove Workshop',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treasure Trove | Sewing Machine Engineering',
    description: 'Master engineering for industrial and domestic machines. Certified repairs and sales.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/TREASURE TROVE LOGO.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: '/TREASURE TROVE LOGO.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#090807',
}

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans flex min-h-screen flex-col bg-void text-foreground antialiased selection:bg-brand-terracotta/20 selection:text-foreground`}
      >
        <Navigation />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
