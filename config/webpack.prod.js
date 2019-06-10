const path = require("path");

module.exports = {
  mode: "production",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  }
};
