import School, {SchoolDuration, SchoolType} from "../components/main/curriculum/School.ts";
import SchoolExperience, {ExperienceType} from "../components/main/curriculum/SchoolExperience.ts";

export default Array.from([
  {
    id: 1,
    school: new School("Lycée Marc Bloch",
      SchoolType.highschool,
      new SchoolDuration(2019, 2022),
      "France",
      "French Highschool degree in Computer Science and Biology."),
  },
  {
    id: 2,
    school: new School("Institut Universitaire de Technologie de Rodez",
      SchoolType.college,
      new SchoolDuration(2022),
      "France",
      "Preparing a French \"Bachelor " +
      "Universitaire de Technologie\" license " +
      " in Computer Science, focused on application development " +
      "and deployment.",
      [
        new SchoolExperience("Fullstack Web Developer",
                             "I joined the research team in educational " +
                             "technology to maintain and develop new features " +
                             "for an application aimed at the school and " +
                             "academic environment.",
                             ExperienceType.internship,
                             "irit.webp"),
      ]),
  },
  {
    id: 3,
    school: new School("Université du Québec à Chicoutimi",
      SchoolType.university,
      new SchoolDuration(2024),
      "Quebec, Canada",
      "Preparing a Canadian \"Baccalauréat\" license " +
      "in Computer Science."),
  },
]);