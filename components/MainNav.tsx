"use client";

import {
  useLanguage,
  useLanguageMenu,
  useMenuActive,
} from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";
import Languages from "./Languages";
import Social from "./Social";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MainNav = () => {
  const { menuActive, setMenuActive } = useMenuActive();
  const { language, setLanguage } = useLanguage();
  const { openLanguage, setOpenLanguage } = useLanguageMenu();

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navRef.current !== null) {
      navRef.current.addEventListener("click", () => {
        setOpenLanguage(false);
      });
    }
  }, [setOpenLanguage]);

  return (
    <nav className={menuActive ? "main-nav nav-active" : "main-nav"}>
      <div className="esc-btn">
        <button
          onClick={() => {
            setMenuActive(false);
            setOpenLanguage(false);
          }}
        >
          <Icon icon="close" />
        </button>
      </div>
      <div
        ref={navRef}
        className={
          menuActive
            ? "nav-items-container fade-in-right"
            : "nav-items-container"
        }
      >
        {language === "ES" ? (
          <ul className="nav-items">
            <Link href={"/"} onClick={() => setMenuActive(false)}>
              <li className="nav-item">Inicio</li>
            </Link>

            <Link href={"nosotros"} onClick={() => setMenuActive(false)}>
              <li className="nav-item">Nosotros</li>
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
              <li className="nav-item">About</li>
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
        )}
        <div className="nav-secondary-items">
          <Social />
        </div>
      </div>
      <Languages />
    </nav>
  );
};

export default MainNav;
