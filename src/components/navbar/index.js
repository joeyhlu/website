// components/Navbar/index.js

import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavLogo } from "./navbarelements";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/">{"<Joey Lu />"}</NavLogo>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blogs
        </NavLink>
        <NavLink activeStyle>Resume</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
