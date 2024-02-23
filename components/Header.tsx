"use client";

import { useScrolled } from "@/contexts/ContextHooks";
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrolled, setScrolled } = useScrolled();

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
      style={scrolled ? { transform: "translate3d(0, -100%, 0)" } : {}}
      ref={headerRef}
      className={"header"}
    >
      <Logo />
      <MenuBtn />
    </div>
  );
};

export default Header;
