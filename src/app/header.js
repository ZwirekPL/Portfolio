import { motion, useScroll, useTransform } from "framer-motion";

import VideoHeader from "./video-header";
const Header = () => {
  const { scrollY } = useScroll();

  const headerHeadingPosition = useTransform(scrollY, [0, 400], [0, -150]);
  const headerHeading = useTransform(scrollY, [0, 400], [0, 250]);
  const headerHeadingScale = useTransform(scrollY, [0, 400], [1, 0.5]);
  const contactButton = useTransform(scrollY, [0, 200], [0, -200]);
  return (
    <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
      <div className="flex flex-col justify-center items-center w-[940px] h-[100vh] relative">
        <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
          <div className="flex flex-col justify-center items-center w-full h-40">
            <motion.h1
              className=" p-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 fixed top-[9rem] z-50"
              style={{
                translateY: headerHeadingPosition,
                scale: headerHeadingScale,
              }}
            >
              Wirgiliusz Ładziński
            </motion.h1>
            <motion.h2
              className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100 my-40 z-10"
              style={{ translateY: headerHeading }}
            >
              JavaScript Developer
            </motion.h2>
          </div>
          <motion.div
            className="w-[90%] flex flex-row justify-end"
            style={{ translateY: contactButton }}
          >
            <button className=" hover:first-letter:text-blue-600 hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-20 w-40 text-3xl font-bold text-blue-200 z-10 ">
              Contact
            </button>
          </motion.div>
        </div>
        <VideoHeader />
        <div className="absolute h-[100vh] w-[100vw] bg-black/40"></div>
      </div>
    </header>
  );
};

export default Header;
