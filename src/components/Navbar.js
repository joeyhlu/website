import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  background: transparent;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

const Bars = styled(FontAwesomeIcon)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 85px;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    background: #1a1a1a;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLogo to="/">&lt;Joey Lu /&gt;</NavLogo>
      <Bars icon={faBars} onClick={toggleMenu} />
      <NavMenu isOpen={isOpen}>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', padding: '0 1rem', fontSize: '1.2rem' }}>
          About
        </Link>
        <Link to="/projects" style={{ color: '#fff', textDecoration: 'none', padding: '0 1rem', fontSize: '1.2rem' }}>
          Projects
        </Link>
        <Link to="/blogs" style={{ color: '#fff', textDecoration: 'none', padding: '0 1rem', fontSize: '1.2rem' }}>
          Blogs
        </Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', padding: '0 1rem', fontSize: '1.2rem' }}>
          Resume
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

