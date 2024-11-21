import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import "./about-company.css";
import { IconTargetArrow } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { IconHeartHandshake } from "@tabler/icons-react";

function Company() {
  return (
    <div className='about-company section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='company' />
        <SectionTitle title='we are quantum medTech' />
      </div>
      <div className='about-company-inner'>
        <div className='about-company-left'>
          <div className='mission'>
            <IconTargetArrow stroke={1} size={32} />
            <p>
              Our <span className='bold'>mission</span> is to save lives and improve treatments of those in need, by automating processes and enhancing diagnosis and treatment.
            </p>
          </div>
          <div className='vision'>
            <IconEye stroke={1} size={32} />
            <p>
              We <span className='bold'>envision</span> a world where medical professionals can focus on what really matters: Helping others.
            </p>
          </div>
          <div className='goal'>
            <IconHeartHandshake stroke={1} size={32} />
            <p>
              Our <span className='bold'>goal</span> is to lead the healthcare industry in cutting-edge medical innovations, making lifesaving solutions accessible to hospitals, professionals and scientific institutions.
            </p>
          </div>
        </div>
        <div className='about-company-right'>
          <div className="image-container">
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
