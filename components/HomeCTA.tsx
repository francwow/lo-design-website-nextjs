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
    <div
      style={{ opacity: "0" }}
      ref={containerRef}
      className={containerInView ? "cta-container fade-up" : "cta-container"}
    >
      {language === "EN" ? (
        <div className="cta-text">
          <h2>Our clients receive special discounts.</h2>
          <p>
            Be one of our clients to receive a <strong>15% discount</strong> on
            your first purchase.
          </p>
        </div>
      ) : (
        <div className="cta-text">
          <h2>Nuestros clientes, obtienen descuentos especiales.</h2>
          <p>
            Se uno de nuestros clientes y obtén un{" "}
            <strong>descuento del 15%</strong> en tu primera compra.
          </p>
        </div>
      )}
      <div className="cta-img">
        <Image
          priority
          src={promoImg}
          alt="Business meeting"
          width={800}
          height={600}
        />
        <CTA copyEN="free consultation" copyES="asesoría gratuita" />
        <div className="cta-overlay"></div>
      </div>
    </div>
  );
};

export default HomeCTA;
