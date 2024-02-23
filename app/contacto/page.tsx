import Icon from "@/components/GoogleIcon";
import Social from "@/components/Social";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="main-content-container">
      <section className="main-content">
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-info-text">
              <h1>Contacto</h1>
            </div>
            <div className="contact-info-item">
              <Link
                href={"https://maps.app.goo.gl/5NWuXCU3R3RogfEi8"}
                target="_blank"
              >
                <Icon icon="location_on" />
                <span>cra 4 # 34-28, Barrio El Porvenir</span>
              </Link>
            </div>
            <div className="contact-info-item">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
                }
                target="_blank"
              >
                <Icon icon="call" />
                <span>+57 314 743 4383</span>
              </Link>
            </div>
            <div className="contact-info-item">
              <Link href={"mailto:comercial1@lodesign.com.co"} target="_blank">
                <Icon icon="mail" />
                <span>comercial1@lodesign.com.co</span>
              </Link>
            </div>
          </div>

          <div className="contact-social-container">
            <h2>
              Tambien nos puedes contactar por medio de nuestras redes sociales.
            </h2>
            <div className="social-links-container">
              <div className="icon-container">
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/lo.design/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@lo.design</span>
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@lodesignsas8915"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span>LO design SAS</span>
                </Link>
              </div>
              <div className="icon-container">
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/LOdesign.col"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span>@lodesign.col</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
