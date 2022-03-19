import { React, useEffect, useState } from "react";
//router
import { Switch, Route, useLocation } from "react-router-dom";
//animation

import Startpage from "./components/Startpage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Qrscan from "./components/Qrscan";
import Map from "./components/Map";
import Rdsportal from "./components/Rdsportal";
import Nac from "./components/Nac";
import Sac from "./components/Sac";
import Print from "./components/Print";
import Settings from "./components/Settings";
import Note from "./components/Note";

//data
import { weekdaysname, timeofday, weekdayshort, sacroomsdata } from "./data";

//styled
import GlobalStyle from "./components/GlobalStyle";
//animation
import { AnimatePresence } from "framer-motion";
import SlipUplod from "./components/courses/SlipUplod";

function App() {
  const location = useLocation();

  const [startpage, setStartpage] = useState();
  const [authenticated, setAuthenticated] = useState();
  const [resetPassword, setresetPassword] = useState(false);

  const [preloader, setpreloader] = useState();

  const [windowheight, setWindowheght] = useState();
  const [windowwidth, setWindowwidth] = useState();

  const [navclrprint, setnavclrprint] = useState("white");
  const [navclrfloors, setnavclrfloors] = useState("white");
  const [navclrrds, setnavclrrds] = useState("white");
  const [navclrsettings, setnavclrsettings] = useState("white");

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("1610861");
  const [password, setPassword] = useState("siam");
  const [dp, setDp] = useState("");
  const [time, setTime] = useState("");
  const [weekdays, setWeekdays] = useState(weekdaysname());
  const [tod, setTod] = useState(timeofday());
  const [date, setDate] = useState("");

  const [upcomingclass, setUpcomingclass] = useState("");
  const [upcomingclassroom, setUpcomingclassroom] = useState("");
  const [upcomingclasstime, setUpcomingclasstime] = useState("");

  const [currentclass, setCurrentclass] = useState("");
  const [currentclassroom, setCurrentclassroom] = useState("");
  const [classStatus, setclassStatus] = useState(false);
  const [classStarted, setclassStarted] = useState("");
  const [classStartedBg, setclassStartedBg] = useState("#42a5d6");

  const [sem, setSem] = useState("%Summer 2021");
  const [currentsem, setCurrentsem] = useState("");
  const [weekdayinitial, setWeekdayinitial] = useState(weekdayshort());

  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("Choose File");
  const [uploadedfile, setuploadedfile] = useState([]);

  const [printcount, setprintcount] = useState(false);
  const [printstatus, setprintstatus] = useState("PRINTED");
  const [printdata, setprintdata] = useState([]);

  const [clrdirectory, setclrdirectory] = useState(false);

  const [currentprintstatus, setcurrentprintstatus] = useState("fetch");

  const [sac, setsac] = useState(false);
  const [sac1, setsac1] = useState(false);
  const [sac2, setsac2] = useState(true);
  const [sac3, setsac3] = useState(false);
  const [sac4, setsac4] = useState(false);
  const [sac5, setsac5] = useState(false);
  const [sac6, setsac6] = useState(false);
  const [sac7, setsac7] = useState(false);
  const [sac8, setsac8] = useState(false);
  const [sac9, setsac9] = useState(false);
  const [sac10, setsac10] = useState(false);
  const [sac11, setsac11] = useState(false);

  const [dept, setdept] = useState(false);

  const [mapviewUpcoming, setmapviewUpcoming] = useState(false);
  const [mapviewCurrent, setmapviewCurrent] = useState(false);
  const [mapview, setmapview] = useState(false);
  const [room, setroom] = useState("");

  const [prevfloor, setprevfloor] = useState(1);
  const [currentfloor, setcurrentfloor] = useState(2);
  const [nextfloor, setnextfloor] = useState(3);

  const [roomDataSac, setroomDataSac] = useState(sacroomsdata(0));

  const [notesContent, setnotesContent] = useState("");
  const [notesReminder, setnotesReminder] = useState("");

  const [coursedata, setcoursedata] = useState([]);
  const [courseNotesData, setcourseNotesData] = useState([]);
  const [userdata, setuserdata] = useState([]);

  const [popup, setpopup] = useState(false);

  useEffect(() => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
    setStartpage(true);
    setTimeout(function () {
      setStartpage(false);
    }, 1100);

    if (localStorage.getItem("userID")) {
      setUserName(localStorage.getItem("userID"));
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const windowSizer = () => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
  };
  window.addEventListener("resize", windowSizer);

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {startpage ? <Startpage windowheight={windowheight} /> : ""}
          <Route path="/" exact>
            <SlipUplod />
            {/* {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Dashboard
                userdata={userdata}
                setuserdata={setuserdata}
                coursedata={coursedata}
                setcoursedata={setcoursedata}
                setAuthenticated={setAuthenticated}
                windowwidth={windowwidth}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                dp={dp}
                setDp={setDp}
                name={name}
                setName={setName}
                time={time}
                setTime={setTime}
                setDate={setDate}
                weekdays={weekdays}
                tod={tod}
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
                sem={sem}
                setSem={setSem}
                currentsem={currentsem}
                setCurrentsem={setCurrentsem}
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
                mapview={mapview}
                setmapview={setmapview}
                room={room}
                setroom={setroom}
                classStarted={classStarted}
                setclassStarted={setclassStarted}
                classStartedBg={classStartedBg}
                setclassStartedBg={setclassStartedBg}
                classStatus={classStatus}
                setclassStatus={setclassStatus}
                courseNotesData={courseNotesData}
                setcourseNotesData={setcourseNotesData}
                notesContent={notesContent}
                setnotesContent={setnotesContent}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
                notesReminder={notesReminder}
                setnotesReminder={setnotesReminder}
              />
            )} */}
          </Route>
          <Route path="/scan" exact>
            {!authenticated ? (
              <Qrscan
                setAuthenticated={setAuthenticated}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
              />
            ) : (
              ""
            )}
          </Route>
          <Route path="/Map" exact>
            {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Map
                setAuthenticated={setAuthenticated}
                windowwidth={windowwidth}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                sac={sac}
                setsac={setsac}
                sac1={sac1}
                setsac1={setsac1}
                sac2={sac2}
                setsac2={setsac2}
                sac3={sac3}
                setsac3={setsac3}
                sac4={sac4}
                setsac4={setsac4}
                sac5={sac5}
                setsac5={setsac5}
                sac6={sac6}
                setsac6={setsac6}
                sac7={sac7}
                setsac7={setsac7}
                sac8={sac8}
                setsac8={setsac8}
                sac9={sac9}
                setsac9={setsac9}
                sac10={sac10}
                setsac10={setsac10}
                sac11={sac11}
                setsac11={setsac11}
                prevfloor={prevfloor}
                setprevfloor={setprevfloor}
                currentfloor={currentfloor}
                setcurrentfloor={setcurrentfloor}
                nextfloor={nextfloor}
                setnextfloor={setnextfloor}
              />
            )}
          </Route>
          <Route path="/rds" exact>
            <Rdsportal />
          </Route>
          <Route path="/sac" exact>
            {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Sac
                preloader={preloader}
                setpreloader={setpreloader}
                sac={sac}
                setsac={setsac}
                sac1={sac1}
                setsac1={setsac1}
                sac2={sac2}
                setsac2={setsac2}
                sac3={sac3}
                setsac3={setsac3}
                sac4={sac4}
                setsac4={setsac4}
                sac5={sac5}
                setsac5={setsac5}
                sac6={sac6}
                setsac6={setsac6}
                sac7={sac7}
                setsac7={setsac7}
                sac8={sac8}
                setsac8={setsac8}
                sac9={sac9}
                setsac9={setsac9}
                sac10={sac10}
                setsac10={setsac10}
                sac11={sac11}
                setsac11={setsac11}
                prevfloor={prevfloor}
                setprevfloor={setprevfloor}
                currentfloor={currentfloor}
                setcurrentfloor={setcurrentfloor}
                nextfloor={nextfloor}
                setnextfloor={setnextfloor}
                dept={dept}
                setdept={setdept}
                roomDataSac={roomDataSac}
                setroomDataSac={setroomDataSac}
                coursedata={coursedata}
                setcoursedata={setcoursedata}
                upcomingclass={upcomingclass}
                setUpcomingclass={setUpcomingclass}
                upcomingclasstime={upcomingclasstime}
                setUpcomingclasstime={setUpcomingclasstime}
                mapviewCurrent={mapviewCurrent}
                setmapviewCurrent={setmapviewCurrent}
                mapviewUpcoming={mapviewUpcoming}
                setmapviewUpcoming={setmapviewUpcoming}
                upcomingclassroom={upcomingclassroom}
                setUpcomingclassroom={setUpcomingclassroom}
                currentclassroom={currentclassroom}
                setCurrentclassroom={setCurrentclassroom}
                currentclass={currentclass}
                setCurrentclass={setCurrentclass}
                mapview={mapview}
                setmapview={setmapview}
                room={room}
                setroom={setroom}
              />
            )}
          </Route>
          <Route path="/nac" exact>
            {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Nac
                preloader={preloader}
                setpreloader={setpreloader}
                sac={sac}
                setsac={setsac}
                sac1={sac1}
                setsac1={setsac1}
                sac2={sac2}
                setsac2={setsac2}
                sac3={sac3}
                setsac3={setsac3}
                sac4={sac4}
                setsac4={setsac4}
                sac5={sac5}
                setsac5={setsac5}
                sac6={sac6}
                setsac6={setsac6}
                sac7={sac7}
                setsac7={setsac7}
                sac8={sac8}
                setsac8={setsac8}
                sac9={sac9}
                setsac9={setsac9}
                sac10={sac10}
                setsac10={setsac10}
                sac11={sac11}
                setsac11={setsac11}
                prevfloor={prevfloor}
                setprevfloor={setprevfloor}
                currentfloor={currentfloor}
                setcurrentfloor={setcurrentfloor}
                nextfloor={nextfloor}
                setnextfloor={setnextfloor}
                coursedata={coursedata}
                setcoursedata={setcoursedata}
                upcomingclass={upcomingclass}
                setUpcomingclass={setUpcomingclass}
                upcomingclasstime={upcomingclasstime}
                setUpcomingclasstime={setUpcomingclasstime}
                mapviewCurrent={mapviewCurrent}
                setmapviewCurrent={setmapviewCurrent}
                mapviewUpcoming={mapviewUpcoming}
                setmapviewUpcoming={setmapviewUpcoming}
                upcomingclassroom={upcomingclassroom}
                setUpcomingclassroom={setUpcomingclassroom}
                currentclassroom={currentclassroom}
                setCurrentclassroom={setCurrentclassroom}
                currentclass={currentclass}
                setCurrentclass={setCurrentclass}
                mapview={mapview}
                setmapview={setmapview}
                room={room}
                setroom={setroom}
              />
            )}
          </Route>
          <Route path="/print" exact>
            {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Print
                printdata={printdata}
                setprintdata={setprintdata}
                userName={userName}
                preloader={preloader}
                setpreloader={setpreloader}
                windowwidth={windowwidth}
                windowheight={windowheight}
                file={file}
                setfile={setfile}
                filename={filename}
                setfilename={setfilename}
                uploadedfile={uploadedfile}
                setuploadedfile={setuploadedfile}
                printstatus={printstatus}
                setprintstatus={setprintstatus}
                currentprintstatus={currentprintstatus}
                setcurrentprintstatus={setcurrentprintstatus}
                setAuthenticated={setAuthenticated}
                sac={sac}
                setsac={setsac}
                sac2={sac2}
                setsac2={setsac2}
                sac9={sac9}
                setsac9={setsac9}
                dept={dept}
                setdept={setdept}
                printcount={printcount}
                setprintcount={setprintcount}
                clrdirectory={clrdirectory}
                setclrdirectory={setclrdirectory}
                navclrprint={navclrprint}
                setnavclrprint={setnavclrprint}
                navclrfloors={navclrfloors}
                setnavclrfloors={setnavclrfloors}
                navclrrds={navclrrds}
                setnavclrrds={setnavclrrds}
                navclrsettings={navclrsettings}
                setnavclrsettings={setnavclrsettings}
                setprevfloor={setprevfloor}
                setcurrentfloor={setcurrentfloor}
                setnextfloor={setnextfloor}
              />
            )}
          </Route>
          <Route path="/settings" exact>
            {!authenticated ? (
              <Login
                popup={popup}
                setpopup={setpopup}
                setAuthenticated={setAuthenticated}
                windowheight={windowheight}
                preloader={preloader}
                setpreloader={setpreloader}
                setDp={setDp}
                setName={setName}
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                setresetPassword={setresetPassword}
              />
            ) : (
              <Settings
                preloader={preloader}
                setpreloader={setpreloader}
                windowheight={windowheight}
                windowwidth={windowwidth}
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
            )}
          </Route>
          <Route path="/note" exact>
            <Note />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
