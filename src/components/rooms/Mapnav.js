import * as React from "react";
//image
//styled
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
export const Mapnav = ({
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
  setAuthenticated,
}) => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("name");
    localStorage.removeItem("dp");
    setAuthenticated(false);
    history.push("/");
  };
  const floorhandler = (e) => {
    setpreloader(true);
    if (e.target.id === "nac") {
      setsac2(true);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(2);
      history.push("/nac");
    }
    if (e.target.id === "sac") {
      setsac2(true);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(false);
      setcurrentfloor(2);
      history.push("/sac");
    }
    if (e.target.id === "9") {
      setsac2(false);
      setsac3(false);
      setsac4(false);
      setsac5(false);
      setsac6(false);
      setsac9(true);
      setcurrentfloor(9);
      history.push("/sac");
    }
  };
  return (
    <Body>
      <div className="elements">
        <li id="nac" onClick={floorhandler}>
          NAC
        </li>
        <li id="sac" onClick={floorhandler}>
          SAC
        </li>
        <li id="9" onClick={floorhandler}>
          My Department
        </li>
        <li>
          <FontAwesomeIcon
            className="skip-back"
            size="2x"
            icon={faSignOutAlt}
          />{" "}
          <h1 onClick={logoutHandler}>Log Out</h1>
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
  left: 0;
  height: 60px;
  width: 100vw;
  background-color: #165d61ce;

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
      height: 50px;
      padding: 10px;
      border-radius: 10px;
      color: white;
      cursor: pointer;
    }

    h1 {
      font-size: 15px;
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

export default Mapnav;
