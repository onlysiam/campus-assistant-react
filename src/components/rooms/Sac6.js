import { React, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import bl from "../../img/bl.png";
import br from "../../img/br.png";

import labbl from "../../img/labbl.png";
import labtl from "../../img/labtl.png";
import labbr from "../../img/labbr.png";
import labtr from "../../img/labtr.png";
import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Sac6 = ({
  setpreloader,
  roomDataSac,
  coursedata,
  currentclassroom,
  mapviewCurrent,
  setmapviewCurrent,
  mapviewUpcoming,
  setmapviewUpcoming,
  upcomingclassroom,
  setUpcomingclassroom,
  currentclass,
}) => {
  const [sac6, setSac6] = useState(roomDataSac[4]);
  const [sac601, setSac601] = useState(roomDataSac[4][0]);
  const [sac602, setSac602] = useState(roomDataSac[4][1]);
  const [sac603, setSac603] = useState(roomDataSac[4][2]);
  const [sac604, setSac604] = useState(roomDataSac[4][3]);
  const [sac605, setSac605] = useState(roomDataSac[4][4]);
  const [sac606, setSac606] = useState(roomDataSac[4][5]);
  const [sac607, setSac607] = useState(roomDataSac[4][6]);
  const [sac608, setSac608] = useState(roomDataSac[4][7]);
  const [sac609, setSac609] = useState(roomDataSac[4][8]);
  const [sac610, setSac610] = useState(roomDataSac[4][9]);
  const [sac611, setSac611] = useState(roomDataSac[4][10]);

  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);

    var upclass = currentclassroom.split("");
    var room = parseInt(upclass[3] + upclass[4] + upclass[5]);
    console.log(room);
    if (mapviewCurrent) {
      var upclass = currentclassroom.split("");
      var room = parseInt(upclass[3] + upclass[4] + upclass[5]);
      scroller.scrollTo(room, {
        duration: 800,
        delay: 0,
        offset: 650,
        smooth: "easeInOutQuart",
      });
      setmapviewCurrent(false);
    }
    if (mapviewUpcoming) {
      var upclass = upcomingclassroom.split("");
      var room = parseInt(upclass[3] + upclass[4] + upclass[5]);
      scroller.scrollTo(room, {
        duration: 800,
        delay: 0,
        offset: 650,
        smooth: "easeInOutQuart",
      });
      setmapviewUpcoming(false);
    }
    var todayday = new Date();
    var time = 11;
    var min = 21;

    var currentTime = time * 60 + min;
    var currentCourseStartTime;
    var currentCourseEndTime;

    var i;
    var j;
    var k = 0;
    var matchedroom = [];
    var matchedroomtimestmp = [];
    var matchedroomtimesMintmp = [];
    var matchedroomtimes = [];
    var matchedroomtimesMin = [];
    var roomcourse = [];

    for (i = 0; i < coursedata.length; i++) {
      for (j = 0; j < sac6.length; j++) {
        if (coursedata[i].room === sac6[j].name) {
          matchedroom[k] = coursedata[i].room;
          roomcourse[k] = coursedata[i].code;

          if (coursedata[i].code === currentclass) {
            matchedroomtimestmp[k] = coursedata[i].stime.split(":");
            matchedroomtimes[k] = matchedroomtimestmp[k][0];

            matchedroomtimesMintmp[k] = coursedata[i].stime.split(":");
            var matchedroomtimesMinit = matchedroomtimesMintmp[k][1].split(" ");
            matchedroomtimesMin[k] = matchedroomtimesMinit[0];

            var coursehour = parseInt(matchedroomtimes[k]);
            if (coursehour < 7) {
              var tmp = coursehour + 12;
              currentCourseStartTime =
                tmp * 60 + parseInt(matchedroomtimesMin[k]);
            } else {
              currentCourseStartTime =
                parseInt(matchedroomtimes[k]) * 60 +
                parseInt(matchedroomtimesMin[k]);
            }
          }

          k++;
        }
      }
    }
    for (i = 0; i < matchedroom.length; i++) {
      if (matchedroom[i] === "SAC601") {
        setSac601((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC602") {
        setSac602((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC603") {
        setSac603((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC604") {
        setSac604((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC605") {
        setSac605((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC606") {
        setSac606((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC607") {
        setSac607((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC608") {
        setSac608((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC609") {
        setSac609((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC610") {
        setSac610((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC611") {
        setSac611((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
    }

    currentCourseEndTime = currentCourseStartTime + 90;

    for (i = 0; i < matchedroom.length; i++) {
      if (
        roomcourse[i] === currentclass &&
        currentCourseStartTime <= currentTime &&
        currentTime <= currentCourseEndTime
      ) {
        if (matchedroom[i] === "SAC601") {
          setSac601((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC602") {
          setSac602((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC603") {
          setSac603((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC604") {
          setSac604((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC605") {
          setSac605((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC606") {
          setSac606((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC607") {
          setSac607((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC608") {
          setSac608((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC609") {
          setSac609((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC610") {
          setSac610((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC611") {
          setSac611((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
      }
    }
  }, []);
  return (
    <Body>
      <div className="largeSection">
        <div className="roomRowLeft">
          <div className="room">
            <h1
              className="601"
              style={{
                border: `2px solid ${sac601.br}`,
                backgroundColor: `${sac601.bg}`,
                width: `${sac601.w}`,
                height: `${sac601.h}`,
              }}
            >
              SAC601
            </h1>
            <img src={labbr} alt="" />
          </div>
          <div className="room">
            <h1
              className="602"
              style={{
                border: `2px solid ${sac602.br}`,
                backgroundColor: `${sac602.bg}`,
                width: `${sac602.w}`,
                height: `${sac602.h}`,
              }}
            >
              SAC602
            </h1>
            <img src={labtr} alt="" />
          </div>

          <div className="empty"></div>
          <div className="room">
            <h1
              className="603"
              style={{
                border: `2px solid ${sac603.br}`,
                backgroundColor: `${sac603.bg}`,
                width: `${sac603.w}`,
                height: `${sac603.h}`,
              }}
            >
              SAC603
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="604"
              style={{
                border: `2px solid ${sac604.br}`,
                backgroundColor: `${sac604.bg}`,
                width: `${sac604.w}`,
                height: `${sac604.h}`,
              }}
            >
              SAC604
            </h1>
            <img src={labtr} alt="" />
          </div>
          <div className="room">
            <h1
              className="605"
              style={{
                border: `2px solid ${sac605.br}`,
                backgroundColor: `${sac605.bg}`,
                width: `${sac605.w}`,
                height: `${sac605.h}`,
              }}
            >
              SAC605
            </h1>
            <img src={labbr} alt="" />
          </div>
          <div className="room">
            <h1
              className="606"
              style={{
                border: `2px solid ${sac606.br}`,
                backgroundColor: `${sac606.bg}`,
                width: `${sac606.w}`,
                height: `${sac606.h}`,
              }}
            >
              SAC606
            </h1>
            <img src={labtr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 6th FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>
          <div className="room">
            <h1
              className="611"
              style={{
                border: `2px solid ${sac611.br}`,
                backgroundColor: `${sac611.bg}`,
                width: `${sac611.w}`,
                height: `${sac611.h}`,
              }}
            >
              SAC611
            </h1>
            <img src={labbl} alt="" />
          </div>
          <div className="room">
            <h1
              className="610"
              style={{
                border: `2px solid ${sac610.br}`,
                backgroundColor: `${sac610.bg}`,
                width: `${sac610.w}`,
                height: `${sac610.h}`,
              }}
            >
              SAC610
            </h1>
            <img src={labtl} alt="" />
          </div>
          <div className="room">
            <h1
              className="609"
              style={{
                border: `2px solid ${sac609.br}`,
                backgroundColor: `${sac609.bg}`,
                width: `${sac609.w}`,
                height: `${sac609.h}`,
              }}
            >
              SAC609
            </h1>
            <img src={labtl} alt="" />
          </div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="room">
            <h1
              className="608"
              style={{
                border: `2px solid ${sac608.br}`,
                backgroundColor: `${sac608.bg}`,
                width: `${sac608.w}`,
                height: `${sac608.h}`,
              }}
            >
              SAC608
            </h1>
            <img src={bl} alt="" />
          </div>

          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="room">
            <h1
              className="607"
              style={{
                border: `2px solid ${sac607.br}`,
                backgroundColor: `${sac607.bg}`,
                width: `${sac607.w}`,
                height: `${sac607.h}`,
              }}
            >
              SAC607
            </h1>
            <img src={labtl} alt="" />
          </div>

          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
        </div>
      </div>
      <div className="smallSection"></div>
    </Body>
  );
};

const Body = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: scroll;
  background-color: black;
  .largeSection {
    overflow: visible;
    display: flex;
    justify-content: space-evenly;
    height: 150%;
    border: 5px solid #9c9c9c;
    .roomRowLeft {
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 15px;
      }
      .empty {
        background-color: transparent;
        height: 420px;
      }
      display: flex;
      flex-direction: column;
      width: 150px;
      .door {
      }
      .room {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      img {
        height: 165px;
        width: 150px;
      }
    }
    .corridor {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15vw;
      background-color: #18191a;
      h1 {
        color: wheat;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
    }
    .roomRowRight {
      display: flex;
      flex-direction: column;
      width: 150px;
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 15px;
      }
      .washroom {
        height: 85px;

        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      .empty {
        background-color: transparent;
        height: 70vh;
      }
      .room {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        h2 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      .lift {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      img {
        height: 165px;
      }
    }
  }

  @media (min-width: 800px) {
    height: 250%;
    .largeSection {
      display: flex;
      justify-content: space-evenly;
      height: 180%;
      border: 5px solid #9c9c9c;
      .roomRowLeft {
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
        .empty {
          background-color: transparent;
          height: 80vh;
        }
        display: flex;
        flex-direction: column;
        width: 220px;
        .door {
        }
        .room {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        img {
          height: 30vh;
          width: 220px;
        }
      }
      .corridor {
        width: 10vw;
        background-color: #18191a;
      }
      .roomRowRight {
        display: flex;
        flex-direction: column;
        width: 220px;
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
        .washroom {
          height: 15vh;

          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        .empty {
          background-color: transparent;
          height: 90vh;
        }
        .room {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
          h2 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        .lift {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        img {
          height: 30vh;
          width: 220px;
        }
      }
    }
  }
`;

export default Sac6;
