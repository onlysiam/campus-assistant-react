import { React, useEffect } from "react";
import { useHistory } from "react-router-dom";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Course = ({
  color,
  setColor,
  initial,
  faculty,
  stime,
  etime,
  room,
  clr,
  mapview,
  setmapview,
  roomm,
  setroom,
}) => {
  const history = useHistory();
  const roomHandler = (e, data) => {
    var roomm = data.room.split("");
    setroom(roomm[3]);
    setmapview(true);

    if (roomm[0] === "S") history.push("/sac");
    if (roomm[0] === "N") history.push("/nac");
  };
  useEffect(() => {});
  return (
    <Body bg={clr}>
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
      <div
        value={room}
        onClick={(e) => roomHandler(e, { room })}
        className="room info"
      >
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
    background-color: ${(props) => props.bg};
  }
  .initial {
    width: 65vw;

    margin-left: 5px;
  }
  .faculty {
    width: 45vw;
  }
  .time {
    width: 100vw;
  }
  .room {
    width: 50vw;
    cursor: pointer;
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

export default Course;
