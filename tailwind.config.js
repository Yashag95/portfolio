/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 45px -20px rgba(6, 182, 212, 0.75)",
      },
    },
    fontFamily: {Signature: 'Great Vibes'},
  },
  plugins: [],
}
