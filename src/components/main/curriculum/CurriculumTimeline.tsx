import {useEffect} from "react";
import SchoolCard from "./SchoolCard.tsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface Properties {
  className?: string,
  curriculum: any[],
}

export default function CurriculumTimeline({ className = "",
                                             curriculum = [] }: Properties) {

  const mainColsClasses = "flex-1 flex flex-col gap-y-10 py-10 " +
                                 "mt-[calc(100px+3.75rem)]";

  const cardsStyles = {
    transform: "translateY(100px)",
    opacity: 0,
  };

  function getEvenCards() {
    return curriculum.filter((_, index) => index % 2 !== 0);
  }

  function getOddCards() {
    return curriculum.filter((_, index) => index % 2 === 0);
  }

  function projectsTimelineAnimation() {
    const TL = gsap.timeline({paused: false});
    const cards: HTMLElement[] = gsap.utils.toArray(".project-card");

    cards.forEach(card => {
      TL
        .to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: true,
            scroller: "#base",
          },

          y: 0,
          opacity: 1,
          stagger: .1,
        });
    });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    projectsTimelineAnimation();
  }, []);

  return (
    <>
      <div className={"gap-x-10 justify-center hidden md:flex relative " + className}>
        <div className="absolute h-32 bg-gradient-to-b from-white
                        dark:from-gray-950 to-transparent top-0
                        w-1/3 z-10"></div>

        <div className="absolute h-96 bg-gradient-to-t from-white
                        dark:from-gray-950 to-transparent bottom-0
                        w-1/3 z-10"></div>

        <div className={mainColsClasses + " ml-16 2xl:ml-32"}>
          {getOddCards().map(project => (
            <div className="flex-none" key={project.id}>
              <SchoolCard className="project-card"
                          style={cardsStyles}
                          school={project.school}
                          direction="r"/>

              <div className="h-[600px]"></div>
            </div>
          ))}
        </div>

        <div className="flex-none w-3 bg-gradient-to-b
                        from-violet-500 to-red-500
                        dark:from-gray-800 dark:to-gray-900"></div>

        <div className={mainColsClasses + " mr-16 2xl:mr-32"}>
          {getEvenCards().map(project => (
            <div className="flex-none" key={project.id}>
              <div className="h-[300px]"></div>

              <SchoolCard className="project-card"
                          style={cardsStyles}
                          school={project.school}
                          direction="l"/>

              <div className="h-[300px]"></div>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex md:hidden gap-x-10 justify-start relative " + className}>
        <div className="absolute h-32 bg-gradient-to-b from-white
                        dark:from-gray-950 to-transparent top-0
                        w-10 z-10"></div>

        <div className="absolute h-32 bg-gradient-to-t from-white
                        dark:from-gray-950 to-transparent bottom-0
                        w-10 z-10"></div>

        <div className="flex-none w-3 bg-gradient-to-b
                        from-violet-500 to-red-500
                        dark:from-gray-800 dark:to-gray-900"></div>

        <div className={mainColsClasses}>
          {curriculum.map(project => (
            <div className="flex-none" key={project.id}>
              <SchoolCard className="project-card"
                          style={cardsStyles}
                          school={project.school}
                          direction="l"/>

              <div className="h-[100px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}