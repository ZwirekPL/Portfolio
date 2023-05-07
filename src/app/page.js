import Image from "next/image";

import VideoHeader from "./video-header";

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        <div className="flex flex-col justify-center items-center w-[940px] h-[100vh] relative">
          <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className=" p-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600">
                Wirgiliusz Ładziński
              </h1>
              <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100">
                JavaScript Developer
              </h2>
            </div>
            <div className="w-[90%] flex flex-row justify-end">
              <button className=" hover:first-letter:text-blue-600 hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-20 w-40 text-3xl font-bold text-blue-200 ">
                Contact
              </button>
            </div>
          </div>
          <VideoHeader />
          <div className="bg-black/60 h-[100vh] w-full -z-10 absolute"></div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        framer motion
      </main>
      <footer></footer>
    </>
  );
}
