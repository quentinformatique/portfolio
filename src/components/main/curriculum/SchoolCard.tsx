import School from "./School.ts";
import SchoolExperienceCard from "./SchoolExperienceCard.tsx";

interface Properties {
  id?: string,
  className?: string,
  style?: Object,
  school: School,
  direction?: "l"|"r",
}

export default function SchoolCard({ id,
                                     className = "",
                                     style = {},
                                     school,
                                     direction = "l" }: Properties) {

  const alignClass = direction === "l"
    ? "text-left items-start"
    : "text-right items-end";

  const durationClass = school.years.end
    ? ""
    : "bg-clip-text bg-gradient-to-br from-green-500 to-green-700 text-transparent";

  return (
    <div className={alignClass + " flex flex-col " + className}
         style={style}
         id={id}>

      <h4 className="font-black text-xl">
        {school.name}
      </h4>

      {school.type && <p className="font-black text-gray-500">{school.type}</p>}

      <p className={"text-xs font-black w-fit " + durationClass}>
        {!school.years.end && <span>Since&nbsp;</span>}
        {school.years.begin}
        {school.years.end && <span>&nbsp;—&nbsp;{school.years.end}</span>}
      </p>

      <p className="mb-5">
        {school.description && <p>{school.description}</p>}
      </p>

      <div className="flex flex-col gap-y-5">
        {school.experiences.map(experience => (
          <SchoolExperienceCard experience={experience} />
        ))}
      </div>
    </div>
  );
}