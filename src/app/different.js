import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBullseye,
  faLightbulb,
  faBugSlash,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const Different = () => {
  const { scrollY } = useScroll();

  const differentScrollY = useTransform(scrollY, [850, 1400], [-10, 150]);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const differentMobileScrollY = useTransform(scrollY, [850, 1400], [-10, 150]);

  return (
    <motion.div
      className="flex flex-col justify-center items-center w-full md:w-[730px] lg:w-[940px] xl:w-[940px] 2xl:w-[940px] my-40 md:mt-[20rem]"
      style={{
        translateY: isMobile ? differentScrollY : differentMobileScrollY,
      }}
    >
      <h1 className="text-4xl font-semibold text-center mb-8 bg-black/60">
        What makes me different
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-around md:justify-between lg:justify-between xl:justify-between 2xl:justify-between items-center w-full  gap-10">
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[15%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%] ">
          <FontAwesomeIcon icon={faStar} style={{ fontSize: "3rem" }} />
          <p className="text-center bg-black/60">
            I don&apos;t know the word impossible
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[15%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%] ">
          <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "3rem" }} />
          <p className="text-center bg-black/60">I take on challenges</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[15%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%]">
          <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "3rem" }} />
          <p className="text-center bg-black/60">I think outside the box</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[15%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%] ">
          <FontAwesomeIcon icon={faAward} style={{ fontSize: "3rem" }} />
          <p className="text-center bg-black/60">I&apos;m a perfectionist</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[15%] lg:w-[15%] xl:w-[15%] 2xl:w-[15%] ">
          <FontAwesomeIcon icon={faBugSlash} style={{ fontSize: "3rem" }} />
          <p className="text-center bg-black/60">I&apos;m a problem solver</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Different;
