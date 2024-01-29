"use client";

import img1 from "@/public/intro-1.webp";
import img2 from "@/public/intro-2.webp";
import img3 from "@/public/intro-3.webp";
import img4 from "@/public/intro-4.webp";
import Image from "next/image";
import Icon from "./GoogleIcon";
import { useState } from "react";

const images = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
];

const Slider = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="slider-container">
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
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
