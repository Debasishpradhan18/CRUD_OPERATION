const express = require("express");
const { NewRegister, LoginUser } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/register" , NewRegister);
router.post("/login",LoginUser);
router.get("/", authMiddleware , getStudents);

module.exports = router;