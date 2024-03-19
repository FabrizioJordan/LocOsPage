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
        'OreganoReg': ['OreganoReg', 'ui-serif']
      },
    },
  },
  plugins: [],
}