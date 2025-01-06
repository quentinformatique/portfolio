import SchoolExperience from "./SchoolExperience.ts";
import {useEffect, useState} from "react";

interface Properties {
  className?: string,
  experience: SchoolExperience,
}

export default function SchoolExperienceCard({ className = "",
                                               experience }: Properties) {

  const [experienceLogoPath, setExperienceLogoPath] = useState<string>("");

  const logoStyles = {
    backgroundImage: `url("${experienceLogoPath}")`,
  };

  const experiencesBannersDirectoryPath = "/src/assets/schools/experiences";

  useEffect(() => {
    const experiencesImages
      = import.meta.glob("/src/assets/schools/experiences/*");

    const experienceImagePath = `${experiencesBannersDirectoryPath}/${experience.logoFilename}`;

    if (experiencesImages[experienceImagePath]) {
      experiencesImages[experienceImagePath]()
        .then(module => setExperienceLogoPath((module as {default: string}).default));
    }
  }, []);

  return (
    <article className={className}>
      <div className="flex items-center gap-x-2">
        <div className="flex-none w-6 h-6 rounded bg-center bg-contain"
             style={logoStyles}></div>

        <h5 className="flex-1 font-bold">
          {experience.title}
        </h5>
      </div>

      <p className="mb-2 font-black text-gray-500 text-sm">
        {experience.type}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {experience.description}
      </p>
    </article>
  );
}