import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../Sections/Innovation-section/InnovationSectionData";

function ProductsList() {
  return (
    <div className='products-list'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          link={product.link}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default ProductsList;
