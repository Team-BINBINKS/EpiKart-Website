module.exports = {
  content: ["./src/**/*.{njk,html,js}", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        transitionTimingFunction: {
          bounce: "cubic-bezier(.17,.67,.37,1.17)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
