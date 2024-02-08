"use client";

import { useMenuActive } from "@/contexts/ContextHooks";
import whatsappLogo from "@/public/whatsapp.png";
import Image from "next/image";
import Link from "next/link";

const Whatsapp = () => {
  const { menuActive, setMenuActive } = useMenuActive();

  return menuActive ? null : (
    <aside className="whatsapp">
      <Link
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=573173204403&text&app_absent=0"
      >
        <Image
          src={whatsappLogo}
          alt="Whatsapp logo"
          height={500}
          width={500}
          priority
        />
      </Link>
    </aside>
  );
};

export default Whatsapp;
