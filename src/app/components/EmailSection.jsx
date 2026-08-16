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

    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
    rounded-xl
    border
    border-black/10
    bg-white/60
    px-3
    py-2.5
    text-xs
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

    sm:rounded-2xl
    sm:px-4
    sm:py-3.5
    sm:text-sm
  `;

  const labelStyles = `
    mb-1.5
    block
    text-xs
    font-semibold
    text-[#151515]
    dark:text-white

    sm:mb-2
    sm:text-sm
  `;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 py-12 sm:py-20 lg:py-24"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 lg:mb-16"
      >
        <p
          className="
            mb-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-blue-500
            sm:mb-3
            sm:text-xs
          "
        >
          {t.contactEyebrow}
        </p>

        <h2
          className="
            text-3xl
            font-black
            tracking-[-0.03em]
            text-[#151515]
            dark:text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          {t.contactTitle}
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            px-4
            text-xs
            leading-6
            text-gray-500
            dark:text-gray-400
            sm:mt-4
            sm:px-0
            sm:text-base
            sm:leading-7
          "
        >
          {t.contactIntro}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            glass
            relative
            mx-2
            overflow-hidden
            rounded-[20px]
            p-4
            sm:mx-0
            sm:rounded-[30px]
            sm:p-7
            lg:col-span-5
            lg:p-9
          "
        >
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
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-blue-500
                sm:text-sm
              "
            >
              {t.contactWorkTogether}
            </p>

            <h3
              className="
                mt-3
                max-w-md
                text-2xl
                font-black
                tracking-[-0.03em]
                text-[#151515]
                dark:text-white
                sm:mt-4
                sm:text-3xl
                lg:text-4xl
              "
            >
              {t.contactSubtitle}
            </h3>

            <p
              className="
                mt-4
                max-w-md
                text-xs
                leading-6
                text-gray-600
                dark:text-gray-400
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              {t.contactText}
            </p>

            {/* REDES */}
            <div className="mt-5 flex gap-2 sm:mt-8 sm:gap-3">
              <Link
                href="https://github.com/leandrocalfin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
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
                  sm:h-11
                  sm:w-11
                  sm:rounded-xl
                "
              >
                <FaGithub size={17} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
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
                  sm:h-11
                  sm:w-11
                  sm:rounded-xl
                "
              >
                <FaLinkedin size={17} />
              </Link>

              <a
                href="mailto:lean.calfin@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
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
                  sm:h-11
                  sm:w-11
                  sm:rounded-xl
                "
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            glass
            mx-2
            rounded-[20px]
            p-4
            sm:mx-0
            sm:rounded-[30px]
            sm:p-6
            lg:col-span-7
            lg:p-8
          "
        >
          {emailSubmitted ? (
            <div
              className="
                flex
                min-h-[280px]
                flex-col
                items-center
                justify-center
                text-center
                sm:min-h-[420px]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500/10
                  text-2xl
                  font-bold
                  text-green-500
                  sm:h-16
                  sm:w-16
                  sm:text-3xl
                "
              >
                ✓
              </div>

              <h4
                className="
                  mt-4
                  text-xl
                  font-bold
                  text-[#151515]
                  dark:text-white
                  sm:mt-5
                  sm:text-2xl
                "
              >
                {t.messageSent}
              </h4>

              <p
                className="
                  mt-2
                  max-w-md
                  text-xs
                  leading-6
                  text-gray-500
                  dark:text-gray-400
                  sm:mt-3
                  sm:text-base
                  sm:leading-7
                "
              >
                {t.messageSentText}
              </p>

              <button
                type="button"
                onClick={() => setEmailSubmitted(false)}
                className="
                  mt-5
                  rounded-lg
                  border
                  border-black/10
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-[#151515]
                  transition
                  hover:bg-black/[0.04]
                  dark:border-white/10
                  dark:text-white
                  dark:hover:bg-white/[0.05]
                  sm:mt-7
                  sm:rounded-xl
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                {t.sendAnotherMessage}
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 sm:mb-5">
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

              <div className="mb-4 sm:mb-5">
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

              <div className="mb-5 sm:mb-6">
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
                  rows={5}
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
                  rounded-xl
                  bg-[#151515]
                  px-5
                  py-3
                  text-xs
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
                  sm:rounded-2xl
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                {sending ? t.sendingMessage : t.sendMessage}

                {!sending && (
                  <FaArrowRight
                    size={12}
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