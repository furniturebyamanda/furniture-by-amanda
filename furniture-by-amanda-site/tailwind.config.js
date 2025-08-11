/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7b5aa6', // pulled from logo (lavender purple)
          dark: '#5e4580',
          light: '#a88ed0',
        },
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
        body: ['ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
