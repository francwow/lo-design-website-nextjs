"use client";

import useLanguage from "@/contexts/NavContext";
import { useState } from "react";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className={
        language === "ES"
          ? "es"
          : language === "EN"
          ? "en"
          : language === "FR"
          ? "fr"
          : ""
      }
    >
      <div className="h-36 w-full flex justify-center items-center gap-4">
        <button
          className={active === 1 ? "active" : ""}
          onClick={() => setLanguage("ES")}
          onPointerDown={() => setActive(1)}
          onPointerUp={() => setActive(0)}
        >
          ES
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={() => setLanguage("EN")}
          onPointerDown={() => setActive(2)}
          onPointerUp={() => setActive(0)}
        >
          EN
        </button>
        <button
          className={active === 3 ? "active" : ""}
          onClick={() => setLanguage("FR")}
          onPointerDown={() => setActive(3)}
          onPointerUp={() => setActive(0)}
        >
          FR
        </button>
      </div>
    </div>
  );
}
