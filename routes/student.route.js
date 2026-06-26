const express = require("express");
const router = express.Router();
const {createStudent, getStudents, updateStudent, deleteStudent} = require("../controllers/student.controller");
const { NewRegister } = require("../controllers/user.controller");

router.post("/",createStudent);
router.get("/",getStudents);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);
router.post("/Register",NewRegister)

module.exports = router;
