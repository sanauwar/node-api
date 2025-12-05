import express from "express";
const app = express();
import mongoose from "./database.js";
import { json } from "express";
import dotenv from "dotenv";
import router from "../routes/index.js";
import logger from "../logger.js";
dotenv.config();

app.use(json());
//app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send({
    status: "ok",
    msg: "This is homepage",
  });
});

app.use("/api", router);

app.use((req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    logger.error(`Routes not found ${req.path}`);
  } else {
    res.status(500).send({ msg: "Page not found" });
  }
  next();
});

export const port = process.env.PORT || 3000;
export default app;
