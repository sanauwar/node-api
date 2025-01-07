const express = require("express");
const app = express();
require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();
const api = require("../api/index");
const logger = require("../logger");

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send({
    status: "ok",
    msg: "This is homepage",
  });
});

app.use("/api", api);

app.use((req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    logger.error(`Routes not found ${req.path}`);
  } else {
    res.status(500).send({ msg: "Page not found" });
  }
  next();
});

const port = process.env.PORT || 3000;
module.exports = {
  app,
  port,
};
