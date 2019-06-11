const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: "body",
      template: "./config/template.html",
      minify: { collapseWhitespace: true }
    })
  ]
};
