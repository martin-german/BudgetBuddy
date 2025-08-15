import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useLanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
function SingleExpense() {
  const { t } = useLanguageContext();
  const {theme} = useTheme();
  return (
    <div
      className="w-full bg-transparent rounded-lg border border-slate-100 shadow-md
    flex gap-3 items-center justify-between p-5 py-6">
      <div className="flex gap-3 items-center">
        {/*Wallet icon*/}
        <div>
          <div className="bg-teal-200 rounded-lg p-2 flex-items-center justify-center">
            <HomeOutlinedIcon
              className="text-black"
              sx={{ fontSize: "27px" }}
            />
          </div>
        </div>
        {/*Wallet name*/}
        <div className={`${theme === "dark" ? "text-gray-300" : "text-black"} flex flex-col`}>
          <span className="font-bold"> {t.singleExpense.expanseName} </span>
          <div className="flex">
            <span className="text-[13px] p-[2px]">{t.singleExpense.description}</span>
          </div>
        </div>
      </div>
      {/*Action buttons */}
      <div className={`${theme === "dark" ? "text-gray-50" : "text-black"} 
        flex gap-11 font-bold items-center`}
        >
        <span className="text-[16px]">-99$</span>
        <div className="flex gap-2 items-center">
        {/*Edit button */}
        <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer
        bg-teal-200 hover:bg-teal-300
        ">
            <EditOutlinedIcon
            sx={{ fontSize: "17px"}}
            className="text-black"
            />
        </div>
        {/*Delete button */}
        <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer
        bg-red-200 hover:bg-red-300">
            <DeleteOutlinedIcon 
            sx={{fontSize : "17px"}}
            className="text-black"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SingleExpense;
