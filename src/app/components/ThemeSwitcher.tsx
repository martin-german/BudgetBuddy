"use client";

import  useTheme from "../hooks/useTheme";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type ThemeSwitcherProps = {
  toggleTheme: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({toggleTheme}) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center right-1">
      <button
        onClick={toggleTheme}
        
        value={theme}
        aria-label="Toggle theme"
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
        {theme === "light" ? (
          <DarkModeIcon className="bg-transparent rounded-full hover:text-white" />
        ) : (
          <LightModeIcon className="bg-transparent rounded-full hover:text-white" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
