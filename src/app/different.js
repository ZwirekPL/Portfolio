import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
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

  const isMobile = useMediaQuery("(max-width: 600px)");
  const differentMobileScrollY = useTransform(scrollY, [850, 1400], [-10, 150]);
  if (isMobile) {
    return (
      <motion.div
        className="flex flex-col justify-center items-center w-full my-40 "
        style={{
          translateY: differentScrollY,
        }}
      >
        <h1 className="text-4xl font-semibold text-center mb-8 bg-black/60">
          What makes me different
        </h1>
        <div className="flex flex-col justify-around items-center w-full gap-10">
          <div className="flex flex-col justify-center items-center w-[60%] ">
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "3rem" }} />
            <p class className="text-center bg-black/60">
              I don&apos;t know the word impossible
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[60%] ">
            <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "3rem" }} />
            <p className="text-center bg-black/60">I take on challenges</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[60%] ">
            <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "3rem" }} />
            <p className="text-center bg-black/60">I think outside the box</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[60%] ">
            <FontAwesomeIcon icon={faAward} style={{ fontSize: "3rem" }} />
            <p className="text-center bg-black/60">I&apos;m a perfectionist</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[60%] ">
            <FontAwesomeIcon icon={faBugSlash} style={{ fontSize: "3rem" }} />
            <p className="text-center bg-black/60">I&apos;m a problem solver</p>
          </div>
          {/* <FontAwesomeIcon icon={faDownload} /> */}
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          {/* <FontAwesomeIcon icon={faTrophy} /> */}
          {/* <FontAwesomeIcon icon={faUser} /> */}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="flex flex-col justify-center items-center w-[940px] my-40 "
        style={{
          translateY: differentScrollY,
        }}
      >
        <h1 className="text-4xl font-semibold text-center mb-8 bg-black/60">
          What makes me different
        </h1>
        <div className="flex flex-row justify-between items-center w-[940px]">
          <div className="flex flex-col justify-center items-center w-[15%]d">
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "2rem" }} />
            <p className="text-center bg-black/60">
              I don&apos;t know the word impossible
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[15%]">
            <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "2rem" }} />
            <p className="text-center bg-black/60">I take on challenges</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[15%]">
            <FontAwesomeIcon icon={faLightbulb} style={{ fontSize: "2rem" }} />
            <p className="text-center bg-black/60">I think outside the box</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[15%]">
            <FontAwesomeIcon icon={faAward} style={{ fontSize: "2rem" }} />
            <p className="text-center bg-black/60">I&apos;m a perfectionist</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[15%]">
            <FontAwesomeIcon icon={faBugSlash} style={{ fontSize: "2rem" }} />
            <p className="text-center bg-black/60">I&apos;m a problem solver</p>
          </div>
          {/* <FontAwesomeIcon icon={faDownload} /> */}
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          {/* <FontAwesomeIcon icon={faTrophy} /> */}
          {/* <FontAwesomeIcon icon={faUser} /> */}
        </div>
      </motion.div>
    );
  }
};

export default Different;
