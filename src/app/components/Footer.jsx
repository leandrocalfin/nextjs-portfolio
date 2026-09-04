"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../languageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="
        border-t
        border-black/10
        bg-[#fbfbfe]
        px-5
        py-4
        dark:border-white/10
        dark:bg-[#0f0f17]
        sm:px-8
        lg:px-10
      "
    >
      <div className="mx-auto flex min-h-[64px] max-w-6xl flex-col justify-center">
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-2
            md:flex-row
          "
        >
          {/* LOGO + NOMBRE */}
          <Link
            href="#home"
            className="
              flex
              items-center
              gap-3
              transition-opacity
              hover:opacity-70
            "
          >
            <Image
              src="/images/logo.webp"
              alt="Leandro Calfin"
              width={38}
              height={38}
              className="h-7 w-auto object-contain"
            />

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  text-[#151515]
                  dark:text-white
                "
              >
                Leandro Calfin
              </p>

              <p
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {t.footerRole}
              </p>
            </div>
          </Link>

          {/* COPYRIGHT - CENTRO */}
          <p
            className="
              text-center
              text-xs
              text-gray-500
              dark:text-gray-400
            "
          >
            {t.footerText}
          </p>

          {/* REDES */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/leandrocalfin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                border
                border-black/10
                text-[#151515]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                dark:border-white/10
                dark:text-white
              "
            >
              <FaGithub size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                border
                border-black/10
                text-[#151515]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                dark:border-white/10
                dark:text-white
              "
            >
              <FaLinkedin size={13} />
            </a>

            <a
              href="mailto:lean.calfin@gmail.com"
              aria-label="Email"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                border
                border-black/10
                text-[#151515]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                dark:border-white/10
                dark:text-white
              "
            >
              <FaEnvelope size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;