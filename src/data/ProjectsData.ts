import Project, {BannerAmbience} from "../components/main/projects/Project.ts";

export default Array.from([
  {
    id: 1,
    project: new Project("Sherpa Frameworks",
                         "A lightweight PHP framework for website development." +
                         " (Work In Progress)",
                         new BannerAmbience("sherpafw.png", "white"),
                         "https://github.com/sherpa-php"),
  },
  {
    id: 2,
    project: new Project("Pulse Language",
                         "An educational project for creating a programming " +
                         "language that supports linear, functional, and " +
                         "object-oriented programming. (Work In Progress)",
                         new BannerAmbience("pulselang.png", "#004AAD"),
                         "https://github.com/The-Pulse"),
  },
]);