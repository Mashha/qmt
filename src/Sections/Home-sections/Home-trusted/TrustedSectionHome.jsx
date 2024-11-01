import React from "react";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import "./trusted-section-home.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FakeLogo from "../../../assets/images/logo-fake.png"

function TrustedSectionHome() {
  return (
    <div className='trusted-home section'>
      <div className='section-button-text-component-center'>
        <ButtonSection prop='Trusted by' />
        <SectionTitle title='Partners in care' />

        <p>
          Our solutions are trusted by top hospitals, healthcare providers, and
          medical professionals around the world to deliver faster, smarter, and
          more reliable care.
        </p>
      </div>
      <div className='logo-images'>
        <img
          src={FakeLogo}
          alt=''
        />
        <img
          src={FakeLogo}
          alt=''
        />
        <img
          src={FakeLogo}
          alt=''
        />
        <img
          src={FakeLogo}
          alt=''
        />
        <img
          src={FakeLogo}
          alt=''
        />
      </div>
    </div>
  );
}

export default TrustedSectionHome;
