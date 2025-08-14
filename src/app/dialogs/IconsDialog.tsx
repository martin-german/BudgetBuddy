"use client"

import AllIcons from "../data/AllIcons";

import AppsIcon from "@mui/icons-material/Apps"
import CloseIcon from "@mui/icons-material/Close"

import { useAppContext } from "../context/AppContext";
import { useLanguageContext } from "../context/LanguageContext";

function IconsWindow() {
    const {t} = useLanguageContext();

    const {
        openIconDialogObject: { openIconDialog},
    } = useAppContext();

    return (
        <div className={`
        ${openIconDialog ? "block" : "hidden"
        } absolute p-3 h-[600px] w-[50%] max-sm:w-[90%] bg-white shadow-md
        left-1/2 top-28 rounded-lg z-50
        -translate-x-1/2
        `}>

        {/* Header */}
        <Header/>

        <span className="mx-8 text-[13px] mt-12 text-black">
            {t.iconsDialog.iconsDescription}
        </span>
        {/* All Icons */}

        <IconsArea/>

        {/* Buttons */}
        <Buttons/>
        </div>
    );
}

export default IconsWindow;

function Header(){
    const {t} = useLanguageContext();
    const {
        openIconDialogObject: { setOpenIconDialog},
    } = useAppContext();
    return(
        <div className="flex justify-between items-center pt-7 px-7 mb-8">
            <div className="flex items-center gap-2">
                {/* Icons */}
                <div className="p-2 bg-teal-200 rounded-lg flex items-center justify-center">
                    <AppsIcon
                    sx={{fontSize: 21}}
                    className="text-black text-[17px]"
                    />
                </div>
                {/* Header */}
                <span className="font-semibold text-lg">
                    {t.iconsDialog.headerName}
                </span>
            </div>
            <CloseIcon
            onClick={() => setOpenIconDialog(false)}
            className="text-black text-[18px] cursor-pointer"
            />
        </div>
    );
};



function Buttons() {

  const {t} = useLanguageContext();

  const {
    openIconDialogObject: { setOpenIconDialog },
  } = useAppContext();
  return (
    <div className="flex justify-end gap-4 mt-10 px-7 text-[12px]">
      <button
        onClick={() => setOpenIconDialog(false)}
        className="px-4 py-2 text-black border border-black rounded-md 
        bg-red-200 hover:bg-red-300 hover:border-slate-600 transition-all">
        {t.iconsDialog.iconCancelBtn}
      </button>
      <button className="bg-teal-600 hover:bg-teal-700 border border-black 
      hover:border-slate-600
     text-black text-[13px] p-2 px-3 rounded-md transition-all">
        {t.iconsDialog.iconSaveBtn}
      </button>
    </div>
  );
};

function IconsArea(){
    return(
        <div className="w-full flex flex-col items-center mt-3">
            <div className="w-[90%] h-[320px] overflow-auto rounded-md scrollbar-custom
            border border-slate-100 bg-slate-100">
                <AllIcons/>
            </div>
        </div>
    )
}