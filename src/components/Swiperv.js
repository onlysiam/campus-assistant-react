import React, { useEffect, useState } from "react";
import Axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

//bg image
import reminderimg from "../img/reminder.png";
import creditimg from "../img/swiperbgcredit.jpg";
import creditimgStarted from "../img/swiperbgcreditStarted.jpg";

import styled from "styled-components";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Swiperslidesv({
  cgpa,
  credit,
  totalcredit,
  coursedata,
  weekdayinitial,
  setWeekdayinitial,
  upcomingclass,
  setUpcomingclass,
  upcomingclasstime,
  setUpcomingclasstime,
  upcomingclassroom,
  setUpcomingclassroom,
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
  const mapviewhandler = () => {
    if (currentclassroom) setmapviewCurrent(true);
    if (upcomingclassroom) setmapviewUpcoming(true);
    var upclass = upcomingclassroom.split("C");
    if (upclass[0] === "SA") history.push("/sac");
    if (upclass[0] === "NA") history.push("/nac");
  };
  return (
    <>
      <Body>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={5}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="upClass">
            {currentclass === "No Classes" || currentclass === "" ? (
              <h1>UPCOMING CLASS</h1>
            ) : (
              <h1>CURRENT CLASS</h1>
            )}
            {currentclass === "No Classes" || currentclass === "" ? (
              <h2>{upcomingclass}</h2>
            ) : (
              <h2>{currentclass}</h2>
            )}
            {currentclass === "No Classes" || currentclass === "" ? (
              <p>{upcomingclasstime}</p>
            ) : (
              <p>{currentclassroom}</p>
            )}
            <h3>{classStarted}</h3>
            {upcomingclass !== "No More Classes Today" ||
            upcomingclass === "" ? (
              <button onClick={mapviewhandler}>Map View</button>
            ) : (
              ""
            )}
            {classStatus ? (
              <img src={creditimgStarted} alt="" />
            ) : (
              <img src={creditimg} alt="" />
            )}
          </SwiperSlide>
          <SwiperSlide className="reminder">
            <h1>REMINDER</h1>
            <h2>{upcomingclass}</h2>
            <p>{notesReminder}</p>
            <p>{upcomingclasstime}</p>
            <img src={reminderimg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="cgpa">
            <h1>CUMULATIVE GPA</h1>
            <h2>{cgpa}</h2>
            <img src={reminderimg} alt="" />
          </SwiperSlide>
          <SwiperSlide className="credit">
            <h1>CREDIT HOUR</h1>
            <h2>{credit} Completed</h2>
            <p>Total Credit Hour : {totalcredit}</p>
            <img src={creditimg} alt="" />
          </SwiperSlide>
        </Swiper>
      </Body>
    </>
  );
}

const Body = styled.div`
  h1 {
    position: absolute;
    color: white;
    font-size: 2vh;
    top: 0;
    left: 0;
    padding: 5px 10px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-top: 2.5vh;

    .swiper-slide {
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;

      display: flex;
      flex-direction: column;
      align-items: center;

      background: #fff;
      color: white;
      height: 15vh;
      width: 54vw;
      border-radius: 10px;
    }

    .upClass {
      background-color: #237e83;
      h1 {
        z-index: 2;
      }
      h2 {
        margin-top: 10px;
        font-size: 2vh;
        z-index: 2;
      }
      h3 {
        font-size: 2.5vh;
        z-index: 2;
      }
      p {
        z-index: 2;
      }
      button {
        position: absolute;
        height: 5vh;
        width: 3rem;
        left: 5px;
        bottom: 5px;
        background-color: #249096;
        color: white;
        font-size: 10px;
        font-weight: 600;
        outline: none;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        z-index: 2;
      }
    }

    .reminder {
      background-color: #50c2c9;
      h1 {
        z-index: 2;
      }
      h2 {
        font-size: 18px;
        margin-top: 3vh;
        z-index: 2;
      }
      p {
        font-size: 14px;
        padding: 5px 5px;
        z-index: 2;
      }
    }
    .cgpa {
      background-color: #237e83;
      h1 {
        z-index: 2;
      }
      h2 {
        z-index: 2;
      }
    }
    .credit {
      background-color: #50c2c9;
      h1 {
        z-index: 2;
      }
      h2 {
        margin-top: 2vh;
        text-align: center;
        font-size: 2vh;
        z-index: 2;
      }

      p {
        z-index: 2;
      }
    }
  }

  .swiper-slide img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #50c2c9;
  }
  @media (min-width: 800px) {
    .swiper-slide {
      height: 40vh;
      width: 30vw;
    }
  }
`;
