"use client";

import { useMenuActive } from "@/contexts/ContextHooks";

const MenuBtn = () => {
  const { menuActive, setMenuActive } = useMenuActive();

  return !menuActive ? (
    <button className="menu-btn" onClick={() => setMenuActive(true)}>
      <span>MENU</span>
    </button>
  ) : null;
};

export default MenuBtn;
