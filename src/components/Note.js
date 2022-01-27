import { React, useEffect, useState } from "react";
import Axios from "axios";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Noteinitial = ({ initial }) => {
  const [btnBg0, setbtnBg0] = useState("green");
  const [btnBg1, setbtnBg1] = useState("red");
  const [btnBgoffice0, setbtnBgoffice0] = useState("green");
  const [btnBgoffice1, setbtnBgoffice1] = useState("red");
  useEffect(() => {});
  const input0 = () => {
    let username = localStorage.getItem("userID");
    let currentclass = "%CSE499B%";
    let sem = "%Summer 2021%";
    let bin = "0";
    Axios.post("https://rds.onlysiam.com/api/statustoggle", {
      username: username,
      course: currentclass,
      semester: sem,
      bin: bin,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        setbtnBg1("red");
        setbtnBg0("green");
      } else {
      }
    });
  };
  const input1 = () => {
    let username = localStorage.getItem("userID");
    let currentclass = "%CSE499B%";
    let sem = "%Summer 2021%";
    let bin = "1";
    Axios.post("https://rds.onlysiam.com/api/statustoggle", {
      username: username,
      course: currentclass,
      semester: sem,
      bin: bin,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        setbtnBg0("red");
        setbtnBg1("green");
      } else {
      }
    });
  };
  const officeinput0 = () => {
    let username = localStorage.getItem("userID");
    let currentclass = "%CSE499B%";
    let sem = "%Summer 2021%";
    let bin = "0";
    Axios.post("https://rds.onlysiam.com/api/officeoggle", {
      username: username,
      course: currentclass,
      semester: sem,
      bin: bin,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        setbtnBgoffice1("red");
        setbtnBgoffice0("green");
      } else {
      }
    });
  };
  const officeinput1 = () => {
    let username = localStorage.getItem("userID");
    let currentclass = "%CSE499B%";
    let sem = "%Summer 2021%";
    let bin = "1";
    Axios.post("https://rds.onlysiam.com/api/officetoggle", {
      username: username,
      course: currentclass,
      semester: sem,
      bin: bin,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        setbtnBgoffice0("red");
        setbtnBgoffice1("green");
      } else {
      }
    });
  };
  return (
    <Body bg0={btnBg0} bg1={btnBg1} bg2={btnBgoffice0} bg3={btnBgoffice1}>
      <div className="cse499B">
        <h1>CSE499B</h1>
        <div className="buttons">
          <button className="btn1" onClick={input1}>
            1
          </button>
          <button className="btn0" onClick={input0}>
            0
          </button>
        </div>
      </div>
      <div className="office">
        <h1>OFFICE</h1>
        <div className="buttons">
          <button className="btn3" onClick={officeinput1}>
            1
          </button>
          <button className="btn2" onClick={officeinput0}>
            0
          </button>
        </div>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  button {
    height: 6vh;
    width: 8vw;
    color: white;
    margin-top: 10px;
    font-size: 1.5vw;
    margin-right: 10px;
    font-weight: 600;
    outline: none;
    border: none;
    border-radius: 3px;
    transition: 1s;
    cursor: pointer;
  }

  .cse499B {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 20vw;
    background-color: #49b0b6;
    border-radius: 10px;
    margin-bottom: 10px;
    h1 {
      color: white;
    }
    .btn0 {
      background-color: ${(props) => props.bg0};
    }
    .btn1 {
      background-color: ${(props) => props.bg1};
    }
  }
  .office {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 20vw;
    background-color: #49b0b6;
    border-radius: 10px;
    h1 {
      color: white;
    }
    .btn2 {
      background-color: ${(props) => props.bg2};
    }
    .btn3 {
      background-color: ${(props) => props.bg3};
    }
  }
  @media (min-width: 800px) {
  }
`;

export default Noteinitial;
