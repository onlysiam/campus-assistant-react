import { React, useEffect, useState } from "react";

import Axios from "axios";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";

import Alert from "./Alert";
import Resetpass from "./Resetpass";

//image
import logo from "../img/logo.svg";
import cam from "../img/cam.svg";
import phone from "../img/phone.svg";
import qr from "../img/qr.png";
import ath from "../img/ath.svg";
import menu from "../img/menu.svg";
// import { Link } from "react-router-dom";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Login = ({
  preloader,
  setpreloader,
  setAuthenticated,
  windowheight,
  setName,
  userName,
  setUserName,
  password,
  setPassword,
  setDp,
  resetPassword,
  setresetPassword,
  popup,
  setpopup,
}) => {
  const [passMatched, setpassMatched] = useState(false);
  const [bottom, setbottom] = useState("-10");
  const [popupassist, setpopupassist] = useState(true);
  const history = useHistory();
  useEffect(() => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setpopup(true);
      setTimeout(function () {
        setbottom("0");
      }, 1000);
    }
    if (isIos() && !isInStandaloneMode() && popup) {
      setTimeout(function () {
        setbottom("-20");
      }, 6000);
      setTimeout(function () {
        setpopup(false);
        setpopupassist(false);
      }, 7000);
    }

    if (localStorage.getItem("userID")) {
      history.push("/");
    }
  });
  const popupHandler = () => {
    setbottom("-20");
    setTimeout(function () {
      setpopup(false);
      setpopupassist(false);
    }, 2000);
  };
  const usernameInputHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const camScannerHandler = () => {
    history.push("/scan");
  };
  const resetHandler = () => {
    setresetPassword(true);
  };
  const login = (e) => {
    setpreloader(true);
    e.preventDefault();

    // Axios.post("http://localhost:3001/api/login", {
    Axios.post("https://rds.onlysiam.com/api/login", {
      username: userName,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setpreloader(false);
        console.log(response.data.message);

        toast(<Alert />, {
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
        console.log(response.data);
        setName(response.data[0].name);
        setDp(response.data[0].profilepic);
        localStorage.setItem("dp", response.data[0].profilepic);
        localStorage.setItem("name", response.data[0].name);
        // Axios.post("http://localhost:3001/api/register", {
        Axios.post("https://rds.onlysiam.com/api/register", {
          username: userName,
        }).then((response) => {
          console.log(response);
          setAuthenticated(true);
          localStorage.setItem("userID", userName);
          localStorage.setItem("userPASS", password);
          // sessionStorage.setItem("userID", userName);
          // sessionStorage.setItem("userPASS", password);
          history.push("/");
          setpreloader(false);
        });
        // .catch(function (error) {
        //   if (error.response) {
        //     // Request made and server responded
        //     console.log(error.response.data);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //     console.log("Request made and server responded");
        //   } else if (error.request) {
        //     // The request was made but no response was received
        //     console.log(error.request);
        //     console.log("The request was made but no response was received");
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log("Error", error.message);

        //     console.log(
        //       "Something happened in setting up the request that triggered an Error"
        //     );
        //   }
        // });
      }
    });
  };

  return (
    <Body
      bottom={bottom}
      height={windowheight}
      variants={pageAnimation}
      exit="exit"
    >
      {popup && popupassist ? (
        <div onClick={popupHandler} className="popupcontainer">
          <div className="popup">
            <img src={ath} alt="" />
            <h1>
              Install this webapp on your iphone: tap <img src={menu} alt="" />
              and then Add to homescreen.
            </h1>
          </div>

          <div className="square"></div>
        </div>
      ) : (
        ""
      )}

      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
      <ToastContainer newestOnTop={false} rtl={false} transition={Zoom} />

      <Form className="formStyle" onSubmit={login}>
        <img className="logoImg" src={logo} alt="hey" />
        <div className="idInput">
          <input
            type="number"
            placeholder="Nsu Id"
            value={userName}
            onChange={usernameInputHandler}
            required
          />
        </div>
        <div className="passwordInput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordInputHandler}
            required
          />
        </div>
        <div className="atags">
          <p onClick={resetHandler} to="">
            Forgot Password?
          </p>
        </div>
        <button className="loginBtn">Login</button>
      </Form>
      <p className="orBreak">OR</p>
      <button className="camImg" onClick={camScannerHandler}>
        <h1>Scan QR Code</h1>
        <img className="desktopHoverScape" src={cam} alt="cam" />
        <img className="desktopHoverQR" src={qr} alt="" />
        <img className="desktopHover" src={phone} alt="" />
      </button>
      {resetPassword ? (
        <div className="resetpass">
          <Resetpass
            resetPassword={resetPassword}
            setresetPassword={setresetPassword}
            passMatched={passMatched}
            setpassMatched={setpassMatched}
            preloader={preloader}
            setpreloader={setpreloader}
          />
        </div>
      ) : (
        ""
      )}

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
  width: 100vw;
  height: ${(props) => props.height}px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  .popupcontainer {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: 100px;
    bottom: ${(props) => props.bottom}vh;
    justify-content: center;
    align-items: center;
    transition: 1s;
    .popup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 5px;
      width: 95vw;
      height: 50px;
      background-color: #c6ccd2;
      border-radius: 10px;
      z-index: 2;
      img {
        height: 40px;
        margin-right: 10px;
      }
      h1 {
        font-size: 14px;
        color: #424242;

        img {
          height: 20px;
        }
      }
    }
    .square {
      margin-top: 10px;
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #c6ccd2;
      transform: rotate(45deg);
      z-index: 1;
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
  .orBreak {
    font-size: 3vh;
    margin: 1.2vh 0;
    font-weight: 600;
  }
  .camImg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 78vw;
    height: 9.5vh;
    background-color: #50c2c9;
    border: none;
    border-radius: 10px;
    padding: 0px 50px 0px 50px;
    cursor: pointer;
    .desktopHover {
      position: absolute;
      opacity: 0;
      height: 35vh;
      transform: translateX(300%);
      transition: 1s;
    }
    .desktopHoverQR {
      position: absolute;
      opacity: 0;
      height: 12vh;
      transition: 1s;
    }
    h1 {
      text-align: center;
      width: 35vw;
      font-size: 2vh;
      color: white;
    }
    img {
      height: 5vh;
    }
    .camIcon {
    }
  }
  .incorrectPass {
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }
  .Toastify__close-button {
    display: none;
  }
  .resetpass {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000000b0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 800px) {
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    padding-right: 10vw;

    .preloader {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10vw;
      height: 100vh;
      width: 100vw;
      background-color: #ffffff94;
      z-index: 100;
    }

    .orBreak {
      border-right: 3px solid #237e83;
      height: 80vh;
      color: #f6f6f6;
      transform: translateX(-50%);
    }
    .camImg {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 30vw;
      height: 50vh;
      transition: 1s;

      h1 {
        font-size: 4vh;
        font-weight: 400;
        color: white;
        transition: 1s;
      }
      .desktopHoverScape {
        height: 10vh;
        transition: 1s;
      }
    }
    .camImg:hover {
      h1 {
        transform: translateY(-500%);
      }
      .desktopHoverScape {
        transform: translateY(-500%);
      }
      .desktopHover {
        display: flex;
        transform: translateY(0%);
        opacity: 1;
      }
      .desktopHoverQR {
        opacity: 1;
      }
    }
    .formStyle {
      width: 35vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logoImg {
        margin-top: 3vh;
        height: 27vh;
        margin-bottom: 10px;
      }
      input {
        height: 6vh;
        width: 30vw;
        padding: 10px;
        background-color: white;
        color: black;
        padding-left: 30px;
        font-size: 2vh;
        border-radius: 10rem;
        margin-top: 25px;
        border: 0.5px solid #d1d1d1;
        border-top: none;
      }
      input::placeholder {
        color: rgba(0, 0, 0, 0.452);
      }

      .loginBtn {
        width: 30vw;
        height: 7.5vh;
        background-color: #50c2c9;
        color: white;
        font-size: 2.2vh;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        transition: 1s ease;
      }
      .loginBtn:hover {
        transform: scale(1.1);
      }
    }
    .resetpass {
      position: absolute;
      width: 100vw;
      height: 100vh;
      margin-left: 10vw;
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Circle1 = styled.div`
  position: absolute;
  right: 1rem;
  top: -7rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
`;
const Circle2 = styled.div`
  position: absolute;
  top: -3.5rem;
  right: -5rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
`;
const Form = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logoImg {
    margin-top: 10vh;
    height: 25vh;
    margin-bottom: 10px;
  }
  input {
    height: 6vh;
    width: 80vw;
    padding: 10px;
    background-color: white;
    color: black;
    padding-left: 30px;
    font-size: 2vh;
    border-radius: 10rem;
    margin-top: 25px;
    border: 0.5px solid #d1d1d1;
    border-top: none;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.452);
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-bottom: 1px solid #50c2c9;
  }
  .atags {
    font-weight: 400;
    font-size: 2vh;
    margin: 2vh 20px;
    cursor: pointer;
    color: #50c2c9;
  }

  .loginBtn {
    width: 78vw;
    height: 7.5vh;
    background-color: #50c2c9;
    color: white;
    font-size: 2.2vh;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Login;
