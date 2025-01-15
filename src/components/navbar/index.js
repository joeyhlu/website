import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavLogo } from "./navbarelements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLogo to="/">{"<Joey Lu />"}</NavLogo>
      <Bars onClick={toggleMenu} />
      <NavMenu isOpen={isOpen}>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/projects" activeStyle onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/blogs" activeStyle onClick={toggleMenu}>
          Blogs
        </NavLink>
        <a
          href="/website/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "0 1rem",
            fontSize: "1rem",
          }}
          onClick={toggleMenu}
        >
          Resume
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
