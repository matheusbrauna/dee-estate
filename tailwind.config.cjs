/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Grotesk', 'ui-monospace'],
        serif: ['Oleo Script', 'ui-serif'],
      },
      colors: {
        brand: {
          light: '#6A80FF',
          mid: '#4863F7',
          dark: '#3249CB',
        },
        base: {
          100: '#E1E1E6',
          300: '#C4C4CC',
          900: '#09090A',
        },
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.5rem', sm: '1rem' },
      },
    },
  },
  plugins: [],
}
