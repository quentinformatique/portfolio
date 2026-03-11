import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-border/50 text-center flex flex-col items-center gap-4">
      <div className="flex gap-4 items-center justify-center text-muted-foreground">
         <a href="https://github.com/quentinformatique" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/quentin-costes-1595222a0/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
      </div>
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Quentin Costes. Built with React & Tailwind.
      </p>
    </footer>
  );
}
