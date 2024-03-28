"use client";

import { useMenuActive, useScrolled } from "@/contexts/ContextHooks";

const MenuBtn = () => {
  const { menuActive, setMenuActive } = useMenuActive();
  const { scrolled } = useScrolled();

  return !menuActive ? (
    <button
      className={scrolled ? "menu-btn scrolled" : "menu-btn"}
      onClick={() => setMenuActive(true)}
    >
      <span>MENU</span>
    </button>
  ) : null;
};

export default MenuBtn;
