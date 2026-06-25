"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FaHome, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import { useLanguage } from "../languageContext";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    {
      title: t.navAbout,
      path: "#about",
    },
    {
      title: t.navProjects,
      path: "#projects",
    },
    {
      title: t.navContact,
      path: "#contact",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed mx-auto border border-[#D6CFC2] dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-[#EDE7DB] dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="#home"
          className="text-[#1F2937] dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <FaHome size={30} />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 dark:border-slate-200 text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 dark:border-slate-200 text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-white"
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
                onClick={toggleLanguage}
                title="Cambiar idioma"
                className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={language === "es" ? "/images/arg.png" : "/images/eng.png"}
                  alt={language === "es" ? "Español" : "English"}
                  width={28}
                  height={28}
                  className="rounded-sm"
                />
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Modo claro/oscuro"
                onClick={toggleTheme}
                className="w-8 flex items-center justify-center text-[#1F2937] dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {mounted && theme === "dark" ? (
                  <FaMoon size={21} />
                ) : (
                  <FaSun size={21} />
                )}
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