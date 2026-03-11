import Project from "./Project.ts";
import { ExternalLink } from "lucide-react";

interface Properties {
  projects: { id: number; project: Project }[];
  className?: string;
}

export default function ProjectsGrid({ projects, className }: Properties) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className ?? ""}`}>
      {projects.map(({ id, project }) => (
        <a 
          key={id}
          href={project.url}
          target="_blank"
          rel="noreferrer" 
          className="group flex flex-col bg-muted/30 border border-border/50 rounded-xl overflow-hidden hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Card Header/Banner Area */}
          <div className="h-48 w-full bg-muted overflow-hidden relative border-b border-border/50 flex items-center justify-center" style={{ backgroundColor: project.banner.color !== "transparent" ? project.banner.color : undefined }}>
            <img 
              src={`/assets/projects/${project.banner.filename}`} 
              alt={`${project.name} preview`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                // Fallback if image not found
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1a1a1a/666666?text=Project';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          {/* Card Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                {project.name}
              </h4>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
