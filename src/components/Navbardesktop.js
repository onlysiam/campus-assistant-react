import * as React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
//styled
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
export const Navbardesktop = ({
  setAuthenticated,
  setsac2,
  setsac9,
  navclrprint,
  setnavclrprint,
  navclrfloors,
  navclrrds,
  setnavclrsettings,
  navclrsettings,
  setnavclrfloors,
}) => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("name");
    localStorage.removeItem("dp");
    setAuthenticated(false);
    history.push("/");
  };
  const homehandler = () => {
    setnavclrfloors("#adadad");
    history.push("/");
  };
  const printhandler = () => {
    setnavclrprint("#adadad");
    history.push("/print");
  };
  const rdshandler = () => {
    setnavclrprint("#adadad");
    history.push("/rds");
  };
  const settingshandler = () => {
    setnavclrsettings("#adadad");
    history.push("/settings");
  };

  const depthandler = (e) => {
    setsac2(false);
    setsac9(true);
    history.push("/sac");
  };
  return (
    <Body
      print={navclrprint}
      floor={navclrfloors}
      rds={navclrrds}
      setting={navclrsettings}
    >
      <div className="elements">
        <motion.li
          onClick={homehandler}
          className="floors"
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
          variants={variantli}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={depthandler}
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
        >
          <FontAwesomeIcon
            className="skip-back"
            size="2x"
            icon={faSignOutAlt}
          />{" "}
          <h1 onClick={logoutHandler}>Log Out</h1>
        </motion.li>
      </div>
    </Body>
  );
};

const Body = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 100vw;
  background-color: #237e83;
  .elements {
    position: absolute;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: white;
      cursor: pointer;
    }
    h1 {
      font-size: 1.2vw;
      font-weight: 600;
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
  }
`;
