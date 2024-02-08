"use client";

import Link from "next/link";
import Icon from "./GoogleIcon";
import { useLanguage } from "@/contexts/ContextHooks";

type CTAProps = {
  copyEN: string;
  copyES: string;
};

const CTA = ({ copyEN, copyES }: CTAProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <Link
      target="_blank"
      href={
        "https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
      }
    >
      <div className="cta">
        {language === "EN" ? (
          <span>
            <strong>{copyEN}</strong>
          </span>
        ) : (
          <span>
            <strong>{copyES}</strong>
          </span>
        )}

        <Icon icon="arrow_forward" />
      </div>
    </Link>
  );
};

export default CTA;
