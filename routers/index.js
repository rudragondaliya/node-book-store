const express = require("express");
const bookRouter = require("./bookRouter")
const router = express.Router();

router.use("/",bookRouter)

module.exports = router;