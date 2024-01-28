export type LanguageType = string;

export type MenuActiveType = boolean;

export type LanguageMenuType = boolean;

export type LanguageContextType = {
  language: LanguageType;
  setLanguage: (Language: string) => void;
};

export type MenuContextType = {
  menuActive: MenuActiveType;
  setMenuActive: (menuActive: boolean) => void;
};

export type LanguageMenuContextType = {
  openLanguage: LanguageMenuType;
  setOpenLanguage: (openLanguage: boolean) => void;
};
