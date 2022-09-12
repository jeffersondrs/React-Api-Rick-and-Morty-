/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rmgreen': '#2F9331',
        'rmbluesky': '#83d2e4',
        'rmmarfin': '#E7E0DB',
        'rmwood': '#926F44',
        'rmgreen-light': '#8BCF21',
        'rmwoodlight':'#C19978',
        'rmearth': '#3D373C',
        'rmgreedark': '#477385'
      }
    },
  },
  plugins: [],
}