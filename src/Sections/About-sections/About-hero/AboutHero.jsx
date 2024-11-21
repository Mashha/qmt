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
        Guiding Medicine to a new age, driven by <span className='blue'>innovation</span>, powered by the combination of <span className='blue'>informatics</span>, and <span className='blue'>medicine</span>.
        </h1>
      </div>
    </div>
  );
}

export default Hero;
