"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { useInView } from "react-intersection-observer";

const Destacados = () => {
  const { language } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className="destacados-container">
      <div className="destacados">
        <div className="destacados-text">
          <h2
            style={{ opacity: "0", animationDelay: "0.2s" }}
            className={containerInView ? "fade-down" : ""}
          >
            {language === "ES" ? "PROYECTO DESTACADO" : "OUTSTANDING PROJECT"}
          </h2>
          <p
            style={{ opacity: "0", animationDelay: "0.3s" }}
            className={containerInView ? "fade-left" : ""}
          >
            {language === "ES"
              ? "Cerramientos y puertas en vidrio templado y acero inoxidable para Vuse Colombia."
              : "Enclosures and doors in tempered glass and stainless steel for Vuse Colombia."}
          </p>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GPJe3j-Likw?si=o6JI2XLegSvPkvBO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Destacados;
