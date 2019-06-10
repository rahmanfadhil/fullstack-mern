if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT
};
