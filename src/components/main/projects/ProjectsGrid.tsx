import ProjectCard from "./ProjectCard.tsx";

interface Properties {
  className?: string,
  projects: any[],
}

export default function ProjectsGrid({ className = "",
                                       projects = [] }: Properties) {

  return (
    <div className={`${className} grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 gap-10`}>

      {projects.map(project => (
        <ProjectCard key={project.id} project={project.project} />
      ))}
    </div>
  );
}