/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fsinlitimes': ['Montserrat', 'sans-serif']
      },
      screens: {
        'custom950px': '950px',
      },
      transformOrigin: {
        'top': 'top',
      },
      scale: {
        '100-0': '1, 0',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
      },
    },
  },
  plugins: [],
}
