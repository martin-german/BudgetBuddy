"use client";

import { useLanguageContext } from "../context/LanguageContext";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="flex items-center gap-1 outline-none">
      <LanguageIcon sx={{ fontSize: "30px" }} className="text-black" />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "hu")}
        className="bg-neutral-200 hover:bg-neutral-300 rounded-md px-3 py-1 text-sm font-medium text-black outline-none">
        <option value="en">English</option>
        <option value="hu">Hungarian</option>
        
      </select>
    </div>
  );
};

export default LanguageSwitcher;
