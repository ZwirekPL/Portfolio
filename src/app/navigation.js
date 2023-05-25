import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style/styles.module.css";

const Navigation = ({ aboutRef, projectsRef }) => {
  const { scrollY } = useScroll();
  const navLeftSide = useTransform(scrollY, [0, 400], [250, 0]);
  const navRightSide = useTransform(scrollY, [0, 400], [-250, 0]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="bg-black/90 h-[74px] w-[100vw] flex flex-row justify-between items-center sticky top-0 z-40">
      <motion.div
        className="flex items-center justify-center mx-8"
        style={{ translateX: navLeftSide }}
      >
        <button
          className={`text-2xl font-semibold p-2 mx-3 rounded-md ${styles.navBtn}`}
          onClick={() => executeScroll(aboutRef)}
        >
          About me
        </button>
        <button
          className={`text-2xl font-semibold p-2 mx-3 rounded-md ${styles.navBtn}`}
          onClick={handleScrollToTop}
        >
          Home
        </button>
      </motion.div>
      <motion.div
        className="flex items-center justify-center mx-8"
        style={{ translateX: navRightSide }}
      >
        <button
          className={`text-2xl font-semibold p-2 mx-3 rounded-md ${styles.navBtn}`}
          onClick={() => executeScroll(projectsRef)}
        >
          Projects
        </button>
        <button
          className={`text-2xl font-semibold p-2 mx-3 rounded-md ${styles.navBtn}`}
        >
          Contact
        </button>
      </motion.div>
    </nav>
  );
};

export default Navigation;
