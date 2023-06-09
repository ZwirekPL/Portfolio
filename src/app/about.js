import { motion, useScroll, useTransform } from "framer-motion";
import Technology from "./technology";
import useMediaQuery from "./hooks/useMediaQuery";

const About = ({ aboutRef }) => {
  const { scrollY } = useScroll();

  const aboutDescriptionX = useTransform(scrollY, [300, 550], [-600, 0]);
  const aboutDescriptionY = useTransform(scrollY, [550, 1400], [0, 550]);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const aboutDescriptionMobileX = useTransform(scrollY, [100, 650], [-600, 0]);
  const aboutDescriptionMobileY = useTransform(scrollY, [300, 1700], [0, 300]);
  return (
    <div
      ref={aboutRef}
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center md:items-start lg:items-start xl:items-start 2xl:items-start w-full md:w-[768px] lg:w-[940px] xl:w-[940px] 2xl:w-[940px]  relative"
    >
      <Technology />
      <motion.div
        className="flex flex-col justify-center items-center w-[90%] h-[100%]"
        style={{
          translateX: isMobile ? aboutDescriptionMobileX : aboutDescriptionX,
          translateY: isMobile ? aboutDescriptionMobileY : aboutDescriptionY,
        }}
      >
        <div className=" bg-black/60 w-[80%]  ">
          <h1 className="text-4xl font-semibold text-center">Who I am ?</h1>
          <p className="p-2 ">
            My name is Wirgiliusz, I&apos;m 28 years old and I&apos;m a
            JavaScript developer. I am creative and love challenges. I am a
            bachelor of dietetics. But I was already a salesman, chemist,
            detailer so nothing is impossible. Currently, I use all my
            experience to provide the best software for you.
            <br />
            <b>Are you coming with me for your success?</b>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
