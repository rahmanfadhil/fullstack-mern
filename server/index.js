const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");

const { PORT } = require("../config");
const webpackConfig = require("../webpack.config");

const app = express();

const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

app.listen(PORT, () => {
  console.log("> Server started at port " + PORT);
});
