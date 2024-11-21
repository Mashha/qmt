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
        <SectionTitle title='Our partners' />
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
