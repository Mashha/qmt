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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            reprehenderit at eveniet expedita assumenda ipsum nobis error
            architecto vitae sunt, cumque corporis dignissimos beatae quidem
            molestias nulla rem perferendis! Quibusdam.
          </p>
        </div>
        <div className='leaders'>
          <div className='leader'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s'
              alt=''
            />
            <h6>John Doe</h6>
            <p>CEO</p>
          </div>
          <div className='leader'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s'
              alt=''
            />
            <h6>John Doe</h6>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
