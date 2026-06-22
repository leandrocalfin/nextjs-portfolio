"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hola, soy Leandro Calfin.{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Estudiante avanzado en Desarrollo de Software.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Enfocado en el desarrollo web y en la construcción de APIs REST. 
          </p>
          <div className="flex gap-4 mt-6 items-center">
            <a
              href="https://github.com/leandrocalfin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:scale-105 transition-transform"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="mailto:lean.calfin@gmail.com"
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:scale-105 transition-transform"
            >
              <FaEnvelope size={22} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full border-2 border-primary-500 hover:bg-slate-800 text-white"
            >
              Descargar CV
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] relative overflow-hidden">
            <Image
              src="/images/miaFormal.jpg"
              alt="Hero Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
