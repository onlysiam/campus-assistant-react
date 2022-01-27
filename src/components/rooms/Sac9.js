import { React, useEffect, useState } from "react";
import { scroller } from "react-scroll";
import Axios from "axios";

import ofl from "../../img/ofl.png";
import ofm from "../../img/ofm.png";
import ofr from "../../img/ofr.png";
import oftl from "../../img/oftl.png";
import oftm from "../../img/oftm.png";
import oftr from "../../img/oftr.png";

import conferencer from "../../img/conferencer.png";

import ecedept from "../../img/ecedept.png";

import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Sac9 = ({
  setpreloader,
  roomDataSac,
  coursedata,
  currentclassroom,
  mapview,
  setmapview,
  currentclass,
  upcomingclassroom,
  setUpcomingclassroom,
  dept,
  setdept,
  facultyinfo,
  setfacultyinfo,
}) => {
  const [sac9, setSac9] = useState(roomDataSac[5]);
  const [sac922, setSac922] = useState(roomDataSac[5][0]);
  const [sac928, setSac928] = useState(roomDataSac[5][1]);
  const [sac935, setSac935] = useState(roomDataSac[5][2]);
  const [sac942, setSac942] = useState(roomDataSac[5][3]);
  const [sac947, setSac947] = useState(roomDataSac[5][4]);
  const [sac955, setSac955] = useState(roomDataSac[5][5]);

  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);

    var i;
    var matchedfaculty = [];
    var matchedfacultyroom = [];
    var facultystatus;

    for (i = 0; i < sac9.length; i++) {
      if (coursedata[i].faculty === sac9[i].faculty) {
        matchedfaculty[i] = sac9[i].faculty;
        matchedfacultyroom[i] = sac9[i].name;
      }
    }
    for (i = 0; i < coursedata.length; i++) {
      if (matchedfacultyroom[i] === "SAC922") {
        setSac922((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedfacultyroom[i] === "SAC928") {
        setSac928((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedfacultyroom[i] === "SAC935") {
        setSac935((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedfacultyroom[i] === "SAC942") {
        setSac942((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedfacultyroom[i] === "SAC947") {
        setSac947((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
      if (matchedfacultyroom[i] === "SAC955") {
        setSac955((prevState) => ({
          ...prevState,
          br: "red",
          bg: "#00000086",
          h: "165px",
          w: "150px",
        }));
      }
    }

    Axios.post("https://rds.onlysiam.com/api/facultystatus", {}).then(
      (response) => {
        if (response.data.length > 0) {
          setfacultyinfo(response.data);
        }
        if (response.data.message) {
        } else {
        }
      }
    );
  }, []);
  const classstatusfetch = () => {
    var i;
    var room = [];
    for (i = 0; i < facultyinfo.length; i++) {
      if (facultyinfo[i].status === "1") {
        room[i] = facultyinfo[i].room;
        if (room[i] === "SAC922") {
          setSac922((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#00000086",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC928") {
          setSac928((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC935") {
          setSac935((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC942") {
          setSac942((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC947") {
          setSac947((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC955") {
          setSac955((prevState) => ({
            ...prevState,
            br: "#84e46d",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
      }
      if (facultyinfo[i].status === "0") {
        room[i] = facultyinfo[i].room;
        if (room[i] === "SAC922") {
          setSac922((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#00000086",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC928") {
          setSac928((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC935") {
          setSac935((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC942") {
          setSac942((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC947") {
          setSac947((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
        if (room[i] === "SAC955") {
          setSac955((prevState) => ({
            ...prevState,
            br: "red",
            bg: "#7bf3b745",
            h: "165px",
            w: "150px",
          }));
        }
      }
    }
  };
  useEffect(() => {
    setInterval(classstatusfetch, 2000);
  });
  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);
    if (dept) {
      scroller.scrollTo("dept", {
        duration: 800,
        delay: 0,
        offset: 350,
        smooth: "easeInOutQuart",
      });
      setdept(false);
    }
  });
  return (
    <Body>
      <div className="largeSection">
        <div className="roomRowLeft">
          <div className="officeroom">
            <div className="officeroom">
              <div className="num">
                <h1>SAC (945-947)</h1>
              </div>
              <div className="bottomrow">
                <img src={ofl} alt="" />
                <img src={ofm} alt="" />
                <img
                  style={{
                    border: `2px solid ${sac947.br}`,
                    backgroundColor: `${sac947.bg}`,
                  }}
                  id="947"
                  src={ofr}
                  alt=""
                />
              </div>
            </div>
            <div className="toprow">
              <img
                style={{
                  border: `2px solid ${sac942.br}`,
                  backgroundColor: `${sac942.bg}`,
                }}
                id="942"
                src={oftl}
                alt=""
              />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (939-944)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>

          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (933-938)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img
                style={{
                  border: `2px solid ${sac935.br}`,
                  backgroundColor: `${sac935.bg}`,
                }}
                id="935"
                src={ofr}
                alt=""
              />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (927-932)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img
                style={{
                  border: `2px solid ${sac928.br}`,
                  backgroundColor: `${sac928.bg}`,
                }}
                id="928"
                src={ofm}
                alt=""
              />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="conference">
            <h1>Conference Room</h1>
            <img src={conferencer} alt="" />
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (921-926)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img
                style={{
                  border: `2px solid ${sac922.br}`,
                  backgroundColor: `${sac922.bg}`,
                }}
                id="922"
                src={ofm}
                alt=""
              />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (915-920)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <h1>SAC914(a-h)</h1>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
        </div>

        <div className="corridor">
          <h1>SAC 9th FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="officeroom">
            <div className="num">
              <h1>SAC (948-953)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC (953-959)</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img
                style={{
                  border: `2px solid ${sac955.br}`,
                  backgroundColor: `${sac955.bg}`,
                }}
                id="955"
                src={ofr}
                alt=""
              />
            </div>
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>

          <div className="officeroom">
            <div className="toprow">
              <img src={oftl} alt="" />
              <img src={oftm} alt="" />
              <img src={oftr} alt="" />
            </div>
            <div className="num">
              <h1>SAC905</h1>
            </div>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
          </div>
          <div className="dept">
            <h1>ECE DEPARTMENT</h1>
            <img src={ecedept} alt="" />
          </div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="officeroom">
            <h1>SAC 913 (a - h)</h1>
            <div className="bottomrow">
              <img src={ofl} alt="" />
              <img src={ofm} alt="" />
              <img src={ofr} alt="" />
            </div>
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
      display: flex;
      flex-direction: column;
      width: 150px;

      h1 {
        font-size: 15px;
      }
      .conference {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          font-size: 10px;
          padding: 5px;
          background-color: #00000086;
        }
        img {
          height: 165px;
          width: 150px;
        }
      }
      .officeroom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .toprow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
        }
        .bottomrow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 80px;
          width: 150px;
        }
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
        font-size: 25px;
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
      .washroom {
        height: 75px;

        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 75px;
          width: 150px;
        }
      }

      .officeroom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .toprow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        .num {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
        }
        .bottomrow {
          width: 150px;
          display: flex;
          flex-direction: row;
        }
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        h2 {
          position: absolute;
          color: wheat;
          font-size: 4vw;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 80px;
          width: 150px;
        }
      }
      .dept {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          text-align: center;
          color: wheat;
          width: 100px;
          padding: 5px;
          background-color: #00000086;
        }

        img {
          height: 225px;
          width: 150px;
        }
      }

      .lift {
        height: 135px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        img {
          height: 135px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    height: 230%;
    overflow: scroll;
    .largeSection {
      height: 180%;
      border: 5px solid #9c9c9c;
      .roomRowLeft {
        width: 300px;

        h1 {
          font-size: 15px;
        }
        .conference {
          height: 300px;
          h1 {
            font-size: 15px;
          }
          img {
            height: 300px;
            width: 300px;
          }
        }
        .officeroom {
          .toprow {
            width: 300px;
          }
          .num {
            height: 100px;
          }
          .bottomrow {
            width: 300px;
          }

          img {
            height: 150px;
            width: 300px;
          }
        }
      }
      .corridor {
        width: 10vw;
        background-color: #18191a;
      }
      .roomRowRight {
        width: 300px;

        h1 {
          font-size: 15px;
        }
        .washroom {
          height: 145px;
          img {
            height: 145px;
            width: 300px;
          }
        }

        .officeroom {
          .toprow {
            width: 300px;
          }
          .num {
            height: 100px;
          }
          .bottomrow {
            width: 300px;
          }

          img {
            height: 150px;
            width: 300px;
          }
        }
        .dept {
          height: 465px;
          h1 {
            width: 180px;
            font-size: 25px;
          }

          img {
            height: 465px;
            width: 300px;
          }
        }

        .lift {
          height: 225px;
          width: 300px;
          img {
            height: 225px;
            width: 300px;
          }
        }
      }
    }
  }
`;

export default Sac9;
