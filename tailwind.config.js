/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Inter", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      colors: {
        textGrayPrimary: '#747474',
      }
    },
  },
  plugins: [],
}

