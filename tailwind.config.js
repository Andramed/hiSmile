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

// bg-red-950 de la 320 in jos e asta
// 2xl:bg-indigo-800 de la 1440 in sus
// xl:bg-green-700 de la 1024 pina la 1440
// lg:bg-cyan-400 de la 768 pina la 1024
// md:bg-slate-500 de la 425 pina la 768
// sm:bg-red-800 320 -> 425