"use client";

import Navbar from "./components/Navbar";

import {Header} from "./components/Header";
import {Subheader} from "./components/SubHeader";
import {AllExpenses} from "./components/AllExpenses";

import { ExpenseDialog } from "./dialogs/ExpenseDialog";
import {IconsWindow} from "./dialogs/IconsDialog";

import { useTheme } from "./context/ThemeContext";
import { useAppContext } from "./context/AppContext";

import WalletDropDown from "./dropdowns/WalletDropDown";

import Footer from "./components/Footer";
import { WalletDialog } from "./dialogs/WalletDialog";

function Home() {
  const { theme } = useTheme();
  const {
      openExpenseDialogObject: { openExpenseDialog },
      openWalletDialogObject: {openWalletDialog}
  } = useAppContext();

  return (
    <div className={` poppins ${theme === "dark" ? "bg-gray-700": "bg-teal-700"} }`}>
      <ExpenseDialog/>
      <WalletDialog/>
      <IconsWindow/>
      <WalletDropDown/>
      {(openExpenseDialog || openWalletDialog) &&(
        <div className="w-full h-screen z-40 bg-black fixed opacity-25"></div>
      )}
      <div className="w-full flex border-b-2 border-stone-600 justify-between items-center py-2 px-1">
        <div className="flex justify-center flex-1 p-2">
          <Navbar />
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-red-200 justify-between font-bold uppercase">Work in progress <br/> last update: 8/14/2025 7:45 PM </h1>
      </div>
      <div className={`w-full h-screen flex justify-center items-center bg-gradient-to-b
            ${ theme === "dark" ? "from-gray-700 via-gray-500 to-gray-300" : "from-teal-700 via-teal-500 to-teal-100" }`} >
        <div className={`w-[85%] min-h-screen max-lg:w-[95%] rounded-2xl shadow-lg pt-12 px-6 max-sm:px-[10px]
            ${ theme === "dark" ? "bg-gray-700 text-white" : "bg-stone-200 text-black" }`}>
          <Header />
          <Subheader />
          <AllExpenses/>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
