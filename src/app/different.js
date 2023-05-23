import { motion, useScroll, useTransform } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faDownload,
  faBullseye,
  faLightbulb,
  faEnvelope,
  faTrophy,
  faUser,
  faBugSlash,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const Different = () => {
  const { scrollY } = useScroll();

  const differentScrollY = useTransform(scrollY, [850, 1400], [-10, 150]);

  return (
    <motion.div
      className="projects flex flex-col justify-center items-center w-[940px] my-40"
      style={{
        translateY: differentScrollY,
      }}
    >
      <h1 className="text-4xl font-semibold text-center mb-8">
        What makes me different
      </h1>
      <div className="flex flex-row justify-between items-center w-[940px]">
        <div className="flex flex-col justify-center items-center w-[15%]d">
          <FontAwesomeIcon icon={faStar} style={{ fontSize: "2rem" }} />
          <p className="text-center">I don&apos;t know the word impossible</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15%]">
          <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "2rem" }} />
          <p className="text-center">I take on challenges</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15%]">
          <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "2rem" }} />
          <p className="text-center">I think outside the box</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15%]">
          <FontAwesomeIcon icon={faAward} style={{ fontSize: "2rem" }} />
          <p className="text-center">I&apos;m a perfectionist</p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15%]">
          <FontAwesomeIcon icon={faBugSlash} style={{ fontSize: "2rem" }} />
          <p className="text-center">I&apos;m a problem solver</p>
        </div>
        {/* <FontAwesomeIcon icon={faDownload} /> */}
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        {/* <FontAwesomeIcon icon={faTrophy} /> */}
        {/* <FontAwesomeIcon icon={faUser} /> */}
      </div>
    </motion.div>
  );
};

export default Different;
