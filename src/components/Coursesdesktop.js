import { React } from "react";
import { v4 as uuidv4 } from "uuid";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
//component
import Course from "./Course";

const Coursesdesktop = ({
  coursedata,
  setcoursedata,
  mapview,
  setmapview,
  roomm,
  setroom,
}) => {
  return (
    <Body>
      <div className="initialContainer">
        <div className="initial infoinitial">
          <h1>Course</h1>
        </div>
        <div className="faculty infoinitial">
          <h1>Faculty</h1>
        </div>
        <div className="time infoinitial">
          <h1>Time</h1>
        </div>
        <div className="room infoinitial">
          <h1>Room</h1>
        </div>
      </div>
      <div className="courses">
        {coursedata.map((course) => (
          <Course
            initial={course.code}
            faculty={course.faculty}
            stime={course.stime}
            etime={course.etime}
            room={course.room}
            clr={course.clr}
            key={uuidv4()}
            mapview={mapview}
            setmapview={setmapview}
            roomm={roomm}
            setroom={setroom}
          />
        ))}
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  .initialContainer {
    position: fixed;
    display: flex;
    padding-top: 4px;
    margin-bottom: 10px;
    width: 40vw;
    height: 6.5vh;
    background-color: white;
    border-radius: 10px;
    .infoinitial {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      height: 5.5vh;
      border-radius: 10px;
      background-color: #41a0a5;
    }
    .initial {
      width: 70vw;
      margin-left: 5px;
    }
    .faculty {
      width: 40vw;
    }
    .time {
      width: 100vw;
    }
    .room {
      width: 50vw;
    }
    h1 {
      font-size: 1.6vh;
    }
  }
  .courses {
    padding-top: 70px;
  }
`;

export default Coursesdesktop;
