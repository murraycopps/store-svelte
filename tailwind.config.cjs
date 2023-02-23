/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        '128': '32rem',
        '136': '34rem',
      }
    },
  },
  plugins: [],
}
