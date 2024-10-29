import React from "react";
import "./innovations-section-home.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import List from "../../../components/ListItemsHome/List";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

function InnovationsSectionHome() {
  return (
    <div className='innovations-home section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='innovations' />
        <SectionTitle title='Innovations That Matter' />
        <Link className='all-innovations-link'>
          ALL INNOVATIONS <IconArrowRight stroke={2} color='#8B8B8B' />
        </Link>{" "}
      </div>
      <List />
    </div>
  );
}

export default InnovationsSectionHome;
