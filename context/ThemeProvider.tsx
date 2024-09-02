import React, { createContext, ReactNode, useContext } from "react";
import theme from "@/lib/theme";

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
