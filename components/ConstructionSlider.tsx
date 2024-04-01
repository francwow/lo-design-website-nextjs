"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import Icon from "./GoogleIcon";

const ConstructionSlider = () => {
  const { language } = useLanguage();

  const liArray = [
    { id: 0, type: "text" },
    { id: 1, type: "icon" },
    { id: 2, type: "text" },
    { id: 3, type: "icon" },
    { id: 4, type: "text" },
    { id: 5, type: "icon" },
    { id: 6, type: "text" },
    { id: 7, type: "icon" },
    { id: 8, type: "text" },
    { id: 9, type: "icon" },
    { id: 10, type: "text" },
    { id: 11, type: "icon" },
  ];

  return (
    <div className="construction-container">
      <div className="construction-items-container">
        <ul className="construction-items">
          {liArray.map((item) => {
            return (
              <li className="construction-item" key={item.id}>
                <Icon icon="construction" />
                <span>
                  {language === "ES"
                    ? "Página en construcción"
                    : "Under construction"}
                </span>
              </li>
            );
          })}
        </ul>
        <ul className="construction-items">
          {liArray.map((item) => {
            return (
              <li className="construction-item" key={item.id}>
                <Icon icon="construction" />
                <span>
                  {language === "ES"
                    ? "Página en construcción"
                    : "Under construction"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ConstructionSlider;
