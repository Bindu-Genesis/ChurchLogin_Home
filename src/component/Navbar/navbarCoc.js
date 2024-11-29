import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo_dark from "../../assets/images/newlog-dark.png";
import logo_light from "../../assets/images/newlog-light.png";
import "../../assets/libs/@mdi/font/css/materialdesignicons.min.css";
import "../../assets/css/tailwind.css";

export default function Navbar(props) {
  let { navClass, navJustify } = props;
  const [isMenu, setIsMenu] = useState(false);
  const [menu, setMenu] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // Hook to use navigate function

  // Handle Navigation and scroll to the section
  const handleNavigation = (id) => {
    navigate(`#${id}`); // Programmatically navigate to the section with id "overview-m"
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const current = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );
    setMenu(current);

    const windowScroll = () => {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    };
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      } shadow-md fixed w-full z-50`}
    >
      <div className="container mx-auto flex items-center justify-between md:h-24 h-20 px-4">
        {/* Logo Section */}
        <Link className="logo flex items-center" to="/">
        {/* Removed Commented Code Here */}
            {
                navClass === "nav-light" ?
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logo_dark} className="l-dark md:h-[86px] h-16 p-2 w-auto"  alt="" />
                            <img src={logo_light} className="l-light md:h-[86px] h-16 p-2 w-auto"  alt="" />
                        </span>
                        <img src={logo_light}  className="hidden md:h-[86px] h-16 p-2  dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" to="/">
                        <img src={logo_dark} className="inline-block dark:hidden md:h-[86px] h-16  w-auto p-2" alt="" />
                        <img src={logo_light} className="hidden dark:inline-block md:h-[86px] h-16 w-auto p-2" alt="" />
                    </Link>
            }

         </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-extras lg:hidden">
          <button
            className="navbar-toggle flex items-center justify-center p-2"
            id="isToggle"
            onClick={toggleMenu}
          >
            <div className="lines">
              <span className="block h-1 w-6 bg-black dark:bg-white mb-1"></span>
              <span className="block h-1 w-6 bg-black dark:bg-white mb-1"></span>
              <span className="block h-1 w-6 bg-black dark:bg-white"></span>
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          id="navigation"
          className={`${
            isMenu ? "block" : "hidden"
          } lg:block flex-grow lg:flex lg:items-center`}
        >
          <ul
            className={`navigation-menu flex flex-col lg:flex-row lg:items-center gap-6`}
          >
            <li
              className={`${
                menu === "index" ? "active" : ""
              } text-gray-700 dark:text-gray-300 hover:text-blue-500`}
            >
               <button
                onClick={() => handleNavigation("home")}
                className="sub-menu-item"
              >
                Home
               </button>
            </li>
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <button
                onClick={() => handleNavigation("features")}
                className="sub-menu-item"
              >
                Features
               </button>
            </li>
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              <button
                onClick={() => handleNavigation("overview")}
                className="sub-menu-item"
              >
                Overview
              </button>
            </li>
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <button
                onClick={() => handleNavigation("pricing")}
                className="sub-menu-item"
              >
                Pricing
               </button>
            </li>
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <button
                onClick={() => handleNavigation("domain-hosting")}
                className="sub-menu-item"
              >
                Domain/Hosting
               </button>
            </li>
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <button
                onClick={() => handleNavigation("contact")}
                className="sub-menu-item"
              >
                Contact
               </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
