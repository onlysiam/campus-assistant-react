import React, { useState } from "react";
//styled
import styled from "styled-components";

const Dropdownsem = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return <Dropdown isOpen={dropdownOpen} toggle={toggle}></Dropdown>;
};

const Dropdown = styled.div``;
export default Dropdownsem;
