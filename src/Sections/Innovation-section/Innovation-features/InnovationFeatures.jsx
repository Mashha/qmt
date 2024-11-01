import React, { useState, useRef, useEffect } from "react";
import "./innovation-features.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { IconCircleChevronRight } from "@tabler/icons-react";
import { IconCircleChevronLeft } from "@tabler/icons-react";

function InnovationFeatures({ features }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const cardWidth = sliderRef.current.clientWidth;
    const scrollLeft = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const currentSlider = sliderRef.current;
    const debouncedScroll = debounce(handleScroll, 100);

    if (currentSlider) {
      currentSlider.addEventListener("scroll", debouncedScroll);
    }

    return () => {
      if (currentSlider) {
        currentSlider.removeEventListener("scroll", debouncedScroll);
      }
    };
  }, []);

  return (
    <>
      <div className='innovation-features features-section'>
        <div className='section-button-text-component padding-left'>
          <ButtonSection prop='features' />
          <SectionTitle title='advanced capabilities, improved outcomes' />
        </div>
        <div className='slider-container-outer'>
          <div className='slider-inner-left'>
            <p>
              With cutting-edge features and real-world benefits, our solutions
              transform healthcare delivery with efficiency, precision, and
              care.
            </p>
            <div className='slider-icons'>
              <button
                onClick={handleBack}
                disabled={currentIndex === 0}
                style={{
                  color: currentIndex === 0 ? "gray" : "white",
                }}
              >
                <IconCircleChevronLeft stroke={1} size={44} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === features.length - 1}
                style={{
                  color:
                    currentIndex === features.length - 1 ? "gray" : "white",
                }}
              >
                <IconCircleChevronRight stroke={1} size={44} />
              </button>
            </div>
          </div>
          <div className='slider-inner-right' ref={sliderRef}>
            {features.map((feature, index) => (
              <div className='slider-card' key={index}>
                <feature.icon size={24} stroke={1} color='#fff' />
                <h6>{feature.name}</h6>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovationFeatures;
