import React, { useEffect, useState } from "react";
import Axios from "axios";

import styled from "styled-components";
import creditimg from "../img/swiperbgcredit.jpg";
import { useHistory } from "react-router-dom";
export default function Desktopblock({
  cgpa,
  credit,
  totalcredit,
  coursedata,
  weekdayinitial,
  setWeekdayinitial,
  upcomingclass,
  setUpcomingclass,
  upcomingclasstime,
  upcomingclassroom,
  setUpcomingclassroom,
  setUpcomingclasstime,
  mapviewCurrent,
  setmapviewCurrent,
  mapviewUpcoming,
  setmapviewUpcoming,
  currentclassroom,
  setCurrentclassroom,
  currentclass,
  setCurrentclass,
  classStarted,
  setclassStarted,
  classStartedBg,
  setclassStartedBg,
  sem,
  classStatus,
  setclassStatus,
  notesReminder,
  setnotesReminder,
  courseNotesData,
}) {
  const history = useHistory();
  const [tempCurrentClass, setTempCurrentClas] = useState(currentclass);
  const [currentCourseStartTime, setcurrentCourseStartTime] = useState();
  const [currentCourseEndTime, setcurrentCourseEndTime] = useState();
  const [currentTimeGB, setcurrentTimeGB] = useState();
  useEffect(() => {
    let currentCourseStartTime;
    let currentCourseEndTime;
    var concatCC = "%" + currentclass;
    setTempCurrentClas(concatCC);
    var todayday = new Date();

    var weekdayNumber = 4;
    // var time = todayday.getHours();
    // var min = todayday.getMinutes();

    var time = 11;
    var min = 21;

    var today = weekdayinitial[weekdayNumber].name;
    var today2 = weekdayinitial[weekdayNumber].name2;

    var currentTime = time * 60 + min;
    setcurrentTimeGB(currentTime);
    var courseStartTime;
    var courseEndTime;

    var i;
    var j = 0;
    var nextCourseName = [];
    var nextCourseId = [];
    var nextCourseTime = [];
    var courseStartTimes = [];

    if (coursedata.length > 0) {
      for (i = 0; i < coursedata.length; i++) {
        if (coursedata[i].stime !== "TBA") {
          var courseshourtmp = coursedata[i].stime.split(":");
          var courseHour = parseInt(courseshourtmp[0]);
          var coursemintmp = coursedata[i].stime.split(":");
          var minittmp = coursemintmp[1].split(" ");
          var courseMin = parseInt(minittmp[0]);

          if (courseHour < 7) {
            var tmp = courseHour + 12;
            courseStartTime = tmp * 60 + courseMin;
            courseEndTime = courseStartTime + 90;
          } else {
            courseStartTime = courseHour * 60 + courseMin;
            courseEndTime = courseStartTime + 90;
          }

          if (
            (coursedata[i].day === today || coursedata[i].day === today2) &&
            (courseStartTime > currentTime || courseStartTime === currentTime)
          ) {
            nextCourseName[j] = coursedata[i].code;
            nextCourseId[j] = coursedata[i].courseID;
            nextCourseTime[j] = coursedata[i].stime;
            courseStartTimes[j] = courseStartTime;
            j++;
          }
          if (
            (coursedata[i].day === today || coursedata[i].day === today2) &&
            currentTime >= courseStartTime &&
            currentTime <= courseEndTime
          ) {
            setCurrentclass(coursedata[i].code);
            setcurrentCourseStartTime(courseStartTime);
            setcurrentCourseEndTime(courseEndTime);
            setCurrentclassroom(coursedata[i].stime);
          }

          if (
            (coursedata[i].day === today || coursedata[i].day === today2) &&
            currentTime > courseEndTime
          ) {
            setCurrentclass("No Classes");
            setCurrentclassroom("");
          }
        }
      }

      if (currentclass === "No Classes") {
        Axios.post("https://rds.onlysiam.com/api/classstatustoggle", {
          username: localStorage.getItem("userID"),
          course: "%" + currentclass + "%",
          semester: sem,
        }).then((response) => {
          if (response.data.message) {
          } else {
            if (response.data[0].status === "1") {
              setclassStarted("Started");
              setclassStartedBg("#02bd5f");
              setclassStatus(true);
            }

            if (response.data[0].status === "0") {
              setclassStarted("");
              setclassStartedBg("#42a5d6");
              setclassStatus(false);
            }
          }
        });
      }

      for (i = 0; i < j; i++) {
        if (courseStartTimes[0] > courseStartTimes[i]) {
          var tmp1 = courseStartTimes[0];
          courseStartTimes[0] = courseStartTimes[i];
          courseStartTimes[i] = tmp1;
          var tmp2 = nextCourseName[0];
          nextCourseName[0] = nextCourseName[i];
          nextCourseName[i] = tmp2;
          var tmp3 = nextCourseId[0];
          nextCourseId[0] = nextCourseId[i];
          nextCourseId[i] = tmp3;
          var tmp4 = nextCourseTime[0];
          nextCourseTime[0] = nextCourseTime[i];
          nextCourseTime[i] = tmp4;
        }
      }

      for (i = 0; i < coursedata.length; i++) {
        if (coursedata[i].courseID === nextCourseId[0] && nextCourseId[0]) {
          setUpcomingclass(coursedata[i].code);
          setUpcomingclassroom(coursedata[i].room);
          setUpcomingclasstime(coursedata[i].stime);
          break;
        } else {
          setUpcomingclass("No More Classes Today");
          setUpcomingclasstime("");
        }
      }
    } else {
      setUpcomingclass("No More Classes Today");
    }
    for (i = 0; i < courseNotesData.length; i++) {
      if (upcomingclass === courseNotesData[i].code) {
        setnotesReminder(courseNotesData[i].note);
        break;
      }
    }

    // if (!classStatus && currentCourseStartTime === currentTime) {
    //   classstatusfetch(
    //     currentCourseStartTime,
    //     currentCourseEndTime,
    //     currentTime
    //   );
    // }
  });

  const classstatusfetch = () => {
    var todayday = new Date();
    // var time = todayday.getHours();
    // var min = todayday.getMinutes();

    var time = 11;
    var min = 21;

    var currentTime = time * 60 + min;

    if (
      currentclass !== "No Classes" &&
      currentclass !== "" &&
      currentTime >= currentCourseStartTime
    ) {
      if (!classStatus && currentTime <= currentCourseEndTime) {
        Axios.post("https://rds.onlysiam.com/api/classstatus", {
          username: localStorage.getItem("userID"),
          course: "%" + currentclass + "%",
          semester: sem,
        }).then((response) => {
          if (response.data.message) {
            console.log(response.data.message);
          } else {
            if (response.data[0].status === "1") {
              setclassStarted("Started");
              setclassStartedBg("#02bd5f");
              setclassStatus(true);
            }

            if (response.data[0].status === "0") {
              setclassStarted("");
              setclassStartedBg("#42a5d6");
              setclassStatus(false);
            }
          }
        });
      }
    }
  };
  useEffect(() => {
    if (currentclass !== "No Classes") setInterval(classstatusfetch, 1000);
  }, [currentclass]);
  const mapviewhandlerCurrent = () => {
    setmapviewCurrent(true);
    var upclass = upcomingclassroom.split("C");
    if (upclass[0] === "SA") history.push("/sac");
    if (upclass[0] === "NA") history.push("/nac");
  };
  const mapviewhandlerUpcoming = () => {
    setmapviewUpcoming(true);
    var upclass = upcomingclassroom.split("C");
    if (upclass[0] === "SA") history.push("/sac");
    if (upclass[0] === "NA") history.push("/nac");
  };
  return (
    <Body bg1={creditimg} bg={classStartedBg}>
      <div className="cgpa block">
        <h1>CURRENT CLASS</h1>
        <h2>{currentclass}</h2>
        <p>{currentclassroom}</p>
        <h1>{classStarted}</h1>
        {currentclass !== "No Classes" || currentclass !== "" ? (
          <button onClick={mapviewhandlerCurrent}>Map View</button>
        ) : (
          ""
        )}
      </div>
      <div className="reminder block">
        <h1>REMINDER</h1>
        <h2>{upcomingclass}</h2>
        <p>{notesReminder}</p>
        <p>{upcomingclasstime}</p>
      </div>
      <div className="upClass block">
        <h1>UPCOMING CLASS</h1>
        <h2>{upcomingclass}</h2>
        <p>{upcomingclasstime}</p>

        {upcomingclass !== "No More Classes Today" ? (
          <button onClick={mapviewhandlerUpcoming}>Map View</button>
        ) : (
          ""
        )}
      </div>
      <div className="credit block">
        <h1>CREDIT HOUR</h1>
        <div className="credithour">
          <h2>{credit} Completed</h2>
          <p>Total Cr. : {totalcredit}</p>
        </div>
        <div className="gpa">
          <h1>CUMULATIVE GPA</h1>
          <h2>{cgpa}</h2>
        </div>
      </div>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 55vw;
  h1 {
    color: white;
    font-size: 1.8vw;
    top: 0;
    left: 0;
  }

  .block {
    width: 20vw;
    height: 20vh;
    margin: 0 0 0vh 5vw;
    border-radius: 10px;
    color: white;
    padding: 0px 10px;
    font-size: 1vw;
    cursor: default;
    button {
      height: 5vh;
      width: 4rem;
      float: right;
      background-color: #0abdc78b;
      color: white;
      font-size: 0.8vw;
      font-weight: 600;
      outline: none;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: 1s;
    }
    button:hover {
      background-color: #0f585c8a;
    }
  }
  .upClass {
    background-color: #4988b1;
    border: 2px solid transparent;
    transition: 1s ease;
    margin-bottom: 5vh;
    background-image: ${(props) => props.bg1};
    z-index: 2;
  }
  .upClass:hover {
    transform: scale(1.02);
  }
  .reminder {
    background-color: #6279a3;
    border: 2px solid transparent;
    transition: 1s ease;
    z-index: 2;
  }
  .reminder:hover {
    transform: scale(1.02);
  }
  .cgpa {
    background-color: ${(props) => props.bg};
    border: 2px solid transparent;
    transition: 1s ease;
    z-index: 2;
    button {
      margin-top: -40px;
    }
  }
  .cgpa:hover {
    transform: scale(1.02);
  }
  .credit {
    background-color: #5c6db9;
    border: 2px solid transparent;
    transition: 1s ease;
    margin-bottom: 5vh;
    z-index: 2;
    .credithour {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    h2 {
      color: white;
      font-size: 1vw;
    }
  }
  .credit:hover {
    transform: scale(1.02);
  }
`;
