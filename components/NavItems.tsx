"use client";

import { useLanguage, useMenuActive } from "@/contexts/ContextHooks";
import Link from "next/link";

const NavItems = () => {
  const { language, setLanguage } = useLanguage();
  const { menuActive, setMenuActive } = useMenuActive();

  return language === "ES" ? (
    <ul className="nav-items">
      <Link href={"/"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Inicio</li>
      </Link>

      <Link href={"nosotros"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Conócenos</li>
      </Link>

      <Link href={"productosyservicios"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Productos y Servicios</li>
      </Link>

      <Link href={"proyectos"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Proyectos</li>
      </Link>

      <Link href={"contacto"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Contáctanos</li>
      </Link>

      <Link href={"#"} className="footer-link">
        <li className="nav-item">Términos y Condiciones</li>
      </Link>

      <Link href={"#"} className="footer-link">
        <li className="nav-item">Política de Privacidad</li>
      </Link>
    </ul>
  ) : (
    <ul className="nav-items" onClick={() => setMenuActive(false)}>
      <Link href={"/"}>
        <li className="nav-item">Home</li>
      </Link>

      <Link href={"nosotros"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Meet the Team</li>
      </Link>

      <Link href={"productosyservicios"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Product and Services</li>
      </Link>

      <Link href={"proyectos"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Projects</li>
      </Link>

      <Link href={"contacto"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Contact Us</li>
      </Link>

      <Link href={"#"} className="footer-link">
        <li className="nav-item">Terms of Use</li>
      </Link>

      <Link href={"#"} className="footer-link">
        <li className="nav-item">Privacy</li>
      </Link>
    </ul>
  );
};

export default NavItems;
