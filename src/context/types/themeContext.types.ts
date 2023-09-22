import { ReactNode, SetStateAction } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextProps = {
  isDark?: boolean;
  setIsDark?: React.Dispatch<SetStateAction<boolean>>;
};

export type { ThemeProviderProps, ThemeContextProps };
