"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import { useInView } from "react-intersection-observer";
import partner1 from "@/public/partner1.webp";
import partner2 from "@/public/partner2.webp";
import partner3 from "@/public/partner3.webp";
import partner4 from "@/public/partner4.webp";
import partner5 from "@/public/partner5.webp";
import partner6 from "@/public/partner6.webp";
import Image from "next/image";

const partnerImages = [
  { id: 0, src: partner1 },
  { id: 1, src: partner2 },
  { id: 2, src: partner3 },
  { id: 3, src: partner4 },
  { id: 4, src: partner5 },
  { id: 5, src: partner6 },
];

const Partners = () => {
  const { language, setLanguage } = useLanguage();
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div
      style={{ opacity: "0" }}
      ref={containerRef}
      className={
        containerInView ? "partners-container fade-up" : "partners-container"
      }
    >
      {language === "ES" ? (
        <div className="partners-h2">
          <h2>Aliados</h2>
        </div>
      ) : (
        <div className="partners-h2">
          <h2>Partners</h2>
        </div>
      )}

      <ul className="partner-items">
        {partnerImages.map((partner) => {
          return (
            <li key={partner.id} className="partner-item">
              <div className="partner-item-overlay"></div>
              <Image src={partner.src} alt="partner" width={500} height={500} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Partners;
