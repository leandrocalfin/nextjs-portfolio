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
}) => {
  return (
    <article
      className="
        glass
        overflow-hidden
        rounded-[30px]
        p-3
        sm:p-4
      "
    >
      <div
        className={`
          grid
          items-center
          gap-8
          lg:grid-cols-2
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGEN */}
        <div
          className="
            group
            relative
            min-h-[260px]
            overflow-hidden
            rounded-[24px]
            bg-black/5
            dark:bg-white/5
            sm:min-h-[340px]
          "
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className="
                object-center
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                min-h-[260px]
                items-center
                justify-center
                text-sm
                text-gray-400
                sm:min-h-[340px]
              "
            >
              Preview próximamente
            </div>
          )}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />
        </div>

        {/* INFORMACION */}
        <div
          className="
            flex
            h-full
            flex-col
            justify-center
            px-3
            py-5
            sm:px-5
            lg:px-8
          "
        >
          {/* ESTADO */}
          {status && (
            <div
              className="
                mb-5
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
              text-3xl
              font-black
              tracking-[-0.03em]
              text-[#151515]
              dark:text-white
              sm:text-4xl
            "
          >
            {title}
          </h3>

          {/* DESCRIPCION */}
          <p
            className="
              mt-5
              text-base
              leading-7
              text-gray-600
              dark:text-gray-400
            "
          >
            {description}
          </p>

          {/* TECNOLOGIAS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-black/10
                  bg-black/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-gray-600
                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-gray-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BOTONES */}
          {(demo || github) && (
            <div className="mt-8 flex flex-wrap gap-3">
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
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    dark:bg-white
                    dark:text-black
                  "
                >
                  <FaExternalLinkAlt size={13} />

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
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-[#151515]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:border-white/10
                    dark:bg-white/[0.05]
                    dark:text-white
                  "
                >
                  <FaGithub size={16} />

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