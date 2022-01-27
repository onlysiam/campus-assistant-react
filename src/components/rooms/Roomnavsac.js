import * as React from "react";
import { useHistory } from "react-router-dom";
//image
//styled
import styled from "styled-components";

export const Roomnavsac = ({
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
}) => {
  const history = useHistory();
  const floorhandler = (e) => {
    setpreloader(true);
    if (e.target.id === "1") {
      setsac2(true);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(2);
      history.push("/");
    }
    if (e.target.id === "2") {
      setsac2(true);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(2);
    }
    if (e.target.id === "3") {
      setsac2(false);
      setsac3(true);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(3);
    }
    if (e.target.id === "4") {
      setsac2(false);
      setsac3(false);
      setsac4(true);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(4);
    }
    if (e.target.id === "5") {
      setsac2(false);
      setsac3(false);
      setsac4(false);
      setsac5(true);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(5);
    }
    if (e.target.id === "6") {
      setsac2(false);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(true);
      setsac9(false);
      setcurrentfloor(6);
    }
    if (e.target.id === "9") {
      setsac2(false);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(true);
      setcurrentfloor(9);
    }
  };
  return (
    <Body>
      <div className="elements">
        <li id="1" onClick={floorhandler}>
          PROFILE DASHBOARD
        </li>
        <li
          id="2"
          onClick={floorhandler}
          style={
            sac2
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          2nd FLOOR
        </li>
        <li
          id="3"
          onClick={floorhandler}
          style={
            sac3
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          3rd FLOOR
        </li>
        <li
          id="4"
          onClick={floorhandler}
          style={
            sac4
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          4th FLOOR
        </li>
        <li
          id="5"
          onClick={floorhandler}
          style={
            sac5
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          5th FLOOR
        </li>
        <li
          id="6"
          onClick={floorhandler}
          style={
            sac6
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          6th FLOOR
        </li>
        <li
          id="9"
          onClick={floorhandler}
          style={
            sac9
              ? { backgroundColor: "#999", color: "#535151" }
              : { backgroundColor: "#50c3c9ce" }
          }
        >
          9th FLOOR
        </li>
      </div>
    </Body>
  );
};

const Body = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 0;
  height: 60px;
  width: 100vw;
  background-color: black;

  .navlogo {
    display: flex;
    align-items: center;
    justify-content: sp;
    width: 60px;
    margin-left: 20px;
    img {
      height: 45px;
      cursor: pointer;
      transition: 1s;
    }
    img:hover {
      transform: scale(1.1);
      transition: 1s;
    }
  }
  .elements {
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #50c3c9ce;
      padding: 10px;
      border-radius: 10px;
      color: white;
      cursor: pointer;
    }

    h1 {
      font-size: 1.2vw;
      font-weight: 600;
    }

    .icon-placeholder {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      flex: 40px 0;
      margin-right: 20px;
    }

    .text-placeholder {
      border-radius: 5px;
      width: 200px;
      height: 20px;
      flex: 1;
    }
    .skip-back {
      margin-right: 10px;
    }
  }
`;

export default Roomnavsac;
