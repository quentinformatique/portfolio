import School from "./School.ts";

interface Properties {
  curriculum: { id: number; school: School }[];
  className?: string;
}

export default function CurriculumTimeline({ curriculum, className }: Properties) {
  return (
    <div className={`space-y-12 ${className ?? ""}`}>
      {curriculum.sort((a,b) => (b.school.years.begin - a.school.years.begin)).map(({ id, school }) => (
        <div key={id} className="relative pl-8 md:pl-0">
          
          <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
            {/* Year Column */}
            <div className="hidden md:block md:col-span-1 pt-1 md:text-right">
               <span className="text-sm font-mono text-muted-foreground">
                {school.years.begin} &mdash; {school.years.end ? school.years.end : "Present"}
               </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-3 relative pb-8 md:pb-12 border-l border-border/50 pl-8 md:pl-10 before:absolute before:content-[''] before:w-3 before:h-3 before:bg-muted-foreground/30 before:border-2 before:border-background before:rounded-full before:-left-[6.5px] before:top-2 hover:before:bg-foreground before:transition-colors">
              <div className="md:hidden mb-2">
                 <span className="text-sm font-mono text-muted-foreground">
                  {school.years.begin} &mdash; {school.years.end ? school.years.end : "Present"}
                 </span>
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-1">
                {school.name}
              </h4>
              <div className="text-sm text-foreground/80 font-medium mb-4">
                {school.type} &bull; {school.country}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {school.description}
              </p>

              {school.experiences.length > 0 && (
                <div className="space-y-4 mt-6">
                  {school.experiences.map((exp, idx) => (
                    <div key={idx} className="bg-muted/30 border border-border/50 rounded-lg p-5">
                       <h5 className="font-semibold text-foreground flex items-center gap-2">
                         {exp.title}
                       </h5>
                       <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mt-1 mb-3">
                         {exp.type}
                       </span>
                       <p className="text-sm text-muted-foreground leading-relaxed">
                         {exp.description}
                       </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
