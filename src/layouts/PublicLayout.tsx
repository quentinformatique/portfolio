import {ReactNode, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../configs/ViewMode.ts";
import NavBar from "../components/navigation/NavBar.tsx";

interface Properties {
  children?: ReactNode
}

export default function PublicLayout({ children }: Properties) {
  const [cookies, setCookie] = useCookies(["viewMode"]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (cookies.viewMode === undefined) {
      setCookie("viewMode", ViewMode.DARK); // Set Dark by default for a pro look
    }
  }, [cookies.viewMode, setCookie]);

  useEffect(() => {
    if (cookies.viewMode === ViewMode.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [cookies.viewMode]);

  // Prevent flash of light mode
  if (!mounted) {
      return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 antialiased font-sans flex flex-col relative selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
      <NavBar />
      <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </main>
    </div>
  );
}
