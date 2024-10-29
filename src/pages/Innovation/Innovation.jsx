import React from "react";
import { useParams } from "react-router-dom";
import InnovationHero from "../../Sections/Innovation-section/Innovation-hero/InnovationHero";
import { products } from "../../Sections/Innovation-section/InnovationSectionData";
import InnovationChallenges from "../../Sections/Innovation-section/Innovation-challenges/InnovationChallenges";
import InnovationsDemo from "../../Sections/Innovation-section/Innovation-demo/InnovationDemo";
import InnovationFeatures from "../../Sections/Innovation-section/Innovation-features/InnovationFeatures";

function Innovation() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div>No product was found</div>;
  }

  return (
    <>
      <InnovationHero product={product} />
      <InnovationChallenges product={product} />
      <InnovationsDemo product={product} />
      <InnovationFeatures features={product.features} />
    </>
  );
}

export default Innovation;
