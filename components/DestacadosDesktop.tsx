import { useLanguage } from "@/contexts/ContextHooks";
import Image from "next/image";
import Link from "next/link";

type DestacadosProps = {
  containerInView: boolean;
};

const DestacadosDesktop = ({ containerInView }: DestacadosProps) => {
  const { language } = useLanguage();

  return (
    <div className="destacados">
      {/* item # 1 */}

      <div className="destacados-item">
        <Link
          href={"https://youtu.be/GPJe3j-Likw?si=mtEfKMU3KqC0ugkM"}
          target="_blank"
        >
          <div className="destacados-img">
            <Image
              src={"/destacados/market.webp"}
              alt="trabajo en vidrio realizado para The Market"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <div className="destacados-text">
            <h2
              style={{ opacity: "0", animationDelay: "0.2s" }}
              className={containerInView ? "fade-down" : ""}
            >
              {language === "ES" ? "THE MARKET" : "THE MARKET"}
            </h2>
            <p
              style={{ opacity: "0", animationDelay: "0.3s" }}
              className={containerInView ? "fade-left" : ""}
            >
              {language === "ES"
                ? "Cerramientos y puertas en vidrio templado y acero inoxidable para The Market."
                : "Enclosures and doors in tempered glass and stainless steel for The Market."}
            </p>
          </div>
        </Link>
      </div>
      {/* item # 2 */}
      <div className="destacados-item">
        <Link
          href={"https://youtu.be/G98gqKZy3Q8?si=7wtgOStpBkrk3BTC"}
          target="_blank"
        >
          <div className="destacados-img">
            <Image
              src={"/destacados/ventolini.webp"}
              alt="trabajo en vidrio realizado para Ventolini"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <div className="destacados-text">
            <h2
              style={{ opacity: "0", animationDelay: "0.2s" }}
              className={containerInView ? "fade-down" : ""}
            >
              {language === "ES" ? "VENTOLINI" : "VENTOLINI"}
            </h2>
            <p
              style={{ opacity: "0", animationDelay: "0.3s" }}
              className={containerInView ? "fade-left" : ""}
            >
              {language === "ES"
                ? "Cerramientos y puertas en vidrio templado y acero inoxidable para Ventolini."
                : "Enclosures and doors in tempered glass and stainless steel Ventolini."}
            </p>
          </div>
        </Link>
      </div>
      {/* item # 3 */}
      <div className="destacados-item">
        <Link
          href={"https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5"}
          target="_blank"
        >
          <div className="destacados-img">
            <Image
              src={"/destacados/airmatic.webp"}
              alt="trabajo en vidrio realizado para Airmatic"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <div className="destacados-text">
            <h2
              style={{ opacity: "0", animationDelay: "0.2s" }}
              className={containerInView ? "fade-down" : ""}
            >
              {language === "ES" ? "AIRMATIC" : "AIRMATIC"}
            </h2>
            <p
              style={{ opacity: "0", animationDelay: "0.3s" }}
              className={containerInView ? "fade-left" : ""}
            >
              {language === "ES"
                ? "Cerramientos y puertas en vidrio templado y acero inoxidable para Airmatic."
                : "Enclosures and doors in tempered glass and stainless steel for Airmatic."}
            </p>
          </div>
        </Link>
      </div>
      {/* item # 4 */}
      <div className="destacados-item">
        <Link
          href={"https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5"}
          target="_blank"
        >
          <div className="destacados-img">
            <Image
              src={"/destacados/cantina.webp"}
              alt="trabajo en vidrio realizado para La Cantina de Chente"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <div className="destacados-text">
            <h2
              style={{ opacity: "0", animationDelay: "0.2s" }}
              className={containerInView ? "fade-down" : ""}
            >
              {language === "ES"
                ? "LA CANTINA DE CHENTE"
                : "LA CANTINA DE CHENTE"}
            </h2>
            <p
              style={{ opacity: "0", animationDelay: "0.3s" }}
              className={containerInView ? "fade-left" : ""}
            >
              {language === "ES"
                ? "Cerramientos y puertas en vidrio templado y acero inoxidable para La Cantina de Chente."
                : "Enclosures and doors in tempered glass and stainless steel for La Cantina de Chente."}
            </p>
          </div>
        </Link>
      </div>
      {/* item # 5 */}
      <div className="destacados-item">
        <Link
          href={"https://youtu.be/oJY0EqKJ1Zg?si=T-lEyXtHlAzaGJo5"}
          target="_blank"
        >
          <div className="destacados-img">
            <Image
              src={"/destacados/centronet.webp"}
              alt="trabajo en vidrio realizado para Centronet"
              priority={false}
              width={1200}
              height={1200}
            />
          </div>
          <div className="destacados-text">
            <h2
              style={{ opacity: "0", animationDelay: "0.2s" }}
              className={containerInView ? "fade-down" : ""}
            >
              {language === "ES" ? "CENTRONET" : "CENTRONET"}
            </h2>
            <p
              style={{ opacity: "0", animationDelay: "0.3s" }}
              className={containerInView ? "fade-left" : ""}
            >
              {language === "ES"
                ? "Cerramientos y puertas en vidrio templado y acero inoxidable para Centronet."
                : "Enclosures and doors in tempered glass and stainless steel for Centronet."}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DestacadosDesktop;
