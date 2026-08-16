"use client";

import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

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
}) => {
  return (
    <article
      className="
        glass
        mx-2
        overflow-hidden
        rounded-[20px]
        p-2
        sm:mx-0
        sm:rounded-[26px]
        sm:p-3
      "
    >
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
              h-[180px]
              w-[180px]
              overflow-hidden
              rounded-[16px]
              bg-black/[0.03]
              dark:bg-white/[0.03]
              sm:h-[230px]
              sm:w-[230px]
              sm:rounded-[20px]
              md:h-[210px]
              md:w-[210px]
              lg:h-[280px]
              lg:w-[280px]
            "
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="
                  (max-width: 640px) 180px,
                  (max-width: 1024px) 210px,
                  280px
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
            lg:px-6
            lg:py-5
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
                `}
              />

              {status}
            </div>
          )}

          {/* TITULO */}
          <h3
            className="
              text-xl
              font-black
              tracking-[-0.03em]
              text-[#151515]
              dark:text-white
              sm:text-2xl
              lg:text-3xl
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
              lg:mt-4
              lg:text-base
              lg:leading-7
            "
          >
            {description}
          </p>

          {/* TECNOLOGIAS */}
          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2 lg:mt-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
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
                  lg:px-3
                  lg:py-1.5
                  lg:text-xs
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BOTONES */}
          {(demo || github) && (
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 lg:mt-6 lg:gap-3">
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
                    hover:shadow-lg
                    dark:bg-white
                    dark:text-black
                    sm:rounded-xl
                    sm:py-2.5
                    sm:text-xs
                    lg:px-4
                    lg:py-3
                    lg:text-sm
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
                    lg:px-4
                    lg:py-3
                    lg:text-sm
                  "
                >
                  <FaGithub size={13} />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;