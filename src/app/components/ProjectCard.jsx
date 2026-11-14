"use client";

import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiNextdotjs,
  SiMysql,
  SiReactrouter,
  SiLeaflet,
  SiFramer,
  SiSupabase,
  SiBootstrap,
  SiCloudflare,
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
  "React Router": <SiReactrouter className="text-red-500" />,
  Leaflet: <SiLeaflet className="text-green-600" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  Supabase: <SiSupabase className="text-[#3ECF8E]" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,
  Cloudflare: <SiCloudflare className="text-[#F38020]" />,
  "Cloudflare Workers": <SiCloudflare className="text-[#F38020]" />,
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  demo,
  github,
  status,
  viewProjectText,
  previewText,
  delay = 0,
}) => {
  const { ref, isVisible } = useInView();
  const isInProgress = status ? /proceso|progress/i.test(status) : !demo;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`
        animate-on-scroll pop-in
        glass group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-black/5
        transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]
        dark:border-white/5
        dark:hover:border-white/15
        dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
        sm:rounded-[26px]
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
          group-hover:from-blue-500/10
          group-hover:to-violet-500/10
          group-hover:opacity-100
          sm:rounded-[26px]
        "
      />

      {/* IMAGEN */}
      <div
        className="
          relative
          flex
          h-36
          w-full
          shrink-0
          items-center
          justify-center
          overflow-hidden
          border-b
          border-black/5
          bg-black/[0.03]
          dark:border-white/5
          dark:bg-white/[0.03]
          sm:h-44
          lg:h-40
          xl:h-48
        "
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-contain
              object-center
              p-3
              transition-transform
              duration-500
              group-hover:scale-105
              sm:p-4
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

        {/* DESCRIPCION (hover, solo area del logo) */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            flex
            overflow-y-auto
            bg-[#0f0f17]/95
            p-2
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
            group-focus-within:opacity-100
            sm:p-3
          "
        >
          <div className="m-auto flex w-full flex-col items-center justify-center gap-1 sm:gap-2">
            <p className="text-center text-[11px] leading-4 text-gray-100 sm:text-[12px] sm:leading-5">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* INFORMACION */}
      <div
        className="
          flex
          flex-1
          flex-col
          px-4
          pb-4
          pt-3
          sm:px-5
          sm:pb-5
          sm:pt-4
        "
      >
        {/* ESTADO + TITULO (misma linea) */}
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <h3
            className="
              text-base
              font-black
              tracking-[-0.03em]
              text-[#151515]
              dark:text-white
              sm:text-lg
              lg:text-lg
            "
          >
            {title}
          </h3>

          {status && (
            <div
              className="
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-1
                rounded-full
                border
                border-black/10
                bg-white/50
                px-2
                py-0.5
                text-[8px]
                font-medium
                text-gray-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
                sm:gap-1.5
                sm:px-2.5
                sm:py-1
                sm:text-[9px]
              "
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${
                    isInProgress
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }
                `}
              />

              {status}
            </div>
          )}
        </div>

        {/* TECNOLOGIAS */}
        <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                inline-flex
                items-center
                gap-1
                rounded-md
                border
                border-black/10
                bg-black/[0.03]
                px-1.5
                py-0.5
                text-[8px]
                font-medium
                text-gray-600
                dark:border-white/10
                dark:bg-white/[0.05]
                dark:text-gray-300
                sm:rounded-lg
                sm:px-2
                sm:text-[9px]
              "
            >
              {techIcons[tech]}
              {tech}
            </span>
          ))}
        </div>

        {/* BOTONES */}
        {(demo || github) && (
          <div className="mt-auto flex flex-wrap justify-start gap-2 pt-3 sm:gap-2 sm:pt-4">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-1
                  overflow-hidden
                  rounded-lg
                  border
                  border-blue-500/40
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/60
                  hover:shadow-[0_0_22px_rgba(99,102,241,0.5)]
                  sm:rounded-xl
                  sm:px-3
                  sm:py-2
                  sm:text-[11px]
                  sm:gap-1.5
                "
              >
                <FaArrowUpRightFromSquare size={9} />
                {viewProjectText}
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  glass
                  shadow-[0_8px_32px_rgba(0,0,0,0.06)]
                  inline-flex
                  items-center
                  gap-1
                  rounded-lg
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-semibold
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  dark:text-white
                  dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                  sm:rounded-xl
                  sm:px-3
                  sm:py-2
                  sm:text-[11px]
                  sm:gap-1.5
                "
              >
                <FaGithub size={10} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

    </article>
  );
};

export default ProjectCard;
