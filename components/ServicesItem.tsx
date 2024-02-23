import Image from "next/image";

const ServicesItem = () => {
  return (
    <div className="services-item">
      <div className="services-item-img">
        <div className="services-item-overlay"></div>
        <Image
          src={"/1-aluminio-arquitectonico.webp"}
          alt="services"
          width={1200}
          height={1200}
        />
      </div>
      <div className="services-item-menu">
        <ul>
          <li>Fachada unitizada serie 63</li>
          <li>Fachada unitizada serie 64</li>
          <li>Fachada unitizada serie 65</li>
          <li>Fachada unitizada serie 66</li>
          <li>Fachada unitizada serie 67</li>
        </ul>
      </div>
      <div className="services-item-text">
        <h2>FACHADA UNITIZADA SERIE 63</h2>
        <p>
          Sistema de Fachada Modular prefabricado en planta, lo que aporta
          eficiencias significativas en procesos logísticos y tiempos de
          instalación. Su diseño incorpora cámara isobárica bajo principio
          rainscreen que permite una excelente evacuación del agua lluvia. Esta
          fachada es la solución ideal para resolver grandes cerramientos
          arquitectónicos en proyectos de tipo institucional y comercial.
        </p>
      </div>
    </div>
  );
};

export default ServicesItem;
