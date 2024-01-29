import NavItems from "./NavItems";
import Social from "./Social";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-info-container">
        <div className="footer-nav">
          <NavItems />
        </div>
        <Social />
        <div className="footer-text">
          <span>© LO design | 2024 | Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
