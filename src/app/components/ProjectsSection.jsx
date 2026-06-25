"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../languageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      title: t.vetProjectTitle,
      description: t.vetProjectDescription,
    },
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-32">
      <h2 className="text-center text-4xl font-bold mt-20 mb-12 text-[#1F2937] dark:text-white">
        {t.projectsTitle}
      </h2>

      <div className="flex justify-center py-6">
        <ProjectTag label={t.projectStatus} />
      </div>

      <ul ref={ref} className="max-w-4xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;