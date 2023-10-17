/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': {
          '900': '#1F2937',
          '800': '#374151',
        },
        'red': {
          '600': '#DC2626',
          '700': '#B91C1C',
        }
      },
      spacing: {
        '4': '1rem',
        '10': '2.5rem',
      },
      fontSize: {
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { letterSpacing: '-0.01em', lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { letterSpacing: '-0.01em', lineHeight: '2rem' }],
        '6xl': ['2.5rem', { letterSpacing: '-0.01em', lineHeight: '1' }],
        '8xl': ['6rem', { letterSpacing: '-0.01em', lineHeight: '1' }],
        '4xl': ['2rem', { letterSpacing: '-0.01em', lineHeight: '1' }],
      },
    },
  },
  variants: {},
  plugins: [],
};