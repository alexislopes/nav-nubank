/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%": {
            transform: 'scale(1)'
          },
          "50%": {
            transform: 'scale(0.8)'
          },
          "100%": {
            transform: 'scale(1)'
          }
        }
      },
      colors: {
        primary: "#8003c9",
        gray: "#5d5d5d",
        surface: "#F5ECFF",
        surface2: "#FDFDFD"
      }
    },
  },
  plugins: [],
}
