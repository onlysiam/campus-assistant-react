import React, { useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";

import rightarrow from "../img/right.svg";

import styled from "styled-components";
import Coursesdesktop from "./Coursesdesktop";

export default function Swiperdesktop({
  coursedata,
  setcoursedata,
  currentsem,
  setCurrentsem,
  setSem,
  setpreloader,
  mapview,
  setmapview,
  room,
  setroom,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const setSemesterSummer = () => {
    setCurrentsem("Summer 2021");
    setSem("%Summer 2021");
    setOpen(!open);
  };
  const setSemesterSpring = () => {
    setCurrentsem("Spring 2021");
    setSem("%Spring 2021");
    setOpen(!open);
  };
  const setSemesterFall = () => {
    setCurrentsem("Fall 2020");
    setSem("%Fall 2020");
    setOpen(!open);
  };
  return (
    <>
      <Body>
        <div className="courses">
          <div className="semester">
            <button onClick={() => toggle(!open)}>
              {currentsem} <img src={rightarrow} alt="" />
            </button>
            {open && (
              <ul className="semlist">
                {currentsem !== "Summer 2021" && (
                  <li onClick={setSemesterSummer}>Summer 2021</li>
                )}
                {currentsem !== "Spring 2021" && (
                  <li onClick={setSemesterSpring}>Spring 2021</li>
                )}
                {currentsem !== "Fall 2020" && (
                  <li onClick={setSemesterFall}>Fall 2020</li>
                )}
              </ul>
            )}
          </div>
          <Coursesdesktop
            coursedata={coursedata}
            setcoursedata={setcoursedata}
            mapview={mapview}
            setmapview={setmapview}
            roomm={room}
            setroom={setroom}
          />
        </div>
      </Body>
    </>
  );
}

const Body = styled.div`
  .courses {
    font-size: 18px;
    background: #fff;
    overflow-y: visible;
    align-items: center;
    color: white;
    height: 40vh;
    width: 40vw;
    margin-bottom: 5vh;
    border-radius: 10px;

    .semester {
      button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 10vw;
        height: 5vh;
        border: none;
        border-radius: 10px;
        background-color: #41a0a5;
        font-size: 1.6vh;
        cursor: pointer;
        margin-top: -50px;
        margin-left: 5px;
        img {
          height: 30px;
          margin-left: 1vw;
        }
      }
      .semlist {
        position: absolute;
        margin-top: -44px;
        margin-left: 11vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          color: white;
          background-color: #41a0a5;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 7vw;
          margin-right: 5px;
          padding: 5px;
          border-radius: 10px;
          font-size: 1.6vh;
          cursor: pointer;
        }
      }
    }
    /* width */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
