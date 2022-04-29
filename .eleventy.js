const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyGoogleFonts = require("eleventy-google-fonts");

const PreviewCard = require("./src/_includes/components/PreviewCard.js");
const IconComponent = require("./src/_includes/components/IconComponent.js");

module.exports = function (config) {
  config.addPassthroughCopy("assets");
  config.addPlugin(syntaxHighlight);
  config.addPlugin(eleventyGoogleFonts);

  config.addShortcode("PreviewCard", PreviewCard);
  config.addShortcode("Icon", IconComponent);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
