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

      <Link href={"soluciones"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Soluciones</li>
      </Link>

      <Link href={"especiales"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Proyectos Especiales</li>
      </Link>

      <Link href={"contacto"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Contacto</li>
      </Link>
    </ul>
  ) : (
    <ul className="nav-items" onClick={() => setMenuActive(false)}>
      <Link href={"/"}>
        <li className="nav-item">Home</li>
      </Link>

      <Link href={"nosotros"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Meet the team</li>
      </Link>

      <Link href={"soluciones"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Services</li>
      </Link>

      <Link href={"especiales"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Special Projects</li>
      </Link>

      <Link href={"contacto"} onClick={() => setMenuActive(false)}>
        <li className="nav-item">Contact</li>
      </Link>
    </ul>
  );
};

export default NavItems;
