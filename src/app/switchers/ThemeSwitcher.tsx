"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";

import { useLanguageContext } from "../context/LanguageContext";

type ThemeSwitcherProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme();
    const {t} = useLanguageContext();
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
        className={`w-40 h-8 rounded-full border transition-colors duration-300 flex items-center justify-center
          ${theme === "dark" ? "bg-transparent" : "bg-transparent"}`}
      >
        <span
          className={`text-xs font-semibold uppercase transition-colors duration-300
            ${theme === "dark" ? "text-black" : "text-white"}`}
        >
          {theme === "dark" ? t.theme.dark : t.theme.light}
        </span>
      </div>

      {/* Toggle Knob with Icon */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center
          ${theme === "dark" ? "translate-x-[130px] bg-transparent" : "bg-transparent"}`}
      >
        {theme === "dark" ? (
          <LightModeIcon className="text-yellow-500 w-4 h-4 bg-gray-800/85 rounded-full" />
        ) : (
          <DarkModeIcon className="text-white w-4 h-4 bg-gray-800/85 rounded-full" />
        )}
      </div>
    </label>
  );
};

export default ThemeSwitcher;
