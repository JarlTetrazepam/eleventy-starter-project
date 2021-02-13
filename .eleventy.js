const fs = require("fs");
const filesize = require("file-size");

module.exports = (function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("îmages");

    eleventyConfig.addFilter("filesize", function(path) {
     let stat = fs.statSync(path);
     if (stat) {
       return filesize(stat.size).human("si");
     }
     return ""
    });

});