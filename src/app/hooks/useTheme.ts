import { useEffect, useState } from "react";
import { Theme } from "../types/type";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme") as Theme;
    if (themeSaved) {
      setTheme(themeSaved);
      document.documentElement.classList.add(themeSaved);
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return { theme, toggleTheme };
};
