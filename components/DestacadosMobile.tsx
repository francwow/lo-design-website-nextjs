"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "./GoogleIcon";
import { useLanguage } from "@/contexts/ContextHooks";
import { useState } from "react";
import { destacados } from "@/data/destacados";

type DestacadosProps = {
  containerInView: boolean;
};

const DestacadosMobile = ({ containerInView }: DestacadosProps) => {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="destacados">
      {destacados.map((item, index) => {
        return (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggle(index);
              }
            }}
            onClick={() => toggle(index)}
            key={index}
            className={
              selected === index
                ? "destacados-item expanded"
                : "destacados-item collapsed"
            }
          >
            <div className="destacados-overlay"></div>
            <div className="expand-item">
              {selected === index ? (
                <div className="expand-item-icon"></div>
              ) : (
                <div className="expand-item-icon"></div>
              )}
            </div>
            <div className="destacados-img">
              <Image
                src={item.img}
                alt={item.alt}
                priority={false}
                width={1200}
                height={1200}
              />
            </div>
            <div className="destacados-text">
              <h2>{language === "ES" ? item.headingES : item.headingEN}</h2>
              <p>{language === "ES" ? item.pES : item.pEN}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DestacadosMobile;
