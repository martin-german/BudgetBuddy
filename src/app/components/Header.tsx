"use client";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useLanguage } from "../context/LanguageContext";

function Header() {
  return (
    <div className="">
      <div className="flex flex-col items-center ">
        {/*Brand name*/}
        <h1 className="text-4xl font-black text-black pb-4">
          Budget
          <span className="font-thin text-zinc-900">Buddy</span>
        </h1>
      </div>
      <div className="flex w-auto justify-between items-center">
        {/*Logo Section*/}
        <LogoSection />

        {/*Search Bar*/}
        <SearchBar />

        {/*Button */}
        <Button />
      </div>
    </div>
  );
}

function LogoSection() {
  return (
    <div className="flex gap-2 items-center ">
      {/*Icon container */}
      <div className="bg-teal-500 flex items-center justify-center p-[11px] rounded-lg">
        {/*Piggy Icon*/}
        <div className="flex w-[36px] h-[36px] items-center justify-center">
          <SavingsOutlinedIcon
            sx={{ fontSize: "30px" }}
            className="text-gray-800 "
          />
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  const { t } = useLanguage();
  return (
    <div
      className="h-12 bg-slate-100 flex items-center text-sm 
    rounded-md pl-3 gap-2 w-[420px] max-sm:w-[120px]">
      <div>
        <SearchOutlinedIcon className="text-black" />
      </div>
      <input
        type="text"
        placeholder={t.header.search}
        className="bg-transparent max-sm:w-[50px] outline-none w-full font-light"
      />
    </div>
  );
}

//Add new expense btn
function Button() {
  const { t } = useLanguage();
  return (
    <button
      className="gap-1 p-[13px] flex text-sm rounded-md 
     text-slate-50 bg-teal-600 border border-black hover:bg-teal-700 
    items-center justify-center pr-[18px] max-sm:pr-3 max-md:pr-3
    ">
      <AddOutlinedIcon sx={{ fontSize: "20px" }} />
      <span className="max-sm:hidden max-md:hidden">{t.header.button}</span>
    </button>
  );
}

export default Header;
