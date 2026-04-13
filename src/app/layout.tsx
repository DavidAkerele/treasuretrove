import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Treasure Trove | Sewing Machines · Repairs · Manchester',
  description:
    'Professional repairs, servicing and sales for sewing kits, domestic and industrial sewing machines. Manchester workshop. UK-wide postal service.',
  icons: {
    icon: [
      {
        url: '/TREASURE%20TROVE%20LOGO.png',
        type: 'image/png',
        sizes: 'any',
      },
    ],
    apple: '/TREASURE%20TROVE%20LOGO.png',
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
