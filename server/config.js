if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL
};
