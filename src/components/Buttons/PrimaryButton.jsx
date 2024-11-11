import React from "react";
import "./button.css";
import { motion } from "framer-motion";

function PrimaryButton() {
  return (
    <>
      <motion.button
        className='primary-btn'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.8 }}
      >
        Our innovations
      </motion.button>
    </>
  );
}

export default PrimaryButton;
