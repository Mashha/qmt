import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ cursorVariant }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: "#fff",
      color: "#000",
      x: position.x - 5,
      y: position.y - 5,
    },
    linkHover: {
      width: 50,
      height: 50,
      backgroundColor: "#fff",
      x: position.x - 25,
      y: position.y - 25,
      mixBlendMode: "difference"
    },
    sectionHover: {
      width: 70,
      height: 70,
      backgroundColor: "#1e90ff",
      x: position.x - 35,
      y: position.y - 35,
    },
  };

  return (
    <motion.div
      className='cursor'
      animate={cursorVariant}
      variants={cursorVariants}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
