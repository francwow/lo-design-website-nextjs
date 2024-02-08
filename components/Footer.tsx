import Logo from "./Logo";
import NavItems from "./NavItems";
import Social from "./Social";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-info-container">
        <div className="footer-flex">
          <Logo />
          <div className="footer-nav">
            <NavItems />
          </div>
        </div>
        <Social />
        <div className="footer-copyright">
          <span>© LO design | 2024 | Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
