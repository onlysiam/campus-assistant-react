import { React, useEffect, useState } from "react";
import { scroller } from "react-scroll";

import bl from "../../img/bl.png";
import br from "../../img/br.png";

import labbl from "../../img/labbl.png";
import labtl from "../../img/labtl.png";
import labbr from "../../img/labbr.png";
import labtr from "../../img/labtr.png";
import bridge from "../../img/bridge.png";

import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Sac5 = ({
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
  const [sac5, setSac5] = useState(roomDataSac[3]);
  const [sac501, setSac501] = useState(roomDataSac[3][0]);
  const [sac502, setSac502] = useState(roomDataSac[3][1]);
  const [sac503, setSac503] = useState(roomDataSac[3][2]);
  const [sac504, setSac504] = useState(roomDataSac[3][3]);
  const [sac505, setSac505] = useState(roomDataSac[3][4]);
  const [sac506, setSac506] = useState(roomDataSac[3][5]);
  const [sac507, setSac507] = useState(roomDataSac[3][6]);
  const [sac508, setSac508] = useState(roomDataSac[3][7]);
  const [sac509, setSac509] = useState(roomDataSac[3][8]);
  const [sac510, setSac510] = useState(roomDataSac[3][9]);

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
      for (j = 0; j < sac5.length; j++) {
        if (coursedata[i].room === sac5[j].name) {
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
      if (matchedroom[i] === "SAC501") {
        setSac501((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC502") {
        setSac502((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC503") {
        setSac503((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC504") {
        setSac504((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC505") {
        setSac505((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC506") {
        setSac506((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC507") {
        setSac507((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC508") {
        setSac508((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC509") {
        setSac509((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC510") {
        setSac510((prevState) => ({
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
        if (matchedroom[i] === "SAC501") {
          setSac501((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC502") {
          setSac502((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC503") {
          setSac503((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC504") {
          setSac504((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC505") {
          setSac505((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC506") {
          setSac506((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC507") {
          setSac507((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC508") {
          setSac508((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC509") {
          setSac509((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC510") {
          setSac510((prevState) => ({
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
            <h1>
              Bridge
              <br />
              Enterance
            </h1>
            <img src={bridge} alt="" />
          </div>
          <div className="room">
            <h1
              className="501"
              style={{
                border: `2px solid ${sac501.br}`,
                backgroundColor: `${sac501.bg}`,
                width: `${sac501.w}`,
                height: `${sac501.h}`,
              }}
            >
              SAC501
            </h1>
            <img src={labbr} alt="" />
          </div>

          <div className="empty"></div>
          <div className="room">
            <h1
              className="502"
              style={{
                border: `2px solid ${sac502.br}`,
                backgroundColor: `${sac502.bg}`,
                width: `${sac502.w}`,
                height: `${sac502.h}`,
              }}
            >
              SAC502
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="503"
              style={{
                border: `2px solid ${sac503.br}`,
                backgroundColor: `${sac503.bg}`,
                width: `${sac503.w}`,
                height: `${sac503.h}`,
              }}
            >
              SAC503
            </h1>
            <img src={labtr} alt="" />
          </div>
          <div className="room">
            <h1
              className="504"
              style={{
                border: `2px solid ${sac504.br}`,
                backgroundColor: `${sac504.bg}`,
                width: `${sac504.w}`,
                height: `${sac504.h}`,
              }}
            >
              SAC504
            </h1>
            <img src={labbr} alt="" />
          </div>
          <div className="room">
            <h1
              className="505"
              style={{
                border: `2px solid ${sac505.br}`,
                backgroundColor: `${sac505.bg}`,
                width: `${sac505.w}`,
                height: `${sac505.h}`,
              }}
            >
              SAC505
            </h1>
            <img src={labtr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 5th FLOOR</h1>
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
              className="510"
              style={{
                border: `2px solid ${sac510.br}`,
                backgroundColor: `${sac510.bg}`,
                width: `${sac510.w}`,
                height: `${sac510.h}`,
              }}
            >
              SAC510
            </h1>
            <img src={labbl} alt="" />
          </div>
          <div className="room">
            <h1
              className="509"
              style={{
                border: `2px solid ${sac509.br}`,
                backgroundColor: `${sac509.bg}`,
                width: `${sac509.w}`,
                height: `${sac509.h}`,
              }}
            >
              SAC509
            </h1>
            <img src={labtl} alt="" />
          </div>
          <div className="room">
            <h1
              className="508"
              style={{
                border: `2px solid ${sac508.br}`,
                backgroundColor: `${sac508.bg}`,
                width: `${sac508.w}`,
                height: `${sac508.h}`,
              }}
            >
              SAC508
            </h1>
            <img src={labtl} alt="" />
          </div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="room">
            <h1
              className="507"
              style={{
                border: `2px solid ${sac507.br}`,
                backgroundColor: `${sac507.bg}`,
                width: `${sac507.w}`,
                height: `${sac507.h}`,
              }}
            >
              SAC507
            </h1>
            <img src={bl} alt="" />
          </div>

          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="room">
            <h1
              className="506"
              style={{
                border: `2px solid ${sac506.br}`,
                backgroundColor: `${sac506.bg}`,
                width: `${sac506.w}`,
                height: `${sac506.h}`,
              }}
            >
              SAC506
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

export default Sac5;
