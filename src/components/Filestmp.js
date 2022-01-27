import { React, useEffect, useState } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Filestmp = ({
  filename,
  printstatus,
  currentprintstatus,
  setcurrentprintstatus,
  date,
  printcount,
  setprintcount,
  clrdirectory,
  setclrdirectory,
}) => {
  const [cdate, setcdate] = useState("");
  useEffect(() => {
    if (currentprintstatus === "Requested") {
      setTimeout(function () {
        setcurrentprintstatus("Waiting");
      }, 3000);
    }
    if (currentprintstatus === "Waiting") {
      setTimeout(function () {
        setcurrentprintstatus("Spooling");
      }, 3000);
    }
    if (currentprintstatus === "Spooling") {
      setTimeout(function () {
        setcurrentprintstatus("Printing");
      }, 5000);
    }
    if (currentprintstatus === "Printing") {
      setTimeout(function () {
        setcurrentprintstatus("fetch");
        setprintcount(false);
        setclrdirectory(true);
      }, 10000);
    }
  });
  return (
    <Body>
      <div className="printdata">
        <div className="date info">
          <h1>{cdate}</h1>
        </div>
        <div className="filename info">
          <h1>{filename}</h1>
        </div>
        <div className="status info">
          <h1>{currentprintstatus}</h1>
        </div>
        <div className="comment info">
          <h1></h1>
        </div>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .printdata {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 55px;
    background-color: #15b9c2;
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .date {
      width: 20vw;
    }
    .filename {
      width: 20vw;
    }
    .status {
      width: 20vw;
    }
    .comment {
      width: 30vw;
    }
  }
  h1 {
    font-size: 11px;
    font-weight: 400;
    color: #2c2c2c;
    background-color: #77e0e6;
    border-radius: 10px;
    padding: 4px;
    cursor: default;
  }
  @media (min-width: 800px) {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .printdata {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80vw;
      height: 55px;
      background-color: #15b9c2;
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .date {
        width: 20vw;
      }
      .filename {
        width: 20vw;
      }
      .status {
        width: 20vw;
      }
      .comment {
        width: 40vw;
      }
    }
    h1 {
      font-size: 1vw;
      font-weight: 400;
      color: #2c2c2c;
      background-color: #77e0e6;
      border-radius: 10px;
      padding: 4px;
      cursor: default;
    }
  }
`;

export default Filestmp;
