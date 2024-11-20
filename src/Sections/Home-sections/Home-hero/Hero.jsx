import React from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import HeroImg from "../../../assets/images/hero-img.svg";
import "./hero.css";
import Word from "../../../assets/word.svg";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div className='content'>
          <h1 className='hero-heading'>
            <span className='svg-wrapper'>
              <img src={Word} alt='Disrupting' className='disrupting-svg' />
            </span>
            medicine with the power of <span className='blue'>AI</span>
          </h1>
          <p>
            Leveraging AI and revolutionary devices to transform medicine and
            surrounding systems.
          </p>
        </div>
        <PrimaryButton />
      </div>
      <div className='hero-right'>
        <img src={HeroImg} alt='' />
      </div>
    </div>
  );
}

export default Hero;
