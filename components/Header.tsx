"use client";

import { useScrolled } from "@/contexts/ContextHooks";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrolled, setScrolled } = useScrolled();

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    if (headerRef.current !== undefined) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headerHeight = headerRect?.height;

      document.body.style.setProperty("--header-height", `${headerHeight}`);
    }
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    let noScroll = 0;

    const scrollHandle = () => {
      let scrollY = window.scrollY;

      if (noScroll > scrollY) {
        setScrolled(false);
      } else if (noScroll < scrollY && scrollY >= 300) {
        setScrolled(true);
      }

      noScroll = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`${scrolled ? "header scrolled" : "header"} ${
        pathname === "/contacto" ? "contact" : ""
      }`}
    >
      <Logo />
      <MenuBtn />
    </div>
  );
};

export default Header;
