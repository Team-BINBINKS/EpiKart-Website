const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{njk,html,js}", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    screens: {
      spp: "321px",
      sp: "374px",
      lancelot: "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
