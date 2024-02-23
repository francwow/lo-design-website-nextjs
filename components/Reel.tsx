"use client";

import CTA from "./CTA";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/ContextHooks";

const sliderVideo = {
  id: 0,
  src: "/video/reel-placeholder-lodesign.mp4",
};

const Reel = () => {
  const { language } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="reel-container">
      <div
        ref={containerRef}
        className={containerInView ? "reel-cta fade-up" : "reel-cta"}
      >
        <div
          style={{ opacity: "0", animationDelay: "0.3s" }}
          className={containerInView ? "reel-h1 fade-up" : "reel-h1"}
        >
          <h1>
            {language === "ES"
              ? "ARQUITECTURA, DISEÑO INDUSTRIAL E INNOVACIÓN"
              : "ARCHITECTURE, INDUSTRIAL DESIGN AND INNOVATION"}
          </h1>
        </div>
        <div
          style={{ opacity: "0", animationDelay: "0.5s" }}
          className={containerInView ? "fade-up" : ""}
        >
          <CTA
            copyEN="LET'S WORK TOGETHER"
            copyES="TRABAJEMOS JUNTOS"
            href="https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
          />
        </div>
      </div>

      <div className="reel-item">
        <video
          width={1920}
          height={1080}
          src={sliderVideo.src}
          muted
          loop
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default Reel;
