const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const username = req.body.username;
  db.query(
    "INSERT INTO session (username) VALUES (?)",
    [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      }
    }
  );
});

module.exports = router;
