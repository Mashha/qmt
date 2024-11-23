import React, { useState } from "react";
import "./about-future.css";
import ButtonSection from "../../../components/Buttons/ButtonSection";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { futureProducts } from "../../Innovation-section/InnovationSectionData";
import { IconArrowDown } from "@tabler/icons-react";

function AboutFuture() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className='future-prospects-about section'>
      <div className='section-button-text-component'>
        <ButtonSection prop='Future prospects' />
        <SectionTitle title='Looking ahead' />
        <div className='future-products'>
          {futureProducts.map((product) => (
            <div className='future-product' key={product.id}>
              <div
                onClick={() => toggleProject(product.id)}
                className='future-product-inner'
              >
                <h4>{product.name}</h4>
                <span
                  style={{
                    transform:
                      expandedProject === product.id
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    transition: "transform 0.4s",
                  }}
                >
                  <IconArrowDown stroke={1} />
                </span>
              </div>

              {/* Expandable Content */}
              <div
                className={`expandable-content ${
                  expandedProject === product.id ? "expanded" : ""
                }`}
              >
                <div
                  className='content-inner'
                >
                  <p>{product.description}</p>
                  <div className='future-product-image'>
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutFuture;
