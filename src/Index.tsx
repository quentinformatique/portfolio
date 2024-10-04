import PublicLayout from "./layouts/PublicLayout.tsx";
import Waves from "./components/branding/Waves.tsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";
import ProjectsGrid from "./components/main/ProjectsGrid.tsx";

function Index() {
  function onScroll() {
    const TL = gsap.timeline({paused: false});

    TL
      .to("#welcome h3", {
        scrollTrigger: {
          trigger: "#welcome h3",
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },

        y: -100,
        opacity: 0,
      })
      .to("#welcome h4", {
        scrollTrigger: {
          trigger: "#welcome h4",
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },

        y: -100,
        opacity: 0,
      });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    onScroll();
  }, []);

  return (
    <PublicLayout>
      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto">
        <section id="welcome"
                 className="h-full bg-white dark:bg-gray-950">

          <Waves />

          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-bold text-rainbow dark:text-dark-rainbow">
              Jonathan Guil
            </h3>

            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500">
              computer science @&nbsp;
              <a href="https://uqac.ca/" target="_blank">uqac</a>
            </h4>
          </div>
        </section>

        <section id="projects" className="px-10 lg:px-56 py-10">
          <h3 className="text-6xl font-black mb-24">
            projects.
          </h3>

          <ProjectsGrid />
        </section>
      </div>
    </PublicLayout>
  );
}

export default Index;