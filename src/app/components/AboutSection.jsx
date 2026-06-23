"use client";
import React from "react";
import Image from "next/image";
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

import {
  SiMysql,
  SiExpress,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
];

const AboutSection = () => {const { t } = useLanguage();
  return (
    <section className="text-[#1F2937] dark:text-white scroll-mt-32" id="about">
      <h2 className="text-center text-4xl font-bold text-[#1F2937] dark:text-white mb-6">
        {t.aboutTitle}
      </h2>

      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/probando.png"
          width={500}
          height={500}
          alt="Desarrollador"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg text-justify">
            {t.aboutText1}
            {t.aboutText2}
            {t.aboutText3}
            {t.aboutText4}
          </p>
        </div>
      </div>

      <div className="text-center mt-4 px-4">
        <h3 className="text-3xl font-bold mb-8 text-[#1F2937] dark:text-white">{t.technologiesTitle}</h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="text-6xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;