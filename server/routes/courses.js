const express = require("express");
const router = express.Router();
const ocr = require("../ocr/ocr");
const { db } = require("../startup/db");

//get courses by semester
router.get("/semestersCourses/:course/:section/:semester", (req, res) => {
  const course = req.params.course;
  const section = req.params.section;
  const semester = req.params.semester;
  db.query(
    "SELECT * FROM semesters_courses WHERE course_initial LIKE CONCAT(?,'%') AND section = ? AND semester LIKE CONCAT(?,'%')",
    [course, section, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

//get users courses by semester
router.get("/userCourses/:username/:semester", (req, res) => {
  const username = req.params.username;
  const semester = req.params.semester;
  db.query(
    "SELECT * FROM courseinfo WHERE username = ? AND semester LIKE ?",
    [username, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

router.get("/status/:username/:course/:semester", (req, res) => {
  const username = req.params.username;
  const course = req.params.course;
  const semester = req.params.semester;
  db.query(
    "SELECT status FROM courseinfo WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});
router.post("/", (req, res) => {
  const username = req.body.usernameInput;
  const course_id = req.body.passwordInput;
  const faculty_id = req.body.fname;
  const semester_id = req.body.lname;
  const semesters_courses_id = req.body.lname;
  db.query(
    "INSERT INTO students_courses (username,course_id,faculty_id,semester_id,semesters_courses_id) VALUES (?,?,?,?,?)",
    [username, course_id, faculty_id, semester_id, semesters_courses_id],
    [username, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});
router.post("/slip", async (req, res) => {
  const file = req.files.file;
  const semester = req.body.semester;
  let data = await ocr(file, semester);
  if (data) res.send(data);
  else res.send("no data");
});

router.put("/", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  db.query(
    "UPDATE courseinfo SET status = !status WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Cannot Fetch Data" });
      }
    }
  );
});

module.exports = router;
