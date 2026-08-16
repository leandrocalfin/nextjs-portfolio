"use client";

import React from "react";
import { motion } from "framer-motion";
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

  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-12 sm:py-20 lg:py-24"
    >
      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14"
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-500 sm:text-xs">
          {t.aboutEyebrow}
        </p>

        <h2 className="text-3xl font-black tracking-[-0.03em] text-[#151515] dark:text-white sm:text-4xl md:text-4xl lg:text-5xl">
          {t.aboutTitle}
        </h2>
      </motion.div>

      {/* ABOUT + CODE */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            glass
            mx-2
            rounded-[20px]
            p-4
            sm:mx-0
            sm:rounded-[28px]
            sm:p-5
            lg:p-8
          "
        >
          <p className="text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:text-sm sm:leading-7 lg:text-lg lg:leading-8">
            {t.aboutText1}
          </p>

          <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-5 lg:text-lg lg:leading-8">
            {t.aboutText2}
          </p>

          <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-5 lg:text-lg lg:leading-8">
            {t.aboutText3}
          </p>

          <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-sm sm:leading-7 lg:mt-5 lg:text-lg lg:leading-8">
            {t.aboutText4}
          </p>
        </motion.div>

        {/* EDITOR */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mx-2
            overflow-hidden
            rounded-[20px]
            border
            border-black/10
            bg-[#111111]
            shadow-2xl
            dark:border-white/10
            sm:mx-0
            sm:rounded-[28px]
          "
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

          <div className="overflow-x-auto p-4 font-mono text-[10px] leading-5 sm:p-5 sm:text-[12px] sm:leading-6 md:text-[11px] lg:p-8 lg:text-[15px] lg:leading-7">
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
        </motion.div>
      </div>

      {/* TECNOLOGIAS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 sm:mt-14 lg:mt-20"
      >
        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-[#151515] dark:text-white lg:text-3xl">
            {t.technologiesTitle}
          </h3>

          <p className="mx-auto mt-2 max-w-xl px-4 text-xs text-gray-500 dark:text-gray-400 sm:mt-3 sm:text-sm">
            {t.technologiesText}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-3 sm:px-0 md:grid-cols-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="
                glass
                flex
                min-h-[76px]
                cursor-default
                flex-col
                items-center
                justify-center
                rounded-xl
                p-2
                sm:min-h-[90px]
                sm:rounded-2xl
                sm:p-3
                md:min-h-[100px]
                lg:min-h-[120px]
                lg:p-4
              "
            >
              <div className="mb-1.5 text-2xl sm:mb-2 sm:text-3xl lg:mb-3 lg:text-4xl">
                {tech.icon}
              </div>

              <p className="text-[11px] font-semibold text-[#151515] dark:text-white sm:text-xs lg:text-sm">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;