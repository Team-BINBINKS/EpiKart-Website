module.exports = function (config) {
  config.addPassthroughCopy({
    "src/output.css": "./output.css",
  });
  config.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
