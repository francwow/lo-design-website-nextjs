"use client";

import Link from "next/link";
import Icon from "./GoogleIcon";
import { useLanguage } from "@/contexts/ContextHooks";

type CTAProps = {
  copyEN: string;
  copyES: string;
  href: string;
};

const CTA = ({ copyEN, copyES, href }: CTAProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <Link target="_blank" href={href}>
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
