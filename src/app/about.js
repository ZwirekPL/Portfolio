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
            My name is Wirgiliusz Ładziński. I am 28 years old and I am a
            clinical nutritionist by education. I have never worked in the
            profession because detailing was my passion and work in the last
            year of my studies. And I grew up there too. In detailing I reached
            the very top in Poland. I worked with all the best detailers in
            Poland. I created the best car cosmetics in the world. Within 3
            months I learned chemistry and created my first product. I have
            worked on countless vehicles. It was the moment when I understood
            that nothing is impossible and I am able to do whatever I want.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
