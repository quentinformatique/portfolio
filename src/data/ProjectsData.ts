import Project, {BannerAmbience} from "../components/main/projects/Project.ts";

export default Array.from([
  {
    id: 1,
    project: new Project("Cuby",
                         "A suite of tools designed to enhance the experience of Rubik's Cube enthusiasts!" +
                         "It includes a timer, a scrambler, a statistics tracker, and an auto solver. " +
                         "The project is written with Electronjs for the desktop app, python Falsk for the solve API, ASP.NET for the " +
                         "management API and Flutter for the mobile app. (Work In Progress)",
                         new BannerAmbience("cuby.png", "#4b5563"),
                         "https://github.com/Cuby-Project"),
  },
  {
    id: 2,
    project: new Project("Easy Git",
                         "This is a Git client to handle repositories more easily. Inspired by tools like" +
                          " GitHub Desktop, it is developed using ElectronJS, TypeScript, Vue.js and Vite.. (Work In Progress)",
                         new BannerAmbience("easyGit.png", "#4b5563"),
                         "https://github.com/quentinformatique/EasyGit/"),
  },
  {
    id: 3,
    project: new Project("Readme Creator",
        "A python app who can create the readme.md file for your your github projects. It uses custom tkinter for the ui." +
        " For exemple this readme file was created using this generator.",
        new BannerAmbience("readme.png", "#4b5563"),
        "https://github.com/quentinformatique/readmeCreator"),
  },
  {
    id: 4,
    project: new Project("Class projects",
        "During my studies, I had to work on many projects. You can find them on my github. Exemples: " +
        " Quizeo: a Java project to create and play quizzes." +
        " PathPilot: a mobile app optimize the daily routes of commercial representatives." +
        " And many more...",
        new BannerAmbience("school.png", "#4b5563"),
        "https://github.com/quentinformatique?tab=repositories"),
  },
  {
    id: 5,
    project: new Project("Other projects",
        "I really like to code and I have many projects. You can find them on my github. " +
        "Because I like to learn new things, I have projects in many languages or different technologies. " +
        "feel free to check them out.",
        new BannerAmbience("code.png", "#4b5563"),
        "https://github.com/quentinformatique"),
  },
]);