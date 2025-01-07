import Project from "./Project.ts";
import Button from "../../navigation/Button.tsx";
import {useEffect, useState} from "react";

interface Properties {
  className?: string,
  project: Project,
}

export default function ProjectCard({ className = "", project }: Properties) {
  const [bannerImage, setBannerImage] = useState<string>("");


  const imgBG = { backgroundImage:  `url("${bannerImage}")`};
  const colorBG = { backgroundColor: project.banner.color};

  const projectsBannersDirectoryPath = "/src/assets/projects";

  useEffect(() => {
    const projectsImages
      = import.meta.glob("/src/assets/projects/*");

    const projectImagePath = `${projectsBannersDirectoryPath}/${project.banner.filename}`;

    if (projectsImages[projectImagePath]) {
      projectsImages[projectImagePath]()
        .then(module => setBannerImage((module as {default: string}).default));
    }
  }, []);

  return (
    <article className={`${className} border border-gray-500 dark:border-gray-800
                         rounded-xl flex flex-col gap-y-3 overflow-hidden md:hover:rotate-1
                         md:hover:scale-110 transition-transform`}>

      <div className="flex-none flex items-center justify-center h-24 py-2 "
           style={colorBG}>
        <div className="w-full h-full  bg-center bg-contain bg-no-repeat" style={imgBG}></div>
      </div>

      <div className="flex-1 p-3 flex flex-col gap-y-5">
        <div className="flex-1">
          <h4 className="font-black text-lg md:text-xl mb-2">
            {project.name}
          </h4>

          <p className="text-sm text-justify">
            {project.description}
          </p>
        </div>

        <div className="flex-none flex justify-center">
          <a className="w-full hover:no-underline" target="_blank" href={project.url}>
            <Button>
              See more
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}