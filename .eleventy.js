const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyGoogleFonts = require("eleventy-google-fonts");

module.exports = function (config) {
  config.addPassthroughCopy("assets");
  config.addPlugin(syntaxHighlight);
  config.addPlugin(eleventyGoogleFonts);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
