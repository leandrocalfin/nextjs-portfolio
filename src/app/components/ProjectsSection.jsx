"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useInView } from "../useInView";
import { useLanguage } from "../languageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const header = useInView();
  const projects = useInView();

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
          -left-16
          top-40
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-xl

          sm:-left-24
          sm:h-48
          sm:w-48
          sm:bg-blue-500/15

          lg:-left-40
          lg:top-1/4
          lg:h-[500px]
          lg:w-[500px]
          lg:bg-blue-500/15
          lg:blur-[80px]
        "
      />

      {/* GLOW DERECHO */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-72
          h-32
          w-32
          rounded-full
          bg-violet-500/8
          blur-xl

          sm:-right-24
          sm:h-48
          sm:w-48
          sm:bg-violet-500/10

          lg:-right-40
          lg:bottom-1/4
          lg:h-[450px]
          lg:w-[450px]
          lg:bg-violet-500/10
          lg:blur-[90px]
        "
      />

      {/* HEADER */}
      <div
        ref={header.ref}
        className={`animate-on-scroll mx-auto mb-16 max-w-3xl text-center ${header.isVisible ? "is-visible" : ""}`}
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
            text-xs
            leading-5
            text-gray-500
            dark:text-gray-400
            sm:text-base
            sm:leading-7
          "
        >
          {t.projectsText}
        </p>
      </div>

      {/* PROJECTS */}
      <div ref={projects.ref} className={`mx-auto max-w-5xl space-y-8 md:max-w-6xl lg:max-w-6xl ${projects.isVisible ? "" : ""}`}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            reverse={index % 2 !== 0}
            viewProjectText={t.viewProject}
            previewText={t.previewSoon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
