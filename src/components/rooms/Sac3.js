import { React, useEffect, useState } from "react";
import { scroller } from "react-scroll";

import bl from "../../img/bl.png";
import tl from "../../img/tl.png";
import br from "../../img/br.png";
import tr from "../../img/tr.png";

import door from "../../img/door.png";
import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Sac3 = ({
  setpreloader,
  roomDataSac,
  coursedata,
  currentclassroom,
  mapviewCurrent,
  setmapviewCurrent,
  mapviewUpcoming,
  setmapviewUpcoming,
  currentclass,
  upcomingclassroom,
  setUpcomingclassroom,
}) => {
  const [sac3, setSac3] = useState(roomDataSac[1]);
  const [sac301, setSac301] = useState(roomDataSac[1][0]);
  const [sac302, setSac302] = useState(roomDataSac[1][1]);
  const [sac303, setSac303] = useState(roomDataSac[1][2]);
  const [sac304, setSac304] = useState(roomDataSac[1][3]);
  const [sac305, setSac305] = useState(roomDataSac[1][4]);
  const [sac306, setSac306] = useState(roomDataSac[1][5]);
  const [sac307, setSac307] = useState(roomDataSac[1][6]);
  const [sac308, setSac308] = useState(roomDataSac[1][7]);
  const [sac309, setSac309] = useState(roomDataSac[1][8]);
  const [sac310, setSac310] = useState(roomDataSac[1][9]);
  const [sac311, setSac311] = useState(roomDataSac[1][10]);
  const [sac312, setSac312] = useState(roomDataSac[1][11]);
  const [sac313, setSac313] = useState(roomDataSac[1][12]);
  const [sac314, setSac314] = useState(roomDataSac[1][13]);
  const [sac315, setSac315] = useState(roomDataSac[1][14]);
  const [sac316, setSac316] = useState(roomDataSac[1][15]);

  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);

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
    var time = todayday.getHours();
    var min = todayday.getMinutes();

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
      for (j = 0; j < sac3.length; j++) {
        if (coursedata[i].room === sac3[j].name) {
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
    console.log(matchedroom);
    for (i = 0; i < matchedroom.length; i++) {
      if (matchedroom[i] === "SAC301") {
        setSac301((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC302") {
        setSac302((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC303") {
        setSac303((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC304") {
        setSac304((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC305") {
        setSac305((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC306") {
        setSac306((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC307") {
        setSac307((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC308") {
        setSac308((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC309") {
        setSac309((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC310") {
        setSac310((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC311") {
        setSac311((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC312") {
        setSac312((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC313") {
        setSac313((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC314") {
        setSac314((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC315") {
        setSac315((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC316") {
        setSac316((prevState) => ({
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
        if (matchedroom[i] === "SAC301") {
          setSac301((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC302") {
          setSac302((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC303") {
          setSac303((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC304") {
          setSac304((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC305") {
          setSac305((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC306") {
          setSac306((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC307") {
          setSac307((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC308") {
          setSac308((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC309") {
          setSac309((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC310") {
          setSac310((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC311") {
          setSac311((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC312") {
          setSac312((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC313") {
          setSac313((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC314") {
          setSac314((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC315") {
          setSac315((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC316") {
          setSac316((prevState) => ({
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
              className="302"
              style={{
                border: `2px solid ${sac302.br}`,
                backgroundColor: `${sac302.bg}`,
                width: `${sac302.w}`,
                height: `${sac302.h}`,
              }}
            >
              SAC302
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="301"
              style={{
                border: `2px solid ${sac301.br}`,
                backgroundColor: `${sac301.bg}`,
                width: `${sac301.w}`,
                height: `${sac301.h}`,
              }}
            >
              SAC301
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <img src={door} className="door" alt="" />
          </div>
          <div className="room">
            <h1
              className="316"
              style={{
                border: `2px solid ${sac316.br}`,
                backgroundColor: `${sac316.bg}`,
                width: `${sac316.w}`,
                height: `${sac316.h}`,
              }}
            >
              SAC316
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="315"
              style={{
                border: `2px solid ${sac315.br}`,
                backgroundColor: `${sac315.bg}`,
                width: `${sac315.w}`,
                height: `${sac315.h}`,
              }}
            >
              SAC315
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="314"
              style={{
                border: `2px solid ${sac314.br}`,
                backgroundColor: `${sac314.bg}`,
                width: `${sac314.w}`,
                height: `${sac314.h}`,
              }}
            >
              SAC314
            </h1>
            <img src={br} alt="" />
          </div>

          <div className="room">
            <img src={door} className="door" alt="" />
          </div>
          <div className="room">
            <h1
              className="313"
              style={{
                border: `2px solid ${sac313.br}`,
                backgroundColor: `${sac313.bg}`,
                width: `${sac313.w}`,
                height: `${sac313.h}`,
              }}
            >
              SAC313
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="312"
              style={{
                border: `2px solid ${sac312.br}`,
                backgroundColor: `${sac312.bg}`,
                width: `${sac312.w}`,
                height: `${sac312.h}`,
              }}
            >
              SAC312
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="311"
              style={{
                border: `2px solid ${sac311.br}`,
                backgroundColor: `${sac311.bg}`,
                width: `${sac311.w}`,
                height: `${sac311.h}`,
              }}
            >
              SAC311
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="310"
              style={{
                border: `2px solid ${sac310.br}`,
                backgroundColor: `${sac310.bg}`,
                width: `${sac310.w}`,
                height: `${sac310.h}`,
              }}
            >
              SAC310
            </h1>
            <img src={tr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 3rd FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="room">
            <h1
              className="303"
              style={{
                border: `2px solid ${sac303.br}`,
                backgroundColor: `${sac303.bg}`,
                width: `${sac303.w}`,
                height: `${sac303.h}`,
              }}
            >
              SAC303
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="room">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>
          <div className="room">
            <h1
              className="304"
              style={{
                border: `2px solid ${sac304.br}`,
                backgroundColor: `${sac304.bg}`,
                width: `${sac304.w}`,
                height: `${sac304.h}`,
              }}
            >
              SAC304
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1
              className="305"
              style={{
                border: `2px solid ${sac305.br}`,
                backgroundColor: `${sac305.bg}`,
                width: `${sac305.w}`,
                height: `${sac305.h}`,
              }}
            >
              SAC305
            </h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1
              className="306"
              style={{
                border: `2px solid ${sac306.br}`,
                backgroundColor: `${sac306.bg}`,
                width: `${sac306.w}`,
                height: `${sac306.h}`,
              }}
            >
              SAC306
            </h1>
            <img src={bl} alt="" />
          </div>

          <div className="room">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="room">
            <h1
              className="307"
              style={{
                border: `2px solid ${sac307.br}`,
                backgroundColor: `${sac307.bg}`,
                width: `${sac307.w}`,
                height: `${sac307.h}`,
              }}
            >
              SAC307
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1
              className="308"
              style={{
                border: `2px solid ${sac308.br}`,
                backgroundColor: `${sac308.bg}`,
                width: `${sac308.w}`,
                height: `${sac308.h}`,
              }}
            >
              SAC308
            </h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1
              className="309"
              style={{
                border: `2px solid ${sac309.br}`,
                backgroundColor: `${sac309.bg}`,
                width: `${sac309.w}`,
                height: `${sac309.h}`,
              }}
            >
              SAC309
            </h1>
            <img src={tl} alt="" />
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
      display: flex;
      flex-direction: column;
      width: 150px;
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 15px;
      }
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
        height: 82.5px;

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
        display: flex;
        flex-direction: column;
        width: 220px;
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
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

export default Sac3;
