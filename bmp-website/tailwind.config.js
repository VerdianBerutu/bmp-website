/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A6B',
          light: '#253580',
          dark: '#111C4E',
          deeper: '#0D1538',
        },
        gold: {
          DEFAULT: '#F5A623',
          light: '#F8BC55',
          dark: '#D4881A',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

