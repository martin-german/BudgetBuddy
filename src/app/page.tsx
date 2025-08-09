"use client";

import Header from "./components/Header";
import Subheader from "./components/SubHeader";
import Navbar from "./components/Navbar";
import AllExpenses from "./components/AllExpenses";

import { useTheme } from "./context/ThemeContext";

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`poppins ${theme === "dark" ? "bg-gray-700": "bg-teal-700"} overflow-hidden}`}>
      <div className="w-full flex border-b-2 border-stone-600 justify-between items-center py-2 px-1">
        <div className="flex justify-center flex-1 p-2">
          <Navbar />
        </div>
      </div>
      <div className={`w-full h-screen flex justify-center items-center bg-gradient-to-b 
            ${ theme === "dark" ? "from-gray-700 via-gray-500 to-gray-300" : "from-teal-700 via-teal-500 to-teal-100" }`} >
        <div className={`w-[60%] max-lg:w-[93%] h-[760px] rounded-2xl shadow-lg p-12 px-[52px]
            ${ theme === "dark" ? "bg-gray-700 text-white" : "bg-stone-200 text-black" }`}>
          <Header />
          <Subheader />
          <AllExpenses/>
        </div>
      </div>
    </div>
  );
}

export default Home;
