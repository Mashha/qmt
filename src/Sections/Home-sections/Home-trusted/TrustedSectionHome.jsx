import React from "react";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import "./trusted-section-home.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ZrOmlYFhQEuQMwrDCOD6zQCVdFNVA6P5Q&s'
          alt=''
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ZrOmlYFhQEuQMwrDCOD6zQCVdFNVA6P5Q&s'
          alt=''
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ZrOmlYFhQEuQMwrDCOD6zQCVdFNVA6P5Q&s'
          alt=''
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ZrOmlYFhQEuQMwrDCOD6zQCVdFNVA6P5Q&s'
          alt=''
        />
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_ZrOmlYFhQEuQMwrDCOD6zQCVdFNVA6P5Q&s'
          alt=''
        />
      </div>
    </div>
  );
}

export default TrustedSectionHome;
