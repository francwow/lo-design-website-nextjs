export type LanguageType = "ES" | "EN";

export type MenuActiveType = boolean;

export type LanguageMenuType = boolean;

export type ScrolledType = boolean;

export type ProductType = {
  headingES: string;
  headingEN: string;
  imgSrc: string | undefined;
  alt: string | undefined;
};

export type LanguageContextType = {
  language: LanguageType;
  setLanguage: (Language: LanguageType) => void;
};

export type MenuContextType = {
  menuActive: MenuActiveType;
  setMenuActive: (menuActive: boolean) => void;
};

export type LanguageMenuContextType = {
  openLanguage: LanguageMenuType;
  setOpenLanguage: (openLanguage: boolean) => void;
};

export type ScrolledContextType = {
  scrolled: ScrolledType;
  setScrolled: (scrolled: boolean) => void;
};

export type ProductContextType = {
  product: ProductType | null;
  setProduct: (product: ProductType | null) => void;
};
