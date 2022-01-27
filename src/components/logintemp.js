import React from "react";
import logo from "../img/logo.svg";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Alert from "./Alert";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
//styled
import styled from "styled-components";

const Login = ({ userName, setUserName, password, setPassword }) => {
  const history = useHistory();
  const usernameInputHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const errorMsg = () => {};
  const login = (e) => {
    e.preventDefault();

    // Axios.post("http://localhost:3001/api/login", {
    Axios.post("https://rds.onlysiam.com/api/login", {
      username: userName,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);

        toast(<Alert />, {
          className: "incorrectPass",
          draggable: false,
          position: toast.POSITION.TOP_CENTER,
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.log(response.data[0]);

        // Axios.post("http://localhost:3001/api/register", {
        Axios.post("https://rds.onlysiam.com/api/register", {
          username: userName,
        }).then((response) => {
          console.log(response);
          history.push("/profile");
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
    <Body>
      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
      <ToastContainer />

      <Form onSubmit={login}>
        <img src={logo} alt="hey" />
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
          <p to="">Forgot Password?</p>
        </div>
        <button>Login</button>
      </Form>
    </Body>
  );
};

//styled Components
const Body = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;

  .incorrectPass {
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
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
`;
const Circle2 = styled.div`
  position: absolute;
  top: -3.5rem;
  right: -5rem;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
`;
const Form = styled.form`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  img {
    margin-top: 12vh;
    height: 27vh;
    margin-bottom: 10px;
  }
  input {
    height: 51px;
    width: 80vw;
    padding: 10px;
    background-color: white;
    color: black;
    padding-left: 30px;
    font-size: 17px;
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
    margin: 20px 20px;
    color: #50c2c9;
  }

  button {
    width: 78vw;
    height: 62px;
    background-color: #50c2c9;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
  }
`;

export default Login;
