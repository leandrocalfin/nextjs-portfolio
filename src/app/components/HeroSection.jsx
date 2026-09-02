"use client";

import React from "react";
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
          blur-3xl

          lg:-left-40
          lg:top-16
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[120px]
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
          blur-3xl

          lg:-right-40
          lg:bottom-0
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[130px]
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* DISPONIBILIDAD - MOBILE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            pt-8
            mb-8
            flex
            justify-start
            md:hidden
          "
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
              backdrop-blur-md

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
        </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              col-span-8
              sm:col-span-7
              md:col-span-7
            "
          >
            {/* DISPONIBILIDAD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mb-4
                hidden
                md:inline-flex
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
                backdrop-blur-md

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300

                sm:text-xs

                md:px-4
                md:py-2
                md:text-sm
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
            </motion.div>

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
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* DESCRIPCION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mt-6
                max-w-2xl
                text-[11px]
                leading-5
                text-gray-600

                dark:text-gray-400

                sm:text-xs

                md:mt-8
                md:text-sm
                md:leading-6

                lg:text-lg
                lg:leading-7
              "
            >
              {t.heroText}
            </motion.p>

            {/* BOTONES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-2

                md:mt-10
                md:gap-3
              "
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
            </motion.div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              col-span-4
              flex
              justify-end

              sm:col-span-5
              md:col-span-5
            "
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
                  blur-2xl

                  md:-inset-8
                  md:blur-3xl
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
                    src="/images/miaFormal.jpg"
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
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL - DESKTOP */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: {
            delay: 1,
            duration: 0.5,
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-xs
          uppercase
          tracking-[0.2em]
          text-gray-400
          dark:text-gray-500

          lg:flex
        "
      >
        {t.scrollText}

        <FaArrowDown size={12} />
      </motion.a>
    </section>
  );
};

export default HeroSection;