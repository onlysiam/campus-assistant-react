import { React, useEffect, useState } from "react";
import { scroller } from "react-scroll";

import bl from "../../img/bl.png";
import tl from "../../img/tl.png";
import br from "../../img/br.png";
import tr from "../../img/tr.png";

import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Sac4 = ({
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
  const [sac4, setSac4] = useState(roomDataSac[2]);
  const [sac401, setSac401] = useState(roomDataSac[2][0]);
  const [sac402, setSac402] = useState(roomDataSac[2][1]);
  const [sac403, setSac403] = useState(roomDataSac[2][2]);
  const [sac404, setSac404] = useState(roomDataSac[2][3]);
  const [sac405, setSac405] = useState(roomDataSac[2][4]);
  const [sac406, setSac406] = useState(roomDataSac[2][5]);
  const [sac407, setSac407] = useState(roomDataSac[2][6]);
  const [sac408, setSac408] = useState(roomDataSac[2][7]);
  const [sac409, setSac409] = useState(roomDataSac[2][8]);
  const [sac410, setSac410] = useState(roomDataSac[2][9]);
  const [sac411, setSac411] = useState(roomDataSac[2][10]);
  const [sac412, setSac412] = useState(roomDataSac[2][11]);
  const [sac413, setSac413] = useState(roomDataSac[2][12]);
  const [sac414, setSac414] = useState(roomDataSac[2][13]);
  const [sac415, setSac415] = useState(roomDataSac[2][14]);
  const [sac416, setSac416] = useState(roomDataSac[2][15]);
  const [sac417, setSac417] = useState(roomDataSac[2][16]);

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
      for (j = 0; j < sac4.length; j++) {
        if (coursedata[i].room === sac4[j].name) {
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
      if (matchedroom[i] === "SAC401") {
        setSac401((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC402") {
        setSac402((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC403") {
        setSac403((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC404") {
        setSac404((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC405") {
        setSac405((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC406") {
        setSac406((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC407") {
        setSac407((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC408") {
        setSac408((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC409") {
        setSac409((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC410") {
        setSac410((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC411") {
        setSac411((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC412") {
        setSac412((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC413") {
        setSac413((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC414") {
        setSac414((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC415") {
        setSac415((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC416") {
        setSac416((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedroom[i] === "SAC417") {
        setSac417((prevState) => ({
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
        if (matchedroom[i] === "SAC401") {
          setSac401((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC402") {
          setSac402((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC403") {
          setSac403((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC404") {
          setSac404((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC405") {
          setSac405((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC406") {
          setSac406((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC407") {
          setSac407((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC408") {
          setSac408((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC409") {
          setSac409((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC410") {
          setSac410((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC411") {
          setSac411((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC412") {
          setSac412((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC413") {
          setSac413((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC414") {
          setSac414((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC415") {
          setSac415((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC415") {
          setSac415((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC416") {
          setSac416((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (matchedroom[i] === "SAC417") {
          setSac417((prevState) => ({
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
              className="401"
              style={{
                border: `2px solid ${sac401.br}`,
                backgroundColor: `${sac401.bg}`,
                width: `${sac401.w}`,
                height: `${sac401.h}`,
              }}
            >
              SAC401
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="402"
              style={{
                border: `2px solid ${sac402.br}`,
                backgroundColor: `${sac402.bg}`,
                width: `${sac402.w}`,
                height: `${sac402.h}`,
              }}
            >
              SAC402
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="403"
              style={{
                border: `2px solid ${sac403.br}`,
                backgroundColor: `${sac403.bg}`,
                width: `${sac403.w}`,
                height: `${sac403.h}`,
              }}
            >
              SAC403
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="404"
              style={{
                border: `2px solid ${sac404.br}`,
                backgroundColor: `${sac404.bg}`,
                width: `${sac404.w}`,
                height: `${sac404.h}`,
              }}
            >
              SAC404
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="405"
              style={{
                border: `2px solid ${sac405.br}`,
                backgroundColor: `${sac405.bg}`,
                width: `${sac405.w}`,
                height: `${sac405.h}`,
              }}
            >
              SAC405
            </h1>
            <img src={br} alt="" />
          </div>

          <div className="room">
            <h1
              className="406"
              style={{
                border: `2px solid ${sac406.br}`,
                backgroundColor: `${sac406.bg}`,
                width: `${sac406.w}`,
                height: `${sac406.h}`,
              }}
            >
              SAC406
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="407"
              style={{
                border: `2px solid ${sac407.br}`,
                backgroundColor: `${sac407.bg}`,
                width: `${sac407.w}`,
                height: `${sac407.h}`,
              }}
            >
              SAC407
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="408"
              style={{
                border: `2px solid ${sac408.br}`,
                backgroundColor: `${sac408.bg}`,
                width: `${sac408.w}`,
                height: `${sac408.h}`,
              }}
            >
              SAC408
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="409"
              style={{
                border: `2px solid ${sac409.br}`,
                backgroundColor: `${sac409.bg}`,
                width: `${sac409.w}`,
                height: `${sac409.h}`,
              }}
            >
              SAC409
            </h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1
              className="410"
              style={{
                border: `2px solid ${sac410.br}`,
                backgroundColor: `${sac410.bg}`,
                width: `${sac410.w}`,
                height: `${sac410.h}`,
              }}
            >
              SAC410
            </h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1
              className="411"
              style={{
                border: `2px solid ${sac411.br}`,
                backgroundColor: `${sac411.bg}`,
                width: `${sac411.w}`,
                height: `${sac411.h}`,
              }}
            >
              SAC411
            </h1>
            <img src={tr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 4th FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="room">
            <h1>SAC417</h1>
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
          <div className="room">
            <h1
              className="417"
              style={{
                border: `2px solid ${sac417.br}`,
                backgroundColor: `${sac417.bg}`,
                width: `${sac417.w}`,
                height: `${sac417.h}`,
              }}
            >
              SAC417
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1
              className="416"
              style={{
                border: `2px solid ${sac416.br}`,
                backgroundColor: `${sac416.bg}`,
                width: `${sac416.w}`,
                height: `${sac416.h}`,
              }}
            >
              SAC416
            </h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1
              className="415"
              style={{
                border: `2px solid ${sac415.br}`,
                backgroundColor: `${sac415.bg}`,
                width: `${sac415.w}`,
                height: `${sac415.h}`,
              }}
            >
              SAC415
            </h1>
            <img src={bl} alt="" />
          </div>

          <div className="lift">
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
              className="414"
              style={{
                border: `2px solid ${sac414.br}`,
                backgroundColor: `${sac414.bg}`,
                width: `${sac414.w}`,
                height: `${sac414.h}`,
              }}
            >
              SAC414
            </h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1
              className="413"
              style={{
                border: `2px solid ${sac413.br}`,
                backgroundColor: `${sac413.bg}`,
                width: `${sac413.w}`,
                height: `${sac413.h}`,
              }}
            >
              SAC413
            </h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1
              className="412"
              style={{
                border: `2px solid ${sac412.br}`,
                backgroundColor: `${sac412.bg}`,
                width: `${sac412.w}`,
                height: `${sac412.h}`,
              }}
            >
              SAC412
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

export default Sac4;
