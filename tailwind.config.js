/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  // Backup content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl' : '1320px',
      },

      colors: {
        dark: '#181818', crimson: '#e11d48', lightgray: '#6b7280', darkgray: '#4b5563',
      },

      fontFamily:{
        pixel: ['VT323'], poppins: ['Poppins'], inter: ['Inter'],
      },
    },
  },
  plugins: [],
}
