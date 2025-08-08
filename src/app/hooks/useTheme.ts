import { useEffect, useState } from "react";
import { Theme } from "../types/type";

function useTheme() {
  // Get the saved theme from localStorage.
  const getTheme = <Theme>localStorage.getItem("theme");

  // If no saved theme upon first visit, set default to "light".
  if (!getTheme) {
    localStorage.setItem("theme", "light");
  }

  // On every reload, redirect etc. determine theme based on prev. saved value.
  const determineSavedTheme: Theme = getTheme === "dark" ? "dark" : "light";

  //Initialize theme state with the saved or default value.
  const [theme, setTheme] = useState<Theme>(determineSavedTheme);

  // With effect, apply new theme to <html> and persist it in localStorage whenever it changes.
  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between "light" and "dark" themes.
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}

export default useTheme;
