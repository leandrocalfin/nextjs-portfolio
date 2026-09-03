"use client";

import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import { useInView } from "../useInView";

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-500" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Cloudinary: <SiCloudinary className="text-sky-500" />,
  "Next.js": <SiNextdotjs className="text-[#151515] dark:text-white" />,
  MySQL: <SiMysql className="text-blue-400" />,
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  demo,
  github,
  status,
  reverse = false,
  viewProjectText,
  previewText,
  delay = 0,
}) => {
  const { ref, isVisible } = useInView();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`
        animate-on-scroll pop-in
        glass group relative mx-2 overflow-hidden rounded-[20px] border border-black/5 p-2
        transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl
        dark:border-white/5
        sm:mx-0 sm:rounded-[26px] sm:p-3
        ${isVisible ? "is-visible" : ""}
      `}
    >
      {/* GLOW HOVER */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[20px]
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
          sm:rounded-[26px]
        "
      />

      <div
        className={`
          grid
          items-center
          gap-4
          md:grid-cols-2
          lg:gap-6
          ${reverse ? "md:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGEN */}
        <div className="flex w-full items-center justify-center py-2 sm:py-3">
          <div
            className="
              group
              relative
              h-[90px]
              w-[90px]
              overflow-hidden
              rounded-[16px]
              bg-black/[0.03]
              dark:bg-white/[0.03]
              sm:h-[230px]
              sm:w-[230px]
              sm:rounded-[20px]
              md:h-[170px]
              md:w-[170px]
              lg:h-[200px]
              lg:w-[200px]
            "
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="
                  (max-width: 640px) 90px,
                  (max-width: 1024px) 170px,
                  200px
                "
                className="
                  object-contain
                  object-center
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  px-4
                  text-center
                  text-xs
                  text-gray-400
                  sm:text-sm
                "
              >
                {previewText}
              </div>
            )}
          </div>
        </div>

        {/* INFORMACION */}
        <div
          className="
            flex
            h-full
            flex-col
            justify-center
            px-3
            pb-4
            pt-1
            sm:px-4
            sm:py-4
            md:px-3
            lg:px-5
          "
        >
          {/* ESTADO */}
          {status && (
            <div
              className="
                mb-3
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-white/50
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-gray-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                sm:mb-4
                sm:px-3
                sm:py-1.5
                sm:text-xs
                lg:mb-5
              "
            >
              <span
                className={`
                  h-2
                  w-2
                  rounded-full
                  ${
                    demo
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }
                `
              }
              />

              {status}
            </div>
          )}

          {/* TITULO */}
        <h3
          className="
            text-lg
            font-black
            tracking-[-0.03em]
            text-[#151515]
            dark:text-white
            sm:text-xl
            lg:text-xl
          "
        >
          {title}
        </h3>

        {/* DESCRIPCION */}
        <p
          className="
            mt-3
            text-xs
            leading-5
            text-gray-600
            dark:text-gray-400
            sm:text-sm
            sm:leading-6
            lg:mt-3
            lg:text-sm
            lg:leading-6
          "
        >
          {description}
        </p>

        {/* TECNOLOGIAS */}
        <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2 lg:mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-md
                border
                border-black/10
                bg-black/[0.03]
                px-2
                py-1
                text-[9px]
                font-medium
                text-gray-600
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-gray-300
                sm:rounded-lg
                sm:px-2.5
                sm:text-[10px]
                lg:px-2.5
                lg:py-1
                lg:text-[11px]
              "
            >
              {techIcons[tech]}
              {tech}
            </span>
          ))}
        </div>
      </div>
      </div>

      {/* BOTONES */}
      {(demo || github) && (
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 lg:mt-4 lg:gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-[#151515]
                px-3
                py-2
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                dark:bg-white
                dark:text-black
                sm:rounded-xl
                sm:py-2.5
                sm:text-xs
                lg:px-3.5
                lg:py-2.5
                lg:text-xs
              "
            >
              <FaExternalLinkAlt size={11} />
              {viewProjectText}
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-black/10
                bg-white/40
                px-3
                py-2
                text-[10px]
                font-semibold
                text-[#151515]
                transition-all
                duration-300
                hover:-translate-y-1
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-white
                sm:rounded-xl
                sm:py-2.5
                sm:text-xs
                lg:px-3.5
                lg:py-2.5
                lg:text-xs
              "
            >
              <FaGithub size={13} />
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
