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
const Sac2 = ({
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
  const [sac2, setSac2] = useState(roomDataSac[0]);
  const [sac201, setSac201] = useState(roomDataSac[0][0]);
  const [sac202, setSac202] = useState(roomDataSac[0][1]);
  const [sac203, setSac203] = useState(roomDataSac[0][2]);
  const [sac204, setSac204] = useState(roomDataSac[0][3]);
  const [sac205, setSac205] = useState(roomDataSac[0][4]);
  const [sac206, setSac206] = useState(roomDataSac[0][5]);
  const [sac207, setSac207] = useState(roomDataSac[0][6]);
  const [sac208, setSac208] = useState(roomDataSac[0][7]);
  const [sac209, setSac209] = useState(roomDataSac[0][8]);
  const [sac210, setSac210] = useState(roomDataSac[0][9]);
  const [sac211, setSac211] = useState(roomDataSac[0][10]);
  const [sac212, setSac212] = useState(roomDataSac[0][11]);
  const [sac213, setSac213] = useState(roomDataSac[0][12]);
  const [sac214, setSac214] = useState(roomDataSac[0][13]);

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
    // var time = todayday.getHours();
    // var min = todayday.getMinutes();
    var time = 11;
    var min = 19;
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
      for (j = 0; j < sac2.length; j++) {
        if (coursedata[i].room === sac2[j].name) {
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
      if (matchedroom[i] === "SAC201") {
        setSac201((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC202") {
        setSac202((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC203") {
        setSac203((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC204") {
        setSac204((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC205") {
        setSac205((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC206") {
        setSac206((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC207") {
        setSac207((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC208") {
        setSac208((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC209") {
        setSac209((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC210") {
        setSac210((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC211") {
        setSac211((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC212") {
        setSac212((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC213") {
        setSac213((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC214") {
        setSac214((prevState) => ({
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
        if (matchedroom[i] === "SAC201") {
          setSac201((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC202") {
          setSac202((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC203") {
          setSac203((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC204") {
          setSac204((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC205") {
          setSac205((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC206") {
          setSac206((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC207") {
          setSac207((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC208") {
          setSac208((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC209") {
          setSac209((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC210") {
          setSac210((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC211") {
          setSac211((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC212") {
          setSac212((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC213") {
          setSac213((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC214") {
          setSac214((prevState) => ({
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
              className="201"
              style={{
                border: `2px solid ${sac201.br}`,
                backgroundColor: `${sac201.bg}`,
                width: `${sac201.w}`,
                height: `${sac201.h}`,
              }}
            >
              SAC201
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="203"
              style={{
                border: `2px solid ${sac203.br}`,
                backgroundColor: `${sac203.bg}`,
                width: `${sac203.w}`,
                height: `${sac203.h}`,
              }}
            >
              SAC203
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <img src={door} className="door" alt="" />
          </div>
          <div className="room">
            <h1
              className="204"
              style={{
                border: `2px solid ${sac204.br}`,
                backgroundColor: `${sac204.bg}`,
                width: `${sac204.w}`,
                height: `${sac204.h}`,
              }}
            >
              SAC204
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="205"
              style={{
                border: `2px solid ${sac205.br}`,
                backgroundColor: `${sac205.bg}`,
                width: `${sac205.w}`,
                height: `${sac205.h}`,
              }}
            >
              SAC205
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="206"
              style={{
                border: `2px solid ${sac206.br}`,
                backgroundColor: `${sac206.bg}`,
                width: `${sac206.w}`,
                height: `${sac206.h}`,
              }}
            >
              SAC206
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="207"
              style={{
                border: `2px solid ${sac207.br}`,
                backgroundColor: `${sac207.bg}`,
                width: `${sac207.w}`,
                height: `${sac207.h}`,
              }}
            >
              SAC207
            </h1>
            <img src={tr} alt="" />
          </div>{" "}
          <div className="room">
            <h1
              className="208"
              style={{
                border: `2px solid ${sac208.br}`,
                backgroundColor: `${sac208.bg}`,
                width: `${sac208.w}`,
                height: `${sac208.h}`,
              }}
            >
              SAC208
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="209"
              style={{
                border: `2px solid ${sac209.br}`,
                backgroundColor: `${sac209.bg}`,
                width: `${sac209.w}`,
                height: `${sac209.h}`,
              }}
            >
              SAC209
            </h1>

            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="210"
              style={{
                border: `2px solid ${sac210.br}`,
                backgroundColor: `${sac210.bg}`,
                width: `${sac210.w}`,
                height: `${sac210.h}`,
              }}
            >
              SAC210
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="211"
              style={{
                border: `2px solid ${sac211.br}`,
                backgroundColor: `${sac211.bg}`,
                width: `${sac211.w}`,
                height: `${sac211.h}`,
              }}
            >
              SAC211
            </h1>
            <img src={tr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 2nd FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="room">
            <h1
              className="202"
              style={{
                border: `2px solid ${sac202.br}`,
                backgroundColor: `${sac202.bg}`,
                width: `${sac202.w}`,
                height: `${sac202.h}`,
              }}
            >
              SAC202
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>
          <div className="empty"></div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="room">
            <h1
              className="214"
              style={{
                border: `2px solid ${sac214.br}`,
                backgroundColor: `${sac214.bg}`,
                width: `${sac214.w}`,
                height: `${sac214.h}`,
              }}
            >
              SAC214
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1
              className="213"
              style={{
                border: `2px solid ${sac213.br}`,
                backgroundColor: `${sac213.bg}`,
                width: `${sac213.w}`,
                height: `${sac213.h}`,
              }}
            >
              SAC213
            </h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1
              className="212"
              style={{
                border: `2px solid ${sac212.br}`,
                backgroundColor: `${sac212.bg}`,
                width: `${sac212.w}`,
                height: `${sac212.h}`,
              }}
            >
              SAC212
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
        height: 80.5px;

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
        height: 583px;
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

export default Sac2;
