import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useLanguage } from "../context/LanguageContext";

function SingleExpense() {
  const { t } = useLanguage();

  return (
    <div
      className="w-full bg-white rounded-lg border border-slate-100 shadow-md
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
        <div className="flex flex-col">
          <span className="font-bold"> Expense Name </span>
          <div className="flex">
            <span className="text-slate-400 text-[13px] p-[2px]">Wallet</span>
          </div>
        </div>
      </div>
      {/*Action buttons */}
      <div className="flex gap-11 font-bold items-center">
        <span className="text-[16p]">-99$</span>
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
