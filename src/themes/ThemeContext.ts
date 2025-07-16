import { createContext } from "react";

export type ThemeMode = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
