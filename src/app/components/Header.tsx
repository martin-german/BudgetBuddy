'use client';

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useLanguage } from "../context/LanguageContext";

function Header() {
  return (
    <nav className="flex justify-between items-center">
      {/*Logo Section*/}
      <LogoSection />

      {/*Search Bar*/}
      <SearchBar />

      {/*Button */}
      <Button />
    </nav>
  );
}

export default Header;

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
      {/*Brand name*/}
      <div className="flex gap-1 text-[24px]">
        <h1 className="text-4xl font-black text-black">
          Budget
          <span className="font-thin text-zinc-900">Buddy</span>
        </h1>
      </div>
    </div>
  );
}


function SearchBar() {
    const { t } = useLanguage();
  return (
    <div
      className="h-[46px] bg-slate-100 flex items-center text-sm 
    rounded-md pl-3 gap-1 w-[300px]">
      <div>
        <SearchOutlinedIcon className="text-black" />
      </div>
      <input
        type="text"
        placeholder={t.header.search}
        className="bg-transparent outline-none w-full font-light"
      />
    </div>
  );
}

//Add new expense btn
function Button() {
  const { t } = useLanguage();
  return (
    <button
      className="gap-1 p-[12px] flex text-sm rounded-md 
    font-black text-black bg-transparent border border-black hover:bg-teal-500 
    items-center justify-center pr-[18px] 
    ">
      <AddOutlinedIcon sx={{ fontSize: "20px" }} />
      <span>{t.header.button}</span>
    </button>
  );
}
