"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

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

  return (
    <section
      id="contact"
      className="text-white scroll-mt-32 mt-4 mb-12 py-12 relative"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Contacto
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Contactame
          </h5>

          <p className="text-[#ADB7BE] mb-4 max-w-md text-justify leading-7">
            Estoy abierto a nuevas oportunidades y proyectos. Si tenés alguna
            consulta, propuesta de trabajo o simplemente querés ponerte en
            contacto, no dudes en escribirme. Te responderé a la brevedad.
          </p>

          <div className="socials flex flex-row gap-5 mt-4 items-center">
            <Link
              href="https://github.com/leandrocalfin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors"
            >
              <FaGithub size={36} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/leandro-calfin-954b7b352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={36} />
            </Link>

            <a
              href="mailto:lean.calfin@gmail.com"
              className="text-white hover:text-primary-400 transition-colors"
            >
              <FaEnvelope size={34} />
            </a>
          </div>
        </div>

        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Mensaje enviado correctamente.
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Nombre
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Correo
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[120px]"
                  placeholder="Escriba su mensaje..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;