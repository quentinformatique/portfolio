import School, {SchoolDuration, SchoolType} from "../components/main/curriculum/School.ts";
import SchoolExperience, {ExperienceType} from "../components/main/curriculum/SchoolExperience.ts";

export default Array.from([
  {
    id: 1,
    school: new School("Lycée François d'Estaing",
      SchoolType.highschool,
      new SchoolDuration(2019, 2022),
      "France",
      "French Highschool degree in Computer Science and Mathematics."),
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
        new SchoolExperience("Backend Developer",
                             "I joined Doxallia's team to develop the backend of their" +
                             "remote user identification system. I used .NET 8, C# and PostgresSQL.",
                              ExperienceType.internship,
                             "doxallia.png"),
        new SchoolExperience("Backend Developer and DevOps",
                                `As a third-year student, Doxallia offered me a work-study program
                                to develop the backend of their remote user identification system.
                                I also work on the deployment of the system on GitLab by doing the CI-CD.
                                I got the opportunity to work with PostgresSQL, Docker and GitLab, Jfrog Artifactory,
                                while using .NET 8 and C# to develop the backend.`,
                                ExperienceType.workStudyProgram,
                                "doxallia.png"),
      ]),
  }
]);