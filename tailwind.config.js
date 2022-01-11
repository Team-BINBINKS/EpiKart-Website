module.exports = {
  content: ["./src/**/*.{njk,html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
