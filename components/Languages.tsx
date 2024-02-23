"use client";

import {
  useLanguage,
  useLanguageMenu,
  useMenuActive,
} from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";

const Languages = () => {
  const { language, setLanguage } = useLanguage();
  const { openLanguage, setOpenLanguage } = useLanguageMenu();
  const { menuActive, setMenuActive } = useMenuActive();

  return (
    <aside
      className={
        menuActive ? "language-container fade-in-right" : "language-container"
      }
    >
      <div className="language-btn-container">
        <button
          onClick={() => {
            setOpenLanguage(!openLanguage);
          }}
          className="language-btn"
        >
          <Icon icon="language" />
          <div className="language">
            <span>{language === "ES" ? "Idiomas" : "Languages"}</span>
          </div>
        </button>
      </div>

      <div
        className={
          openLanguage
            ? "language-menu-container menu-open"
            : "language-menu-container"
        }
      >
        <div className="language-menu">
          <button
            onClick={() => {
              setLanguage("EN");
              setOpenLanguage(false);
            }}
          >
            <span>English</span>
          </button>
          <button
            onClick={() => {
              setLanguage("ES");
              setOpenLanguage(false);
            }}
          >
            <span>Español</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Languages;
