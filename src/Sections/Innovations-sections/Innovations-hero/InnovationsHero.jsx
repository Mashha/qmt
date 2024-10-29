import React from "react";
import "./innovations-hero.css";
import { IconMinus } from "@tabler/icons-react";

function Hero() {
  return (
    <div className='about-hero section'>
      <div className='section-button-text-component'>
        <div className='section-page-marked'>
          <span>Home</span>
          <IconMinus />
          <span>Innovations</span>
        </div>

        <h1>
          Advanced Medical <span className='blue'>Devices</span> and{" "}
          <span className='blue'>Innovations</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
