"use client";
import React from "react";
import Image from "next/image";

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

const AboutSection = () => {
  return (
    <section className="text-white scroll-mt-32" id="about">
      <h2 className="section-title text-center text-4xl font-bold text-white mb-6">
        Sobre mí
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
            Me encuentro cursando el último año de la Tecnicatura Universitaria
            en Desarrollo de Aplicaciones Informáticas, con interés en el
            desarrollo web, las APIs REST y las bases de datos.
            <br />
            <br />
            Durante más de 14 años me desempeñé como Oficial de la Fuerza Aérea
            Argentina, donde adquirí experiencia en liderazgo, trabajo en
            equipo, gestión de recursos, planificación y resolución de
            problemas en entornos de alta responsabilidad.
            <br />
            <br />
            Actualmente me encuentro ampliando mi perfil profesional hacia el
            sector tecnológico, desarrollando proyectos académicos y personales
            utilizando tecnologías como HTML, CSS, JavaScript, React, Node.js,
            MySQL, Git y herramientas de desarrollo web modernas.
            <br />
            <br />
            Mi objetivo es continuar creciendo como desarrollador,
            participando en proyectos que me permitan aplicar conocimientos
            técnicos, aprender nuevas tecnologías y aportar soluciones de valor.
          </p>
        </div>
      </div>

      <div className="text-center mt-4 px-4">
        <h3 className="text-3xl font-bold mb-8">Tecnologías</h3>

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