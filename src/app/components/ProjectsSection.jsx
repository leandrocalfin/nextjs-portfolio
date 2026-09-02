"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../languageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: t.photographyProjectTitle,
      description: t.photographyProjectDescription,
      image: "/images/mb-fotografia.webp",

      technologies: [
        "React",
        "Vite",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],

      demo: "https://mb-fotografia.vercel.app/",
      github:
        "https://github.com/leandrocalfin/Portfolio-Fotografo",

      status: t.finishedStatus,
    },

    {
      id: 2,
      title: t.vetProjectTitle,
      description: t.vetProjectDescription,
      image: "/images/veterinaria.webp",

      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MySQL",
      ],

      demo: null,
      github: null,

      status: t.projectStatus,
    },
  ];

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-2 lg:pb-10"
    >
      {/* GLOW IZQUIERDO */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-40
          h-48
          w-48
          rounded-full
          bg-blue-500/15
          blur-3xl

          lg:-left-40
          lg:top-1/4
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
          top-72
          h-48
          w-48
          rounded-full
          bg-violet-500/10
          blur-3xl

          lg:-right-40
          lg:bottom-1/4
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[130px]
        "
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h2
          className="
            text-2xl
            font-black
            tracking-[-0.03em]
            text-[#151515]
            dark:text-white
            sm:text-3xl
            lg:text-3xl
          "
        >
          {t.projectsTitle}
        </h2>

        <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-blue-500" />

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            leading-7
            text-gray-500
            dark:text-gray-400
          "
        >
          {t.projectsText}
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="mx-auto max-w-5xl space-y-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <ProjectCard
              {...project}
              reverse={index % 2 !== 0}
              viewProjectText={t.viewProject}
              previewText={t.previewSoon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;