"use client";
import { useRef } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import useMediaQuery from "./hooks/useMediaQuery";

config.autoAddCss = false;

import Header from "./header";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";
import About from "./about";
import Different from "./different";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Header contactRef={contactRef} />
      {isMobile && (
        <MobileNavigation
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}
      {!isMobile && (
        <Navigation
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      )}
      <main className="flex flex-col justify-start items-center w-full h-[100%] md:max-h-[420vh] lg:max-h-[420vh] xl:max-h-[420vh] 2xl:max-h-[420vh] relative overflow-hidden">
        <About aboutRef={aboutRef} />
        <Different />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
    </>
  );
}
