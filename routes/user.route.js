const express = require("express");
const { NewRegister } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register" , NewRegister);

module.exports = router;