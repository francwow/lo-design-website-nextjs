"use client";

import { createContext, useContext } from "react";
import {
  LanguageContextType,
  LanguageMenuContextType,
  MenuContextType,
  ScrolledContextType,
} from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const MenuActiveContext = createContext<MenuContextType | null>(null);

export const LanguageMenuContext =
  createContext<LanguageMenuContextType | null>(null);

export const ScrolledContext = createContext<ScrolledContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useMenuActive = (): MenuContextType => {
  const context = useContext(MenuActiveContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useLanguageMenu = (): LanguageMenuContextType => {
  const context = useContext(LanguageMenuContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useScrolled = (): ScrolledContextType => {
  const context = useContext(ScrolledContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
