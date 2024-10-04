import Logo from "../branding/Logo.tsx";
import {Link} from "react-router-dom";
import SquareButton from "../utilities/SquareButton.tsx";
import {useState} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../../configs/ViewMode.ts";

export default function NavBar() {
  const [cookies, setCookie] = useCookies(["viewMode"]);
  const [viewMode, setViewMode] = useState(cookies.viewMode ?? ViewMode.LIGHT);

  function toggleViewMode() {
    const newViewMode = cookies.viewMode === ViewMode.LIGHT
      ? ViewMode.DARK
      : ViewMode.LIGHT;

    document.documentElement.classList.toggle('dark');

    setViewMode(newViewMode);

    setCookie(
      "viewMode",
      newViewMode,
      {path: "/"});
  }

  return (
    <nav className="flex gap-x-16 items-center px-10 py-2 fixed top-0 inset-x-0 h-[70px] z-50">
      <div className="flex-none">
        <Logo />
      </div>

      <div className="flex-1 flex gap-x-10">
        <Link to="/">
          Home
        </Link>

        <Link to="/">
          My Projects
        </Link>
      </div>

      <div className="flex-none flex gap-x-10">
        <SquareButton className="w-10 h-10 flex items-center justify-center" onClick={toggleViewMode}>
          <span className="material-symbols-outlined">
            {viewMode}
          </span>
        </SquareButton>
      </div>
    </nav>
  );
}