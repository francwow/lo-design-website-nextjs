"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import partner1 from "../public/partners/partner1.webp";
import partner2 from "../public/partners/partner2.webp";
import partner3 from "../public/partners/partner3.webp";
// import partner4 from "../public/partners/partner4.webp";
import partner5 from "../public/partners/partner5.webp";
import partner6 from "../public/partners/partner6.webp";
import partner7 from "../public/partners/partner7.webp";
import partner8 from "../public/partners/partner8.webp";
import partner9 from "../public/partners/partner9.webp";
import partner10 from "../public/partners/partner10.webp";
import partner11 from "../public/partners/partner11.webp";
import partner12 from "../public/partners/partner12.webp";
import partner13 from "../public/partners/partner13.webp";
import partner14 from "../public/partners/partner14.webp";
import partner15 from "../public/partners/partner15.webp";
import Image from "next/image";

const partnerImages = [
  { id: 0, src: partner1 },
  { id: 1, src: partner2 },
  { id: 2, src: partner3 },
  // { id: 3, src: partner4 },
  { id: 3, src: partner5 },
  { id: 4, src: partner6 },
  { id: 5, src: partner7 },
  { id: 6, src: partner8 },
  { id: 7, src: partner9 },
  { id: 8, src: partner10 },
  { id: 9, src: partner11 },
  { id: 10, src: partner12 },
  { id: 11, src: partner13 },
  { id: 12, src: partner14 },
  { id: 13, src: partner15 },
];

const Partners = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className="partners-container">
      {language === "ES" ? (
        <div
          style={{ opacity: "0" }}
          className={
            containerInView ? "partners-heading fade-up" : "partners-heading"
          }
        >
          <h2>ELLOS CREYERON EN NOSOTROS</h2>
          <h3>
            9 años trabajando para construir los sueños de nuestros aliados
          </h3>
        </div>
      ) : (
        <div
          style={{ opacity: "0" }}
          className={
            containerInView ? "partners-heading fade-up" : "partners-heading"
          }
        >
          <h2>THEY BELIEVED IN US</h2>
          <h3>9 years working to build the dreams of our allies</h3>
        </div>
      )}

      <div className="partner-items-container">
        <ul className="partner-items">
          {partnerImages.map((partner) => {
            return (
              <li
                // style={{ opacity: "0", animationDelay: `${partner.id / 5}s` }}
                key={partner.id}
                className={
                  containerInView ? "partner-item fade-up" : "partner-item"
                }
              >
                <div className="partner-item-overlay"></div>
                <Image
                  src={partner.src}
                  alt="partner"
                  width={500}
                  height={500}
                />
              </li>
            );
          })}
        </ul>
        <ul className="partner-items">
          {partnerImages.map((partner) => {
            return (
              <li
                // style={{ opacity: "0", animationDelay: `${partner.id / 5}s` }}
                key={partner.id}
                className={
                  containerInView ? "partner-item fade-up" : "partner-item"
                }
              >
                <div className="partner-item-overlay"></div>
                <Image
                  src={partner.src}
                  alt="partner"
                  width={500}
                  height={500}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
