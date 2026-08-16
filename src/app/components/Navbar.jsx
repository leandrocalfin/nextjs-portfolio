"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLanguage } from "../languageContext";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const navLinks = [
    {
      title: t.navHome,
      path: "#home",
    },
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

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:pt-5">
      <div
        className="
          relative
          mx-auto
          max-w-5xl
          rounded-2xl
          border
          border-black/10
          bg-white/65
          shadow-lg
          shadow-black/5
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-[#111111]/65
          dark:shadow-black/30
        "
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* LOGO */}
          <Link
            href="#home"
            onClick={closeMenu}
            className="
              flex
              items-center
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <Image
              src="/images/logo.png"
              alt="Leandro Calfin"
              width={60}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-gray-600
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-black
                  dark:text-gray-300
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="hidden items-center gap-2 md:flex">
            {/* IDIOMA */}
            <button
              type="button"
              onClick={toggleLanguage}
              title="Cambiar idioma"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              <Image
                src={
                  language === "es"
                    ? "/images/arg.png"
                    : "/images/usa.png"
                }
                alt={language === "es" ? "Español" : "English"}
                width={23}
                height={23}
                className="rounded-sm"
              />
            </button>

            {/* TEMA */}
            <button
              type="button"
              onClick={toggleTheme}
              title="Modo claro/oscuro"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              {mounted &&
                (theme === "dark" ? (
                  <FaMoon
                    size={19}
                    className="
                      text-indigo-500
                      transition-colors
                      duration-300
                      hover:text-indigo-600
                      dark:text-indigo-400
                      dark:hover:text-indigo-300
                    "
                  />
                ) : (
                  <FaSun
                    size={20}
                    className="
                      text-orange-500
                      transition-colors
                      duration-300
                      hover:text-orange-600
                    "
                  />
                ))}
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-1 md:hidden">
            {/* IDIOMA */}
            <button
              type="button"
              onClick={toggleLanguage}
              title="Cambiar idioma"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                transition-all
                duration-300
                hover:scale-110
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              <Image
                src={
                  language === "es"
                    ? "/images/arg.png"
                    : "/images/usa.png"
                }
                alt={language === "es" ? "Español" : "English"}
                width={21}
                height={21}
                className="rounded-sm"
              />
            </button>

            {/* TEMA */}
            <button
              type="button"
              onClick={toggleTheme}
              title="Modo claro/oscuro"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                transition-all
                duration-300
                hover:scale-110
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              {mounted &&
                (theme === "dark" ? (
                  <FaMoon
                    size={19}
                    className="
                      text-indigo-500
                      transition-colors
                      duration-300
                      hover:text-indigo-600
                      dark:text-indigo-400
                      dark:hover:text-indigo-300
                    "
                  />
                ) : (
                  <FaSun
                    size={20}
                    className="
                      text-orange-500
                      transition-colors
                      duration-300
                      hover:text-orange-600
                    "
                  />
                ))}
            </button>

            {/* MENU HAMBURGUESA */}
            <button
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Abrir menú"
              className="
                ml-1
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-gray-700
                transition-all
                duration-300
                hover:bg-black/5
                dark:text-white
                dark:hover:bg-white/10
              "
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${
              navbarOpen
                ? "max-h-72 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-3
              mb-3
              border-t
              border-black/10
              pt-3
              dark:border-white/10
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-gray-600
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-black
                  dark:text-gray-300
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;