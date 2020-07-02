import React from "react";
import "./styles.css";


// COMPONENTS

import NavbarInfo from './navbarInfo/navbarInfo'
import NavbarNav from './navbarNav/navbarNav'



const navbar = () => {
  return (
    <nav className="nav">
      <NavbarInfo/>
      <NavbarNav/>
    </nav>
  );
};


export default navbar;
