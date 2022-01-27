import { React, useEffect, useState } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

const Noteinitial = ({
  initial,
  notesContent,
  setnotesContent,
  courseNotesData,
  setselectedCourse,
  currentInitial,
  setcurrentInitial,
  windowwidth,
}) => {
  useEffect(() => {});
  const initialHandler = () => {
    setcurrentInitial(initial);
    var i;
    for (i = 0; i < courseNotesData.length; i++) {
      if (initial === courseNotesData[i].code) {
        setselectedCourse(initial);
        setnotesContent(courseNotesData[i].note);
      }
    }

    // var tmp = date.split("T");
    // setnotesContent(note + " on " + tmp);
  };
  return (
    <Body>
      <div className="initial">
        {currentInitial === initial ? (
          <button
            style={{ backgroundColor: "#00c0c0" }}
            onClick={initialHandler}
          >
            {initial}
          </button>
        ) : (
          <button onClick={initialHandler}>{initial}</button>
        )}
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  .initial {
    padding: 5px;
    button {
      font-size: 11px;
      font-weight: 400;
      width: 80px;
      font-size: 15px;
      color: white;
      background-color: #42a5d6;
      border: none;
      border-radius: 10px;
      padding: 5px;
      cursor: pointer;
    }
  }

  @media (min-width: 800px) {
    .initial {
      padding: 5px;
      button {
        font-size: 11px;
        font-weight: 400;
        width: 6vw;
        font-size: 20px;
        color: white;
        background-color: #42a5d6;
        border: none;
        border-radius: 10px;
        padding: 4px;
        cursor: pointer;
      }
    }
  }
`;

export default Noteinitial;
