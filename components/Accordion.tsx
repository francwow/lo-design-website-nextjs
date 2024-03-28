"use client";

import { useLanguage } from "@/contexts/ContextHooks";

type AccordionProps = {
  btnTextES: string;
  btnTextEN: string;
  infoES: string;
  infoEN: string;
};

const Accordion = ({
  btnTextES,
  btnTextEN,
  infoES,
  infoEN,
}: AccordionProps) => {
  const { language } = useLanguage();

  return language === "ES" ? (
    <div className="accordion">
      <button className="accordion-btn">{btnTextES}</button>
      <div className="accordio-info">{infoES}</div>
    </div>
  ) : (
    <div className="accordion">
      <button className="accordion-btn">{btnTextEN}</button>
      <div className="accordio-info">{infoEN}</div>
    </div>
  );
};

export default Accordion;
