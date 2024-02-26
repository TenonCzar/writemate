/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ["Quicksand", 'sans-serif'],
        'comforta': ["Comfortaa", 'sans-serif'],
      },
      colors: {
        'majerela-blue': '#523FFC',
        'lavender': '#D2D0E3',
        'secondary': '#0E0844',
      }
    },
  },
  plugins: [],
}

