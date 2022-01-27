import { React, useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import QrReader from "react-qr-reader";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

import Alertqr from "./Alertqr";

import phoneqr from "../img/phoneqr.svg";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Qrscan = ({
  setAuthenticated,
  setName,
  userName,
  setDp,
  preloader,
  setpreloader,
}) => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("userID")) {
      history.push("/");
    }
  });

  const login = (props) => {
    console.log(props);
    // Axios.post("http://localhost:3001/api/qrlogin", {
    Axios.post("https://rds.onlysiam.com/api/qrlogin", {
      password: props,
    }).then((response) => {
      if (response.data.message) {
        setpreloader(false);
        console.log(response.data.message);
        toast(<Alertqr />, {
          className: "incorrectPass",
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        setName(response.data[0].name);
        setDp(response.data[0].profilepic);
        localStorage.setItem("dp", response.data[0].profilepic);
        localStorage.setItem("name", response.data[0].name);
        localStorage.setItem("userID", props);
        localStorage.setItem("userPASS", response.data[0].password);
        // Axios.post("http://localhost:3001/api/register", {
        Axios.post("https://rds.onlysiam.com/api/register", {
          username: userName,
        }).then((response) => {
          console.log(response);
          // sessionStorage.setItem("userID", userName);
          // sessionStorage.setItem("userPASS", password);
          setAuthenticated(true);
          history.push("/");
          setpreloader(false);
        });
      }
    });
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setpreloader(true);
      setScanResultWebCam(result);
      login(result);
    }
  };
  return (
    <Body variants={pageAnimation} initial="hidden" animate="show">
      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
      <div className="titles">
        <h1>Scan Qrcode</h1>
        <h2>Put Your Qr Card In The Middle Of The Red Box</h2>
        <img src={phoneqr} alt="" />
      </div>
      <ToastContainer newestOnTop={false} rtl={false} transition={Zoom} />
      <QrReader
        delay={3000}
        style={{ width: "80%" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        className="qrreader"
      />
      {preloader ? (
        <div className="preloader">
          <ClipLoader color="#50c2c9" loading={preloader} size={150} />
        </div>
      ) : (
        ""
      )}
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-bottom: 20vh;
  background-color: #f6f6f6;
  .titles {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
    align-items: center;
    width: 80vw;
    height: 20vh;
    padding: 10px;
    border-radius: 10px;
    color: white;
    background-color: #50c2c9;

    z-index: 2;
    h1 {
      font-size: 3vh;
      margin-bottom: 3vh;
    }
    h2 {
      display: none;
    }
    img {
      height: 15vh;
    }
  }

  .preloader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff94;
    z-index: 100;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 0vh;
    .titles {
      display: flex;
      justify-content: space-evenly;
      margin: 1rem;
      align-items: center;
      width: 40vw;
      height: 20vh;
      padding: 10px;
      border-radius: 10px;
      color: white;
      background-color: #50c2c9;

      z-index: 2;
      h1 {
        display: none;
      }
      h2 {
        display: flex;
        text-align: center;
        font-size: 4vh;
        margin-bottom: 5vh;
        width: 25vw;
        font-size: 1.5vw;
        font-weight: 600;
      }
      img {
        height: 15vh;
      }
    }
    .circle1,
    .circle2 {
      display: none;
    }
  }
`;
const Circle1 = styled.div`
  position: absolute;
  right: 1rem;
  top: -7rem;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
`;
const Circle2 = styled.div`
  position: absolute;
  top: -3.5rem;
  right: -5rem;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
`;

export default Qrscan;
