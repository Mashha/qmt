import React from "react";
import "./innovation-demo.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DemoImg from "../../../assets/images/demo-test-img.png"

function InnovationsDemo() {
  return (
    <div className='innovation-demo section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='demo' />
        <SectionTitle title='see the power of AI-driven healthcare' />
      </div>
      <div className="demo-slider">
        <img src={DemoImg} alt="" />
      </div>
    </div>
  );
}

export default InnovationsDemo;
