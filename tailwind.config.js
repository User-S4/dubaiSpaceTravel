module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0A1128',
        'space-dark': '#001233',
        'space-accent': '#FF595A',
        'space-light': '#CAC0B3',
        'space-white': '#F5F5F5',
        'dubai-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['var(--font-exo)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/space-hero.svg')",
        'stars-pattern': "url('/images/stars-bg.svg')",
      },
    },
  },
  plugins: [],
}; 