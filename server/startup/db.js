const mysql = require("mysql");
require("dotenv").config();
const config = require("config");
// const sqlConfig = {
//   user: config.get("user"),
//   host: config.get("host"),
//   password: process.env.DB_PASSWORD,
//   database: config.get("db"),
// };
const sqlConfig = {
  user: "root",
  host: config.get("host"),
  password: process.env.DB_PASSWORD,
  database: config.get("db"),
};
module.exports = function () {
  const database = config.get("db");
  const connection = mysql.createConnection(sqlConfig);
  connection.connect((err) => {
    if (err) console.log(err);
    console.log(`Connected to ${database}...`);
  });
  return connection;
};
const connection = mysql.createConnection(sqlConfig);
module.exports.db = connection;
