import Logo from "../branding/Logo.tsx";
import SquareButton from "../utilities/SquareButton.tsx";
import {useRef, useState} from "react";
import {useCookies} from "react-cookie";
import {ViewMode} from "../../configs/ViewMode.ts";
import Icon from "../utilities/Icon.tsx";
import {gsap, Power2} from "gsap";

export default function NavBar() {
  const [cookies, setCookie] = useCookies(["viewMode"]);
  const [viewMode, setViewMode] = useState(cookies.viewMode ?? ViewMode.LIGHT);

  const isMobileNavigationMenuOpened
    = useRef<boolean>(false);

  const mobileNavigationMenu = useRef(null);

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

  function toggleMobileNavigationMenu() {
    const TL = gsap.timeline({paused: false});

    if (isMobileNavigationMenuOpened.current) {
      TL
        .to(mobileNavigationMenu.current, {
          delay: 0,
          duration: .5,

          y: -500,
          opacity: 0,

          ease: Power2.easeIn,
        })
        .to(mobileNavigationMenu.current, {
          delay: 0,
          duration: 0,

          display: "none",
        });
    } else {
      TL
        .to(mobileNavigationMenu.current, {
          delay: 0,
          duration: 0,

          display: "flex",
        })
        .to(mobileNavigationMenu.current, {
          delay: 0,
          duration: 1,

          y: 0,
          opacity: 1,

          ease: Power2.easeOut,
        })
    }

    isMobileNavigationMenuOpened.current
      = !isMobileNavigationMenuOpened.current;
  }

  return (
    <nav className="flex gap-x-16 justify-between md:justify-start
                    items-center px-10 py-2 fixed top-0 inset-x-0
                    h-[70px] z-50">

      <div className="fixed inset-0 z-10 flex flex-col gap-y-10
                      justify-center items-center text-3xl font-bold
                      bg-gray-50 dark:bg-gray-900 shadow"
           style={{display: "none", opacity: "0", transform: "translateY(-500px)"}}
           ref={mobileNavigationMenu}>

        <a onClick={toggleMobileNavigationMenu}
           href="#welcome">

          Home
        </a>

        <a onClick={toggleMobileNavigationMenu}
           href="#curriculum">

          Curriculum
        </a>

        <a onClick={toggleMobileNavigationMenu}
           href="#projects">

          My Projects
        </a>
      </div>

      <div className="flex-none">
        <Logo/>
      </div>

      <div className="flex-1 hidden md:flex gap-x-16 items-center">
        <div className="flex-1 flex gap-x-10">
          <a href="#welcome">
            Home
          </a>

          <a href="#curriculum">
            Curriculum
          </a>

          <a href="#projects">
            My Projects
          </a>
        </div>

        <div className="flex-none flex gap-x-10">
          <SquareButton className="w-10 h-10 flex items-center justify-center"
                        onClick={toggleViewMode}>

          <span className="material-symbols-outlined">
            {viewMode}
          </span>
          </SquareButton>
        </div>
      </div>

      <div className="flex md:hidden gap-x-5">
        <SquareButton className="w-10 h-10 flex md:hidden
                                 items-center justify-center
                                 relative z-20"
                      onClick={toggleViewMode}>

          <Icon icon={viewMode} />
        </SquareButton>

        <SquareButton className="justify-center items-center w-10 h-10
                        flex md:hidden relative z-20"
             onClick={toggleMobileNavigationMenu}>

          <Icon className="text-3xl" icon="menu" />
        </SquareButton>
      </div>
    </nav>
  );
}