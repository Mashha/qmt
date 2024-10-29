import React from "react";
import "./story.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";

function Story() {
  return (
    <div className='story section'>
      <ButtonSection prop='story' />
      <div className='story-section section-content grid'>
        <div className='story-content-left'>Committed to saving lives</div>
        <div className='story-content-right'>
          <p>
            Quantum MedTech pioneers cutting-edge medical technologies,
            combining AI and quantum physics to revolutionize healthcare. We
            focus on reducing emergency response times and improving patient
            outcomes through innovation that truly saves lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
