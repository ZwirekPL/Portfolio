import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "./hooks/useMediaQuery";
import ProjectsModal from "./projectsModal";

const Projects = ({ projectsRef }) => {
  const pages = [
    {
      site: "//kuba-jpp.vercel.app",
      title: "Personal Website",
      description:
        "A simple personal page with three sections. A contact form based on fromspree technology.",
      technology: "HTML, JavaScript, CSS",
    },
    {
      site: "//drowent.vercel.app",
      title: "Drowent",
      description:
        "Website for a company that offers home and industrial ventilation. The site has four main sections and subpages for the offer. Webiste has a contact form based on email.js.",
      technology: "React.js, Sass",
    },
    {
      site: "//catering-manager.vercel.app",
      title: "Catering Manager App",
      description:
        "Catering Manager is an application for managing inventory and shopping lists. The application was created for a client who has 15 branches. Each branch has its own account that has access to its warehouse. The user can carry out an inventory by saving the inventory in the inventory history, which is stored for 30 days. Shopping lists are divided into groceries and chemicals.",
      technology: "React.js, MongoDB, Express.js, Node.js, Auth0,",
    },
  ];
  const { scrollY } = useScroll();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectPage, setSelectPage] = useState({});
  const allComponentStopScrollY = useTransform(scrollY, [2100, 2700], [0, 1]);
  const firstImageScrollTranslateX = useTransform(
    scrollY,
    [1200, 1650],
    [-600, 0]
  );
  const secondImageScrollTranslateY = useTransform(
    scrollY,
    [1200, 1650],
    [600, 0]
  );
  const thirdImageScrollTranslateX = useTransform(
    scrollY,
    [1200, 1650],
    [600, 0]
  );

  const openCateringManagerAppModal = (page) => {
    let selectedPage = {};

    if (page === "jpp") {
      selectedPage = pages[0];
    } else if (page === "drowent") {
      selectedPage = pages[1];
    } else if (page === "catering") {
      selectedPage = pages[2];
    }

    setSelectPage(selectedPage);
    setModalOpen(true);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");
  // dodać na klik powiększenie do poziomu całej strony z opisem i linkami
  if (isMobile) {
    return (
      <motion.div
        ref={projectsRef}
        className="flex flex-col justify-center items-center w-full relative py-20   "
      >
        {modalOpen && (
          <ProjectsModal
            page={selectPage}
            closeModal={() => setModalOpen(false)}
          />
        )}
        <h1 className="text-4xl font-semibold text-center mt-20 mb-8 bg-black/60">
          Projects
        </h1>
        <div className="flex flex-col justify-center items-center w-[100%] gap-20">
          <motion.div
            className="h-[450px] overflow-y-scroll hover:cursor-pointer"
            style={{
              translateX: firstImageScrollTranslateX,
            }}
            onClick={() => openCateringManagerAppModal("jpp")}
          >
            <Image
              src="/Jakub.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div
            className="h-[450px] hover:cursor-pointer"
            style={{
              translateY: secondImageScrollTranslateY,
            }}
            onClick={() => openCateringManagerAppModal("drowent")}
          >
            <Image
              src="/DROWENT.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div
            className="h-[450px] overflow-y-scroll   hover:cursor-pointer "
            style={{
              translateX: thirdImageScrollTranslateX,
            }}
            onClick={() => openCateringManagerAppModal("catering")}
          >
            <Image
              src="/Catering-Manager-1.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-2.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-3.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-4.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-5.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        ref={projectsRef}
        className="flex flex-col justify-center items-center w-[940px] relative pt-20  "
      >
        {modalOpen && (
          <ProjectsModal
            page={selectPage}
            closeModal={() => setModalOpen(false)}
          />
        )}
        <h1 className="text-4xl font-semibold text-center mb-8 bg-black/60">
          Projects
        </h1>
        <div className="flex flex-row justify-between items-start w-[940px]">
          <motion.div
            className="h-[450px] overflow-y-scroll hover:cursor-pointer"
            style={{
              translateX: firstImageScrollTranslateX,
            }}
            onClick={() => openCateringManagerAppModal("jpp")}
          >
            <Image
              src="/Jakub.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div
            className="h-[450px] hover:cursor-pointer"
            style={{
              translateY: secondImageScrollTranslateY,
            }}
            onClick={() => openCateringManagerAppModal("drowent")}
          >
            <Image
              src="/DROWENT.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
          <motion.div
            className={"h-[450px] overflow-y-scroll   hover:cursor-pointer "}
            style={{
              translateX: thirdImageScrollTranslateX,
            }}
            onClick={() => openCateringManagerAppModal("catering")}
          >
            <Image
              src="/Catering-Manager-1.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-2.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-3.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-4.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
            <Image
              src="/Catering-Manager-5.png"
              width={270}
              height={600}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  }
};

export default Projects;
