"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { useInView } from "../useInView";
import { useLanguage } from "../languageContext";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const formStartRef = useRef(Date.now());
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileWidgetId = useRef(null);
  const turnstileRef = useRef(null);

  const { t, language } = useLanguage();

  const header = useInView();
  const info = useInView();
  const form = useInView();

  useEffect(() => {
    if (!turnstileSiteKey || emailSubmitted) return;
    const renderWidget = () => {
      if (!window.turnstile || !turnstileRef.current) return;
      // Si el contenedor se remontó (ej. "enviar otro"), permite re-render
      if (
        turnstileRef.current.innerHTML !== "" &&
        turnstileWidgetId.current !== null
      )
        return;
      if (turnstileRef.current.innerHTML === "")
        turnstileWidgetId.current = null;
      if (turnstileWidgetId.current !== null) return;
      try {
        turnstileWidgetId.current = window.turnstile.render(
          turnstileRef.current,
          {
            sitekey: turnstileSiteKey,
            callback: (token) => setTurnstileToken(token),
            "expired-callback": () => setTurnstileToken(""),
            "error-callback": () => setTurnstileToken(""),
            theme: "auto",
          }
        );
      } catch {}
    };
    if (window.turnstile) {
      renderWidget();
      return;
    }
    let interval;
    if (
      !document.querySelector(
        'script[src*="challenges.cloudflare.com/turnstile"]'
      )
    ) {
      const s = document.createElement("script");
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.defer = true;
      s.onload = renderWidget;
      document.head.appendChild(s);
    } else {
      interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 300);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [turnstileSiteKey, emailSubmitted]);

  const resetTurnstile = () => {
    setTurnstileToken("");
    try {
      if (window.turnstile && turnstileWidgetId.current !== null) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    } catch {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Cooldown cliente: evita doble envío / ráfagas (30s)
    try {
      const last = window.localStorage.getItem("contact-last-sent");
      if (last && Date.now() - Number(last) < 30 * 1000) {
        setFormError(t.cooldownError);
        return;
      }
    } catch {}

    // Turnstile obligatorio si hay sitekey configurada
    if (turnstileSiteKey && !turnstileToken) {
      setFormError(t.captchaRequired);
      return;
    }

    setSending(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      language,
      website: e.target.website.value,
      startedAt: formStartRef.current,
      turnstileToken,
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
        formStartRef.current = Date.now();
        resetTurnstile();
        try {
          window.localStorage.setItem("contact-last-sent", String(Date.now()));
        } catch {}
      } else if (response.status === 429) {
        setFormError(t.rateLimitError);
      } else if (response.status === 400) {
        let isCaptcha = false;
        try {
          const j = await response.json();
          isCaptcha = j?.error === "Invalid captcha";
        } catch {}
        setFormError(isCaptcha ? t.captchaError : t.genericSendError);
        if (isCaptcha) resetTurnstile();
      } else {
        setFormError(t.genericSendError);
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setFormError(t.genericSendError);
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

    placeholder:text-gray-400

    focus:border-violet-500/50
    focus:shadow-[0_8px_30px_rgba(99,102,241,0.15)]

    dark:border-white/10
    dark:bg-white/[0.04]
    dark:text-white
    dark:placeholder:text-gray-500
    dark:focus:shadow-[0_8px_30px_rgba(139,92,246,0.2)]

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
      className="relative scroll-mt-20 pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pt-2 lg:pb-10"
    >
      {/* GLOW IZQUIERDO */}
      <div
        className="
          pointer-events-none
          absolute
          -left-16
          top-32
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-xl

          sm:-left-24
          sm:h-48
          sm:w-48
          sm:bg-blue-500/15

          lg:-left-40
          lg:top-24
          lg:h-[500px]
          lg:w-[500px]
          lg:bg-blue-500/15
          lg:blur-[80px]
        "
      />

      {/* GLOW DERECHO */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-1/2
          h-32
          w-32
          rounded-full
          bg-violet-500/8
          blur-xl

          sm:-right-24
          sm:h-48
          sm:w-48
          sm:bg-violet-500/10

          lg:-right-40
          lg:top-1/2
          lg:h-[450px]
          lg:w-[450px]
          lg:bg-violet-500/10
          lg:blur-[90px]
        "
      />

      {/* HEADER */}
      <div
        ref={header.ref}
        className={`animate-on-scroll mx-auto mb-8 max-w-3xl text-center sm:mb-12 lg:mb-16 ${header.isVisible ? "is-visible" : ""}`}
      >
        <div className="relative inline-block">
          <h2
            className="
              text-2xl
              font-black
              tracking-[-0.03em]
              text-[#151515]
              dark:text-white
              sm:text-3xl
              lg:text-3xl
            "
          >
            {t.contactTitle}
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        {/* INFO */}
        <div
          ref={info.ref}
          className={`
            animate-on-scroll from-left
            glass relative mx-2 overflow-hidden rounded-[20px] p-4
            sm:mx-0 sm:rounded-[30px] sm:p-7
            lg:col-span-5 lg:p-7
            ${info.isVisible ? "is-visible" : ""}
          `}
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
              blur-2xl

              hidden
              lg:block
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
                text-lg
                font-black
                tracking-[-0.03em]
                text-[#151515]
                dark:text-white
                sm:mt-4
                sm:text-xl
                lg:text-2xl
              "
            >
              {t.contactSubtitle}
            </h3>

            <p
              className="
                mt-4
                max-w-md
                text-justify
                text-xs
                leading-6
                text-gray-600
                dark:text-gray-400
                sm:mt-6
                sm:text-base
              "
            >
              {t.contactText}
            </p>

            {/* BOTONES */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8">
              <div className="flex items-center gap-2">
                {/* GITHUB */}
                <a
                  href="https://github.com/leandrocalfin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    glass
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    text-[#151515]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:text-white
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                >
                  <FaGithub size={13} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    glass
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    text-[#151515]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:text-white
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                >
                  <FaLinkedin size={12} />
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:lean.calfin@gmail.com"
                  aria-label="Email"
                  className="
                    glass
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    text-[#151515]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:text-white
                    sm:h-10
                    sm:w-10
                    sm:rounded-xl
                  "
                >
                  <FaEnvelope size={12} />
                </a>
              </div>

              {/* CV */}
              <a
                href="/CV_Leandro_Calfin.pdf"
                download
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-1.5
                  overflow-hidden
                  rounded-lg
                  border
                  border-blue-500/40
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  h-7
                  sm:h-10
                  sm:rounded-xl
                  sm:px-4
                  sm:py-2.5
                  sm:text-sm
                "
              >
                <FaDownload size={11} />
                {t.downloadCV}
              </a>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div
          ref={form.ref}
          className={`
            animate-on-scroll from-right
            glass mx-2 rounded-[20px] p-4
            sm:mx-0 sm:rounded-[30px] sm:p-6
            lg:col-span-7 lg:p-6
            ${form.isVisible ? "is-visible" : ""}
          `}
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
                "
              >
                {t.messageSentText}
              </p>

              <button
                type="button"
                onClick={() => {
                  setEmailSubmitted(false);
                  formStartRef.current = Date.now();
                  turnstileWidgetId.current = null;
                  setTurnstileToken("");
                }}
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
              {/* Honeypot: hidden from humans, visible to bots. Must stay empty. */}
              <div
                className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  name="website"
                  type="text"
                  id="website"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

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

              {turnstileSiteKey && (
                <div className="mb-5 flex justify-center sm:mb-6">
                  <div ref={turnstileRef} />
                </div>
              )}

              <button
                type="submit"
                disabled={sending || (turnstileSiteKey && !turnstileToken)}
                className="
                  group
                  relative
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  self-center
                  overflow-hidden
                  gap-1.5
                  rounded-lg
                  border
                  border-blue-500/40
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/60
                  hover:shadow-[0_0_22px_rgba(99,102,241,0.5)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  h-7
                  sm:w-full
                  sm:rounded-2xl
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                  sm:h-auto
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-500/0
                    via-transparent
                    to-white/20
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    sm:rounded-2xl
                  "
                />

                <span className="relative">
                  {sending ? t.sendingMessage : t.sendMessage}
                </span>

                {!sending && (
                  <FaArrowRight
                    size={10}
                    className="
                      relative
                      transform-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>

              {formError && (
                <p className="mt-3 text-center text-xs text-red-500 sm:text-sm">
                  {formError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
