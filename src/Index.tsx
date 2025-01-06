import PublicLayout from "./layouts/PublicLayout.tsx";
import Waves from "./components/branding/Waves.tsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import CurriculumTimeline from "./components/main/curriculum/CurriculumTimeline.tsx";
import ProjectsGrid from "./components/main/projects/ProjectsGrid.tsx";

import curriculum from "./data/CurriculumData.ts";
import projects from "./data/ProjectsData.ts";
import Footer from "./components/main/Footer.tsx";

export default function Index() {
  const name = useRef(null),
        subtitle = useRef(null),
        sectionsContainer = useRef(null),
        curriculumTitle = useRef(null),
        curriculumSection = useRef(null),
        projectsTitle = useRef(null),
        projectsSection = useRef(null);

  const sectionsClasses = "bg-white dark:bg-gray-950 px-10 lg:px-32 2xl:px-56 w-full relative";
  let TL ;

  function onScrollWelcome() {
    const TL = gsap.timeline({paused: false});

    TL
      .to(name.current, {
        scrollTrigger: {
          trigger: name.current,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
          scroller: "#base",
        },

        y: -100,
        opacity: 0,
      })
      .to(subtitle.current, {
        scrollTrigger: {
          trigger: subtitle.current,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
          scroller: "#base",
        },

        y: -100,
        opacity: 0,
      });
  }

  function onScrollSections() {
    sectionTitleAnimation(curriculumTitle, curriculumSection);
    sectionTitleAnimation(projectsTitle, projectsSection);
  }

  function sectionTitleAnimation(titleElement: MutableRefObject<HTMLElement|null>,
                                 sectionElement: MutableRefObject<HTMLElement|null>) {

    if (titleElement.current === null || sectionElement.current === null) {
      return;
    }

    const sectionPhysic = sectionElement.current.getBoundingClientRect();

    if (sectionPhysic.y <= 0 && window.innerWidth >= 768) {
      titleElement.current.style.position = "fixed";
      titleElement.current.style.top = "70px";
      titleElement.current.style.left = "46px";
    } else {
      titleElement.current.style.position = "absolute";
      titleElement.current.style.top = "70px";
      titleElement.current.style.left = "40px";
    }
  }

  function sectionsAnimation(gradient: string) {
    TL = gsap.timeline({paused: false})
    TL
      .add(() => {
        console.log("gradient", gradient)
      })
      .to(sectionsContainer.current, {
        scrollTrigger: {
          trigger: curriculumSection.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
          scroller: "#base",
        },

        backgroundImage: gradient,
      });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    onScrollWelcome();
    sectionsAnimation(document.querySelector('html').classList.contains("dark") ? "linear-gradient(to bottom, #c84faa, #9e2a81)" : "linear-gradient(to bottom, #5fbca3, #3b9b82)");
    onScrollSections();

    document.querySelector("#base")
      ?.addEventListener("scroll", onScrollSections);

    const handleToggleDarkMode = (event: CustomEvent) => {
      sectionsAnimation(event.detail.gradient);
    };
    window.addEventListener("toggleDarkMode", handleToggleDarkMode);

    return () => {
      window.removeEventListener("toggleDarkMode", handleToggleDarkMode);
    };
  }, []);


  return (
    <PublicLayout>
      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto" id="base">
        <section id="welcome"
                 className="h-full bg-white dark:bg-gray-950">

          <Waves />

          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-bold
                           text-rainbow"
                ref={name}>

              Quentin Costes
            </h3>

            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-600"
                ref={subtitle}>

              student developer, intership at&nbsp;
              <a href="https://doxallia.com" target="_blank">Doxallia</a>
            </h4>
          </div>
        </section>

        <div className="min-h-screen relative px-1.5"
             ref={sectionsContainer}>

          <section id="curriculum"
                   className={sectionsClasses}
                   ref={curriculumSection}>

            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black
                           inset-x-10 text-center md:text-left"
                style={{position: "absolute"}}
                ref={curriculumTitle}>

              curriculum.
            </h3>

            <CurriculumTimeline className="h-fit "
                                curriculum={curriculum} />
          </section>

          <section id="projects"
                   className={sectionsClasses + " pt-72 pb-48 min-h-screen"}
                   style={{borderColor: "transparent"}}
                   ref={projectsSection}>

            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black
                           inset-x-10 text-center md:left-10 md:text-left"
                style={{position: "absolute"}}
                ref={projectsTitle}>

              projects.
            </h3>

            <ProjectsGrid className="h-fit"
                          projects={projects} />
          </section>
          <Footer />
        </div>
      </div>
    </PublicLayout>
  );
}