import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("mode", `${isDark ? "dark" : "light"}`);
    const activeMode = localStorage.getItem("mode");
    if (activeMode === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
