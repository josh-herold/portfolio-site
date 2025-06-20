import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: pink;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 1.6rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1006;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  overflow-y: auto;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0d0c1d;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s linear;

  

    &:hover {
      color: rgb(203, 60, 232);
    }
  }

 .menu-group {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0.6rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0d0c1d;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.5s linear;
  }

  .main-link {
    font-weight: bold;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
 
`;

const Menue = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (target, isRoute = false) => {
    setOpen(false);
    setSubmenuOpen(false);

    if (isRoute) {
      if (target === '/' && location.pathname !== '/') {
        // Kleiner Delay, damit die Animation zuerst passiert
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800); // oder passender Timeout nach deinen Transitions
      }

      else if (target === '/' && location.pathname === '/') {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
      }

      navigate(target);
    }
  };


  return (
    <StyledMenu open={open}>
      <div className="menu-group">
        <a onClick={() => handleClick('/', true)}>Home</a>
      </div>
      <div className="menu-group">
        <a onClick={() => handleClick('/about', true)}>About Me</a>
      </div>
      
      <div className="menu-group">
        <a onClick={() => handleClick('/blog', true)}>Blog</a>
      </div>
      <div className="menu-group">
        <a onClick={() => handleClick('/contact', true)}>Contact</a>
      </div>
    </StyledMenu>

  );
};

export default Menue;
