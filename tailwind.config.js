/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "*/*.{html,js}",
    "*\*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        '2xs': {'max': '420px'},
      },
      fontFamily:{
        'Oregano': ['Oregano', 'ui-serif']
      },
    },
  },
  plugins: [],
}