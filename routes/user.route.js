const express = require("express");
const { NewRegister, LoginUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register" , NewRegister);
router.post("/login",LoginUser);

module.exports = router;