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
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-5
        pb-16
        pt-32
        sm:px-8
        lg:px-10
      "
    >
      {/* GLOW IZQUIERDO */}
      <div className="glow -left-40 top-16" />

      {/* GLOW DERECHO */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* DISPONIBILIDAD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-white/50
                px-4
                py-2
                text-sm
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
            </motion.div>

            {/* TITULO */}
            <h1
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-[#151515]
                dark:text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              <span className="block">
                {t.heroTitle}
              </span>

              <span className="gradient-text mt-2 block">
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

            {/* TEXTO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-gray-600
                dark:text-gray-400
                sm:text-lg
                lg:text-xl
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
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* CV */}
              <a
                href="/CV_Leandro_Calfin.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#151515]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  dark:bg-white
                  dark:text-black
                "
              >
                <FaDownload size={14} />
                {t.downloadCV}
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
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  dark:text-white
                "
              >
                <FaGithub size={20} />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:lean.calfin@gmail.com"
                aria-label="Email"
                className="
                  glass
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  dark:text-white
                "
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* FOTO */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 40,
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
              flex
              justify-center
              lg:col-span-5
              lg:justify-end
            "
          >
            <div className="relative">
              <div
                className="
                  absolute
                  -inset-8
                  -z-10
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  glass
                  relative
                  h-[330px]
                  w-[280px]
                  overflow-hidden
                  rounded-[36px]
                  p-2
                  sm:h-[390px]
                  sm:w-[330px]
                  lg:h-[450px]
                  lg:w-[380px]
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[30px]
                  "
                >
                  <Image
                    src="/images/miaFormal.jpg"
                    alt="Leandro Calfin"
                    fill
                    priority
                    sizes="
                      (max-width: 640px) 280px,
                      (max-width: 1024px) 330px,
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

              {/* UBICACION */}
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
                  sm:block
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

        {/* SCROLL */}
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
            -bottom-10
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
            lg:flex
          "
        >
          {t.scrollText}
          <FaArrowDown size={12} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;