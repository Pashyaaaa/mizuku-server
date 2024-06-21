/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lacquer: "Lacquer, sans-serif",
        raleway: "Raleway ,sans-serif",
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [],
};
