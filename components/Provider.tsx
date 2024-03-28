"use client";

import { PropsWithChildren, useState } from "react";
import {
  LanguageContext,
  LanguageMenuContext,
  MenuActiveContext,
  ProductContext,
  ScrolledContext,
} from "../contexts/ContextHooks";
import {
  LanguageMenuType,
  LanguageType,
  MenuActiveType,
  ProductType,
  ScrolledType,
} from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("ES");
  const [menuActive, setMenuActive] = useState<MenuActiveType>(false);
  const [openLanguage, setOpenLanguage] = useState<LanguageMenuType>(false);
  const [scrolled, setScrolled] = useState<ScrolledType>(false);
  const [product, setProduct] = useState<ProductType | null>(null);

  return (
    <ScrolledContext.Provider value={{ scrolled, setScrolled }}>
      <LanguageMenuContext.Provider value={{ openLanguage, setOpenLanguage }}>
        <MenuActiveContext.Provider value={{ menuActive, setMenuActive }}>
          <LanguageContext.Provider value={{ language, setLanguage }}>
            <ProductContext.Provider value={{ product, setProduct }}>
              {props.children}
            </ProductContext.Provider>
          </LanguageContext.Provider>
        </MenuActiveContext.Provider>
      </LanguageMenuContext.Provider>
    </ScrolledContext.Provider>
  );
};

export default Provider;
