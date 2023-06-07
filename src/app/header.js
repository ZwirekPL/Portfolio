import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import styles from "./style/styles.module.css";
import VideoHeader from "./video-header";

const Header = ({ contactRef }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollY } = useScroll();
  const headerHeadingPositionDesktop = useTransform(
    scrollY,
    [0, 400],
    [0, -160]
  );
  const headerHeadingDesktop = useTransform(scrollY, [0, 400], [0, 250]);
  const headerHeadingScaleDesktop = useTransform(scrollY, [0, 400], [1, 0.5]);
  const contactButtonDesktop = useTransform(scrollY, [0, 200], [0, -200]);

  const headerHeadingPositionMobile = useTransform(
    scrollY,
    [0, 350],
    [0, -130]
  );
  const headerHeadingScaleMobile = useTransform(scrollY, [0, 350], [1, 0.55]);
  const headerHeadingMobile = useTransform(scrollY, [0, 350], [0, 250]);
  const mobileNameBackgroundOpacity = useTransform(
    scrollY,
    [0, 349, 350],
    [0, 0, 1]
  );
  const contactButtonMobile = useTransform(scrollY, [0, 350], [0, -200]);

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="flex flex-col justify-center items-center w-full h-[100vh] ">
      <div className="flex flex-col justify-center items-center w-full h-[100vh] ">
        <div className="flex flex-col justify-center items-evenly w-full h-[100vh] md:">
          <div className="flex flex-col justify-center items-center w-full h-40">
            <motion.h1
              className=" p-2 text-center font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 fixed top-[10rem] z-50  "
              style={{
                translateY: isMobile
                  ? headerHeadingPositionMobile
                  : headerHeadingPositionDesktop,
                scale: isMobile
                  ? headerHeadingScaleMobile
                  : headerHeadingScaleDesktop,
              }}
            >
              Wirgiliusz Ładziński
            </motion.h1>
            <motion.h2
              className="font-extrabold text-transparent text-xl md:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100 my-20 z-10 "
              style={{
                translateY: isMobile
                  ? headerHeadingMobile
                  : headerHeadingDesktop,
              }}
            >
              JavaScript Developer
            </motion.h2>
          </div>
          <motion.div
            className="w-[90%] flex flex-row justify-end"
            style={{
              translateY: isMobile ? contactButtonMobile : contactButtonDesktop,
            }}
          >
            <button
              className={` ${styles.navBtn} hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-10 md:h-16 xl:h-20 w-20 md:w-28 xl:w-40 text-lg md:text-xl xl:text-2xl font-bold text-blue-200 z-10 `}
              onClick={() => executeScroll(contactRef)}
            >
              Contact
            </button>
          </motion.div>
        </div>
        <VideoHeader />
        <div className="absolute h-[100vh] w-[100vw] bg-black/40"></div>
      </div>
      <motion.div
        className="bg-black/90 w-full h-[100px] fixed top-0 z-40 md:hidden "
        style={{ opacity: mobileNameBackgroundOpacity }}
      ></motion.div>
    </header>
  );
};

export default Header;
