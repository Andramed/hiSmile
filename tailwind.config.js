/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1440px'
    },
    extend: {
      backgroundColor: {
        'primary-transparent': '#a68dd7c4'
      }
    },
  },
  plugins: [],
}

