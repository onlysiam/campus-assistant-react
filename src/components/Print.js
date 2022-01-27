import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Navbardesktop } from "./Navbardesktop";
import { Navbar } from "./Navbar";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alertoffline from "./Alertoffline";
import ClipLoader from "react-spinners/ClipLoader";
import Files from "./Files";
import Filestmp from "./Filestmp";
import Alert from "./Alert";

//image
// import { Link } from "react-router-dom";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Print = ({
  printdata,
  setprintdata,
  userName,
  preloader,
  setpreloader,
  windowheight,
  file,
  setfile,
  filename,
  setfilename,
  uploadedfile,
  setuploadedfile,
  printstatus,
  setprintstatus,
  currentprintstatus,
  setcurrentprintstatus,
  setAuthenticated,
  windowwidth,
  sac,
  setsac,
  sac2,
  setsac2,
  sac9,
  setsac9,
  dept,
  setdept,
  printcount,
  setprintcount,
  clrdirectory,
  setclrdirectory,
  navclrprint,
  setnavclrprint,
  navclrfloors,
  setnavclrfloors,
  navclrrds,
  setnavclrrds,
  navclrsettings,
  setnavclrsettings,
  setprevfloor,
  setcurrentfloor,
  setnextfloor,
}) => {
  const [comment, setcomment] = useState("Receive The Hard Copy From P-ZOne");
  const history = useHistory();
  useEffect(() => {
    setcurrentprintstatus("fetch");
    setnavclrsettings("white");
    setnavclrrds("white");
    setnavclrfloors("white");
  }, []);
  useEffect(() => {
    if (clrdirectory) {
      setTimeout(function () {
        // Axios.post("http://localhost:3001/api/login", {
        Axios.post("https://rds.onlysiam.com/api/delete");

        setclrdirectory(false);
      }, 3000);
    }
    if (currentprintstatus === "fetch") {
      setpreloader(true);
      var condition = navigator.onLine ? "online" : "offline";
      if (condition === "online") {
        fetch("https://www.google.com/", {
          mode: "no-cors",
        })
          .then(() => {
            Axios.post("https://rds.onlysiam.com/api/getprintinfo", {
              username: userName,
            }).then((response) => {
              if (response.data.message) {
                console.log(response.data.message);
              } else {
                console.log(response.data);
                setprintdata(response.data);

                setpreloader(false);
              }
            });
          })
          .catch(() => {});
      } else {
        toast(<Alertoffline />, {
          className: "incorrectPass",
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
      setcurrentprintstatus("print");
    }
  });

  const fileInputHandler = (e) => {
    setfile(e.target.files[0]);
    setfilename(e.target.files[0].name);
  };

  function printdatastore() {
    Axios.post("https://rds.onlysiam.com/api/postprintinfo", {
      username: userName,
      filename: filename,
      status: printstatus,
      comment: comment,
    }).then((response) => {
      console.log(response);
      setpreloader(false);
    });
  }

  const upload = (e) => {
    setpreloader(true);
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);

    // Axios.post("http://localhost:3001/api/login", {
    Axios.post("https://rds.onlysiam.com/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
        setprintcount(true);
        setcurrentprintstatus("Requested");
        setuploadedfile(response.data);
        console.log(response.data);
        console.log(uploadedfile);
        // localStorage.setItem("dp", response.data[0].profilepic);
        // localStorage.setItem("name", response.data[0].name);
      }
    });
    printdatastore();
  };

  return (
    <Body
      height={windowheight}
      initial="hidden"
      animate="show"
      variants={pageAnimation}
      exit="exit"
    >
      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
      <Circle3 className="circle3"></Circle3>
      <Circle4 className="circle4"></Circle4>
      <ToastContainer newestOnTop={false} rtl={false} transition={Zoom} />

      <div className="formcontainer">
        <form className="formStyle" onSubmit={upload}>
          <div className="headin"></div>
          <div className="input">
            <input
              type="file"
              placeholder="File"
              onChange={fileInputHandler}
              id="file"
              required
            />
          </div>

          <button className="loginBtn">PRINT</button>
        </form>
        <div className="previnfo">
          <div className="printdatainitial">
            <div className="dateintial infointial">
              <h1>Print Date</h1>
            </div>
            <div className="filenameintial infointial">
              <h1>Name</h1>
            </div>
            <div className="statusintial infointial">
              <h1>Status</h1>
            </div>
            <div className="commentintial infointial">
              <h1>Comments</h1>
            </div>
          </div>
          <div className="elements">
            {/* <button onClick={deletehandler}>sd</button> */}
            {printdata.map((print) => (
              <Files
                date={print.date}
                printstatus={print.status}
                setcurrentprintstatus={setcurrentprintstatus}
                filename={print.filename}
                uploadedfile={uploadedfile}
                setuploadedfile={setuploadedfile}
                key={uuidv4()}
              />
            ))}
            {printcount ? (
              <Filestmp
                currentprintstatus={currentprintstatus}
                setcurrentprintstatus={setcurrentprintstatus}
                filename={filename}
                uploadedfile={uploadedfile}
                setuploadedfile={setuploadedfile}
                printcount={printcount}
                setprintcount={setprintcount}
                clrdirectory={clrdirectory}
                setclrdirectory={setclrdirectory}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {preloader ? (
        <div className="preloader">
          <ClipLoader color="#50c2c9" loading={preloader} size={150} />
        </div>
      ) : (
        ""
      )}
      {windowwidth > 799 ? (
        <Navbardesktop
          setAuthenticated={setAuthenticated}
          sac={sac}
          setsac={setsac}
          sac2={sac2}
          setsac2={setsac2}
          sac9={sac9}
          setsac9={setsac9}
          dept={dept}
          setdept={setdept}
          navclrprint={navclrprint}
          setnavclrprint={setnavclrprint}
          navclrfloors={navclrfloors}
          setnavclrfloors={setnavclrfloors}
          navclrrds={navclrrds}
          setnavclrrds={setnavclrrds}
          navclrsettings={navclrsettings}
          setnavclrsettings={setnavclrsettings}
        />
      ) : (
        <Navbar
          setAuthenticated={setAuthenticated}
          sac={sac}
          setsac={setsac}
          sac2={sac2}
          setsac2={setsac2}
          sac9={sac9}
          setsac9={setsac9}
          dept={dept}
          setdept={setdept}
          setcurrentfloor={setcurrentfloor}
          setprevfloor={setprevfloor}
          setnextfloor={setnextfloor}
          navclrprint={navclrprint}
          setnavclrprint={setnavclrprint}
          navclrfloors={navclrfloors}
          setnavclrfloors={setnavclrfloors}
          navclrrds={navclrrds}
          setnavclrrds={setnavclrrds}
          navclrsettings={navclrsettings}
          setnavclrsettings={setnavclrsettings}
        />
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

  .formcontainer {
    display: flex;
    flex-direction: row;
    width: 95vw;
    height: 80vh;

    margin-top: 60px;
    border-radius: 10px;
    .formStyle {
      position: fixed;
      height: 50px;
      width: 95vw;
      top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      z-index: 10;

      .input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 5vh;
        background-color: #50c3c986;
        color: #746a6a;
        font-size: 2.2vh;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        transition: 1s ease;
        border: 2px solid #50c2c9;
        margin-right: 10px;
        #file {
          padding: 10px;
        }
      }

      .loginBtn {
        width: 100px;
        height: 5vh;
        background-color: #50c2c9;
        color: white;
        font-size: 2.2vh;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        transition: 1s ease;
        cursor: pointer;
      }
      .loginBtn:hover {
        transform: scale(1.1);
      }
    }
    .previnfo {
      margin-top: 40px;
      overflow-y: scroll;
      z-index: 10;
      .printdatainitial {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95vw;
        height: 5vh;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #2c6d70;
        .infointial {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dateintial {
          width: 20vw;
        }
        .filenameintial {
          width: 20vw;
        }
        .statusintial {
          width: 20vw;
        }
        .commentintial {
          width: 30vw;
        }
        h1 {
          font-size: 15px;
          font-weight: 800;
          color: white;
        }
      }
      .elements {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 50px;
      }
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

  @media (min-width: 800px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    .formcontainer {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 80vw;
      height: 80vh;
      border-radius: 10px;
      background-color: #50c3c926;
      .formStyle {
        position: fixed;
        height: 10vh;
        width: 30vw;
        top: 40px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;

        .input {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 12vw;
          height: 5vh;
          background-color: #50c3c986;
          color: #9e9090;
          font-size: 2.2vh;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          transition: 1s ease;
          border: 2px solid #50c2c9;
          #file {
            width: 10vw;
          }
        }

        .loginBtn {
          width: 15vw;
          height: 5vh;
          background-color: #50c2c9;
          color: white;
          font-size: 2.2vh;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          transition: 1s ease;
          cursor: pointer;
        }
        .loginBtn:hover {
          transform: scale(1.1);
        }
      }
      .previnfo {
        overflow-y: scroll;
        margin-top: 0px;
        .printdatainitial {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80vw;
          height: 5vh;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-color: #2c6d70;
          .infointial {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dateintial {
            width: 20vw;
          }
          .filenameintial {
            width: 20vw;
          }
          .statusintial {
            width: 20vw;
          }
          .commentintial {
            width: 40vw;
          }
          h1 {
            font-size: 1.5vw;
            font-weight: 800;
            color: white;
          }
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 50px;
        }
        .elements {
          display: flex;
          flex-direction: column-reverse;
          margin-top: 50px;
        }
      } /* width */
    }
  }
`;
const Circle1 = styled.div`
  position: absolute;
  left: 1rem;
  top: -7rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
  @media (min-width: 800px) {
    display: none;
  }
`;
const Circle2 = styled.div`
  position: absolute;
  top: -3.5rem;
  left: -5rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
  @media (min-width: 800px) {
    display: none;
  }
`;
const Circle3 = styled.div`
  position: absolute;
  right: 1rem;
  bottom: -7rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
  @media (min-width: 800px) {
    right: 5rem;
    bottom: -15rem;
    width: 50vh;
    height: 50vh;
  }
`;
const Circle4 = styled.div`
  position: absolute;
  bottom: -3.5rem;
  right: -5rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  z-index: 1;
  @media (min-width: 800px) {
    right: -10rem;
    bottom: -5rem;
    width: 50vh;
    height: 50vh;
  }
`;

export default Print;
