"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faDownload,
  faShuttleSpace,
  faBullseye,
  faPhone,
  faLightbulb,
  faEnvelope,
  faAward,
  faTrophy,
  faUser,
  faLaptopCode,
  faBugSlash,
} from "@fortawesome/free-solid-svg-icons";

import VideoHeader from "./video-header";
import TimeLine from "./timeline";
import Technology from "./technology";
// import Contact from "./cotnact";

export default function Home() {
  const { scrollY } = useScroll();
  const headerHeadingPosition = useTransform(scrollY, [0, 400], [0, -150]);
  const navLeftSide = useTransform(scrollY, [0, 400], [250, 0]);
  const navRightSide = useTransform(scrollY, [0, 400], [-250, 0]);
  const headerHeading = useTransform(scrollY, [0, 400], [0, 250]);
  const headerHeadingScale = useTransform(scrollY, [0, 400], [1, 0.5]);
  const contactButton = useTransform(scrollY, [0, 200], [0, -200]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header className="flex flex-col justify-center items-center w-full h-[100vh] relative">
        <div className="flex flex-col justify-center items-center w-[940px] h-[100vh] relative">
          <div className="flex flex-col justify-center items-evenly w-full h-[100vh]">
            <div className="flex flex-col justify-center items-center w-full h-40">
              <motion.h1
                className=" p-2 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 fixed top-[9rem] z-50"
                style={{
                  translateY: headerHeadingPosition,
                  scale: headerHeadingScale,
                }}
              >
                Wirgiliusz Ładziński
              </motion.h1>
              <motion.h2
                className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-100 my-40"
                style={{ translateY: headerHeading }}
              >
                JavaScript Developer
              </motion.h2>
            </div>
            <motion.div
              className="w-[90%] flex flex-row justify-end"
              style={{ translateY: contactButton }}
            >
              <button className=" hover:first-letter:text-blue-600 hover:bg-black/70 bg-black/20 rounded-md shadow-blue-600 shadow-md h-20 w-40 text-3xl font-bold text-blue-200 ">
                Contact
              </button>
            </motion.div>
          </div>
          <VideoHeader />
        </div>
      </header>
      <nav className="bg-black/90 h-[74px] w-[100vw] flex flex-row justify-between items-center sticky top-0 z-40">
        <motion.div
          className="flex items-center justify-center mx-8"
          style={{ translateX: navLeftSide }}
        >
          <button className="text-2xl font-semibold p-2 mx-3 rounded-md hover:first-letter:text-blue-600 hover:shadow-blue-600 shadow-md">
            About me
          </button>
          <button
            className="text-2xl font-semibold p-2 mx-3 rounded-md hover:first-letter:text-blue-600 hover:shadow-blue-600 shadow-md"
            onClick={handleScrollToTop}
          >
            Go to top
          </button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center mx-8"
          style={{ translateX: navRightSide }}
        >
          <button className="text-2xl font-semibold p-2 mx-3 rounded-md hover:first-letter:text-blue-600 hover:shadow-blue-600 shadow-md">
            Projects
          </button>
          <button className="text-2xl font-semibold p-2 mx-3 rounded-md hover:first-letter:text-blue-600 hover:shadow-blue-600 shadow-md">
            Contact
          </button>
        </motion.div>
      </nav>
      <main className="flex flex-col justify-start items-center w-full h-[400vh] relative overflow-hidden">
        <div className="flex flex-row justify-center items-start w-[940px] relative">
          <div className="flex flex-col justify-center items-center w-[50%] h-[100%]">
            <h1 className="text-4xl font-semibold text-center">Who I am ?</h1>
            <p className="p-2">
              My name is Wirgiliusz Ładziński. I am 28 years old and I am a
              clinical nutritionist by education. I have never worked in the
              profession because detailing was my passion and work in the last
              year of my studies. And I grew up there too. In detailing I
              reached the very top in Poland. I worked with all the best
              detailers in Poland. I created the best car cosmetics in the
              world. Within 3 months I learned chemistry and created my first
              product. I have worked on countless vehicles. It was the moment
              when I understood that nothing is impossible and I am able to do
              whatever I want. I am workhorse but lazy at the same time. It
              seems unlikely, but it works wonders for me. I prefer to make
              things easier for myself, not to do them in an ill-considered way.
              I don&apos;t know the word impossible. Everything is possible but
              some things take more time. I don&apos;t give up and I like
              challenges. If something doesn&apos;t work out for me, it
              motivates me even more to develop. I love learning new things and
              gaining new skills. And all only because if we do not develop,
              from the perspective of the world, we go backwards. I have a very
              {/* open mind and can think outside the box. I think analytically and
              like to break everything down to the smallest atoms. Life&apos;s
              too short to be good. I always try to be the best and conquer the
              next peaks. Being a perfectionist, I believe that you can always
              improve something and you can&apos;t do something 100% perfect,
              but you can always strive for it. And it is this pursuit of
              perfection that makes me an above average person. */}
            </p>
          </div>
          <Technology />
        </div>
        <div className="projects flex flex-col justify-center items-start w-[940px] relative ">
          <h1 className="text-4xl font-semibold text-center">
            What makes me different
          </h1>
          <div className="flex flex-row justify-between items-center w-[940px]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faDownload} />
            <FontAwesomeIcon icon={faShuttleSpace} />
            <FontAwesomeIcon icon={faBullseye} />
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faLightbulb} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faAward} />
            <FontAwesomeIcon icon={faTrophy} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faLaptopCode} />
            <FontAwesomeIcon icon={faBugSlash} />
          </div>
        </div>
        <div className="projects flex flex-col justify-center items-start w-[940px] relative ">
          <h1>
            Projects - on hover powiększ i wyświetl opis ( tak samo po
            kliknieciu )
          </h1>
          <div className="flex flex-row justify-between items-start w-[940px]">
            <div className="h-[450px] overflow-y-scroll hover:scale-150 hover:cursor-pointer hover:z-10 ">
              <Image
                src="/Jakub.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="h-[450px]  hover:scale-150 hover:cursor-pointer hover:z-10 ">
              <Image
                src="/DROWENT.png"
                width={270}
                height={600}
                alt="Picture of the author"
              />
            </div>
            <div className="h-[450px] overflow-y-scroll  hover:scale-150 hover:cursor-pointer hover:z-10 ">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start translate-x-40 relative overflow-x-hidden ">
          <TimeLine />
        </div>
        {/* <Contact /> */}
      </main>
      <footer>
        framer motion kiedy przewijam przycisk kontakt i Wirgiliusz Ładziński ma
        pojsc do gory wolniej niż cała strona aby trafić na koniec w miejsca na
        navbarze
      </footer>
    </>
  );
}
