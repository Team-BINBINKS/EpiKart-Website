module.exports = {
  content: ["./src/**/*.{njk,html,js}", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        transitionTimingFunction: {
          bounce: "",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
