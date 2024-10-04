import {ReactElement} from "react";

export default function ProjectsGrid() {
  const tempdata = [
    {
      banner: undefined,
      title: "My #1 project!",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  let cards: ReactElement[] = [];

  tempdata.forEach(project => {
    cards.push(<ProjectCard banner={project.banner}
                            title={project.title}
                            description={project.description} />);
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards}
    </div>
  );
}


interface ProjectCardProperties {
  banner?: string,
  title: string,
  description?: string,
}

function ProjectCard({ banner, title, description }: ProjectCardProperties) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden
                            flex flex-col bg-gray-900">

      {banner && <div>!banner!</div>}

      <div className="p-3">
        <h4 className="font-black text-xl">
          {title}
        </h4>

        {description && <p>{description}</p>}
      </div>
    </div>
  );
}