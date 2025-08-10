'use client'

import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { useLanguage } from "../context/LanguageContext";


function Subheader() {
  return (
    <div className="mt-[90px] mt:sm-[10px] mt:md-[10px] flex justify-between">
      <WalletOptions />
      <ClearAllBtn />
    </div>
  );
}

export default Subheader;

function WalletOptions() {
   const { t } = useLanguage();
  return (
    <div className="border p-2 rounded-md flex items-center gap-2 cursor-pointer">
      <HomeOutlinedIcon className="text-black rounded-full" sx={{ fontSize: "25px" }} />
      <span className="text-[15px] mt-1 text-gray-900">{t.subheader.walletOptions}</span>
      <KeyboardArrowDownOutlinedIcon
        fontSize="small"
        className="mt-[4px] text-black"
      />
    </div>
  );
}

function ClearAllBtn() {
   const { t } = useLanguage();
  return (
    <button className="border border-black transition-all text-slate-50 px-6 
    bg-teal-600 hover:bg-teal-700 flex
    text-sm rounded-md items-center justify-center
    ">
      <span className="">{t.subheader.clearBtn}</span>
    </button>
  );
}
