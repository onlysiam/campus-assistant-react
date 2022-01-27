import { React, useEffect, useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

//styled
import styled from "styled-components";
import Note from "./Note";
import notes from "../img/note.svg";
import Noteinitial from "./Noteinitial";
//Animations
import { motion } from "framer-motion";

const Notes = ({
  coursedata,
  courseNotesData,
  notesContent,
  setnotesContent,
  sem,
  setcourseNotesData,
  windowwidth,
}) => {
  const [margin, setmargin] = useState(-580);
  const [marginMobile, setmarginMobile] = useState(-320);
  const [selectedCourse, setselectedCourse] = useState("");
  const [date, setDate] = useState("");
  const [currentInitial, setcurrentInitial] = useState("");
  const [saveBtnActive, setsaveBtnActive] = useState(false);

  useEffect(() => {});

  const noteshandler = () => {
    if (windowwidth > 799) {
      if (margin === -580) setmargin(5);
      if (margin === 5) setmargin(-580);
    }
    if (windowwidth < 799) {
      if (marginMobile === -320) setmarginMobile(5);
      if (marginMobile === 5) setmarginMobile(-320);
    }
  };

  const setNotes = (e) => {
    setnotesContent(e.target.value);
    setsaveBtnActive(true);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const noteUpdateHandler = () => {
    console.log("working");
    Axios.post("https://rds.onlysiam.com/api/updatenotes", {
      username: localStorage.getItem("userID"),
      course: "%" + selectedCourse + "%",
      note: notesContent,
      date: date,
      semester: sem,
    }).then((response) => {});
    Axios.post("https://rds.onlysiam.com/api/fetchnotes", {
      username: localStorage.getItem("userID"),
      semester: sem,
    }).then((response) => {
      if (response.data.message) {
      } else {
        setcourseNotesData(response.data);
        console.log(response.data);
      }
    });
    setsaveBtnActive(false);
  };
  return (
    <Body right={margin} rightM={marginMobile}>
      <div id="h1note" className="notesimg">
        <img id="noteimg" onClick={noteshandler} src={notes} alt="" />
        <h1>Save A Note For Later</h1>
      </div>
      <div className="notescontainer">
        <div className="initialcontainer">
          <div className="coursesinitial">
            {coursedata.map((course) => (
              <Noteinitial
                initial={course.code}
                key={uuidv4()}
                courseNotesData={courseNotesData}
                notesContent={notesContent}
                setnotesContent={setnotesContent}
                setselectedCourse={setselectedCourse}
                currentInitial={currentInitial}
                setcurrentInitial={setcurrentInitial}
                windowwidth={windowwidth}
              />
            ))}
          </div>
        </div>
        <div className="notes">
          <textarea
            name=""
            id="txt"
            cols="30"
            rows="10"
            value={notesContent}
            onChange={setNotes}
          ></textarea>
          <div className="texareaother">
            <div className="date">
              <p>Any Date?</p>
              <input type="date" value={date} onChange={dateHandler} />
            </div>
            {saveBtnActive ? (
              <button onClick={noteUpdateHandler}>SAVE</button>
            ) : (
              <button
                disabled={!saveBtnActive}
                style={{ backgroundColor: "#808080", cursor: "default" }}
                onClick={noteUpdateHandler}
              >
                SAVE
              </button>
            )}
          </div>
        </div>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  margin-top: 20px;
  right: ${(props) => props.rightM}px;
  transition: 0.5s ease-in;
  z-index: 100;
  .notesimg {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    #noteimg {
      border: none;
      height: 8vh;
      cursor: pointer;
    }
    h1 {
      font-size: 10px;
      width: 70px;
      text-align: center;
    }
  }
  .notescontainer {
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    width: 320px;
    background-color: #4988b1;
    .initialcontainer {
      overflow-x: scroll;
      padding: 5px 5px 0px;

      .coursesinitial {
        width: 300vw;
        display: flex;
        z-index: 2;
      }

      ::-webkit-scrollbar-track {
        background-color: #4988b1;
      }

      ::-webkit-scrollbar {
        height: 3px;
        background-color: #4988b1;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: rgba(53, 53, 53, 0.81);
      }
    }
    .notes {
      textarea {
        width: 30vw;
        border: none;
        resize: none;
        height: 15vh;
        width: 310px;
        font-size: 20px;
        background-color: #feffc2;
        border-radius: 0px 0px 10px 10px;
        padding: 5px;
      }
      .texareaother {
        display: flex;
        justify-content: space-between;
        button {
          height: 50px;
          width: 60px;
          float: right;
          background-color: #0abdc78b;
          color: white;
          font-size: 15px;
          font-weight: 600;
          outline: none;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
        .date {
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            color: white;
            margin-left: 5px;
          }
          input {
            border: none;
            padding: 5px;
            border-radius: 10px;
            margin-left: 10px;
            background-color: #8cfbff;
            cursor: pointer;
          }
        }
      }
      textarea:focus {
        outline: none;
      }
      #txt {
        overflow: auto;
        overflow-x: hidden;
      }

      #txt::-webkit-scrollbar-track {
        background-color: white;
      }

      #txt::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
      }

      #txt::-webkit-scrollbar-thumb {
        border-radius: 100px;
        box-shadow: 3px 0px 12px 4px grey;
        background-color: rgba(53, 53, 53, 0.81);
      }
    }
  }

  @media (min-width: 800px) {
    position: fixed;
    display: flex;
    align-items: center;
    margin-top: 0px;
    right: ${(props) => props.right}px;
    transition: 0.5s ease-in;
    .notesimg {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      #noteimg {
        border: none;
        height: 8vh;
        cursor: pointer;
      }
    }
    #h1note h1 {
      width: 80px;
      font-size: 12px;
      text-align: center;
    }
    .notescontainer {
      border-radius: 10px;
      padding: 5px 5px;
      width: 580px;
      background-color: #4988b1;
      .initialcontainer {
        width: 575px;
        overflow-x: scroll;
        z-index: 5;
        padding: 5px 5px 0px;

        .coursesinitial {
          width: 100vw;
          display: flex;
          z-index: 2;
        }

        ::-webkit-scrollbar-track {
          background-color: #4988b1;
        }

        ::-webkit-scrollbar {
          height: 3px;
          background-color: #4988b1;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 100px;
          background-color: rgba(53, 53, 53, 0.81);
        }
      }
      .notes {
        textarea {
          width: 30vw;
          border: none;
          resize: none;
          height: 15vh;
          font-size: 20px;
          background-color: #feffc2;
          border-radius: 0px 0px 10px 10px;
          padding: 5px;
        }
        .texareaother {
          display: flex;
          justify-content: space-between;
          button {
            height: 4vh;
            width: 4vw;
            float: right;
            background-color: #0abdc78b;
            color: white;
            font-size: 0.8vw;
            font-weight: 600;
            outline: none;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
          .date {
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              color: white;
              margin-left: 5px;
            }
            input {
              border: none;
              padding: 5px;
              border-radius: 10px;
              margin-left: 10px;
              background-color: #8cfbff;
              cursor: pointer;
            }
          }
        }
        textarea:focus {
          outline: none;
        }
        #txt {
          overflow: auto;
          overflow-x: hidden;
        }

        #txt::-webkit-scrollbar-track {
          background-color: white;
        }

        #txt::-webkit-scrollbar {
          width: 6px;
          background-color: #f5f5f5;
        }

        #txt::-webkit-scrollbar-thumb {
          border-radius: 100px;
          box-shadow: 3px 0px 12px 4px grey;
          background-color: rgba(53, 53, 53, 0.81);
        }
      }
    }
  }
`;

export default Notes;
