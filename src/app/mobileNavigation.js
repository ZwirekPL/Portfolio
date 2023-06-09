import { useState } from "react";
import styles from "./style/styles.module.css";
const MobileNavigation = ({ aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(!isOpen);
  };
  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? styles.mobileNavOpen : styles.mobileNavClose}>
      <div className="flex flex-row justify-end w-[100%]">
        <button
          onClick={handleOpen}
          className="flex justify-center items-center w-[35px] h-[35px] mt-10 mr-8 "
        >
          <div className="flex flex-col w-[50%] justify-around items-center h-full">
            <div
              className={isOpen ? styles.firstBarXBtn : styles.firstBar}
            ></div>
            <div
              className={isOpen ? styles.secondBarXBtn : styles.secondBar}
            ></div>
            <div
              className={isOpen ? styles.thirdBarXBtn : styles.thirdBar}
            ></div>
          </div>
          <div className="flex flex-col w-[50%] justify-around items-around h-full">
            <div
              className={isOpen ? styles.fourthBarXBtn : styles.fourthBar}
            ></div>
            <div
              className={isOpen ? styles.fifthBarXBtn : styles.fifthBar}
            ></div>
            <div
              className={isOpen ? styles.sixthBarXBtn : styles.sixthBar}
            ></div>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className=" h-full w-[350px] flex flex-col justify-evenly items-center mb-20 ">
          <button className={styles.homeMobileBtn} onClick={handleScrollToTop}>
            Home
          </button>
          <button
            className={styles.aboutMobileBtn}
            onClick={() => executeScroll(aboutRef)}
          >
            About me
          </button>
          <button
            className={styles.projectsMobileBtn}
            onClick={() => executeScroll(projectsRef)}
          >
            Projects
          </button>
          <button
            className={styles.contactMobileBtn}
            onClick={() => executeScroll(contactRef)}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
