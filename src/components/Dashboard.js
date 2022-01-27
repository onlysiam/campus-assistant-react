import { React, useEffect } from "react";
import Axios from "axios";

import { Navbar } from "./Navbar";
import { Navbardesktop } from "./Navbardesktop";
import { useHistory } from "react-router-dom";

//components
import Notes from "./Notes";
import Desktopblock from "./Desktopblock";
import Swiperslides from "./Swiper";
import Swiperslidesv from "./Swiperv";
import Swiperdesktop from "./Swiperdesktop";
import ClipLoader from "react-spinners/ClipLoader";
import tempdp from "../img/dp.png";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alertoffline from "./Alertoffline";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Dashboard = ({
  userdata,
  setuserdata,
  coursedata,
  setcoursedata,
  setAuthenticated,
  windowheight,
  windowwidth,
  preloader,
  setpreloader,
  name,
  setName,
  dp,
  setDp,
  time,
  setTime,
  setDate,
  weekdays,
  tod,
  sac,
  setsac,
  sac2,
  setsac2,
  sac9,
  setsac9,
  dept,
  setdept,
  setcurrentfloor,
  setprevfloor,
  setnextfloor,
  navclrprint,
  setnavclrprint,
  navclrfloors,
  setnavclrfloors,
  navclrrds,
  setnavclrrds,
  navclrsettings,
  setnavclrsettings,
  sem,
  setSem,
  currentsem,
  setCurrentsem,
  weekdayinitial,
  setWeekdayinitial,
  upcomingclass,
  setUpcomingclass,
  upcomingclassroom,
  setUpcomingclassroom,
  upcomingclasstime,
  setUpcomingclasstime,
  mapviewCurrent,
  setmapviewCurrent,
  mapviewUpcoming,
  setmapviewUpcoming,
  currentclassroom,
  setCurrentclassroom,
  currentclass,
  setCurrentclass,
  mapview,
  setmapview,
  room,
  setroom,
  classStarted,
  setclassStarted,
  classStartedBg,
  setclassStartedBg,
  classStatus,
  setclassStatus,
  courseNotesData,
  setcourseNotesData,
  notesContent,
  setnotesContent,
  notesReminder,
  setnotesReminder,
}) => {
  const history = useHistory();

  //useEffect
  useEffect(() => {
    setpreloader(true);
    setnavclrprint("white");
    setnavclrrds("white");
    setnavclrfloors("#adadad");
    setnavclrsettings("white");
  }, []);
  useEffect(() => {
    setpreloader(true);
    var condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      fetch("https://www.google.com/", {
        // Check for internet connectivity
        mode: "no-cors",
      })
        .then(() => {
          if (!localStorage.getItem("userID")) {
            history.push("/");
          }

          //fetch data from server
          // Axios.post("http://localhost:3001/api/fetch", {
          Axios.post("https://rds.onlysiam.com/api/fetch", {
            username: localStorage.getItem("userID"),
            password: localStorage.getItem("userPASS"),
          }).then((response) => {
            if (response.data.message) {
              console.log(response.data.message);
            } else {
              Axios.post("https://rds.onlysiam.com/api/coursedata", {
                username: localStorage.getItem("userID"),
                sem: sem,
              }).then((response) => {
                if (response.data.message) {
                  console.log(response.data.message);
                } else {
                  console.log(response.data);
                  setcoursedata(response.data);
                  if (!currentsem) setCurrentsem(response.data[0].semester);
                }
              });

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

              setuserdata(response.data[0]);
              setName(response.data[0].name);
              setDp(response.data[0].profilepic);

              setpreloader(false);
            }

            setpreloader(false);
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
      if (!localStorage.getItem("userID")) {
        history.push("/");
      }
      setName(localStorage.getItem("name"));
      setDp(localStorage.getItem("dp"));
    }
  }, [currentsem]);
  useEffect(() => {
    localStorage.getItem("userID");

    function setClock() {
      const currentDate = new Date();
      const day = currentDate.getDay();
      const hour = currentDate.getHours();

      setTime(tod[hour].name);
      setDate(weekdays[day].name);
    }
    setClock();
  });
  const mapHandler = () => {
    history.push("/Map");
  };
  return (
    <Body
      height={windowheight}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
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
      <ToastContainer newestOnTop={false} rtl={false} transition={Zoom} />
      <div className="ProfilePic">
        {/* <img src={dp} alt="" /> */}
        <img src={tempdp} alt="" />
        <h1>Welcome, {name}</h1>
        {windowwidth > 799 ? (
          <Notes
            coursedata={coursedata}
            courseNotesData={courseNotesData}
            notesContent={notesContent}
            setnotesContent={setnotesContent}
            sem={sem}
            setcourseNotesData={setcourseNotesData}
            windowwidth={windowwidth}
          />
        ) : (
          ""
        )}
      </div>
      <div className="timeStamp">
        {windowwidth < 799 ? (
          <Notes
            coursedata={coursedata}
            courseNotesData={courseNotesData}
            notesContent={notesContent}
            setnotesContent={setnotesContent}
            sem={sem}
            setcourseNotesData={setcourseNotesData}
            windowwidth={windowwidth}
          />
        ) : (
          ""
        )}
        <div className="greetings">
          <button onClick={mapHandler}>MAP</button>
          <h2>{time}</h2>
        </div>

        <div className="clock">
          {windowwidth > 799 ? (
            <Swiperdesktop
              coursedata={coursedata}
              setcoursedata={setcoursedata}
              currentsem={currentsem}
              setCurrentsem={setCurrentsem}
              setSem={setSem}
              weekdayinitial={weekdayinitial}
              setWeekdayinitial={setWeekdayinitial}
              upcomingclass={upcomingclass}
              setUpcomingclass={setUpcomingclass}
              upcomingclasstime={upcomingclasstime}
              setUpcomingclasstime={setUpcomingclasstime}
              mapview={mapview}
              setmapview={setmapview}
              room={room}
              setroom={setroom}
            />
          ) : (
            <Swiperslidesv
              cgpa={userdata.cgpa}
              credit={userdata.credit}
              totalcredit={userdata.total_credit}
              coursedata={coursedata}
              weekdayinitial={weekdayinitial}
              setWeekdayinitial={setWeekdayinitial}
              upcomingclass={upcomingclass}
              setUpcomingclass={setUpcomingclass}
              upcomingclassroom={upcomingclassroom}
              setUpcomingclassroom={setUpcomingclassroom}
              upcomingclasstime={upcomingclasstime}
              setUpcomingclasstime={setUpcomingclasstime}
              mapviewCurrent={mapviewCurrent}
              setmapviewCurrent={setmapviewCurrent}
              mapviewUpcoming={mapviewUpcoming}
              setmapviewUpcoming={setmapviewUpcoming}
              currentclassroom={currentclassroom}
              setCurrentclassroom={setCurrentclassroom}
              currentclass={currentclass}
              setCurrentclass={setCurrentclass}
              classStarted={classStarted}
              setclassStarted={setclassStarted}
              sem={sem}
              classStartedBg={classStartedBg}
              setclassStartedBg={setclassStartedBg}
              classStatus={classStatus}
              setclassStatus={setclassStatus}
              notesReminder={notesReminder}
              setnotesReminder={setnotesReminder}
              courseNotesData={courseNotesData}
            />
          )}
        </div>
      </div>
      <div className="carousel">
        {windowwidth > 799 ? (
          <Desktopblock
            cgpa={userdata.cgpa}
            credit={userdata.credit}
            totalcredit={userdata.total_credit}
            coursedata={coursedata}
            weekdayinitial={weekdayinitial}
            setWeekdayinitial={setWeekdayinitial}
            upcomingclass={upcomingclass}
            setUpcomingclass={setUpcomingclass}
            upcomingclassroom={upcomingclassroom}
            setUpcomingclassroom={setUpcomingclassroom}
            upcomingclasstime={upcomingclasstime}
            setUpcomingclasstime={setUpcomingclasstime}
            mapviewCurrent={mapviewCurrent}
            setmapviewCurrent={setmapviewCurrent}
            mapviewUpcoming={mapviewUpcoming}
            setmapviewUpcoming={setmapviewUpcoming}
            currentclassroom={currentclassroom}
            setCurrentclassroom={setCurrentclassroom}
            currentclass={currentclass}
            setCurrentclass={setCurrentclass}
            classStarted={classStarted}
            setclassStarted={setclassStarted}
            classStartedBg={classStartedBg}
            setclassStartedBg={setclassStartedBg}
            sem={sem}
            classStatus={classStatus}
            setclassStatus={setclassStatus}
            notesReminder={notesReminder}
            setnotesReminder={setnotesReminder}
            courseNotesData={courseNotesData}
          />
        ) : (
          <Swiperslides
            coursedata={coursedata}
            setcoursedata={setcoursedata}
            currentsem={currentsem}
            setCurrentsem={setCurrentsem}
            setSem={setSem}
            setnavclrprint={setnavclrprint}
            sac2={sac2}
            setsac2={setsac2}
            sac9={sac9}
            setsac9={setsac9}
            dept={dept}
            setdept={setdept}
            setprevfloor={setprevfloor}
            setnextfloor={setnextfloor}
            setcurrentfloor={setcurrentfloor}
            mapview={mapview}
            setmapview={setmapview}
            room={room}
            setroom={setroom}
          />
        )}
      </div>{" "}
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
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height}px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  .preloader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 100;
  }
  .incorrectPass {
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    box-shadow: none;
  }
  .Toastify__close-button {
    display: none;
  }
  .ProfilePic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    width: 100vw;
    background-color: #50c2c9;
    img {
      height: 18vh;
      border: 3px solid #2b8e94;
      border-radius: 50%;
    }
    h1 {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-weight: 600;
      color: white;
    }
  }
  .timeStamp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .greetings {
      width: 100vw;
      height: 9vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 1.5rem 0rem 0.7rem;
      button {
        height: 6vh;
        width: 4rem;
        background-color: #249096;
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        outline: none;
        border: none;
        border-radius: 3px;
        box-shadow: 3px 2px 3px rgba(139, 139, 139, 0.6);
      }
      h2 {
        font-size: 1rem;
        font-weight: 600;
      }
    }

    .clock {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 21vh;
      width: 55vw;
      border-radius: 5px;
    }
  }

  @media (min-width: 800px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    .incorrectPass {
      text-align: center;
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      box-shadow: none;
    }
    .Toastify__close-button {
      display: none;
    }
    .ProfilePic {
      margin-top: 15px;
      height: 35vh;
      width: 100vw;
      background-color: #50c2c9;
      img {
        height: 20vh;
        border: 3px solid #2b8e94;
        border-radius: 50%;
      }
      h1 {
        margin-top: 0.5rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
      }
    }
    .timeStamp {
      width: 45vw;
      height: 65vh;
      display: flex;
      flex-direction: column;
      justify-content: start;

      .greetings {
        width: 45vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0rem;
        button {
          height: 6vh;
          width: 7vw;
          background-color: #249096;
          color: white;
          font-size: 2vw;
          font-weight: 600;
          outline: none;
          border: none;
          border-radius: 3px;
          box-shadow: 3px 2px 3px rgba(139, 139, 139, 0.6);
          cursor: pointer;
          border: 2px solid transparent;
          cursor: pointer;
          margin-left: 1rem;
          transition: 1s ease-in;
        }

        button:hover {
          border: 2px solid #5cc2c7;
          background-color: #1a6164;
          transform: scale(1.1);
        }
        h2 {
          font-size: 1rem;
          font-weight: 600;
          margin-right: 1rem;
        }
      }
      .clock {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        width: 40vw;
        border-radius: 5px;
      }
    }
    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5vh;
      height: 65vh;
      width: 55vw;
    }
  }
`;

export default Dashboard;
