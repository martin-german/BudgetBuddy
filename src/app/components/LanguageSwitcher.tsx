"use client";
import { useLanguage } from "../context/LanguageContext";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-end items-center ">
      <LanguageIcon sx={{ fontSize: "30px" }} className="text-black " />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "hu")}
        className="border rounded-md p-1 outline-none">
        <option value="en">EN</option>
        <option value="hu">HU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
