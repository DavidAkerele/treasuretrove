import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      colors: {
        background: 'var(--void)',
        foreground: 'var(--foreground)',
        border: 'var(--line)',
        void: 'var(--void)',
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        card: 'var(--card)',
        ink: 'var(--foreground)',
        mist: 'var(--foreground-muted)',
        line: 'var(--line)',
        terracotta: 'var(--brand-terracotta)',
        'terracotta-dim': 'var(--brand-terracotta-dim)',
        brand: {
          teal: 'var(--brand-teal)',
          'teal-mid': 'var(--brand-teal-mid)',
          'teal-fill': 'var(--brand-teal-fill)',
          terracotta: 'var(--brand-terracotta)',
          'terracotta-dim': 'var(--brand-terracotta-dim)',
          cream: 'var(--brand-cream)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'nav-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'nav-in': 'nav-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      boxShadow: {
        premium: '0 0 0 1px rgba(235,230,223,0.05), 0 32px 64px -20px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
}
export default config
