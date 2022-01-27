import { React, useEffect, useState } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";
import { Navbardesktop } from "./Navbardesktop";
import { Navbar } from "./Navbar";

const Settings = ({
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
  const [isOpenName, setisOpenName] = useState(false);
  const [namebg, setnamebg] = useState("white");
  const [isOpenPass, setisOpenPass] = useState(false);
  const [passbg, setpassbg] = useState("white");
  const [isOpenMail, setisOpenMail] = useState(false);
  const [mailbg, setmailbg] = useState("white");
  useEffect(() => {
    setpreloader(true);
    setnavclrprint("white");
    setnavclrrds("white");
    setnavclrfloors("white");
  }, []);
  useEffect(() => {});
  const nameHandler = () => {
    setisOpenPass(false);
    setisOpenMail(false);
    setisOpenName(!isOpenName);
    if (isOpenName) setnamebg("white");
    if (!isOpenName) {
      setnamebg("#f2f2f2");
      setmailbg("white");
      setpassbg("white");
    }
  };
  const passHandler = () => {
    setisOpenName(false);
    setisOpenMail(false);
    setisOpenPass(!isOpenPass);
    if (isOpenPass) setpassbg("white");
    if (!isOpenPass) {
      setpassbg("#f2f2f2");
      setnamebg("white");
      setmailbg("white");
    }
  };
  const mailHandler = () => {
    setisOpenName(false);
    setisOpenPass(false);
    setisOpenMail(!isOpenMail);
    if (isOpenMail) {
      setmailbg("white");
    }
    if (!isOpenMail) {
      setmailbg("#f2f2f2");
      setpassbg("white");
      setnamebg("white");
    }
  };
  return (
    <Body nameBg={namebg} passBg={passbg} mailBg={mailbg}>
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
        <div className="nav">
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
        </div>
      )}

      <div className="settings">
        <div className="mainheader">
          <h1>General Account Settings</h1>
        </div>
        <div className="name">
          <div className="header fullname">
            <h1>Name</h1>
            <p>Siam AHmed</p>
            <button onClick={nameHandler}>Edit</button>
          </div>
          {isOpenName ? (
            <form>
              <div className="inputs">
                <div className="label">
                  <label htmlFor="">First Name</label>
                  <label htmlFor="">Middle Name</label>
                  <label htmlFor="">Last Name</label>
                </div>
                <div className="input">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>

              <div className="buttons">
                <button>Confirm</button>
                <button>Cancel</button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="password">
          <div className="header pass">
            <h1>Password</h1>
            {isOpenPass ? <p></p> : <p>************</p>}

            <button onClick={passHandler}>Change</button>
          </div>
          {isOpenPass ? (
            <form>
              <div className="inputs">
                <div className="label">
                  <label htmlFor="">Previous Password</label>
                  <label htmlFor="">New Password</label>
                  <label htmlFor="">Verify Password</label>
                </div>
                <div className="input">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <div className="buttons">
                <button>Confirm</button>
                <button>Cancel</button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
        <div className="mail">
          <div className="header email">
            <h1>Email</h1>
            {isOpenMail ? <p></p> : <p>siam.ahmed01@northsouth.edu</p>}
            <button onClick={mailHandler}>Edit</button>
          </div>
          {isOpenMail ? (
            <form>
              <div className="inputs">
                <div className="label">
                  <label htmlFor="">Previous Email</label>
                  <label htmlFor="">New Email</label>
                </div>
                <div className="input">
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <div className="buttons">
                <button>Request</button>
                <button>Cancel</button>
              </div>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  margin-top: 100px;
  .nav {
    z-index: ${(props) => props.zindex};
  }
  .settings {
    z-index: 5;
    .mainheader {
      width: 90vw;
      border-bottom: 1px solid #018a8f;

      h1 {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
    .name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.nameBg};
      border-bottom: 1px solid #018a8f;
      h1 {
        font-size: 20px;
      }
      form {
        width: 90vw;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .inputs {
          width: 85vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .label {
            display: flex;
            flex-direction: column;
            label {
              font-size: 15px;
              color: #000000;
              font-weight: 400;
              padding: 10px;
              border-radius: 10px;
            }
          }
          .input {
            display: flex;
            flex-direction: column;
            input {
              height: 4vh;
              margin-top: 10px;
              background-color: #dfdfdf;
              border: none;
              padding: 5px;
              font-size: 15px;
              border-radius: 10px;
            }
            input:focus {
              outline: none;
              border-bottom: 2px solid #2b8e94;
            }
          }
        }
        .buttons {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50%;
          button {
            height: 5vh;
            width: 20vw;
            background-color: #3a9ca1;
            color: white;
            font-size: 15px;
            font-weight: 600;
            outline: none;
            border: none;
            border-radius: 3px;
            transition: 1s;
            cursor: pointer;
          }
          button:hover {
            background-color: #018a8f;
            border: 1px solid #3a9ca1;
          }
        }
      }
    }
    .password {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.passBg};
      border-bottom: 1px solid #018a8f;
      h1 {
        font-size: 20px;
      }

      form {
        width: 90vw;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .inputs {
          width: 85vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .label {
            display: flex;
            flex-direction: column;
            label {
              font-size: 15px;
              color: #000000;
              font-weight: 400;
              padding: 10px;
              border-radius: 10px;
            }
          }
          .input {
            display: flex;
            flex-direction: column;
            input {
              height: 4vh;
              margin-top: 10px;
              background-color: #dfdfdf;
              border: none;
              padding: 5px;
              font-size: 15px;
              border-radius: 10px;
            }
            input:focus {
              outline: none;
              border-bottom: 2px solid #2b8e94;
            }
          }
        }
        .buttons {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50%;
          button {
            height: 5vh;
            width: 20vw;
            background-color: #3a9ca1;
            color: white;
            font-size: 15px;
            font-weight: 600;
            outline: none;
            border: none;
            border-radius: 3px;
            transition: 1s;
            cursor: pointer;
          }
          button:hover {
            background-color: #018a8f;
            border: 1px solid #3a9ca1;
          }
        }
      }
    }
    .mail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.mailBg};
      border-bottom: 1px solid #018a8f;
      h1 {
        font-size: 20px;
      }

      form {
        width: 90vw;
        height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .inputs {
          width: 85vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .label {
            display: flex;
            flex-direction: column;
            label {
              font-size: 15px;
              color: #000000;
              font-weight: 400;
              padding: 10px;
              border-radius: 10px;
            }
          }
          .input {
            display: flex;
            flex-direction: column;
            input {
              height: 4vh;
              margin-top: 10px;
              background-color: #dfdfdf;
              border: none;
              padding: 5px;
              font-size: 15px;
              border-radius: 10px;
            }
            input:focus {
              outline: none;
              border-bottom: 2px solid #2b8e94;
            }
          }
        }
        .buttons {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50%;
          button {
            height: 5vh;
            width: 20vw;
            background-color: #3a9ca1;
            color: white;
            font-size: 15px;
            font-weight: 600;
            outline: none;
            border: none;
            border-radius: 3px;
            transition: 1s;
            cursor: pointer;
          }
          button:hover {
            background-color: #018a8f;
            border: 1px solid #3a9ca1;
          }
        }
      }
    }
    .header {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 90vw;
      height: 10vh;
      margin-bottom: 10px;
      h1 {
        width: 35vw;
      }
      p {
        width: 30vw;
        margin-right: 10px;
      }
      button {
        height: 5vh;
        width: 18vw;
        background-color: #3a9ca1;
        color: white;
        margin-top: 10px;
        font-size: 15px;
        font-weight: 600;
        outline: none;
        border: none;
        border-radius: 3px;
        transition: 1s;
        cursor: pointer;
      }
      button:hover {
        background-color: #018a8f;
        border: 1px solid #3a9ca1;
      }
    }
  }
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    margin-top: 100px;
    .settings {
      .mainheader {
        width: 35vw;
        border-bottom: 1px solid #018a8f;

        h1 {
          font-size: 30px;
          margin-bottom: 10px;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.nameBg};
        border-bottom: 1px solid #018a8f;
        h1 {
          font-size: 20px;
        }
        form {
          width: 35vw;
          height: 25vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .inputs {
            width: 35vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .label {
              display: flex;
              flex-direction: column;
              label {
                font-size: 20px;
                color: #000000;
                font-weight: 400;
                padding: 10px;
                border-radius: 10px;
              }
            }
            .input {
              display: flex;
              flex-direction: column;
              input {
                height: 4vh;
                margin-top: 10px;
                background-color: #dfdfdf;
                border: none;
                padding: 5px;
                font-size: 15px;
                border-radius: 10px;
              }
              input:focus {
                outline: none;
                border-bottom: 2px solid #2b8e94;
              }
            }
          }
          .buttons {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            button {
              height: 5vh;
              width: 5vw;
              background-color: #3a9ca1;
              color: white;
              margin-top: 10px;
              font-size: 1vw;
              font-weight: 600;
              outline: none;
              border: none;
              border-radius: 3px;
              transition: 1s;
              cursor: pointer;
            }
            button:hover {
              background-color: #018a8f;
              border: 1px solid #3a9ca1;
            }
          }
        }
      }
      .password {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.passBg};
        border-bottom: 1px solid #018a8f;
        h1 {
          font-size: 20px;
        }
        form {
          width: 35vw;
          height: 25vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .inputs {
            width: 35vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .label {
              display: flex;
              flex-direction: column;
              label {
                font-size: 20px;
                color: #000000;
                font-weight: 400;
                padding: 10px;
                border-radius: 10px;
              }
            }
            .input {
              display: flex;
              flex-direction: column;
              input {
                height: 4vh;
                margin-top: 10px;
                background-color: #dfdfdf;
                border: none;
                padding: 5px;
                font-size: 15px;
                border-radius: 10px;
              }
              input:focus {
                outline: none;
                border-bottom: 2px solid #2b8e94;
              }
            }
          }
          .buttons {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            button {
              height: 5vh;
              width: 5vw;
              background-color: #3a9ca1;
              color: white;
              margin-top: 10px;
              font-size: 1vw;
              font-weight: 600;
              outline: none;
              border: none;
              border-radius: 3px;
              transition: 1s;
              cursor: pointer;
            }
            button:hover {
              background-color: #018a8f;
              border: 1px solid #3a9ca1;
            }
          }
        }
      }
      .mail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.mailBg};
        border-bottom: 1px solid #018a8f;
        h1 {
          font-size: 20px;
        }
        form {
          width: 35vw;
          height: 20vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .inputs {
            width: 35vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .label {
              display: flex;
              flex-direction: column;
              label {
                font-size: 20px;
                color: #000000;
                font-weight: 400;
                padding: 10px;
                border-radius: 10px;
              }
            }
            .input {
              display: flex;
              flex-direction: column;
              input {
                height: 4vh;
                margin-top: 10px;
                background-color: #dfdfdf;
                border: none;
                padding: 5px;
                font-size: 15px;
                border-radius: 10px;
              }
              input:focus {
                outline: none;
                border-bottom: 2px solid #2b8e94;
              }
            }
          }
          .buttons {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            button {
              height: 5vh;
              width: 5vw;
              background-color: #3a9ca1;
              color: white;
              margin-top: 10px;
              font-size: 1vw;
              font-weight: 600;
              outline: none;
              border: none;
              border-radius: 3px;
              transition: 1s;
              cursor: pointer;
            }
            button:hover {
              background-color: #018a8f;
              border: 1px solid #3a9ca1;
            }
          }
        }
      }
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35vw;
        height: 10vh;
        margin-bottom: 10px;
        h1 {
          width: 15vw;
        }
        p {
          width: 15vw;
        }
        button {
          height: 3vh;
          width: 3vw;
          background-color: #3a9ca1;
          color: white;
          margin-top: 10px;
          font-size: 10px;
          font-weight: 600;
          outline: none;
          border: none;
          border-radius: 3px;
          transition: 1s;
          cursor: pointer;
        }
        button:hover {
          background-color: #018a8f;
          border: 1px solid #3a9ca1;
        }
      }
    }
  }
`;

export default Settings;
