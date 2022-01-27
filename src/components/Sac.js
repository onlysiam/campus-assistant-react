import { React, useEffect, useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import Roomnavsac from "./rooms/Roomnavnac";

import Sac2 from "./rooms/Sac2";
import Sac3 from "./rooms/Sac3";
import Sac4 from "./rooms/Sac4";
import Sac5 from "./rooms/Sac5";
import Sac6 from "./rooms/Sac6";
import Sac9 from "./rooms/Sac9";

//styled
import styled from "styled-components";
const Sac = ({
  preloader,
  setpreloader,
  sac,
  setsac,
  sac1,
  setsac1,
  sac2,
  setsac2,
  sac3,
  setsac3,
  sac4,
  setsac4,
  sac5,
  setsac5,
  sac6,
  setsac6,
  sac7,
  setsac7,
  sac8,
  setsac8,
  sac9,
  setsac9,
  sac10,
  setsac10,
  sac11,
  setsac11,
  prevfloor,
  setprevfloor,
  currentfloor,
  setcurrentfloor,
  nextfloor,
  setnextfloor,
  dept,
  setdept,
  roomDataSac,
  setroomDataSac,
  coursedata,
  setcoursedata,
  upcomingclass,
  setUpcomingclass,
  upcomingclassroom,
  setUpcomingclassroom,
  currentclassroom,
  setCurrentclassroom,
  upcomingclasstime,
  setUpcomingclasstime,
  mapviewCurrent,
  setmapviewCurrent,
  mapviewUpcoming,
  setmapviewUpcoming,
  currentclass,
  setCurrentclass,
  mapview,
  setmapview,
  room,
  setroom,
}) => {
  const [facultyinfo, setfacultyinfo] = useState([]);
  useEffect(() => {
    var upclass = upcomingclassroom.split("");
    var curclass = currentclassroom.split("");
    var roomm = room.split("");
    var floor = parseInt(upclass[3]);
    var floor2 = parseInt(curclass[3]);
    var floor3 = parseInt(roomm);
    if (mapviewUpcoming) {
      if (floor === 2) {
        setsac2(true);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(2);
      }
      if (floor === 3) {
        setsac2(false);
        setsac3(true);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(3);
      }
      if (floor === 4) {
        setsac2(false);
        setsac3(false);
        setsac4(true);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(4);
      }
      if (floor === 5) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(true);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(5);
      }
      if (floor === 6) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(true);
        setsac9(false);
        setcurrentfloor(6);
      }
      if (floor === 9) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(true);
        setcurrentfloor(9);
      }
    }
    if (mapview) {
      if (floor3 === 2) {
        setsac2(true);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(2);
      }
      if (floor3 === 3) {
        setsac2(false);
        setsac3(true);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(3);
      }
      if (floor3 === 4) {
        setsac2(false);
        setsac3(false);
        setsac4(true);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(4);
      }
      if (floor3 === 5) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(true);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(5);
      }
      if (floor3 === 6) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(true);
        setsac9(false);
        setcurrentfloor(6);
      }
      if (floor3 === 9) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(true);
        setcurrentfloor(9);
      }
      setmapview(false);
    }
    if (mapviewCurrent) {
      if (floor2 === 2) {
        setsac2(true);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(2);
      }
      if (floor2 === 3) {
        setsac2(false);
        setsac3(true);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(3);
      }
      if (floor2 === 4) {
        setsac2(false);
        setsac3(false);
        setsac4(true);
        setsac5(false);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(4);
      }
      if (floor2 === 5) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(true);
        setsac6(false);
        setsac9(false);
        setcurrentfloor(5);
      }
      if (floor2 === 6) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(true);
        setsac9(false);
        setcurrentfloor(6);
      }
      if (floor2 === 9) {
        setsac2(false);
        setsac3(false);
        setsac4(false);
        setsac5(false);
        setsac6(false);
        setsac9(true);
        setcurrentfloor(9);
      }
    }

    let currentfloorn = { currentfloor };
    if (currentfloor < 8) {
      setprevfloor(currentfloorn.currentfloor - 1);
      setnextfloor(currentfloorn.currentfloor + 1);
    }

    if (currentfloor === 9) {
      setprevfloor(currentfloorn.currentfloor - 3);
      setnextfloor(currentfloorn.currentfloor + 1);
    }
    if (currentfloor === 6) {
      setprevfloor(currentfloorn.currentfloor - 1);
      setnextfloor(currentfloorn.currentfloor + 3);
    }
  });

  const prevfloorhandler = () => {
    setpreloader(true);
    if (currentfloor === 3) {
      setsac3(false);
      setsac2(true);
      setcurrentfloor(2);
    }
    if (currentfloor === 4) {
      setsac4(false);
      setsac3(true);
      setcurrentfloor(3);
    }
    if (currentfloor === 5) {
      setsac5(false);
      setsac4(true);
      setcurrentfloor(4);
    }
    if (currentfloor === 6) {
      setsac6(false);
      setsac5(true);
      setcurrentfloor(5);
    }
    if (currentfloor === 7) {
      setsac7(false);
      setsac6(true);
      setcurrentfloor(6);
    }
    if (currentfloor === 8) {
      setsac8(false);
      setsac7(true);
      setcurrentfloor(7);
    }
    if (currentfloor === 9) {
      setsac9(false);
      setsac8(true);
      setcurrentfloor(8);
    }
    if (currentfloor === 9) {
      setsac9(false);
      setsac6(true);
      setcurrentfloor(6);
    }
    if (currentfloor === 11) {
      setsac11(false);
      setsac10(true);
      setcurrentfloor(10);
    }
  };
  const nextfloorhandler = () => {
    setpreloader(true);
    if (currentfloor === 2) {
      setsac2(false);
      setsac3(true);
      setcurrentfloor(3);
    }
    if (currentfloor === 3) {
      setsac3(false);
      setsac4(true);
      setcurrentfloor(4);
    }
    if (currentfloor === 4) {
      setsac4(false);
      setsac5(true);
      setcurrentfloor(5);
    }
    if (currentfloor === 5) {
      setsac5(false);
      setsac6(true);
      setcurrentfloor(6);
    }
    if (currentfloor === 6) {
      setsac6(false);
      setsac9(true);
      setcurrentfloor(9);
    }
    if (currentfloor === 7) {
      setsac7(false);
      setsac8(true);
      setcurrentfloor(8);
    }
    if (currentfloor === 8) {
      setsac8(false);
      setsac9(true);
      setcurrentfloor(9);
    }
    if (currentfloor === 9) {
      setsac9(false);
      setsac10(true);
      setcurrentfloor(10);
    }
    if (currentfloor === 10) {
      setsac10(false);
      setsac11(true);
      setcurrentfloor(11);
    }
  };

  return (
    <Body>
      <div className="nav">
        <Roomnavsac
          preloader={preloader}
          setpreloader={setpreloader}
          sac={sac}
          setsac={setsac}
          sac1={sac1}
          setsac1={setsac1}
          sac2={sac2}
          setsac2={setsac2}
          sac3={sac3}
          setsac3={setsac3}
          sac4={sac4}
          setsac4={setsac4}
          sac5={sac5}
          setsac5={setsac5}
          sac6={sac6}
          setsac6={setsac6}
          sac7={sac7}
          setsac7={setsac7}
          sac8={sac8}
          setsac8={setsac8}
          sac9={sac9}
          setsac9={setsac9}
          sac10={sac10}
          setsac10={setsac10}
          sac11={sac11}
          setsac11={setsac11}
          prevfloor={prevfloor}
          setprevfloor={setprevfloor}
          currentfloor={currentfloor}
          setcurrentfloor={setcurrentfloor}
          nextfloor={nextfloor}
          setnextfloor={setnextfloor}
        />
      </div>
      {sac2 ? (
        <Sac2
          setpreloader={setpreloader}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
        />
      ) : (
        ""
      )}
      {sac3 ? (
        <Sac3
          setpreloader={setpreloader}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
        />
      ) : (
        ""
      )}
      {sac4 ? (
        <Sac4
          setpreloader={setpreloader}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
        />
      ) : (
        ""
      )}
      {sac5 ? (
        <Sac5
          setpreloader={setpreloader}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
        />
      ) : (
        ""
      )}
      {sac6 ? (
        <Sac6
          setpreloader={setpreloader}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
        />
      ) : (
        ""
      )}
      {sac9 ? (
        <Sac9
          setpreloader={setpreloader}
          dept={dept}
          setdept={setdept}
          roomDataSac={roomDataSac}
          coursedata={coursedata}
          mapviewCurrent={mapviewCurrent}
          setmapviewCurrent={setmapviewCurrent}
          mapviewUpcoming={mapviewUpcoming}
          setmapviewUpcoming={setmapviewUpcoming}
          currentclassroom={currentclassroom}
          currentclass={currentclass}
          upcomingclassroom={upcomingclassroom}
          setUpcomingclassroom={setUpcomingclassroom}
          facultyinfo={facultyinfo}
          setfacultyinfo={setfacultyinfo}
        />
      ) : (
        ""
      )}
      <button
        disabled={sac2}
        style={
          sac2
            ? { backgroundColor: "#999", color: "#535151" }
            : { backgroundColor: "#50c3c9ce" }
        }
        className="prev"
        onClick={prevfloorhandler}
      >
        Prev Floor {prevfloor}
      </button>
      <button
        disabled={sac9}
        style={
          sac9
            ? { backgroundColor: "#999", color: "#535151" }
            : { backgroundColor: "#50c3c9ce" }
        }
        className="next"
        onClick={nextfloorhandler}
      >
        Next Floor {nextfloor}
      </button>

      {preloader ? (
        <div className="preloader">
          <ClipLoader color="#50c2c9" loading={preloader} size={150} />
        </div>
      ) : (
        ""
      )}
    </Body>
  );
};

const Body = styled.div`
  h1 {
    border-radius: 10px;
  }
  .nav {
    display: none;
  }
  button {
    position: fixed;
    width: 35vw;
    height: 5vh;
    font-size: 5vw;
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    right: 10px;
  }
  .prev {
    top: 20px;
  }
  .next {
    bottom: 30px;
  }
  .preloader {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff94;
    z-index: 100;
  }
  @media (min-width: 800px) {
    .nav {
      display: flex;
    }
    margin-top: 60px;
    .prev,
    .next {
      display: none;
    }
    button {
      position: fixed;
      width: 10vw;
      height: 5vh;
      font-size: 1.2vw;
      border: none;
      background-color: black;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      top: 20px;
    }
    .prev {
      left: 10%;
    }
    .next {
      right: 10%;
    }
    .preloader {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: #ffffff94;
      z-index: 100;
    }
  }
`;

export default Sac;
