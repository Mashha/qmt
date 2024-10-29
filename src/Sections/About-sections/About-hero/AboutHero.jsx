import React from "react";
import "./about-hero.css"
import { IconMinus } from "@tabler/icons-react";

function Hero() {
  return (
    <div className='about-hero section'>
      <div className="section-button-text-component">
        <div className='section-page-marked'>
          <span>Home</span>
          <IconMinus />
          <span>About</span>
        </div>

        <h1>
          Guided by <span className='blue'>innovation</span>,{" "}
          <span className='blue'>integrity</span>, and a commitment to{" "}
          <span className='blue'>excellence</span>.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
