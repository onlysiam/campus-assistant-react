import { React, useEffect, useState } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Files = ({
  filename,
  printstatus,
  setcurrentprintstatus,
  date,
  printcount,
  setprintcount,
}) => {
  const [cdate, setcdate] = useState("");
  useEffect(() => {
    if (printstatus === "Spooling") setcurrentprintstatus("fetch");

    if (date) {
      const datearray = date.split("T");
      setcdate(datearray[0]);
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
          <h1>{printstatus}</h1>
        </div>
        <div className="comment info">
          <h1>Receive The Hard Copy From P-ZOne</h1>
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

export default Files;
