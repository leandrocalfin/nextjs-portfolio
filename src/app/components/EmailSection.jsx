"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../languageContext";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    }
  };

  const inputStyles =
    "bg-[#F3EDE2] dark:bg-[#18191E] border border-[#d6d0c5] dark:border-[#33353F] text-[#1F2937] dark:text-gray-100 placeholder-[#6B7280] dark:placeholder-[#9CA2A9] text-base rounded-xl block w-full p-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,122,204,0.18)] focus:border-[#007ACC] focus:shadow-[0_0_20px_rgba(0,122,204,0.18)] transition-all duration-300";

  const labelStyles =
    "text-lg font-bold text-[#1F2937] dark:text-white mb-3 block";

  return (
    <section
      id="contact"
      className="scroll-mt-20 pt-10 pb-8 text-[#1F2937] dark:text-white relative"
    >
      <h2 className="text-center text-4xl font-bold text-[#1F2937] dark:text-white mb-10">
        {t.contactTitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-10 px-4 xl:px-16">
        <div className="z-10">
          <h5 className="text-xl font-bold text-[#1F2937] dark:text-white my-2">
            {t.contactSubtitle}
          </h5>

          <p className="text-[#4B5563] dark:text-[#ADB7BE] mb-4 max-w-md text-justify leading-7">
            {t.contactText}
          </p>

          <div className="socials flex flex-row gap-5 mt-4 items-center">
            <Link
              href="https://github.com/leandrocalfin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2937] dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub size={36} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2937] dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={36} />
            </Link>

            <a
              href="mailto:lean.calfin@gmail.com"
              className="text-[#1F2937] dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaEnvelope size={34} />
            </a>
          </div>
        </div>

        <div>
          {emailSubmitted ? (
            <div className="rounded-2xl border border-[#22C55E]/40 bg-[#F3EDE2] dark:bg-[#181818] px-6 py-6 shadow-[0_12px_30px_rgba(34,197,94,0.12)] text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-[#22C55E] text-3xl font-bold leading-none">
                  ✓
                </span>

                <h4 className="text-lg font-bold text-[#1F2937] dark:text-white">
                  {t.messageSent}
                </h4>
              </div>

              <p className="text-[#4B5563] dark:text-[#ADB7BE] leading-7 max-w-md mx-auto">
                {t.messageSentText}
              </p>
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className={labelStyles}>
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

              <div className="mb-6">
                <label htmlFor="email" className={labelStyles}>
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
                <label htmlFor="message" className={labelStyles}>
                  {t.formMessage}
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className={`${inputStyles} min-h-[140px]`}
                  placeholder={t.placeholderMessage}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#007ACC] via-[#00AEEF] to-[#0057D9] px-6 py-2 text-base font-bold text-white shadow-[0_10px_26px_rgba(0,122,204,0.28)] transition-all duration-300 hover:scale-[1.01]"
              >
                {t.sendMessage}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;