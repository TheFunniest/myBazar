import React from "react";
import "./style.css";
import Container from "@material-ui/core/Container";
import logo from "../../../assets/images/logo.png";

// COMPONENTS

import SearchBlock from "../../searchBlock/search";
import NavElements from '../navElements/navElements'


const navbarNav = () => {
  return (
    <Container>
      <div className="navbarNav">
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <SearchBlock />
        <NavElements/>
      </div>
    </Container>
  );
};

export default navbarNav;
