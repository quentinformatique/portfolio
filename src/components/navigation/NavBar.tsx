import {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../../configs/ViewMode.ts";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils.ts";

export default function NavBar() {
  const [cookies, setCookie] = useCookies(["viewMode"]);
  const [viewMode, setViewMode] = useState(cookies.viewMode ?? ViewMode.DARK);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleViewMode() {
    const newViewMode = viewMode === ViewMode.LIGHT ? ViewMode.DARK : ViewMode.LIGHT;
    setViewMode(newViewMode);
    setCookie("viewMode", newViewMode, {path: "/"});
  }

  const navLinks = [
    { href: "#welcome", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#curriculum", label: "Curriculum" },
  ];

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
    )}>
      <nav className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#welcome" className="text-xl font-bold tracking-tighter text-foreground">
            QC<span className="text-muted-foreground">.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
             <button
              onClick={toggleViewMode}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-muted rounded-md"
              aria-label="Toggle theme"
            >
              {viewMode === ViewMode.DARK ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleViewMode}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {viewMode === ViewMode.DARK ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
           {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
        </div>
      )}
    </header>
  );
}
