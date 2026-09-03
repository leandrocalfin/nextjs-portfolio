"use client";

import React from "react";
import { useInView } from "../useInView";
import { useLanguage } from "../languageContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import { SiMysql, SiExpress } from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-[#151515] dark:text-white" />,
  },
];

const AboutSection = () => {
  const { t } = useLanguage();
  const title = useInView();
  const textBlock = useInView();
  const codeBlock = useInView();
  const techs = useInView();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-2 lg:pb-10"
    >
      {/* GLOW IZQUIERDO */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-24
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
          top-40
          h-48
          w-48
          rounded-full
          bg-violet-500/10
          blur-2xl

          hidden
          lg:block
          lg:-right-40
          lg:top-1/3
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[90px]
        "
      />

      {/* TITULO */}
      <div
        ref={title.ref}
        className={`animate-on-scroll mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14 ${title.isVisible ? "is-visible" : ""}`}
      >
        <div className="relative inline-block">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-[#151515] dark:text-white sm:text-3xl lg:text-3xl">
            {t.aboutTitle}
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-blue-500" />
        </div>
      </div>

      {/* ABOUT + CODE */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {/* TEXTO */}
        <div
          ref={textBlock.ref}
          className={`
            animate-on-scroll from-left
            glass mx-2 rounded-[20px] p-4
            sm:mx-0 sm:rounded-[28px] sm:p-5
            lg:col-span-3 lg:p-5
            ${textBlock.isVisible ? "is-visible" : ""}
          `}
        >
          <p className="text-justify text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:text-sm sm:leading-7 lg:text-sm lg:leading-6">
            {t.aboutText1}
          </p>

          <p className="mt-3 text-justify text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-4 lg:text-sm lg:leading-6">
            {t.aboutText2}
          </p>

          <p className="mt-3 text-justify text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-4 lg:text-sm lg:leading-6">
            {t.aboutText3}
          </p>

          <p className="mt-3 text-justify text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-4 lg:text-sm lg:leading-6">
            {t.aboutText4}
          </p>
        </div>

        {/* EDITOR */}
        <div
          ref={codeBlock.ref}
          className={`
            animate-on-scroll from-right
            mx-2 overflow-hidden rounded-[20px] border border-black/10 bg-[#111111] shadow-2xl
            dark:border-white/10
            sm:mx-0 sm:rounded-[28px]
            lg:col-span-2
            ${codeBlock.isVisible ? "is-visible" : ""}
          `}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
            </div>

            <span className="text-[10px] text-gray-500 sm:text-xs">
              developer.js
            </span>
          </div>

          <div className="overflow-x-auto p-4 font-mono text-[10px] leading-5 sm:p-5 sm:text-[12px] sm:leading-6 md:text-[11px] lg:p-5 lg:text-[13px] lg:leading-6">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">developer</span>{" "}
              <span className="text-white">= {"{"}</span>
            </p>

            <p className="pl-4 sm:pl-5">
              <span className="text-cyan-300">name</span>
              <span className="text-white">: </span>
              <span className="text-green-300">
                &quot;Leandro Calfin&quot;
              </span>
              <span className="text-white">,</span>
            </p>

            <p className="pl-4 sm:pl-5">
              <span className="text-cyan-300">role</span>
              <span className="text-white">: </span>
              <span className="text-green-300">
                &quot;Full Stack Developer&quot;
              </span>
              <span className="text-white">,</span>
            </p>

            <p className="pl-4 sm:pl-5">
              <span className="text-cyan-300">location</span>
              <span className="text-white">: </span>
              <span className="text-green-300">
                &quot;Argentina&quot;
              </span>
              <span className="text-white">,</span>
            </p>

            <p className="pl-4 sm:pl-5">
              <span className="text-cyan-300">stack</span>
              <span className="text-white">: [</span>
            </p>

            <p className="pl-8 text-green-300 sm:pl-10">
              &quot;React&quot;,
            </p>

            <p className="pl-8 text-green-300 sm:pl-10">
              &quot;Next.js&quot;,
            </p>

            <p className="pl-8 text-green-300 sm:pl-10">
              &quot;Node.js&quot;,
            </p>

            <p className="pl-8 text-green-300 sm:pl-10">
              &quot;Express&quot;,
            </p>

            <p className="pl-8 text-green-300 sm:pl-10">
              &quot;MySQL&quot;
            </p>

            <p className="pl-4 text-white sm:pl-5">],</p>

            <p className="pl-4 sm:pl-5">
              <span className="text-cyan-300">learning</span>
              <span className="text-white">: </span>
              <span className="text-green-300">
                &quot;Always&quot;
              </span>
            </p>

            <p className="text-white">
              {"}"};
            </p>
          </div>
        </div>
      </div>

      {/* TECNOLOGIAS */}
      <div
        ref={techs.ref}
        className={`animate-on-scroll mt-10 sm:mt-12 lg:mt-14 ${techs.isVisible ? "is-visible" : ""}`}
      >
        <div className="mb-6 text-center sm:mb-8 lg:mb-8">
          <h3 className="text-xl font-bold tracking-tight text-[#151515] dark:text-white lg:text-xl">
            {t.technologiesTitle}
          </h3>

          <p className="mx-auto mt-2 max-w-xl px-4 text-xs text-gray-500 dark:text-gray-400 sm:mt-3 sm:text-sm">
            {t.technologiesText}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-3 sm:px-0 md:grid-cols-5">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="
                glass
                group
                relative
                flex
                min-h-[70px]
                cursor-default
                flex-col
                items-center
                justify-center
                gap-1.5
                overflow-hidden
                rounded-xl
                border
                border-black/5
                p-2
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:-translate-y-1.5
                dark:border-white/5
                dark:group-hover:text-blue-400
                sm:min-h-[84px]
                sm:rounded-2xl
                sm:p-3
                md:min-h-[92px]
                lg:min-h-[92px]
              "
            >
              {/* GLOW HOVER */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500/0
                  via-transparent
                  to-violet-500/0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:from-blue-500/20
                  group-hover:to-violet-500/20
                  group-hover:opacity-100
                "
              />

              {/* ICONO EN CHIP */}
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-black/5
                  bg-white/50
                  text-xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-blue-500/40
                  group-hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  sm:h-9
                  sm:w-9
                  sm:text-2xl
                "
              >
                {tech.icon}
              </div>

              <p
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                uppercase
                  tracking-wide
                  text-gray-700
                  transition-colors
                  duration-300
                  group-hover:text-blue-500
                  dark:text-gray-200
                  dark:group-hover:text-blue-400
                  sm:text-[11px]
                "
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
