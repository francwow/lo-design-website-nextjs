"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Accordion from "./Accordion";

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="nosotros">
      {language === "ES" ? (
        <>
          <div className="nosotros-info">
            <h2>Conócenos</h2>
            <p>
              LO design S.A.S. es una pyme con única sede ubicada en Cali,
              conformada por un equipo de profesionales con experticia en el
              manejo de vidrio templado, acero inoxidable y aluminio
              arquitectónico. La experiencia actualmente de 9 años en el mercado
              nos permite proveer a las personas y a la industria, soluciones
              basadas en arquitectura, diseño industrial e innovación. Nuestro
              experimentado grupo nos da la capacidad de suplir las necesidades
              del cliente en diferentes áreas como: construcción liviana,
              carpintería, instalaciones de vidrio, pisos, iluminación,
              transformación del acero inoxidable y demás materiales de uso
              arquitectónico.
            </p>
          </div>
          <div className="nosotros-info">
            <h2>Misión</h2>
            <p>
              Para LO design es importante la tranquilidad de nuestros clientes,
              por esto brindamos soluciones basadas en el diseño y la
              construcción de los espacios que necesiten mediante la instalación
              del vidrio y acero inoxidable, garantizando un servicio integral y
              oportuno con un equipo altamente capacitado y con experiencia,
              comprometidos con el desarrollo de nuestra región gracias al
              respaldo y confianza de los accionistas que trabajan día a día por
              la sostenibilidad y el crecimiento dando cumplimiento a cada uno
              de los proyectos.
            </p>
          </div>
          <div className="nosotros-info">
            <h2>Visión</h2>
            <p>
              Al 2025 construiremos día a día una empresa reconocida por nuestra
              excelencia en el servicio y capacidad de respuesta, atendiendo un
              mercado local con exigencias arquitectónicas de alto nivel
              suministrando productos de excelente calidad, garantizando el
              cumplimiento de normas técnicas para nuestros clientes.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="nosotros-info">
            <h2>Meet the team</h2>
            <p>
              LO design S.A.S. is an SME with its sole headquarters located in
              Cali, made up of a team of professionals with expertise in the
              Handling of tempered glass, stainless steel and architectural
              aluminum. Currently 9 years of experience in the market allows us
              to provide people and industry with solutions based on
              architecture, industrial design and innovation. Our experienced
              group gives us the ability to meet the needs of the client in
              different areas such as: light construction, carpentry, glass
              installations, flooring, lighting, transformation of stainless
              steel and other materials of architectural use.
            </p>
          </div>
          <div className="nosotros-info">
            <h2>Our mission</h2>
            <p>
              For LO design, the peace of mind of our clients is important, for
              this reason we provide solutions based on design and construction
              of the spaces they need through the installation of glass and
              stainless steel, guaranteeing a timely and comprehensive service
              with a highly trained and experienced team, committed to the
              development of our region thanks to support and trust of the
              shareholders who work every day for sustainability and growth
              fulfilling each one of the proyects.
            </p>
          </div>
          <div className="nosotros-info">
            <h2>Our vision</h2>
            <p>
              By 2025 we will build day by day a company recognized for our
              excellence in service and response capacity, serving a local
              market with high-level architectural demands supplying excellent
              quality products, guaranteeing the compliance with technical
              standards for our clients.
            </p>
          </div>
        </>
      )}
      <div className="nosotros-info">
        <div>
          <h2>
            {language === "ES"
              ? "Experiencia LO Design"
              : "LO Design Experience"}
          </h2>
        </div>
        <ul>
          <li>
            {/* 1st item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 2nd item */}
            <Accordion
              btnTextES="Pasión"
              btnTextEN="Passion"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 3rd item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 4th item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 5th item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 6th item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 7th item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
          <li>
            {/* 8th item */}
            <Accordion
              btnTextES="Calidad"
              btnTextEN="Quality"
              infoES="Trabajamos con materiales que cumplen los estándares de calidad."
              infoEN="We work with materials that meet quality standards."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
