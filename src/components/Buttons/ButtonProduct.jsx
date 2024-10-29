import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

function ProductButton({ id }) {
  return (
    <Link className='see-product-btn' to={`/innovations/${id}`}>
      <div className='icon-container'>
        <IconArrowRight stroke={1.5} />
      </div>
      <span className='text'>SEE PRODUCT</span>
    </Link>
  );
}

export default ProductButton;
