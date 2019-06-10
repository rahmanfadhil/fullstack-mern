const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client", "./client/index.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  plugins: [new HotModuleReplacementPlugin()]
};
