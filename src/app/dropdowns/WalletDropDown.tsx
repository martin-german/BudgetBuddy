"use client"

import { useEffect, useRef } from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

function WalletDropDown() {
  const {theme} = useTheme();
  const {
    openWalletDropDownObject: { openWalletDropDown, setOpenWalletDropDown },
    walletDropDownPositionsObject : { walletDropDownPositions }
  } = useAppContext();

  //Reference to the dropdown menu <div ref={}></div>
  const dropDownRef = useRef<HTMLDivElement>(null);

  //Create an effect, if the mouseEvent outside the ref, setOpenWalletDropDown to false (close)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenWalletDropDown(false);
      }
    }

    // Triggers for the effect
    if (openWalletDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openWalletDropDown, setOpenWalletDropDown]);

  return (
    <div
      ref={dropDownRef}
      style={{
        top: walletDropDownPositions.top + 55,
        left: walletDropDownPositions.left,
        width: walletDropDownPositions.width,
      }}
      className={`${openWalletDropDown ? "block" : "hidden"}
        ${theme === "dark" 
        ? "bg-slate-400" 
        : "bg-stone-100"
      }
        absolute p-3 z-50 border w-[230px]
        border-slate-50 select-none shadow-md rounded-lg flex flex-col
        `}>
      {/* Add Button */}
      <AddButton />
      <WalletList />
    </div>
  );
}

function AddButton() {
  const {theme} = useTheme();
  const {t} = useLanguageContext();
  const {
    openWalletDialogObject: {setOpenWalletDialog},
    openWalletDropDownObject: {setOpenWalletDropDown},
  } = useAppContext();
  return (
    <div
      onClick={() => {
        setOpenWalletDialog(true);
        setOpenWalletDropDown(false);
      }}
      className={`
        ${theme === "dark" 
        ? "text-gray-200 hover:text-teal-200" 
        : "text-gray-600 hover:text-teal-600"
        }
        flex items-center gap-2 p-[9px] border border-dashed rounded-lg
        cursor-pointer 
        `}>
      <div>
        <AddOutlinedIcon />
      </div>
      <span className="text-[14px] "> {t.walletDropDownOptions.addActionBtn} </span>
    </div>
  );
}

function WalletList() {
  return (
    <div className="flex flex-col">
      <SingleList />
      <SingleList />
    </div>
  );
}

function SingleList() {
  const {theme} = useTheme();
  const {t} = useLanguageContext()
  return (
    <div className={`
      ${theme === "dark" 
      ? "text-gray-100 hover:text-teal-200" 
      : "text-gray-500 hover:text-teal-600"
    }
    flex items-center justify-between gap-7 p-3 rounded-lg `}>
      <div className="flex gap-1 items-center">
        <div>
          <HomeOutlinedIcon 
          sx={{ fontSize: "24px" }} 
          className="text-black" 
          />
        </div>
        <span className="text-[15px] mt-1 cursor-pointer">
          {t.walletDropDownOptions.itemsName}
        </span>
      </div>

      {/* Action btns */}
      <div className="flex font-bold items-center mt-[3px]">
        <div className="flex gap-2 items-center">
          {/* Delete btn */}
          <div className="rounded-lg flex items-center justify-center cursor-pointer">
            <DeleteOutlinedIcon
              sx={{ fontSize: "18px" }}
              className="bg-red-300 rounded-sm text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletDropDown;
