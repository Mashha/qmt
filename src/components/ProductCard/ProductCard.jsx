import React from "react";
import "./productCard.css";
import ProductButton from "../Buttons/ButtonProduct";

function ProductCard({ image, name, description, id }) {
 
  return (
    <div className='product-card grid'>
      <div className='product-card-left'>
        <h3>{name}</h3>
        <p>{description}</p>
        <ProductButton id={id}/>
      </div>
      <div className='product-card-right'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3K5mp89aV6s2r5WSM-7ElRnxZu0yY9pgKg&s" alt={name} className='product-image' />
      </div>
    </div>
  );
}

export default ProductCard;
