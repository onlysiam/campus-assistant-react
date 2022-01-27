const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();

app.use(express.static(__dirname));
app.use(fileupload());
app.use(express.json());
app.use(cors());

var rimraf = require("rimraf");
var fs = require("fs");
var uploadsDir = __dirname + "/print";

const db = mysql.createConnection({
  user: "onlysiam_rds",
  host: "localhost",
  password: process.env.db_password,
  database: "onlysiam_rds",
  // user: "root",
  // host: "localhost",
  // password: "",
  // database: "rds",
});

app.post("/api/register", (req, res) => {
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

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Incorrect Password" });
      }
    }
  );
});

app.post("/api/qrlogin", (req, res) => {
  const bcrypt = require("bcrypt");
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE username = ?",
    [password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        (async function () {
          const isMatch = await bcrypt.compare(password, result[0].qrid);
          if (isMatch) {
            res.send(result);
          }
        })();
      } else {
        res.send({ message: "Incorrect Qr Code" });
      }
    }
  );
});

app.post("/api/fetch", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT user.profilepic, userinfo.* FROM user INNER JOIN userinfo ON user.username = userinfo.username WHERE user.username = ? AND user.password = ?",
    [username, password],
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
app.post("/api/coursedata", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const semester = req.body.sem;
  db.query(
    "SELECT * FROM courseinfo WHERE username = ? AND semester LIKE ? ",
    [username, semester],
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
app.post("/api/upload", (req, res) => {
  const file = req.files.file;
  file.mv(`${__dirname}/print/${file.name}`, (err, result) => {
    if (err) {
      console.error(err);
      res.send({ err: err });
    }
    res.send({
      filename: file.name,
      filePath: `${__dirname}/print/${file.name}`,
    });
  });
});

app.post("/api/delete", (req, res) => {
  fs.readdir(uploadsDir, function (err, files) {
    files.forEach(function (file, index) {
      fs.stat(path.join(uploadsDir, file), function (err, stat) {
        var endTime, now;
        if (err) {
          return console.error(err);
        }
        now = new Date().getTime();
        endTime = new Date(stat.ctime).getTime() + 1000;
        if (now > endTime) {
          return rimraf(path.join(uploadsDir, file), function (err) {
            if (err) {
              return console.error(err);
            }
            console.log("successfully deleted");
          });
        }
      });
    });
  });
});
app.post("/api/postprintinfo", (req, res) => {
  const username = req.body.username;
  const filename = req.body.filename;
  const status = req.body.status;
  const comment = req.body.comment;
  db.query(
    "INSERT INTO printinfo (username,filename, status, comment) VALUES (?,?,?,?)",
    [username, filename, status, comment],
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
app.post("/api/getprintinfo", (req, res) => {
  const username = req.body.username;
  db.query(
    "SELECT * FROM printinfo WHERE username = ?",
    [username],
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
app.post("/api/classstatus", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  db.query(
    "SELECT status FROM courseinfo WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
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
app.post("/api/facultystatus", (req, res) => {
  const initial = req.body.initial;
  db.query("SELECT * FROM facultyinfo", (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Cannot Fetch Data" });
    }
  });
});
app.post("/api/classstatustoggle", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  db.query(
    "UPDATE courseinfo SET status = 0 WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [username, course, semester],
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
app.post("/api/statustoggle", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  const bin = req.body.bin;
  db.query(
    "UPDATE courseinfo SET status = ? WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [bin, username, course, semester],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      res.send({ message: "Success" });
      if (result.length > 0) {
        res.send(result);
      } else {
      }
    }
  );
});
app.post("/api/fetchnotes", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const semester = req.body.semester;
  db.query(
    "SELECT * FROM coursenotes WHERE username = ? AND semester LIKE ?",
    [username, semester],
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
app.post("/api/updatenotes", (req, res) => {
  const username = req.body.username;
  const course = req.body.course;
  const note = req.body.note;
  const date = req.body.date;
  const semester = req.body.semester;
  db.query(
    "UPDATE coursenotes SET note = ?, date= ? WHERE username = ? AND code LIKE ? AND semester LIKE ?",
    [note, date, username, course, semester],
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
var otptmp;
app.post("/api/resetreq", (req, res) => {
  otptmp = Math.floor(Math.random() * (999999 - 111111) + 111111);
  otpmail = otptmp;
  const email = req.body.email;
  const otp = otptmp;
  db.query(
    "UPDATE user SET otp = ? WHERE email = ?",
    [otp, email],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        const output = `
    <h3>Please Use The Following OTP to Reset Your Password Within 5 Minute.</h3><h1 style = 'color:#ffffff;width: 150px; background-color: #06AA6D; border-radius: 15px;padding: 10px;text-align: center;'>${otptmp}</h1>
  `;
        const usermail = req.body.usermail;
        let transporter = nodemailer.createTransport({
          host: "rds.onlysiam.com",
          port: 465,
          secure: true,
          auth: {
            user: "authentication@rds.onlysiam.com",
            pass: "Ot.siam07",
          },
        });

        transporter.sendMail(
          {
            from: '"NSU Aide" <authentication@rds.onlysiam.com>',
            to: usermail,
            subject: "Password Reset OTP",
            text: "Enter The Following Otp To Reset Password.",
            html: output,
          },
          (err, result) => {
            if (err) {
              res.send({ err: err });
            }
          }
        );

        res.send({ message: otp });
      }
    }
  );
});
app.post("/api/mailchecker", (req, res) => {
  const email = req.body.email;
  db.query("SELECT email FROM user WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Cannot Fetch Data" });
    }
  });
});
app.post("/api/otpchecker", (req, res) => {
  const otp = req.body.otp;
  const email = req.body.email;
  db.query(
    "SELECT otp FROM user WHERE email = ? AND otp = ?",
    [email, otp],
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
app.post("/api/resetpass", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  db.query(
    "UPDATE user SET password = ? WHERE email = ?",
    [pass, email],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send({ message: "success" });
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen();
// app.listen(3001, () => {
//   console.log("running server");
// });
