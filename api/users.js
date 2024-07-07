const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ status: "OK", data: "User Info" });
});

router.post("/", (req, res) => {
  res.status(200).send({ status: "OK", data: req.body });
});

module.exports = router;
