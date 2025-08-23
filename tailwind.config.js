/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f5f8ff",100:"#e8efff",200:"#cddcff",300:"#a4bdff",
          400:"#7294ff",500:"#4a6eff",600:"#2e50f0",700:"#243ecc",
          800:"#1e33a3",900:"#1b2b84",
        }
      }
    }
  },
  plugins: [],
};
