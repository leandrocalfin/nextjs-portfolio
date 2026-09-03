"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";
import { useLanguage } from "../languageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        flex
        max-md:min-h-[55svh]
        flex-col
        justify-center
        px-4
        pt-14
        pb-8

        sm:px-6
        sm:pt-16
        sm:pb-10

        md:flex
        md:min-h-[650px]
        md:items-center
        md:px-8
        md:pt-16
        md:pb-10

        lg:min-h-[105svh]
        lg:px-10
      "
    >
      {/* GLOW IZQUIERDO */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          h-48
          w-48
          rounded-full
          bg-blue-500/15
          blur-2xl

          hidden
          lg:block
          lg:-left-40
          lg:top-16
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[80px]
        "
      />

      {/* GLOW DERECHO */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-24
          h-48
          w-48
          rounded-full
          bg-violet-500/10
          blur-2xl

          hidden
          lg:block
          lg:-right-40
          lg:bottom-0
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[90px]
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* DISPONIBILIDAD - MOBILE */}
        <div
          className={`
            pt-12 mb-8 flex justify-start md:hidden
            transition-opacity duration-500
            ${mounted ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              bg-white/50
              px-3
              py-1.5
              text-[10px]
              text-gray-600

              dark:border-white/10
              dark:bg-white/5
              dark:text-gray-300
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-75
                "
              />
              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />
            </span>
            {t.heroAvailability}
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-12
            items-center
            gap-3
            sm:gap-5
            md:gap-8
            lg:gap-16
          "
        >
          {/* TEXTO */}
          <div
            className={`
              col-span-8 sm:col-span-7 md:col-span-7
              transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {/* DISPONIBILIDAD */}
            <div
              className={`
                mb-4 hidden md:inline-flex items-center gap-2 rounded-full
                border border-black/10 bg-white/50 px-3 py-1.5 text-[10px] text-gray-600
                dark:border-white/10 dark:bg-white/5 dark:text-gray-300
                sm:text-xs md:px-4 md:py-2 md:text-sm
                transition-opacity duration-500 delay-200
                ${mounted ? "opacity-100" : "opacity-0"}
              `}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-green-500
                  "
                />
              </span>

              {t.heroAvailability}
            </div>

            {/* TITULO */}
            <h1
              className="
                max-w-4xl
                text-[26px]
                font-black
                leading-[0.98]
                tracking-[-0.04em]
                text-[#151515]

                dark:text-white

                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              <span className="block">
                {t.heroTitle}
              </span>

              <span className="gradient-text mt-4 block">
                <TypeAnimation
                  key={t.heroSubtitle}
                  sequence={[
                    t.heroSubtitle,
                  ]}
                  wrapper="span"
                  speed={40}
                  cursor
                />
              </span>
            </h1>

            {/* DESCRIPCION */}
            <p
              className={`
                mt-6 max-w-2xl text-[11px] leading-5 text-gray-600
                dark:text-gray-400
                sm:text-xs
                md:mt-8 md:text-sm md:leading-6
                lg:text-lg lg:leading-7
                transition-all duration-600 delay-300
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              {t.heroText}
            </p>

            {/* BOTONES */}
            <div
              className={`
                mt-8 flex flex-wrap items-center gap-2
                md:mt-10 md:gap-3
                transition-all duration-600 delay-[400ms]
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              {/* CV */}
              <a
                href="/CV_Leandro_Calfin.pdf"
                download
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-1.5
                  overflow-hidden
                  rounded-lg
                  border
                  border-blue-500/40
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-400/60
                  hover:shadow-[0_0_22px_rgba(99,102,241,0.5)]

                  sm:text-xs

                  md:rounded-xl
                  md:px-5
                  md:py-3
                  md:text-sm
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-lg
                    bg-gradient-to-br
                    from-violet-500/0
                    via-transparent
                    to-white/20
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    md:rounded-xl
                  "
                />

                <FaDownload size={11} className="relative" />

                <span className="relative">{t.downloadCV}</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/leandrocalfin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  glass
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-[#151515]
                  transition-all
                  duration-300

                  hover:-translate-y-1

                  dark:text-white

                  md:h-12
                  md:w-12
                  md:rounded-xl
                "
              >
                <FaGithub className="text-[15px] md:text-[20px]" />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:lean.calfin@gmail.com"
                aria-label="Email"
                className="
                  glass
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-[#151515]
                  transition-all
                  duration-300

                  hover:-translate-y-1

                  dark:text-white

                  md:h-12
                  md:w-12
                  md:rounded-xl
                "
              >
                <FaEnvelope className="text-[14px] md:text-[18px]" />
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div
            className={`
              col-span-4 flex justify-end
              sm:col-span-5 md:col-span-5
              transition-all duration-800 delay-200
              ${mounted ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 translate-x-8"}
            `}
          >
            <div className="relative">
              {/* GLOW FOTO */}
              <div
                className="
                  absolute
                  -inset-4
                  -z-10
                  rounded-full
                  bg-blue-500/10
                  blur-xl

                  hidden
                  md:block
                  md:-inset-8
                  md:blur-2xl
                "
              />

              {/* MARCO FOTO */}
              <div
                className="
                  glass
                  relative
                  h-[165px]
                  w-[115px]
                  overflow-hidden
                  rounded-[22px]
                  p-1

                  sm:h-[210px]
                  sm:w-[150px]

                  md:h-[300px]
                  md:w-[250px]
                  md:rounded-[32px]
                  md:p-2

                  lg:h-[400px]
                  lg:w-[340px]
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[18px]

                    md:rounded-[26px]
                  "
                >
                  <Image
                    src="/images/miaFormal.webp"
                    alt="Leandro Calfin"
                    fill
                    priority
                    sizes="
                      (max-width: 640px) 115px,
                      (max-width: 768px) 150px,
                      (max-width: 1024px) 250px,
                      380px
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700

                      hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* UBICACION - TABLET Y DESKTOP */}
              <div
                className="
                  glass
                  absolute
                  -bottom-5
                  -left-7
                  hidden
                  rounded-2xl
                  px-5
                  py-4

                  md:block
                  animate-float
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-gray-500

                    dark:text-gray-400
                  "
                >
                  {t.heroLocationLabel}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-[#151515]

                    dark:text-white
                  "
                >
                  {t.heroLocation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL - DESKTOP */}
      <a
        href="#about"
        className={`
          absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2
          text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500
          lg:flex
          animate-bounce-slow
          transition-opacity duration-500 delay-1000
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {t.scrollText}

        <FaArrowDown size={12} />
      </a>
    </section>
  );
};

export default HeroSection;
