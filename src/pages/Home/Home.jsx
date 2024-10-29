import React from "react";
import Hero from "../../Sections/Home-sections/Home-hero/Hero";
import Story from "../../Sections/Home-sections/Story/Story";
import InnovationsSectionHome from "../../Sections/Home-sections/Home-innovations/InnovationsSectionHome";
import AboutSectionHome from "../../Sections/Home-sections/Home-about/AboutSectionHome";
import TrustedSectionHome from "../../Sections/Home-sections/Home-trusted/TrustedSectionHome";

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <InnovationsSectionHome />
      <AboutSectionHome />
      <TrustedSectionHome />
    </>
  );
}

export default Home;
