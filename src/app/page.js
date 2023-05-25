"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import TimeLine from "./timeline";
import Header from "./header";
import About from "./about";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import Different from "./different";
import Projects from "./projects";
// import Contact from "./cotnact";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollY } = useScroll();

  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    return (
      <>
        <Header />
        <MobileNavigation aboutRef={aboutRef} projectsRef={projectsRef} />
        <main className="flex flex-col justify-start items-center w-full h-[100%] relative overflow-hidden">
          <About aboutRef={aboutRef} />
          <Different />
          <Projects projectsRef={projectsRef} />
        </main>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Navigation aboutRef={aboutRef} projectsRef={projectsRef} />
        <main className="flex flex-col justify-start items-center w-full h-[420vh] relative overflow-hidden">
          <About aboutRef={aboutRef} />
          <Different />
          <Projects projectsRef={projectsRef} />
          <TimeLine />
          {/* <Contact /> */}
        </main>
        <footer>
          framer motion kiedy przewijam przycisk kontakt i Wirgiliusz Ładziński
          ma pojsc do gory wolniej niż cała strona aby trafić na koniec w
          miejsca na navbarze
        </footer>
      </>
    );
  }
}
