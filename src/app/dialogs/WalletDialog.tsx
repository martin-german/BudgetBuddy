"use client";

import React , { useRef } from "react";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useAppContext } from "../context/AppContext";
import { useLanguageContext } from "../context/LanguageContext";

import { useTheme } from "../context/ThemeContext";

export function WalletDialog() {
  const { theme } = useTheme();
  const {
    openWalletDialogObject: { openWalletDialog },
  } = useAppContext();

  return (
    <div
      className={`${openWalletDialog ? "block" : "hidden"}
            w-[50%] max-sm:w-[85%] z-50 p-3 left-1/2 top-[60%] -translate-y-1/2
            -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50
            ${theme === "dark" ? "bg-slate-400": "bg-white"} rounded-md shadow-md `}>
      {/* Header */}
      <DialogHeader />
      {/* Body */}
      <form className="flex flex-col gap-2 pt-8 px-7 mt-3">
        {/* Expense input */}
        <ExpenseInput />

      </form>
      {/* Footer */}
      <DialogFooter />
    </div>
  );
}

function DialogHeader() {
  const { t } = useLanguageContext();

  const {
    openWalletDialogObject: { setOpenWalletDialog },
  } = useAppContext();

  return (
    <div className="flex justify-between items-center pt-7 px-7">
      <div className="flex items-center gap-2">
        {/* Expense Icon */}
        <div className="p-[7px] bg-teal-400 rounded-lg flex items-center justify-center">
          <ReceiptLongOutlinedIcon
            sx={{ fontSize: "21px" }}
            className="text-black"
          />
        </div>
        {/* Expense Header */}
        <span className="font-semibold text-lg">
          {t.expenseDialog.addExpense}
        </span>
      </div>
      <CloseOutlinedIcon
        onClick={() => setOpenWalletDialog(false)}
        sx={{ fontSize: "18px" }}
        className="text-slate-900 cursor-pointer"
      />
    </div>
  );
}

function ExpenseInput() {
  const { t } = useLanguageContext();
  const {
    openIconDialogObject: {setOpenIconDialog},
} = useAppContext();

  return (
    <div className={`flex flex-col gap-2`}>
      <span className="text-[14px] font-medium ">
        {t.expenseDialog.expenseName}
      </span>
      <div className="flex gap-3 justify-between">
        {/* Input */}
        <div className="w-full">
          <input
            placeholder={t.expenseDialog.addInput}
            className="p-[10px] text-[13px] w-full rounded-md border
                        outline-none"
          />
          <p className="text-[11px] mt-2 text-red-500">
            {t.expenseDialog.error}
          </p>
        </div>
        {/* Icon */}
        <div
        onClick={() => setOpenIconDialog(true)}
          className="w-12 h-10 text-black
                flex items-center justify-center
                bg-teal-400 rounded-sm cursor-pointer
                ">
          <ReceiptLongOutlinedIcon sx={{ fontSize: "21px" }} />
        </div>
      </div>
    </div>
  );
}




function DialogFooter() {
  const { t } = useLanguageContext();
  const {
    openWalletDialogObject: { setOpenWalletDialog },
  } = useAppContext();

  return (
    <div
      className="w-full p-[12px] mt-8 mb-4 
        flex gap-3 justify-end px-7 items-center">
      {/* Cancel btn */}
      <button
        onClick={() => setOpenWalletDialog(false)}
        className="border text-black border-black
            text-[13px] cursor-pointer p-2 px-6 rounded-md bg-red-200 hover:bg-red-300 hover:border-slate-600 transition-all">
        {t.expenseDialog.cancelBtn}
      </button>

      <button
        className="bg-teal-600 hover:bg-teal-700 border border-black hover:border-slate-600
            text-black cursor-pointer text-[13px] p-2 px-3 rounded-md transition-all">
        {t.expenseDialog.addBtn}
      </button>
    </div>
  );
}
