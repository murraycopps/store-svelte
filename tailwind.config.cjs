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
    },
  },
  plugins: [],
}
