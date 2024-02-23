import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="services-nav-container">
          <label htmlFor="services-menu">
            Nos dedicamos a una amplia gama de productos y servicios
            relacionados con vidrios y construcción.
          </label>
          <select name="services-menu" id="services-menu">
            <option value="">--Productos y Servicios--</option>
            <option value="">Aluminio arquitectonico</option>
            <option value="">Acero inoxidable</option>
            <option value="">Vidrios especiales</option>
            <option value="">Sistemas automatizados</option>
            <option value="">
              Control solar, Peliculas de seguridad y Vinilos de seguridad
            </option>
            <option value="">Proyectos Especiales</option>
            <option value="">Vidrio inteligente</option>
            <option value="">Otros</option>
          </select>
        </div>
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
      </div>
    </div>
  );
};

export default Services;
