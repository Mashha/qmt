import React from "react";
import "./about-leadership.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

function Leadership() {
  return (
    <>
      <div className='about-leadership section'>
        <div className='section-button-text-component'>
          <ButtonSection prop='meet our leadership' />
          <SectionTitle title='the minds behind the innovation' />

          <p>
            Our company is driven by two forward-thinking leaders who combine
            deep expertise in medicine and informatics. Through that combination
            we are able to realize solutions that are profound in both fields.
          </p>
        </div>
        <div className='leaders'>
          <div className='leader'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s'
              alt=''
            />
            <h6>Dr. André Plass </h6>
            <p>CEO</p>
          </div>
          <div className='leader'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s'
              alt=''
            />
            <h6>Martin Krutzfeld</h6>
            <p>CTO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
