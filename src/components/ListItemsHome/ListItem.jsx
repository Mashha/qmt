import React from "react";
import "./listItem.css";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Img from "../../assets/images/demo-test-img.png";

function ListItem({ number, name, link, image }) {
  return (
    <motion.a
      to={link}
      className='product-link-home'
      initial='initial'
      whileHover='whileHover'
    >
      <div className='list-item'>
        <span className='list-item-number'>{number}</span>
        <h4 className='list-item-name'>{name}</h4>
        <span className='list-item-icon'>
          <IconArrowRight stroke={1} />
        </span>
      </div>

      <motion.img
        src={Img}
        alt='image representing products'
        className='home-product-img'
        transition={{ type: "spring" }}
        variants={{
          initial: {
            scale: 0,
            rotate: "-12.5deg",
          },
          whileHover: {
            scale: 1,
            rotate: "12.5deg",
          },
        }}
      />
    </motion.a>
  );
}

export default ListItem;
