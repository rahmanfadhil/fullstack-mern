const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const { PORT, DATABASE_URL } = require("../config");

const app = express();

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    if (process.env.NODE_ENV === "production") {
      app.get("/bundle.js", (req, res) => {
        res.sendFile(path.join(__dirname, "../dist/bundle.js"));
      });
    } else {
      const webpack = require("webpack");
      const devMiddleware = require("webpack-dev-middleware");
      const hotMiddleware = require("webpack-hot-middleware");
      const webpackConfig = require("../webpack.config");

      const compiler = webpack(webpackConfig);
      app.use(devMiddleware(compiler));
      app.use(hotMiddleware(compiler));
    }

    app.get("*", (req, res) => {
      res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>React App</title>
</head>
<body>
<div id="root"></div>
<script type="text/javascript" src="/bundle.js"></script>
</body>
</html>
    `);
    });

    app.listen(PORT, () => {
      console.log("> Server started at port " + PORT);
    });
  })
  .catch(err => console.log(err));
