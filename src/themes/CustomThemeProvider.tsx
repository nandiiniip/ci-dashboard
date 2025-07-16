import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";
import type { ThemeMode } from "./ThemeContext";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { useLocalStorage } from "@uidotdev/usehooks";

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>("theme","light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const selectedTheme = createTheme(
    themeMode === "light" ? lightTheme : darkTheme
  );

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <MUIThemeProvider theme={selectedTheme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
