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
      image: "/images/mb-fotografia.png",

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
      image: "/images/veterinaria.png",

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
      className="relative scroll-mt-20 py-16 sm:py-20"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
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
          {t.projectsEyebrow}
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
          {t.projectsTitle}
        </h2>

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