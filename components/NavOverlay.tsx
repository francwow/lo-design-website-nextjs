"use client";

import { useLanguageMenu, useMenuActive } from "@/contexts/ContextHooks";
import { useEffect } from "react";

const NavOverlay = () => {
  const { menuActive, setMenuActive } = useMenuActive();
  const { openLanguage, setOpenLanguage } = useLanguageMenu();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (menuActive) {
        window.document.documentElement.style.overflowY = "hidden";
      } else if (!menuActive) {
        window.document.documentElement.style.overflowY = "scroll";
      }
    }
  }, [menuActive]);

  return (
    <div
      style={
        menuActive
          ? { transform: "translate3d(0,0,0)" }
          : { transform: "translate3d(100%,0,0)" }
      }
      onClick={() => {
        setMenuActive(false);
        setOpenLanguage(false);
      }}
      className="nav-overlay"
    ></div>
  );
};

export default NavOverlay;
