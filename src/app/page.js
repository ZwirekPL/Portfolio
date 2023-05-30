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
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollY } = useScroll();

  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    return (
      <>
        <Header contactRef={contactRef} />
        <MobileNavigation
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <main className="flex flex-col justify-start items-center w-full h-[100%] relative overflow-hidden">
          <About aboutRef={aboutRef} />
          <Different />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header contactRef={contactRef} />
        <Navigation
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <main className="flex flex-col justify-start items-center w-full max-h-[420vh] relative overflow-hidden">
          <About aboutRef={aboutRef} />
          <Different />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </main>
        <Footer />
      </>
    );
  }
}

// to do
// open website modals with info
