import React from "react";
import "./innovation-hero.css";
import { IconMinus } from "@tabler/icons-react";

function InnovationHero({ product }) {
  return (
    <div className='product-hero section'>
      <div>
        <div className='product-hero-left'>
          <div className='section-button-text-component'>
            <div className='section-page-marked'>
              <span>Home</span>
              <IconMinus />
              <span>Products</span>
              <IconMinus />
              <span>{product.shortName}</span>
            </div>
            <div className='title-text'>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className='product-hero-right'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
}

export default InnovationHero;
