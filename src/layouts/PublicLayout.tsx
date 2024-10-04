import NavBar from "../components/navigation/NavBar.tsx";
import {ReactNode} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../configs/ViewMode.ts";

interface Properties {
  children?: ReactNode,
}

export default function PublicLayout({ children }: Properties) {
  const [cookies] = useCookies(["viewMode"]);

  if (cookies.viewMode === ViewMode.DARK) {
    document.documentElement.classList.add("dark");
  }

  return (
    <>
      <NavBar />

      <div className="pt-[70px] min-h-screen relative">
        {children}
      </div>
    </>
  );
}