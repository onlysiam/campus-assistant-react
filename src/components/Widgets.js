import { React, useEffect } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Widgets = ({ initial, faculty, stime, etime, room }) => {
  return (
    <Body>
      <div className="box"></div>
      <div className="initial info">
        <h1>{initial}</h1>
      </div>
      <div className="faculty info">
        <h1>{faculty}</h1>
      </div>
      <div className="time info">
        <h1>
          {stime}-{etime}
        </h1>
      </div>
      <div className="room info">
        <h1>{room}</h1>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  .box {
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    height: 5.5vh;
    border-radius: 10px;
    background-color: #4cb5bb;
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
  @media (min-width: 800px) {
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      height: 5.5vh;
      border-radius: 10px;
      background-color: #4cb5bb;
    }
    .initial {
      width: 10vw;

      margin-left: 5px;
    }
    .faculty {
      width: 6vw;
    }
    .time {
      width: 15vw;
    }
    .room {
      width: 7vw;
    }
  }
`;

export default Widgets;
