const arr = [
  "Student Name: Sium Ahmed Advisor: #1610861# ID# 161 0861 042",
  "Sl. Course Course Title Faculty Room Schedule",
  "1. BIOI103L.6 Biology I Lab. ZAB SAC415 01:00 PM - 04:10 PM M",
  "2. CSE411.2 Advanced Database Sy. SRB SAC314 09:40 AM - 11:10 AM RA",
  "3. MATI120.7 Calculus and Analyti. SWK NACS507 02:40 PM - 04:10 PM RA",
  "4. MAT361.12 Probability and Stat. HMN NACS503 11:20 AM - 12:50 PM RA",
  "Tuition Total:",
];

function dataArrayMarker(data) {
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
            course.course = item;
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
            time = time + item + arr[index + 1] + arr[index + 2];
          }
        });
        course.time = time;
      }
    }
    if (!isEmpty(course)) obj.courses.push(course);
    course = {};
  });
  return obj;
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const arr2 = [
  "Student Name: Sium Ahmed Advisor: #1610861# ID# 161 0861 042",
  "SL Course Course Title Faculty Room Schedule",
  "1 BIOISL6  BiologyILab. ZAB SACAIS OLOOPM-0410PMM",
  "2 CSEM12  AdvancedDatbaseSy SRB  SAC3M4 09:40AM-IL10AMRA",
  "5 MATINT  CaleolvsandAmaly  SWK  NACSO7 02:40PM-04:10PMRA",
  "4 MATI6I12  ProbabiliyandSmt  HMN  NACS03 1120AM-1250PMRA",
  "Tuition Total:",
];
function replaceSpace(element) {
  let str = "";
  let arr = element.split(" ");
  arr.forEach((item) => {
    if (item !== "") str = str + " " + item;
  });
  return str.trim();
}

function dataArrayMarkerV2(data) {
  digits = /1|2|3|4|5|6|7|8|9/;
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
}

console.log(dataArrayMarkerV2(arr2));
