import Header from "./components/Header";

function Home() {
  return (
    <div className="poppins w-full h-screen flex justify-center items-center bg-gradient-to-b from-teal-700 to-stone-100">
      <div
        className="w-[60%] relaitve max-lg:w-[93%] h-[760px] bg-stone-200 shadow-lg rounded-2xl 
                      p-12 px-[52px]">
                        <Header/>
                      </div>
    </div>
  );
}

export default Home;
