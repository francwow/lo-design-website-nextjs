"use client";

import ContactInfo from "@/components/ContactInfo";
import ContactSocial from "@/components/ContactSocial";
import Icon from "@/components/GoogleIcon";
import Social from "@/components/Social";
import { useLanguage } from "@/contexts/ContextHooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const ContactPage = () => {
  const pathname = usePathname();
  const deskTop = useMediaQuery("(min-width: 991px)");
  const { language } = useLanguage();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="contact-info-wrapper">
      <main className="main-wrapper">
        <div
          className={
            pathname === "/contacto"
              ? "main-content-container contact"
              : "main-content-container"
          }
        >
          <section className="main-content">
            <div className="contact-img-container">
              <div className="contact-under-construction">
                <h1>
                  {language === "ES"
                    ? "Nuestra Página está en construcción. Contáctanos para conocer más acerca de nuestros productos y servicios."
                    : "Our Website is under construction. Contact us to learn more about our products and services."}
                </h1>
              </div>
              <div className="contact-overlay"></div>
              {/* <div className="contact-fade"></div> */}
              <div className="contact-img">
                <Image
                  src={"/landing.webp"}
                  alt=""
                  width={1200}
                  height={1200}
                  priority
                />
              </div>
            </div>
            <div className="contact-info-container">
              <ContactInfo />
              <ContactSocial />
              <div className="footer-copyright">
                <span>© LO design | 2024 | Todos los derechos reservados</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
