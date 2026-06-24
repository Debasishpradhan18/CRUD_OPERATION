const express = require("express");
const router = express.Router();
const {createStudent, getStudents} = require("../controllers/student.controller");

router.post("/",createStudent);
router.get("/",getStudents)

module.exports = router;
