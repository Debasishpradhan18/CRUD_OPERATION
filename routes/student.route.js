const express = require("express");
const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require("../controllers/student.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, createStudent);
router.get("/", authMiddleware, getStudents);
router.put("/:id", authMiddleware, updateStudent);
router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;