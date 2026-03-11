import PublicLayout from "./layouts/PublicLayout.tsx";
import CurriculumTimeline from "./components/main/curriculum/CurriculumTimeline.tsx";
import ProjectsGrid from "./components/main/projects/ProjectsGrid.tsx";
import Footer from "./components/main/Footer.tsx";
import curriculum from "./data/CurriculumData.ts";
import projects from "./data/ProjectsData.ts";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Index() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section id="welcome" className="min-h-[90vh] flex flex-col justify-center items-start pt-20 pb-16">
        <div className="space-y-6">
          <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Quentin Costes.
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-muted-foreground mt-2">
            Student Cloud Architect & DevOps Engineer.
          </h2>
          <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed">
            I'm a student developer currently in a work-study program at{" "}
            <a href="https://doxallia.com" target="_blank" rel="noreferrer" className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground transition-colors font-medium">
              Doxallia
            </a>
            . I specialize in building robust backend systems, cloud architectures, and DevOps workflows.
          </p>
        </div>

        <div className="mt-12 flex gap-4 items-center flex-wrap">
          <a href="#projects" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://github.com/quentinformatique" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 rounded-md hover:bg-muted">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/quentin-costes-1595222a0/" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 rounded-md hover:bg-muted">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border/50">
        <div className="mb-12 flex flex-col gap-4">
          <h3 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4">
            <span className="text-muted-foreground font-mono text-xl font-medium">01.</span> Projects
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've built or contributed to, ranging from desktop apps to complete full-stack platforms.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </section>

      {/* Experience / Curriculum Section */}
      <section id="curriculum" className="py-24 border-t border-border/50">
        <div className="mb-12 flex flex-col gap-4">
          <h3 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4">
            <span className="text-muted-foreground font-mono text-xl font-medium">02.</span> Experience & Education
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            My academic journey and professional experiences in software engineering.
          </p>
        </div>

        <CurriculumTimeline curriculum={curriculum} />
      </section>

      <Footer />
    </PublicLayout>
  );
}
