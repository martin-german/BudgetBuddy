"use client"

import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { useLanguageContext } from "../context/LanguageContext";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

export function Subheader() {
  return (
    <div className="mt-[90px] mt:sm-[10px] mt:md-[10px] flex justify-between">
      <WalletOptions />
      <ClearAllBtn />
    </div>
  );
}


function WalletOptions() {
   const { t } = useLanguageContext();
   const { theme } = useTheme();
   
   const {
    openWalletDropDownObject: {setOpenWalletDropDown},
    walletDropDownPositionsObject : {setWalletDropDownPositions}
   } = useAppContext();

   // Create walletDropDown ref for the div where dropdown are
   const walletOptionsRef = React.useRef<HTMLDivElement>(null);

   //Create function which uses the ref so the dropdown only actives under the reference div
   function handleClick(){
    setOpenWalletDropDown(true);
    const rect = walletOptionsRef.current?.getBoundingClientRect();
    const {top,left} = rect || {top:0,left:0};
    setWalletDropDownPositions({left: left, top:top});
   }

  return (
    
    <div 
    ref={walletOptionsRef}
    onClick={handleClick}
    className="border p-2 rounded-md flex items-center gap-2 cursor-pointer z-[20]">
      <HomeOutlinedIcon className={` ${theme === "dark" ? "text-gray-200" : " text-gray-900"} rounded-full`} sx={{ fontSize: "25px" }} />

      <span className={`${theme === "dark" ? "text-white" : " text-gray-900"}
        text-[15px] mt-1 `}>
        {t.subheader.walletOptions}
        </span>

      <KeyboardArrowDownOutlinedIcon
        fontSize="small"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"}mt-[4px] `}
      />
    </div>
  );
}

function ClearAllBtn() {
   const { t } = useLanguageContext();
  return (
    <button className="border border-black transition-all text-slate-50 px-6 
    bg-teal-600 hover:bg-teal-700 flex
    text-sm rounded-md items-center justify-center
    ">
      <span className="">{t.subheader.clearBtn}</span>
    </button>
  );
}
