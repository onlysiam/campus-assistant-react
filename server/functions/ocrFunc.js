module.exports.dataArrayMaker = function (data) {
  let arr = [];
  let str = "";
  [...data].forEach((element) => {
    if (element !== "\n") str = str + element;
    if (element === "\n" && str) {
      if (str) {
        arr.push(str);
        str = "";
      }
      str = "";
    }
  });
  return arr;
};

module.exports.dataArrayMarker = function (data) {
  digits = /1|2|3|4|5|6|7|8|9/;
  obj = { nameId: [], courses: [] };
  data.forEach((element) => {
    course = {};
    if (/Student|Name/.test(element)) obj.nameId.push(element);
    else {
      const arr = element.split(" ");
      if (arr.length > 9) {
        let time = "";
        arr.forEach((item, index) => {
          if (
            digits.test(item) &&
            item.length >= 6 &&
            item === item.toUpperCase() &&
            item.split(".").length === 2
          ) {
            course.course = item.split(".")[0];
            course.section = item.split(".")[1];
          }
          if (
            !digits.test(item) &&
            item.length === 3 &&
            item === item.toUpperCase()
          )
            course.faculy = item;
          if (
            digits.test(item) &&
            item.length >= 6 &&
            item === item.toUpperCase() &&
            item.split(".").length === 1
          ) {
            course.room = item;
          }
          if (/:/.test(item)) {
            time = time + " " + timeFormatter(arr, index);
          }
        });
        course.time = time.trim();
      }
    }
    if (!isEmpty(course)) obj.courses.push(course);
    course = {};
  });
  return obj;
};

module.exports.dataArrayMarkerV2 = function (data) {
  obj = { nameId: [], courses: [] };
  data.forEach((element) => {
    element = replaceSpace(element);
    course = {};
    if (/Student|Name/.test(element)) obj.nameId.push(element);
    else {
      const arr = element.split(" ");

      if (arr.length >= 6 && !/Course|Title/.test(element)) {
        length = arr.length;
        course.name = arr[1];
        course.section = arr[1][arr[1].length - 1];
        course.faculty = arr[length - 3];
        course.room = arr[length - 2];
        course.time = arr[length - 1];
      }
    }
    if (!isEmpty(course)) obj.courses.push(course);
    course = {};
  });
  return obj;
};

function timeFormatter(arr, index) {
  const time = arr[index] + arr[index + 1] + " " + arr[index + 2];
  return time;
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function replaceSpace(element) {
  let str = "";
  let arr = element.split(" ");
  arr.forEach((item) => {
    if (item !== "") str = str + " " + item;
  });
  return str.trim();
}
