import React from "react";
import Hero from "../../Sections/Innovations-sections/Innovations-hero/InnovationsHero";
import InnovationsProducts from "../../Sections/Innovations-sections/Innovations-products/InnovationsProducts";
import PageTransition from "../../../PageTransition";

function Innovations() {
  return (
    <PageTransition>
      <Hero />
      <InnovationsProducts />
    </PageTransition>
  );
}

export default Innovations;
