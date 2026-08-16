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
        overflow-hidden
        rounded-[26px]
        p-3
      "
    >
      <div
        className={`
          grid
          items-center
          gap-5
          md:grid-cols-2
          lg:gap-6
          ${reverse ? "md:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGEN */}
        <div className="flex w-full items-center justify-center py-3">
          <div
            className="
              group
              relative
              h-[220px]
              w-[220px]
              overflow-hidden
              rounded-[20px]
              bg-black/[0.03]
              dark:bg-white/[0.03]
              sm:h-[230px]
              sm:w-[230px]
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
                  (max-width: 640px) 220px,
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
                  text-sm
                  text-gray-400
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
            py-4
            sm:px-4
            md:px-3
            lg:px-6
            lg:py-5
          "
        >
          {status && (
            <div
              className="
                mb-4
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-white/50
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-600
                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-300
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

          <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-black/10
                  bg-black/[0.03]
                  px-2.5
                  py-1
                  text-[10px]
                  font-medium
                  text-gray-600
                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-gray-300
                  lg:px-3
                  lg:py-1.5
                  lg:text-xs
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {(demo || github) && (
            <div className="mt-5 flex flex-wrap gap-2 lg:mt-6 lg:gap-3">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#151515]
                    px-3
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    dark:bg-white
                    dark:text-black
                    lg:px-4
                    lg:py-3
                    lg:text-sm
                  "
                >
                  <FaExternalLinkAlt size={12} />
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
                    gap-2
                    rounded-xl
                    border
                    border-black/10
                    bg-white/40
                    px-3
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#151515]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:border-white/10
                    dark:bg-white/[0.05]
                    dark:text-white
                    lg:px-4
                    lg:py-3
                    lg:text-sm
                  "
                >
                  <FaGithub size={14} />
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