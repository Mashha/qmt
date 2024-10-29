import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='section'>
      <div className='footer-inner'>
        <div className='footer-logo'>Logo</div>
        <div className='footer-p'>
          We save seconds. We save lives. <span>We are Quantum MedTech</span>
        </div>
        <div className='footer-links'>
          <div className='footer-links-left'>
            <Link className='footer-link'>About</Link>
            <Link className='footer-link'>Innovations</Link>
            <Link className='footer-link'>Contact</Link>
          </div>
          <div className='footer-links-right'>
            <Link className='footer-link'>Privacy Policy</Link>
            <Link className='footer-link'>Terms Of Use</Link>
          </div>
        </div>
        <div className='divider'></div>
        <div className='footer-bottom'>
          Copyright &copy; 2024 Quantum MedTech. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
