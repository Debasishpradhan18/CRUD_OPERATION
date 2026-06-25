const express = require("express");
const router = express.Router();
const {createStudent, getStudents, updateStudent} = require("../controllers/student.controller");

router.post("/",createStudent);
router.get("/",getStudents);
router.put("/:id",updateStudent);

module.exports = router;
