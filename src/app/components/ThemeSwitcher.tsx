"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";

type ThemeSwitcherProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="sr-only peer"
      />

      {/* Slider Track with Text */}
      <div
        className={`w-32 h-8 rounded-full transition-colors duration-300 flex items-center justify-center
          ${theme === "dark" ? "bg-neutral-300" : "bg-gray-500"}`}
      >
        <span
          className={`text-xs font-semibold uppercase transition-colors duration-300
            ${theme === "dark" ? "text-black" : "text-white"}`}
        >
          {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
        </span>
      </div>

      {/* Toggle Knob with Icon */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center
          ${theme === "dark" ? "translate-x-[96px] bg-neutral-500" : "bg-black"}`}
      >
        {theme === "dark" ? (
          <LightModeIcon className="text-yellow-500 w-4 h-4" />
        ) : (
          <DarkModeIcon className="text-white w-4 h-4" />
        )}
      </div>
    </label>
  );
};

export default ThemeSwitcher;
