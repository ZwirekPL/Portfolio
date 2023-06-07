import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";
import styles from "./style/styles.module.css";

const ProjectsModal = ({ closeModal, page }) => {
  const goToSiteButton = () => {
    window.open(`${page.site}`);
  };
  const modalClose = () => {
    closeModal();
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="flex flex-col justify-around items-center w-[100%] md:w-[730px] lg:w-[940px] xl:w-[940px] 2xl:w-[940px]  h-[95%]  rounded-s-md bg-black/50 relative">
        <div className="flex flex-col justify-center items-center w-[90%] h-[70%] bg-black/90">
          <h2 className="font-bold text-2xl">{page.title}</h2>
          <h3 className="m-4 text-md">{page.description}</h3>
          <h3 className="mb-2 mt-4 font-semibold text-xl">Technology:</h3>
          <h4 className="mb-4">{page.technology}</h4>
          <h5 className="m-4 mt-12 text-sm font-thin">
            Remember that in the side view you only see a mobile version of the
            website.
          </h5>
        </div>
        <button
          className={`text-2xl font-semibold p-2 mx-3 rounded-md ${styles.navBtn}  bg-gray-800 `}
          onClick={goToSiteButton}
        >
          Go to this site!
        </button>
        <div
          onClick={modalClose}
          className=" text-4xl absolute top-4 md:top-7 lg:top-7 xl:top-7 2xl:top-7 left-6 md:left-12 lg:left-14 xl:left-16 2xl:left-18 cursor-pointer hover:text-blue-700 "
        >
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
