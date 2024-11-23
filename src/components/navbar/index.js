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
        <NavLink to="/blogs" activeStyle >
          Blogs
        </NavLink>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0 1rem",
            fontSize: "1rem",
          }}>
          Resume
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
