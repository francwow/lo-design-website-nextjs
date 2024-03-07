"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import promoImg from "@/public/promocion1.webp";
import CTA from "./CTA";
import Image from "next/image";

const HomeCTA = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className={"cta-container"}>
      <div className="cta-overlay"></div>
      {language === "EN" ? (
        <div
          style={{ opacity: "0" }}
          className={containerInView ? "cta-text fade-up" : "cta-text"}
        >
          <h2>
            WE TURN YOUR <strong>NEEDS</strong> INTO <strong>SOLUTIONS</strong>
          </h2>
          <p>
            <strong>9 years of experience</strong> and more than{" "}
            <strong>60 satisfied customers</strong> are proof of our commitment
            and quality.
          </p>
        </div>
      ) : (
        <div
          style={{ opacity: "0" }}
          className={containerInView ? "cta-text fade-up" : "cta-text"}
        >
          <h2>
            CONVERTIMOS TUS <strong>NECESIDADES</strong> EN{" "}
            <strong>SOLUCIONES</strong>
          </h2>
          <p>
            <strong>9 años de experiencia</strong> y más de{" "}
            <strong>60 clientes satisfechos</strong> son prueba de nuestro
            compromiso y calidad.
          </p>
        </div>
      )}
      <CTA
        href="https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
        copyEN="PROFESSIONAL CONSULTATION"
        copyES="ASESORÍA PROFESIONAL"
      />
    </div>
  );
};

export default HomeCTA;
