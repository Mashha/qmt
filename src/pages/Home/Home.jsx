import React from "react";
import Hero from "../../Sections/Home-sections/Home-hero/Hero";
import Story from "../../Sections/Home-sections/Story/Story";
import InnovationsSectionHome from "../../Sections/Home-sections/Home-innovations/InnovationsSectionHome";
import TrustedSectionHome from "../../Sections/Home-sections/Home-trusted/TrustedSectionHome";
import PageTransition from "../../../PageTransition";

function Home() {
  return (
    <PageTransition>
      <Hero />
      <Story />
      <InnovationsSectionHome />
      <TrustedSectionHome />
    </PageTransition>
  );
}

export default Home;
