import { React, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import Roomnavnac from "./rooms/Roomnavnac";

import Nac2 from "./rooms/Nac2";
import Nac3 from "./rooms/Nac3";
import Nac4 from "./rooms/Nac4";
import Nac5 from "./rooms/Nac5";
import Nac6 from "./rooms/Nac6";
import Nac9 from "./rooms/Nac9";
// import Nac10 from "./rooms/Nac10";
// import Nac11 from "./rooms/Nac11";

//styled
import styled from "styled-components";
const Nac = ({
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
  coursedata,
  setcoursedata,
  upcomingclass,
  setUpcomingclass,
  upcomingclasstime,
  setUpcomingclasstime,
  mapview,
  setmapview,
}) => {
  useEffect(() => {
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
      setsac6(true);
      setcurrentfloor(6);
    }
    if (currentfloor === 10) {
      setsac10(false);
      setsac9(true);
      setcurrentfloor(9);
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
        <Roomnavnac
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

      {sac2 ? <Nac2 setpreloader={setpreloader} /> : ""}
      {sac3 ? <Nac3 setpreloader={setpreloader} /> : ""}
      {sac4 ? <Nac4 setpreloader={setpreloader} /> : ""}
      {sac5 ? <Nac5 setpreloader={setpreloader} /> : ""}
      {sac6 ? <Nac6 setpreloader={setpreloader} /> : ""}
      {sac9 ? <Nac9 setpreloader={setpreloader} /> : ""}
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
        disabled={sac11}
        style={
          sac11
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
    margin-top: 60px;
    .prev,
    .next {
      display: none;
    }

    .nav {
      display: flex;
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

export default Nac;
