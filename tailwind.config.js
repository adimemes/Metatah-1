/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        bonheur: ['"Bonheur Royale"', "cursive"], // Font Bonheur Royale
        lexend: ['"Lexend"', "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], // Font Lexend
      },
    },
  },
  plugins: [require("preline/plugin"),require("daisyui")],
};
