"use client";

import { useLanguageMenu, useMenuActive } from "@/contexts/ContextHooks";

const NavOverlay = () => {
  const { menuActive, setMenuActive } = useMenuActive();
  const { openLanguage, setOpenLanguage } = useLanguageMenu();

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
