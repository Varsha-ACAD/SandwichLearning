module.exports = function(eleventyConfig) {
    return {
      dir: {
        output: "docs"
      }
    };
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
  
    return {
      dir: {
        input: ".",
        output: "docs" // or "_site" if you're using that
      }
    };
  };