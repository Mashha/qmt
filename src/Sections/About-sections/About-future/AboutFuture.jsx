import React from "react";
import "./about-future.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function AboutFuture() {
  return (
    <div className='future-prospects-about section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='Future prospects' />
        <SectionTitle title='Looking ahead' />
      </div>
    </div>
  );
}

export default AboutFuture;
