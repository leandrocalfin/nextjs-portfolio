"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useLanguage } from "../languageContext";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const handleScroll = () => {
      // Si estamos al final de la página, activar contacto
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      // Si estamos arriba del todo, activar home
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // La sección se considera activa cuando cruza el centro del viewport
        // (compensa el navbar fijo de arriba)
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Limpia / actualiza el hash sin provocar un salto brusco
      window.history.pushState(null, "", "#home");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // compensa el navbar fijo
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleNavClick = (e, id) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    closeMenu();
    // Dejar que el menú mobile se cierre antes de scrollear
    requestAnimationFrame(() => scrollToSection(id));
  };

  const navLinks = [
    {
      id: "home",
      title: t.navHome,
      path: "#home",
    },
    {
      id: "about",
      title: t.navAbout,
      path: "#about",
    },
    {
      id: "projects",
      title: t.navProjects,
      path: "#projects",
    },
    {
      id: "contact",
      title: t.navContact,
      path: "#contact",
    },
  ];

  const getDesktopLinkClasses = (isActive) => `
                  relative
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-black dark:text-white after:opacity-100"
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white after:opacity-0 hover:after:opacity-100"
                  }
                  after:absolute
                  after:bottom-1
                  after:left-4
                  after:right-4
                  after:h-[2px]
                  after:rounded-full
                  after:bg-gradient-to-r
                  after:from-blue-500
                  after:to-violet-600
                  after:transition-opacity
                  after:duration-300
                `;

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
            onClick={(e) => handleNavClick(e, "home")}
            className="
              flex
              items-center
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <Image
              src="/images/logo.webp"
              alt="Leandro Calfin"
              width={60}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV - solo lg */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={getDesktopLinkClasses(activeSection === link.id)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* DESKTOP CONTROLS - solo lg */}
          <div className="hidden items-center gap-2 lg:flex">
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
                hover:bg-violet-500/[0.06]
                hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
                dark:hover:bg-violet-400/10
                dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
              "
            >
              <Image
                src={
                  language === "es"
                    ? "/images/arg.webp"
                    : "/images/usa.webp"
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
                hover:bg-violet-500/[0.06]
                hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
                dark:hover:bg-violet-400/10
                dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
              "
            >
              {mounted &&
                (theme === "dark" ? (
                  <FaMoon
                    size={19}
                    className="
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:text-white
                    "
                  />
                ) : (
                  <LuSun
                    size={20}
                    className="
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:text-white
                    "
                  />
                ))}
            </button>
          </div>

          {/* MOBILE + TABLET CONTROLS */}
          <div className="flex items-center gap-1 lg:hidden">
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
                hover:bg-violet-500/[0.06]
                hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
                dark:hover:bg-violet-400/10
                dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
              "
            >
              <Image
                src={
                  language === "es"
                    ? "/images/arg.webp"
                    : "/images/usa.webp"
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
                hover:bg-violet-500/[0.06]
                hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
                dark:hover:bg-violet-400/10
                dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
              "
            >
              {mounted &&
                (theme === "dark" ? (
                  <FaMoon
                    size={19}
                    className="
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:text-white
                    "
                  />
                ) : (
                  <LuSun
                    size={20}
                    className="
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-gray-900
                      dark:text-gray-300
                      dark:hover:text-white
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
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-gray-700
                transition-all
                duration-300
                hover:bg-violet-500/[0.06]
                hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
                dark:text-white
                dark:hover:bg-violet-400/10
                dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
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

        {/* DROPDOWN MENU - mobile + tablet */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              navbarOpen
                ? "max-h-72 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="mx-3 mb-3 border-t border-black/10 pt-1.5 dark:border-white/10">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`
                  block
                  text-center
                  px-3
                  py-2
                  text-xs
                  font-medium
                  transition-colors
                  duration-300
                  sm:px-4
                  sm:py-3
                  sm:text-sm
                  ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }
                  ${index < navLinks.length - 1 ? "border-b border-black/5 dark:border-white/5" : ""}
                `}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
