/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dojo': "url('/src/img/dojo.webp')",
      }
    },
  },
  plugins: [],
};
