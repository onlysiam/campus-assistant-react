import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import bg1 from "../img/bg1.png";
import printbg from "../img/printbg.png";
import deptbg from "../img/deptbg.png";
import rightarrow from "../img/right.svg";

import styled from "styled-components";

//component
import Courses from "./Courses";

export default function Swiperslides({
  coursedata,
  setcoursedata,
  currentsem,
  setCurrentsem,
  setSem,
  setpreloader,
  setnavclrprint,
  setdept,
  setprevfloor,
  setcurrentfloor,
  setnextfloor,
  setsac2,
  setsac9,
  mapview,
  setmapview,
  room,
  setroom,
}) {
  const history = useHistory();
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
    setSem("%Fall 2021");
    setOpen(!open);
  };
  const printhandler = () => {
    setnavclrprint("#adadad");
    history.push("/print");
  };
  const depthandler = (e) => {
    setdept(true);
    setprevfloor(6);
    setcurrentfloor(9);
    setnextfloor(10);
    setsac2(false);
    setsac9(true);
    history.push("/sac");
  };
  return (
    <>
      <Body>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          scrollbar={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide className="courses">
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
            <Courses
              coursedata={coursedata}
              setcoursedata={setcoursedata}
              setpreloader={setpreloader}
            />
          </SwiperSlide>
          <SwiperSlide onClick={printhandler} className="printing">
            <h1>Printing</h1>
            <img src={printbg} alt="" />
          </SwiperSlide>
          <SwiperSlide onClick={depthandler} className="department">
            <h1>My Department</h1>
            <img src={deptbg} alt="" />
          </SwiperSlide>
        </Swiper>
      </Body>
    </>
  );
}

const Body = styled.div`
  .swiper-container {
    width: 100%;
    padding-left: 3vw;
    margin-top: 2vh;
    height: 40vh;
    overflow: visible;
  }

  .swiper-slide {
    position: relative;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;

    align-items: center;
    color: white;
    height: 33vh;
    width: 90vw;
    border-radius: 20px;
    box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.3);
  }
  .swiper-pagination{
    top: 34vh;
  }.swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      background-color: #50c2c9;
    }
  .courses {
    background-color: #ffffff;
    .semester {
        display: flex;
        justify-content: left;
        align-items: center;
      width: 100vw;
      padding: 5px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 130px;
        height: 40px;
        border: none;
        border-radius: 10px;
        background-color: #41a0a5;
        font-size: 1.6vh;
        cursor: pointer;
        margin-left: 5.5vw;
        margin-top: 5px;
        img {
          height: 20px;
          margin-left: 15px;
        }
      }
      
      .semlist {
        margin-top: 0px;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          color: white;
          background-color: #41a0a5;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          margin-right: 5px;
          padding: 5px;
          border-radius: 10px;
          font-size: 1.6vh;
          cursor: pointer;
        }
      }
    }
  }
  .printing {
    background-color: #69acb0;
    h1{
      z-index: 2;
    }
    img{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;}
  }
  .floors {
    background-color: #237e83;
    h1{
      z-index: 2;
    }
    img{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;}

  }
  .department {
    background-color: #69acb0;
    h1{
      z-index: 2;
    }
    img{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;}
  }
  }
  .scroll-container .swiper-slide {
  overflow: 'auto',
  -webkit-overflow-scrolling: touch;
}
`;
