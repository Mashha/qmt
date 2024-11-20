import React, { useState } from "react";
import "./about-section-home.css";
import { useNavigate } from "react-router-dom";

function AboutSectionHome() {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCirclePosition({ x, y });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleClick} className='section'>
      <div className='section-home' onMouseMove={handleMouseMove}>
        <div
          className='hover-circle'
          style={{
            left: `${circlePosition.x}px`,
            top: `${circlePosition.y}px`,
          }}
        >
          About us
        </div>
        <div className='section-home'>
          <h5 className='inner-text'>
            Driven by <span>purpose</span>
            <br />
            Powered by <span>innovation</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionHome;
