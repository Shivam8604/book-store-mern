const express = require("express");
const singup  = require("../controller/user.controller")
const router = express.Router()

router.post("/signup",singup)

module.exports = router