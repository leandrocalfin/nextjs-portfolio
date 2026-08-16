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
    icon: (
      <SiExpress className="text-gray-700 dark:text-gray-200" />
    ),
  },

  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },

  {
    name: "GitHub",
    icon: (
      <FaGithub className="text-[#151515] dark:text-white" />
    ),
  },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28"
    >
      {/* TITULO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-blue-500
          "
        >
          {t.aboutEyebrow}
        </p>

        <h2
          className="
            text-4xl
            font-black
            tracking-[-0.03em]
            text-[#151515]
            dark:text-white
            sm:text-5xl
          "
        >
          {t.aboutTitle}
        </h2>
      </motion.div>

      {/* ABOUT + CODE */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[28px] p-6 sm:p-8"
        >
          <p
            className="
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            {t.aboutText1}
          </p>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            {t.aboutText2}
          </p>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
            {t.aboutText3}
          </p>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-gray-600
              dark:text-gray-400
              sm:text-lg
            "
          >
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
            overflow-hidden
            rounded-[28px]
            border
            border-black/10
            bg-[#111111]
            shadow-2xl
            dark:border-white/10
          "
        >
          {/* BARRA EDITOR */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-5
              py-4
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <span className="text-xs text-gray-500">
              developer.js
            </span>
          </div>

          {/* CODIGO */}
          <div
            className="
              overflow-x-auto
              p-6
              font-mono
              text-sm
              leading-7
              sm:p-8
              sm:text-[15px]
            "
          >
            <p>
              <span className="text-purple-400">
                const
              </span>{" "}

              <span className="text-blue-300">
                developer
              </span>{" "}

              <span className="text-white">
                = {"{"}
              </span>
            </p>

            <p className="pl-5">
              <span className="text-cyan-300">
                name
              </span>

              <span className="text-white">
                :{" "}
              </span>

              <span className="text-green-300">
                &quot;Leandro Calfin&quot;
              </span>

              <span className="text-white">,</span>
            </p>

            <p className="pl-5">
              <span className="text-cyan-300">
                role
              </span>

              <span className="text-white">
                :{" "}
              </span>

              <span className="text-green-300">
                &quot;Full Stack Developer&quot;
              </span>

              <span className="text-white">,</span>
            </p>

            <p className="pl-5">
              <span className="text-cyan-300">
                location
              </span>

              <span className="text-white">
                :{" "}
              </span>

              <span className="text-green-300">
                &quot;Argentina&quot;
              </span>

              <span className="text-white">,</span>
            </p>

            <p className="pl-5">
              <span className="text-cyan-300">
                stack
              </span>

              <span className="text-white">
                : [
              </span>
            </p>

            <p className="pl-10 text-green-300">
              &quot;React&quot;,
            </p>

            <p className="pl-10 text-green-300">
              &quot;Next.js&quot;,
            </p>

            <p className="pl-10 text-green-300">
              &quot;Node.js&quot;,
            </p>

            <p className="pl-10 text-green-300">
              &quot;Express&quot;,
            </p>

            <p className="pl-10 text-green-300">
              &quot;MySQL&quot;
            </p>

            <p className="pl-5 text-white">
              ],
            </p>

            <p className="pl-5">
              <span className="text-cyan-300">
                learning
              </span>

              <span className="text-white">
                :{" "}
              </span>

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
        className="mt-20"
      >
        <div className="mb-10 text-center">
          <h3
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#151515]
              dark:text-white
            "
          >
            {t.technologiesTitle}
          </h3>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            {t.technologiesText}
          </p>
        </div>

        {/* GRID TECNOLOGIAS */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-5
          "
        >
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
                min-h-[120px]
                cursor-default
                flex-col
                items-center
                justify-center
                rounded-2xl
                p-4
              "
            >
              <div className="mb-3 text-4xl">
                {tech.icon}
              </div>

              <p
                className="
                  text-sm
                  font-semibold
                  text-[#151515]
                  dark:text-white
                "
              >
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