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

import { SiMysql, SiExpress } from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400 dark:text-gray-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#1F2937] dark:text-white" /> },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-20 pt-10 pb-8 text-[#1F2937] dark:text-white"
    >
      <h2 className="text-center text-4xl font-bold text-[#1F2937] dark:text-white mb-14">
        {t.aboutTitle}
      </h2>

      <div className="md:grid md:grid-cols-2 gap-8 items-start px-4 xl:px-16 xl:gap-16">
        <Image
          src="/images/probando.png"
          width={500}
          height={500}
          alt="Desarrollador"
          className="w-full max-w-[190px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[500px] mx-auto"
        />

        <div className="mt-6 md:mt-0 mx-auto md:mx-0 text-left flex flex-col h-full max-w-[620px] rounded-2xl border border-[#d6d0c5] dark:border-[#33353F] bg-[#F3EDE2] dark:bg-[#181818] px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-[#007ACC] hover:shadow-[0_16px_36px_rgba(0,122,204,0.20)]">
          <p className="text-[#4B5563] dark:text-[#ADB7BE] text-base lg:text-lg text-justify leading-8">
            {t.aboutText1}
            <br />
            <br />
            {t.aboutText2}
            <br />
            <br />
            {t.aboutText3}
            <br />
            <br />
            {t.aboutText4}
          </p>
        </div>
      </div>

      <div className="text-center mt-12 px-4">
        <h3 className="text-3xl font-bold mb-10 text-[#1F2937] dark:text-white">
          {t.technologiesTitle}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-5xl mx-auto justify-items-center">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="w-[125px] sm:w-[145px] md:w-[160px] flex flex-col items-center justify-center min-h-[95px] sm:min-h-[110px] rounded-xl border border-[#d6d0c5] dark:border-[#33353F] bg-[#F3EDE2] dark:bg-[#181818] px-3 py-3 sm:px-4 sm:py-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:scale-[1.04] hover:border-[#007ACC] hover:shadow-[0_0_22px_rgba(0,122,204,0.20)] cursor-pointer"
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <p className="text-sm font-bold text-[#1F2937] dark:text-white">
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