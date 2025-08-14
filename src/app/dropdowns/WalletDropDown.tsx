import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import AddOutlinedIcon  from "@mui/icons-material/AddOutlined"

function WalletDropDown(){
    return(
        <div className="bg-white absolute p-3 z-50 border w-[230px]
        border-slate-50 select-none shadow-md rounded-lg flex
        ">
            {/* Add Button */}
            <AddButton/>
            <WalletList/>
        </div>
    )
}

function AddButton(){
return(
        <div className="flex items-center gap-2 p-[9px] border border-dashed rounded-lg
        text-slate-600 cursor-pointer 
        ">
            <div>
                <AddOutlinedIcon className="text-black"/>
            </div>
            <span className="text-[14px] text-slate-400"> Add </span>
        </div>
    )
}

function WalletList(){
    return(
        <div>
            <SingleList/>
            <SingleList/>
        </div>
    )
}

function SingleList(){
    return(
        <div className="flex items-center justify-between gap-7 p-3 rounded-lg text-slate-600">
            <div className="flex gap-1 items-center">
                <div>
                    <HomeOutlinedIcon
                    sx={{fontSize: "24px"}}
                    className="text-black"
                    />
                </div>
                <span className="text-[15px] mt-1 hover:text-purple-400 cursor-pointer">
                    Grocery
                </span>
            </div>
            {/* Action btns */}
            <div className="flex font-bold items-center mt-[3px]">
                <div className="flex gap-2 items-center">
                    {/* Delete btn */}
                    <div className="rounded-lg flex items-center justify-center cursor-pointer">
                        <DeleteOutlinedIcon
                        sx={{fontSize: "16px"}}
                        className="text-slate-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletDropDown;