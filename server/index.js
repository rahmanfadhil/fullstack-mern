const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const { PORT, DATABASE_URL } = require("./config");

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    const app = express();

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../dist")));
    } else {
      const webpack = require("webpack");
      const devMiddleware = require("webpack-dev-middleware");
      const hotMiddleware = require("webpack-hot-middleware");
      const webpackConfig = require("../webpack.config");

      const compiler = webpack(webpackConfig);
      app.use(devMiddleware(compiler));
      app.use(hotMiddleware(compiler));
    }

    app.listen(PORT, () => {
      console.log("> Server started at port " + PORT);
    });
  })
  .catch(err => console.log(err));
