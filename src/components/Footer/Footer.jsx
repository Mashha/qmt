import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='section'>
      <div className='footer-inner'>
        <div className='footer-logo'>Logo</div>
        <div className='footer-links'>
          <div className='footer-links-right'>
            <Link className='footer-link'>Privacy Policy</Link>
            <Link className='footer-link' to={"/terms"}>
              Terms Of Use
            </Link>
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
