import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <header>
      <nav className='navigation'>
        <div className='logo'>
          <NavLink to='/' onClick={closeMobileMenu}>
            Logo
          </NavLink>
        </div>

        {/* mobile menu */}
        <div
          className={`hamburger ${isMobile ? "icon" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <ul className={`nav-links ${isMobile ? "active" : ""}`}>
          <li>
            <NavLink to='/about' onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/innovations' onClick={closeMobileMenu}>
              Innovations
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
