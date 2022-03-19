const { db } = require("../startup/db");

module.exports.usersCoursesFinder = function (obj, semester) {
  let newObj = { ...obj.nameId, courses: [] };
  return new Promise((resolve, reject) => {
    obj.courses.forEach((element, index) => {
      const slicedCourse = divideString(element.course);
      db.query(
        "SELECT * FROM semesters_courses WHERE course_initial LIKE CONCAT(?,'%') AND course_initial LIKE CONCAT('%',?) AND section = ? AND semester LIKE CONCAT(?,'%')",
        [
          slicedCourse.firstPart,
          slicedCourse.secondPart,
          element.section,
          semester,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          newObj.courses.push(result[0]);
          if (index === obj.courses.length - 1) {
            resolve(newObj);
          }
        }
      );
    });
  });
};
function divideString(coursename) {
  if (coursename) {
    const firstPart = coursename.slice(0, 3);
    const secondPart = coursename.slice(-3);
    return { firstPart, secondPart };
  }
  return "no data";
}
