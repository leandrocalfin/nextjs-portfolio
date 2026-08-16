"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { useLanguage } from "../languageContext";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (response.status === 200) {
        console.log("Mensaje enviado.");
        setEmailSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    } finally {
      setSending(false);
    }
  };

  const inputStyles = `
    w-full
    rounded-2xl
    border
    border-black/10
    bg-white/60
    px-4
    py-3.5
    text-sm
    text-[#151515]
    outline-none
    backdrop-blur-md
    transition-all
    duration-300

    placeholder:text-gray-400

    focus:border-blue-500/50
    focus:ring-4
    focus:ring-blue-500/10

    dark:border-white/10
    dark:bg-white/[0.04]
    dark:text-white
    dark:placeholder:text-gray-500
  `;

  const labelStyles = `
    mb-2
    block
    text-sm
    font-semibold
    text-[#151515]
    dark:text-white
  `;

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28"
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
          {t.contactEyebrow}
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
          {t.contactTitle}
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
          ¿Tenés un proyecto, una idea o simplemente querés ponerte en contacto?
          Escribime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            glass
            relative
            overflow-hidden
            rounded-[30px]
            p-7
            sm:p-9
            lg:col-span-5
          "
        >
          {/* GLOW */}
          <div
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-blue-500
              "
            >
              {t.contactWorkTogether}
            </p>

            <h3
              className="
                mt-4
                max-w-md
                text-3xl
                font-black
                tracking-[-0.03em]
                text-[#151515]
                dark:text-white
                sm:text-4xl
              "
            >
              {t.contactSubtitle}
            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-base
                leading-7
                text-gray-600
                dark:text-gray-400
              "
            >
              {t.contactText}
            </p>

            {/* EMAIL */}
            <a
              href="mailto:lean.calfin@gmail.com"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-[#151515]
                transition-colors
                hover:text-blue-500
                dark:text-white
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-black/[0.05]
                  dark:bg-white/[0.07]
                "
              >
                <FaEnvelope size={16} />
              </span>

              lean.calfin@gmail.com
            </a>

            {/* REDES */}
            <div className="mt-8 flex gap-3">
              <Link
                href="https://github.com/leandrocalfin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/10
                  bg-white/40
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                "
              >
                <FaGithub size={19} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/10
                  bg-white/40
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                "
              >
                <FaLinkedin size={19} />
              </Link>

              <a
                href="mailto:lean.calfin@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-black/10
                  bg-white/40
                  text-[#151515]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white
                "
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            glass
            rounded-[30px]
            p-6
            sm:p-8
            lg:col-span-7
          "
        >
          {emailSubmitted ? (
            <div
              className="
                flex
                min-h-[420px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500/10
                  text-3xl
                  font-bold
                  text-green-500
                "
              >
                ✓
              </div>

              <h4
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-[#151515]
                  dark:text-white
                "
              >
                {t.messageSent}
              </h4>

              <p
                className="
                  mt-3
                  max-w-md
                  leading-7
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {t.messageSentText}
              </p>

              <button
                type="button"
                onClick={() => setEmailSubmitted(false)}
                className="
                  mt-7
                  rounded-xl
                  border
                  border-black/10
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#151515]
                  transition
                  hover:bg-black/[0.04]
                  dark:border-white/10
                  dark:text-white
                  dark:hover:bg-white/[0.05]
                "
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className={labelStyles}
                >
                  {t.formName}
                </label>

                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className={inputStyles}
                  placeholder={t.placeholderName}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className={labelStyles}
                >
                  {t.formEmail}
                </label>

                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className={inputStyles}
                  placeholder={t.placeholderEmail}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={labelStyles}
                >
                  {t.formMessage}
                </label>

                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className={`${inputStyles} resize-none`}
                  placeholder={t.placeholderMessage}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#151515]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  dark:bg-white
                  dark:text-black
                "
              >
                {sending ? "Enviando..." : t.sendMessage}

                {!sending && (
                  <FaArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;