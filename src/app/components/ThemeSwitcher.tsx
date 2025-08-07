"use client";

import { useTheme } from "../hooks/useTheme";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      value={theme}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0.5rem",
        borderRadius: "50%",
        transition: "background 0.3s ease",
      }}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <DarkModeIcon className="bg-transparent rounded-full hover:text-white"/>
      ) : (
        <LightModeIcon className="bg-transparent rounded-full hover:text-"/>
      )}
    </button>
  );
}

export default ThemeSwitcher;
