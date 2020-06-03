module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
 
  eleventyConfig.addCollection("factsAlphabetically", (collection) =>
    collection.getFilteredByGlob("src/facts/*.md").sort((a, b) => {
      if (a.data.name < b.data.name) return -1;
      else if (a.data.name > b.data.name) return 1;
      else return 0;
    })
  );
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
