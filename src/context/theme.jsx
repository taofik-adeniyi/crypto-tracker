import React, { createContext, useContext, useState } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    backgroundCard: "#25282c",
    color: "white",
    appBg: "#121212"
  },
  light: {
    backgroundColor: "white",
    backgroundCard: "#fff",
    color: "black",
    appBg: "#ffffff"
  },
};

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const Theme = ({ children }) => {
  const [dark, setDark] = useState(true); // Default theme is light

  const theme = dark ? themes.dark : themes.light;

  const toggle = () => {
    setDark(!dark);
  };

  const values = {
    theme,
    dark,
    toggle,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default Theme;
