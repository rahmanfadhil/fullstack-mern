const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");

const { PORT } = require("../config");
const webpackConfig = require("../webpack.config");

const app = express();

const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler));

app.listen(PORT, () => {
  console.log("> Server started at port " + PORT);
});
