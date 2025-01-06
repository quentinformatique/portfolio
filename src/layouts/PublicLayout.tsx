import NavBar from "../components/navigation/NavBar.tsx";
import {ReactNode} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../configs/ViewMode.ts";

interface Properties {
  children?: ReactNode,
}

export default function PublicLayout({ children }: Properties) {
  const [cookies, setCookie] = useCookies(["viewMode"]);

  console.log("check cookie", cookies.viewMode);

  if (cookies.viewMode === undefined) {
    setCookie("viewMode", ViewMode.LIGHT);
  } else if (cookies.viewMode === ViewMode.DARK) {
    document.documentElement.classList.add("dark");
  }

  return (
    <>
      <NavBar />

      <div className="pt-[70px] min-h-screen relative
                      select-none cursor-default"
           id="app">

        {children}
      </div>
    </>
  );
}