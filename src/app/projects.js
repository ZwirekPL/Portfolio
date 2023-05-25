import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Projects = ({ projectsRef }) => {
  const { scrollY } = useScroll();

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
  // dodać na klik powiększenie do poziomu całej strony z opisem i linkami
  return (
    <motion.div
      ref={projectsRef}
      className="flex flex-col justify-center items-center w-[940px] relative pt-20  "
    >
      <h1 className="text-4xl font-semibold text-center mb-8 bg-black/60">
        Projects
      </h1>
      <div className="flex flex-row justify-between items-start w-[940px]">
        <motion.div
          className="h-[450px] overflow-y-scroll hover:cursor-pointer"
          style={{
            translateX: firstImageScrollTranslateX,
          }}
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
};

export default Projects;
