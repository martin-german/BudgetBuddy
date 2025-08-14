"use client";

import {Header} from "./components/Header";
import {Subheader} from "./components/SubHeader";
import AllExpenses from "./components/AllExpenses";
import Navbar from "./components/Navbar";

import { ExpenseDialog } from "./dialogs/ExpenseDialog";
import IconsWindow from "./dialogs/IconsDialog";

import { useTheme } from "./context/ThemeContext";
import { useAppContext } from "./context/AppContext";
import Footer from "./components/Footer";



function Home() {
  const { theme } = useTheme();
  const {
      openExpenseDialogObject: { openExpenseDialog },
  } = useAppContext();

  return (
    <div className={`poppins ${theme === "dark" ? "bg-gray-700": "bg-teal-700"} overflow-hidden}`}>
      {openExpenseDialog &&(
        <div className="w-full h-screen z-40 bg-black fixed opacity-25"></div>
      )}
      <div className="w-full flex border-b-2 border-stone-600 justify-between items-center py-2 px-1">
        <div className="flex justify-center flex-1 p-2">
          <Navbar />
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-red-200 justify-between font-bold uppercase">Work in progress <br/> last update: 8/12/2025 </h1>
      </div>
      <ExpenseDialog/>
      <IconsWindow/>

      <div className={`w-full h-screen flex justify-center items-center bg-gradient-to-b 
            ${ theme === "dark" ? "from-gray-700 via-gray-500 to-gray-300" : "from-teal-700 via-teal-500 to-teal-100" }`} >
        <div className={`w-[90%] max-lg:w-[95%] h-[800px] rounded-2xl shadow-lg pt-12 px-6 max-sm:px-[30px]
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
