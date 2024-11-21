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
          Quantum MedTech uses cutting-edge medical technologies, combining medical expertise and AI to revolutionize the medical sector, including emergency medicine, healthcare and scientific research. All our efforts result in a faster, better and more focused treatment of human beings. We achieve that by enabling automation in the medical field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
