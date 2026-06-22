"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FaHome, FaGlobe, FaMoon, FaSun } from "react-icons/fa";


const navLinks = [
  {
    title: "Sobre mi",
    path: "#about",
  },
  {
    title: "Proyectos",
    path: "#projects",
  },
  {
    title: "Contacto",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <nav className="navbar-bg fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="#home" className="text-white hover:text-primary-400 transition-colors">
          <FaHome size={30} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}

            <li>
              <button
                type="button"
                title="Cambiar idioma"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <FaGlobe size={22} />
              </button>
            </li>

            <li>
              
                <button
                  type="button"
                  title="Modo claro/oscuro"
                  onClick={toggleTheme}
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  {darkMode ? <FaMoon size={21} /> : <FaSun size={21} />}
                </button>
              
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
