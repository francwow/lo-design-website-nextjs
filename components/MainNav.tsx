"use client";

import { useLanguageMenu, useMenuActive } from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";
import Languages from "./Languages";
import Social from "./Social";
import { useEffect, useRef } from "react";
import NavItems from "./NavItems";

const MainNav = () => {
  const { menuActive, setMenuActive } = useMenuActive();
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
      <div
        ref={navRef}
        className={
          menuActive
            ? "nav-items-container fade-in-right"
            : "nav-items-container"
        }
      >
        <div className="nav-secondary-items">
          <Languages />
          <div className={menuActive ? "esc-btn active" : "esc-btn"}>
            <button
              onClick={() => {
                setMenuActive(false);
                setOpenLanguage(false);
              }}
            >
              <Icon icon="close" />
            </button>
          </div>
        </div>
        <NavItems />
        <div className="nav-secondary-items">
          <Social />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
