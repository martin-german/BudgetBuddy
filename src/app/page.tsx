"use client";

import Header from "./components/Header";
import Subheader from "./components/SubHeader";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";
import useTheme from "./hooks/useTheme";

function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`poppins bg-teal-700 overflow-hidden}`}>
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex justify-center flex-1">
          <LanguageSwitcher />
        </div>
        <div className="flex justify-end">
          <ThemeSwitcher toggleTheme ={toggleTheme} />
        </div>
      </div>

        <div className={`w-full h-screen flex justify-center items-center bg-gradient-to-b 
        ${theme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-teal-700 to-stone-100'}`}>

        <div
          className={`w-[60%] max-lg:w-[93%] h-[760px] rounded-2xl shadow-lg p-12 px-[52px]
          ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-stone-200 text-black'}`}
        >
          <Header />
          <Subheader />
        </div>
   
      </div>
    </div>
  );
}

export default Home;
