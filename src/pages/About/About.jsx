import React from "react";
import "./about.css";
import AboutHero from "../../Sections/About-sections/About-hero/AboutHero";
import Company from "../../Sections/About-sections/About-company/Company";
import Leadership from "../../Sections/About-sections/About-leaders/Leadership";
import AboutFuture from "../../Sections/About-sections/About-future/AboutFuture";
import PageTransition from "../../../PageTransition";

function About() {
  return (
    <PageTransition>
      <AboutHero />
      <Company />
      <Leadership />
      <AboutFuture />
    </PageTransition>
  );
}

export default About;
