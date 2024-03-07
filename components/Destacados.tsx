"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import DestacadosDesktop from "./DestacadosDesktop";
import { useMediaQuery } from "usehooks-ts";
import DestacadosMobile from "./DestacadosMobile";

const Destacados = () => {
  const { language } = useLanguage();
  const deskTop = useMediaQuery("(min-width: 991px)");
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className="destacados-container">
      <div className="destacados-heading">
        <h2>
          {language === "ES" ? "PROYECTOS DESTACADOS" : "FEATURED PROJECTS"}
        </h2>
      </div>
      {deskTop ? (
        <DestacadosDesktop containerInView={containerInView} />
      ) : (
        <DestacadosMobile containerInView={containerInView} />
      )}
    </div>
  );
};

export default Destacados;
