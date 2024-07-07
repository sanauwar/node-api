const express = require("express");
const router = express.Router();
//const handlers = require('../middleware/handlers')
const users = require("./users");

//router.all('*', handlers.handle);

router.use("/users", users);

module.exports = router;
