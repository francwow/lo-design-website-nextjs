"use client";

import img1 from "@/public/intro-1.webp";
import img2 from "@/public/intro-2.webp";
import img3 from "@/public/intro-3.webp";
import img4 from "@/public/intro-4.webp";
import Image from "next/image";
import Icon from "./GoogleIcon";
import { useEffect, useState } from "react";
import CTA from "./CTA";
import { useInView } from "react-intersection-observer";

const images = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
];

const Slider = () => {
  const [index, setIndex] = useState<number>(0);
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  // useEffect(() => {
  //   const increaseSliderIndex = () => {
  //     if (sliderIndex < 2) {
  //       setSliderIndex(sliderIndex + 1)
  //     } else if (sliderIndex >= 2) {
  //       setSliderIndex(0);
  //     }
  //   }

  // })

  return (
    <div className="slider-container">
      <div
        ref={containerRef}
        className={containerInView ? "slider-cta fade-up" : "slider-cta"}
      >
        <div
          style={{ opacity: "0", animationDelay: "0.3s" }}
          className={containerInView ? "slider-h1 fade-up" : "slider-h1"}
        >
          <h1>
            Brindamos soluciones en vidrio, acero inoxidable y aluminio
            arquitectónico para la industria y el hogar.
          </h1>
        </div>
        <div
          style={{ opacity: "0", animationDelay: "0.5s" }}
          className={containerInView ? "fade-up" : ""}
        >
          <CTA copyEN="lets work together" copyES="trabajemos juntos" />
        </div>
      </div>
      <div className="slider-buttons">
        <button
          onClick={() => {
            if (index === 0) {
              setIndex(3);
            } else {
              setIndex((index) => index - 1);
            }
            console.log(index);
          }}
        >
          <Icon icon="arrow_forward_ios" />
        </button>
        <button
          onClick={() => {
            if (index >= images.length - 1) {
              setIndex(0);
            } else {
              setIndex((index) => index + 1);
            }
            console.log(index);
          }}
        >
          <Icon icon="arrow_forward_ios" />
        </button>
      </div>

      {images.map((img) => {
        return (
          <div
            style={
              index === img.id
                ? { transform: "translate3d(0,0,0)", opacity: "1" }
                : { transform: "translate3d(110%,0,0)", opacity: "0" }
            }
            className="slider-item"
            key={img.id}
          >
            <Image
              src={img.src}
              alt="building"
              width={1200}
              height={1200}
              priority
            />
            <div className="slider-overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
