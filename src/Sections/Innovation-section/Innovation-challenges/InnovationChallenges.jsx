import React from "react";
import "./innovation-challenges.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { IconArrowDown } from "@tabler/icons-react";

function InnovationChallenges({ product }) {
  return (
    <div className='innovation-challenge section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='Challenges' />
        <SectionTitle title='from problems to breakthroughs' />
      </div>
      <div className='problem-solution'>
        <div className='problem'>
          {/* icon */}
          <p>{product.problems}</p>
        </div>
        <IconArrowDown stroke={2} size={50}/>
        <div className='solution'>
          {/* icon */}
          <p>{product.solutions}</p>
        </div>
      </div>
    </div>
  );
}

export default InnovationChallenges;
