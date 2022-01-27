import * as React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
//styled
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: {
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
    x: 500,
  },
};
const variantli = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const Navigation = ({
  setAuthenticated,
  sac,
  setsac,
  sac9,
  setsac9,
  sac2,
  setsac2,
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
}) => {
  const history = useHistory();
  const printhandler = () => {
    setnavclrprint("#adadad");
    history.push("/print");
  };
  const homehandler = () => {
    setnavclrfloors("#adadad");
    history.push("/");
  };
  const depthandler = (e) => {
    setdept(true);
    setprevfloor(6);
    setcurrentfloor(9);
    setnextfloor(10);
    setsac2(false);
    setsac9(true);
    history.push("/sac");
  };
  const rdshandler = () => {
    setnavclrrds("#adadad");
    history.push("/rds");
  };
  const settingshandler = () => {
    setnavclrsettings("#adadad");
    history.push("/settings");
  };

  const logoutHandler = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("name");
    localStorage.removeItem("dp");
    setAuthenticated(false);
    history.push("/");
  };
  return (
    <Body
      print={navclrprint}
      floor={navclrfloors}
      rds={navclrrds}
      setting={navclrsettings}
      variants={variants}
    >
      <motion.li
        className="floors"
        onClick={homehandler}
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1>Home</h1>
      </motion.li>
      <motion.li
        className="printing"
        onClick={printhandler}
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1>Remote Printing</h1>
      </motion.li>
      <motion.li
        className="dept"
        onClick={depthandler}
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1>My Department</h1>
      </motion.li>
      <motion.li
        className="rds"
        onClick={rdshandler}
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1>RDS Portal</h1>
      </motion.li>{" "}
      <motion.li
        className="settings"
        onClick={settingshandler}
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <h1>Settings</h1>
      </motion.li>
      <motion.li
        className="logout"
        variants={variantli}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={logoutHandler}
      >
        <FontAwesomeIcon className="skip-back" size="2x" icon={faSignOutAlt} />
        <h1>Log Out</h1>
      </motion.li>
    </Body>
  );
};

const Body = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  height: 90vh;
  width: 300px;
  z-index: 10;
  li {
    width: 250px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8vh;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
  }
  .skip-back {
    margin-right: 10px;
  }
  .printing {
    color: ${(props) => props.print};
  }
  .floors {
    color: ${(props) => props.floor};
  }
  .rds {
    color: ${(props) => props.rds};
  }
  .settings {
    color: ${(props) => props.setting};
  }
`;
