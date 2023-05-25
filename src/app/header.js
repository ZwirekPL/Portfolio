import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import styles from "./style/styles.module.css";
import VideoHeader from "./video-header";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const { scrollY } = useScroll();
  const headerHeadingPositionDesktop = useTransform(
    scrollY,
    [0, 400],
    [0, -150]
  );
  const headerHeadingDesktop = useTransform(scrollY, [0, 400], [0, 250]);
  const headerHeadingScaleDesktop = useTransform(scrollY, [0, 400], [1, 0.5]);
  const contactButtonDesktop = useTransform(scrollY, [0, 200], [0, -200]);

  const headerHeadingPositionMobile = useTransform(
    scrollY,
    [0, 350],
    [0, -135]
  );
  const headerHeadingScaleMobile = useTransform(scrollY, [0, 350], [1, 0.55]);
  const headerHeadingMobile = useTransform(scrollY, [0, 350], [0, 250]);
  const contactButtonMobile = useTransform(scrollY, [0, 350], [0, -200]);

  if (isMobile) {
    return (
      <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        <div className="flex flex-col justify-center items-center w-full h-[100vh] relative">
          <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
            <div className="flex flex-col justify-center items-center w-full h-40">
              <motion.h1
                className=" p-2 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 fixed top-[10rem] z-50 "
                style={{
                  translateY: headerHeadingPositionMobile,
                  scale: headerHeadingScaleMobile,
                }}
              >
                Wirgiliusz Ładziński
              </motion.h1>
              <motion.h2
                className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100 my-20 z-10"
                style={{ translateY: headerHeadingMobile }}
              >
                JavaScript Developer
              </motion.h2>
            </div>
            <motion.div
              className="w-[90%] flex flex-row justify-end"
              style={{ translateY: contactButtonMobile }}
            >
              <button
                className={` ${styles.navBtn} hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-20 w-40 text-2xl font-bold text-blue-200 z-10 `}
              >
                Contact
              </button>
            </motion.div>
          </div>
          <VideoHeader />
          <div className="absolute h-[100vh] w-[100vw] bg-black/40"></div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        <div className="flex flex-col justify-center items-center w-[940px] h-[100vh] relative">
          <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
            <div className="flex flex-col justify-center items-center w-full h-40">
              <motion.h1
                className=" p-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 fixed top-[9rem] z-50"
                style={{
                  translateY: headerHeadingPositionDesktop,
                  scale: headerHeadingScaleDesktop,
                }}
              >
                Wirgiliusz Ładziński
              </motion.h1>
              <motion.h2
                className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100 my-40 z-10"
                style={{ translateY: headerHeadingDesktop }}
              >
                JavaScript Developer
              </motion.h2>
            </div>
            <motion.div
              className="w-[90%] flex flex-row justify-end"
              style={{ translateY: contactButtonDesktop }}
            >
              <button
                className={` ${styles.navBtn} hover:bg-black/70 bg-black/30 rounded-md h-20 w-40 text-2xl font-bold text-blue-200 z-10 border-indigo-400 border`}
              >
                Contact
              </button>
            </motion.div>
          </div>
          <VideoHeader />
          <div className="absolute h-[100vh] w-[100vw] bg-black/40"></div>
        </div>
      </header>
    );
  }
};

export default Header;
