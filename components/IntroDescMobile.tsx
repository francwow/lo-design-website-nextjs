"use client";

import Image from "next/image";
import CTA from "./CTA";
import img1 from "@/public/intro-desc/intro-desc-1.webp";
import img2 from "@/public/intro-desc/intro-desc-2.webp";
import img3 from "@/public/intro-desc/intro-desc-3.webp";
import img4 from "@/public/intro-desc/intro-desc-4.webp";
import { useLanguage } from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";

type IntroDescMobileProps = {
  index: number;
  setIndex: (index: number) => void;
  inverted: boolean;
  setInverted: (inverted: boolean) => void;
  containerInView: boolean;
};

const images = [
  { id: 0, src: img1 },
  { id: 1, src: img2 },
  { id: 2, src: img3 },
  { id: 3, src: img4 },
];

const IntroDescMobile = ({
  index,
  setIndex,
  inverted,
  setInverted,
  containerInView,
}: IntroDescMobileProps) => {
  const { language } = useLanguage();

  return (
    <>
      <CTA
        copyEN="MEET THE TEAM"
        copyES="CONOCE NUESTRO EQUIPO"
        href="/nosotros"
      />

      <div className="intro-desc">
        <div className="intro-desc-text">
          <h2
            style={{ opacity: "0", animationDelay: "0.2s" }}
            className={containerInView ? "fade-down" : ""}
          >
            {language === "ES"
              ? "MATERIALIZAMOS TUS IDEAS"
              : "WE BRING YOUR IDEAS TO LIFE"}
          </h2>
          <p
            style={{ opacity: "0", animationDelay: "0.3s" }}
            className={containerInView ? "fade-left" : ""}
          >
            {language === "ES"
              ? "LO design S.A.S. es una pyme con única sede ubicada en Cali, conformada por un equipo de profesionales con experticia en el manejo de vidrio templado, acero inoxidable y aluminio arquitectónico. La experiencia actualmente de 9 años en el mercado nos permite proveer a las personas y a la industria, soluciones basadas en arquitectura, diseño industrial e innovación. Nuestro experimentado grupo nos da la capacidad de suplir las necesidades del cliente en diferentes áreas como: construcción liviana, carpintería, instalaciones de vidrio, pisos, iluminación, transformación del acero inoxidable y demás materiales de uso arquitectónico."
              : "LO design S.A.S. is an SME with headquarters located in Cali, made up of a team of professionals with expertise in handling tempered glass, stainless steel and architectural aluminum. Currently 9 years of experience in the market allows us to provide people and industry with solutions based on architecture, industrial design and innovation. Our experienced group gives us the ability to meet client needs in different areas such as: light construction, carpentry, glass installations, floors, lighting, transformation of stainless steel and other materials for architectural use."}
          </p>
        </div>
        <div className="slider-item-container">
          <div className="slider-buttons mobile">
            <button
              onClick={() => {
                if (index === 0) {
                  setIndex(3);
                } else {
                  setIndex(index - 1);
                }

                setInverted(true);
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
                  setIndex(index + 1);
                }

                setInverted(false);
                console.log(index);
              }}
            >
              <Icon icon="arrow_forward_ios" />
            </button>
          </div>
          {images.map((img) => {
            return (
              <div
                data-inverted={inverted ? "true" : false}
                // style={index === img.id ? styleActive : styleNotActive}
                className={
                  index === img.id ? "slider-item-active" : "slider-item"
                }
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
      </div>
    </>
  );
};

export default IntroDescMobile;
