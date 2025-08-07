'use client';

import Header from "./components/Header";
import Subheader from "./components/SubHeader";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useTheme } from "./hooks/useTheme";

function Home() {
  const {theme} = useTheme();

  return (
    <div className={`poppins bg-teal-700 overflow-hidden}`}>
      <LanguageSwitcher />
      <ThemeSwitcher/>
      <div className={`poppins w-full h-screen flex justify-center items-center bg-gradient-to-b from-teal-700 to-stone-100`}>
        <div
          className="w-[60%] relaitve max-lg:w-[93%] h-[760px] bg-stone-200 shadow-lg rounded-2xl 
                      p-12 px-[52px]">
          <Header />
          <Subheader />
        </div>
      </div>
    </div>
  );
}

export default Home;
