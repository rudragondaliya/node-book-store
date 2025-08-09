const express = require("express");
const bookRouter = require("./BookRouter");
const router = express.Router();

router.use("/",bookRouter)

module.exports = router;