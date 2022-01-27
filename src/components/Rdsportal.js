import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import styled from "styled-components";
const Rdsportal = ({ coursedata, setcoursedata }) => {
  return (
    <>
      <Body>
        <iframe className="rds" src="https://rds3.northsouth.edu/" />;
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .rds {
    width: 100vw;
    height: 100vh;
  }
`;
export default Rdsportal;
