import { React, useEffect, useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ClipLoader from "react-spinners/ClipLoader";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Resetpass = ({
  preloader,
  setpreloader,
  coursedata,
  courseNotesData,
  notesContent,
  setnotesContent,
  sem,
  setcourseNotesData,
  windowwidth,
  passMatched,
  setpassMatched,
  resetPassword,
  setresetPassword,
}) => {
  const [mail, setmail] = useState("");
  const [otp, setotp] = useState("");
  const [newpass, setnewpass] = useState("");
  const [newpassVerify, setnewpassVerify] = useState("");

  const [firstcomp, setfirstcomp] = useState(true);
  const [emailVerified, setemailVerified] = useState(false);
  const [otpVerified, setotpVerified] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    console.log();
  });
  const cancelHandler = () => {
    setresetPassword(false);
  };
  const mailInputHandler = (e) => {
    setmail(e.target.value);
  };
  const otpInputHandler = (e) => {
    setotp(e.target.value);
  };
  const newpassInputHandler = (e) => {
    setnewpass(e.target.value);
  };
  const newpassVerifyInputHandler = (e) => {
    setnewpassVerify(e.target.value);
    if (newpass === e.target.value) {
      setpassMatched(true);
    } else {
      setpassMatched(false);
    }
  };

  const mailHandler = (e) => {
    setpreloader(true);
    e.preventDefault();
    Axios.post("https://rds.onlysiam.com/api/mailchecker", {
      email: mail,
    }).then((response) => {
      if (response.data.length > 0) {
        Axios.post("https://rds.onlysiam.com/api/resetreq", {
          usermail: mail,
          email: mail,
        }).then((response) => {
          console.log("resetting");
          console.log(response.data);

          setpreloader(false);
          if (response.data.message) {
            console.log(response.data.message);
          }
        });
        setfirstcomp(false);
        setpreloader(false);
        setemailVerified(true);
        setWarning(false);
      } else {
        setWarning(true);
        setmail("");

        setpreloader(false);
      }
      console.log("response.data", response.data);
      if (response.data.message) {
        console.log(response.data.message);
      }
    });
  };
  const otpHandler = (e) => {
    setpreloader(true);
    e.preventDefault();
    Axios.post("https://rds.onlysiam.com/api/otpchecker", {
      email: mail,
      otp: otp,
    }).then((response) => {
      if (response.data.length > 0) {
        setfirstcomp(false);
        setemailVerified(false);
        setotpVerified(true);
        setWarning(false);
        setpreloader(false);
      } else {
        setpreloader(false);
        setWarning(true);
      }
      console.log(response.data);
      if (response.data.message) {
        console.log(response.data.message);
      }
    });
  };
  const resetHandler = (e) => {
    setpreloader(true);
    e.preventDefault();
    if (newpass === newpassVerify) {
      Axios.post("https://rds.onlysiam.com/api/resetpass", {
        email: mail,
        pass: newpassVerify,
      }).then((response) => {
        console.log(response.data);
        if (response.data.message) {
          console.log(response.data.message);
          setotpVerified(false);
          setpreloader(false);
          setsuccess(true);
          setTimeout(function () {
            setresetPassword(false);
          }, 3000);
        } else {
        }
      });
    }
  };
  return (
    <Body>
      {firstcomp ? (
        <div className="mail">
          <form onSubmit={mailHandler}>
            {warning ? (
              <p
                style={{
                  backgroundColor: "red",
                }}
              >
                Please Enter Valid E-mail Address
              </p>
            ) : (
              <p>Enter Your NSU Email Address</p>
            )}
            <input
              value={mail}
              onChange={mailInputHandler}
              type="text"
              placeholder="NSU Email"
              required
            />

            <div className="buttons">
              <button>Next</button>
              <button onClick={cancelHandler}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {emailVerified ? (
        <div className="otp">
          <form onSubmit={otpHandler}>
            {warning ? (
              <p
                style={{
                  backgroundColor: "red",
                }}
              >
                OTP Mismatched. Enter Again.
              </p>
            ) : (
              <p>
                An OTP Has Sent to Your Mail. Please Enter The OTP to Continue.{" "}
              </p>
            )}
            <input
              value={otp}
              onChange={otpInputHandler}
              type="text"
              placeholder="6-Digit OTP"
              required
            />
            <div className="buttons">
              <button>Next</button>
              <button onClick={cancelHandler}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {otpVerified ? (
        <div className="reset">
          <form onSubmit={resetHandler}>
            <p>Enter New Password </p>
            <input
              value={newpass}
              onChange={newpassInputHandler}
              type="text"
              placeholder="New Password"
              required
            />
            <p>Varify New Password </p>
            <div className="matching">
              <input
                value={newpassVerify}
                onChange={newpassVerifyInputHandler}
                type="text"
                placeholder="Verify Password"
                required
              />
              {passMatched ? (
                <p
                  style={{
                    color: "#007a06",
                  }}
                >
                  Matched
                </p>
              ) : (
                <p
                  style={{
                    color: "red",
                  }}
                >
                  Not Matched
                </p>
              )}
            </div>

            <div className="buttons">
              <button disabled={!passMatched}>Reset</button>
              <button onClick={cancelHandler}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {success ? (
        <div className="success">
          <h1>Your Password Have Been Changed</h1>
        </div>
      ) : (
        ""
      )}
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 40vh;
  background-color: #50c2c9;
  border-radius: 20px;
  .mail {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90vw;
      p {
        font-size: 25px;
        text-align: center;
        width: 90%;
        color: white;
        font-weight: 600;
        padding: 10px;
        border-radius: 10px;
      }
      input {
        width: 70%;
        height: 5vh;
        margin-top: 10px;
        border: none;
        padding: 5px;
        font-size: 15px;
        border-radius: 10px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid #2b8e94;
      }
      .buttons {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          height: 6vh;
          width: 100px;
          background-color: #3a9ca1;
          color: white;
          margin-top: 10px;
          font-size: 20px;
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
  .otp {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90vw;
      p {
        font-size: 25px;
        text-align: center;
        width: 90%;
        color: white;
        font-size: 20px;
        text-align: center;
        font-weight: 600;
        padding: 10px;
        border-radius: 10px;
      }
      input {
        width: 70%;
        height: 4vh;
        margin-top: 10px;
        border: none;
        padding: 5px;
        font-size: 15px;
        border-radius: 10px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid #2b8e94;
      }
      .buttons {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          height: 6vh;
          width: 100px;
          background-color: #3a9ca1;
          color: white;
          margin-top: 10px;
          font-size: 20px;
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
  .reset {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90vw;
      p {
        font-size: 20px;
        width: 60%;
        color: white;
        font-weight: 600;
        padding: 10px 0px 0px 0px;
        margin-left: 0;
        border-radius: 10px;
      }
      input {
        width: 60%;
        height: 4vh;
        margin-top: 0px;
        border: none;
        padding: 5px;
        font-size: 15px;
        border-radius: 10px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid #2b8e94;
      }
      .buttons {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          height: 6vh;
          width: 100px;
          background-color: #3a9ca1;
          color: white;
          margin-top: 10px;
          font-size: 20px;
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
      .matching {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;
        input {
          width: 60%;
          height: 4vh;
          margin-top: 0px;
          border: none;
          padding: 5px;
          font-size: 15px;
          border-radius: 10px;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid #2b8e94;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
  .success {
    h1 {
      font-size: 30px;
      width: 100%;
      color: white;
      padding: 15px;
      font-size: 15px;
      text-align: center;
      background-color: #32927a;
      font-weight: 600;
      margin-left: 0;
      border-radius: 10px;
    }
  }
  @media (min-width: 800px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 30vh;
    background-color: #50c2c9;
    border-radius: 20px;
    .mail {
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30vw;
        p {
          font-size: 30px;
          color: white;
          font-weight: 600;
          padding: 10px;
          border-radius: 10px;
        }
        input {
          width: 70%;
          height: 4vh;
          margin-top: 10px;
          border: none;
          padding: 5px;
          font-size: 15px;
          border-radius: 10px;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid #2b8e94;
        }
        .buttons {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            height: 6vh;
            width: 8vw;
            background-color: #3a9ca1;
            color: white;
            margin-top: 10px;
            font-size: 1.5vw;
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
    .otp {
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30vw;
        p {
          font-size: 30px;
          width: 20vw;
          color: white;
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          padding: 10px;
          border-radius: 10px;
        }
        input {
          width: 70%;
          height: 4vh;
          margin-top: 10px;
          border: none;
          padding: 5px;
          font-size: 15px;
          border-radius: 10px;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid #2b8e94;
        }
        .buttons {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            height: 6vh;
            width: 8vw;
            background-color: #3a9ca1;
            color: white;
            margin-top: 10px;
            font-size: 1.5vw;
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
    .reset {
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 30vw;
        margin-left: 50%;

        transform: translateX(-25%);
        p {
          font-size: 30px;
          width: 60%;
          color: white;
          font-size: 20px;
          font-weight: 600;
          padding: 10px 0px 0px 0px;
          margin-left: 0;
          border-radius: 10px;
        }
        input {
          width: 60%;
          height: 4vh;
          margin-top: 0px;
          border: none;
          padding: 5px;
          font-size: 15px;
          border-radius: 10px;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid #2b8e94;
        }
        .buttons {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            height: 6vh;
            width: 8vw;
            background-color: #3a9ca1;
            color: white;
            margin-top: 10px;
            font-size: 1.5vw;
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
        .matching {
          display: flex;
          width: 77%;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          input {
            width: 90%;
            height: 4vh;
            margin-top: 0px;
            border: none;
            padding: 5px;
            font-size: 15px;
            border-radius: 10px;
          }
          input:focus {
            outline: none;
            border-bottom: 2px solid #2b8e94;
          }
          p {
            font-size: 1.2vw;
            padding: 00px 0px 0px 10px;
          }
        }
      }
    }
    .success {
      h1 {
        font-size: 30px;
        width: 100%;
        color: white;
        padding: 15px;
        font-size: 1.3vw;
        background-color: #32927a;
        font-weight: 600;
        margin-left: 0;
        border-radius: 10px;
      }
    }
  }
`;

export default Resetpass;
