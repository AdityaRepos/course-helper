const express = require("express");
const {
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/coursesController");

const router = express.Router();

router.get("/", getAllCourses);        // GET all courses
router.post("/", addCourse);           // CREATE a course
router.put("/:id", updateCourse);      // UPDATE a course
router.delete("/:id", deleteCourse);   // DELETE a course

module.exports = router;
