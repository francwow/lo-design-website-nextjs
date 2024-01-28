"use client";

import { PropsWithChildren, useState } from "react";
import {
  LanguageContext,
  LanguageMenuContext,
  MenuActiveContext,
} from "../contexts/ContextHooks";
import { LanguageType, MenuActiveType } from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <LanguageMenuContext.Provider value={{ openLanguage, setOpenLanguage }}>
      <MenuActiveContext.Provider value={{ menuActive, setMenuActive }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {props.children}
        </LanguageContext.Provider>
      </MenuActiveContext.Provider>
    </LanguageMenuContext.Provider>
  );
};

export default Provider;
