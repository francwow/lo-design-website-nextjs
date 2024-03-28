"use client";

import Icon from "./GoogleIcon";
import img1 from "@/public/intro-desc/intro-desc-1.webp";
import img2 from "@/public/intro-desc/intro-desc-2.webp";
import img3 from "@/public/intro-desc/intro-desc-3.webp";
import img4 from "@/public/intro-desc/intro-desc-4.webp";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
import IntroDescDesktop from "./IntroDescDesktop";
import IntroDescMobile from "./IntroDescMobile";
import Dots from "./Dots";

const images = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
];

const IntroDesc = () => {
  const deskTop = useMediaQuery("(min-width: 991px)");

  const descRef = useRef<HTMLDivElement | null>(null);

  const [translateY, setTranslateY] = useState(0);

  const [index, setIndex] = useState<number>(0);

  const [inverted, setInverted] = useState<boolean>(false);

  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (descRef.current !== undefined) {
      const descRect = descRef.current?.getBoundingClientRect();
      const descWidth = descRect?.width;

      descRef.current?.style.setProperty("--desc-width", `${descWidth}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollHandle = () => {
        const scrollY = window.scrollY;
        setTranslateY(scrollY);
      };

      window.addEventListener("scroll", scrollHandle);

      return () => {
        window.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [translateY]);

  return (
    <div ref={descRef} className="intro-desc-container">
      <Dots />
      <div className="slider-buttons desktop">
        <button
          onClick={() => {
            if (index === 0) {
              setIndex(3);
            } else {
              setIndex((index) => index - 1);
            }

            setInverted(true);
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

            setInverted(false);
          }}
        >
          <Icon icon="arrow_forward_ios" />
        </button>
      </div>
      <div
        ref={containerRef}
        style={{ opacity: "0", animationDelay: "0s" }}
        className={
          containerInView ? "intro-desc-wrapper fade-up" : "intro-desc-wrapper"
        }
      >
        {deskTop ? (
          <IntroDescDesktop
            index={index}
            setIndex={setIndex}
            inverted={inverted}
            setInverted={setInverted}
            containerInView={containerInView}
          />
        ) : (
          <IntroDescMobile
            index={index}
            setIndex={setIndex}
            inverted={inverted}
            setInverted={setInverted}
            containerInView={containerInView}
          />
        )}
      </div>
    </div>
  );
};

export default IntroDesc;
