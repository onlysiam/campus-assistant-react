import { React, useEffect } from "react";

import { useHistory } from "react-router-dom";
//image
import map from "../img/nsumap.svg";
// import { Link } from "react-router-dom";
import { Mapnav } from "./rooms/Mapnav";
import { Navbardesktop } from "./Navbardesktop";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Map = ({
  preloader,
  setpreloader,
  setAuthenticated,
  windowheight,
  windowwidth,
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
  useEffect(() => {});

  const sachandler = () => {
    history.push("/sac");
  };
  const nachandler = () => {
    history.push("/nac");
  };

  return (
    <Body height={windowheight} variants={pageAnimation} exit="exit">
      <div className="nav">
        {windowwidth > 799 ? (
          <Navbardesktop setAuthenticated={setAuthenticated} />
        ) : (
          <Mapnav
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
            setAuthenticated={setAuthenticated}
          />
        )}
      </div>
      <img className="map" src={map} alt="map" />{" "}
      <button onClick={sachandler} className="sac">
        <h1>South Academic Building (SAC)</h1>
      </button>
      <button onClick={nachandler} className="nac">
        <h1>North Academic Building (NAC)</h1>
      </button>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height}px;
  background-color: #18191a;
  .nav {
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .sac {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -160px;
    top: -45px;
    height: 295px;
    width: 20vw;
    background-color: transparent;
    border: none;
    outline: none;
    h1 {
      font-size: 3vw;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  }
  .nac {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 270px;
    width: 20vw;
    left: -40px;
    top: -35px;
    background-color: transparent;
    border: none;
    outline: none;

    .nac:focus {
      outline: none;
    }
    h1 {
      font-size: 3vw;
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  }
  .map {
    position: absolute;
    overflow: visible;
    width: 100vw;
  }

  @media (min-width: 800px) {
    height: ${(props) => props.height}px;
    .sac {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 26vw;
      top: 220px;
      height: 130px;
      width: 510px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      h1 {
        height: 350px;
        font-size: 1.2vw;
        transform: rotate(-90deg);
      }
    }
    .nac {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 5px;
      margin-right: 20vw;
      height: 130px;
      width: 480px;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      .nac:focus {
        outline: none;
      }
      h1 {
        height: 350px;
        font-size: 1.2vw;
        transform: rotate(-90deg);
      }
    }
    .map {
      height: 1200px;
      overflow: visible;
      transform: rotate(90deg);
    }
  }
`;
export default Map;
