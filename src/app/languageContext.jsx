"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const translations = {
  es: {
    navAbout: "Sobre mí",
    navProjects: "Proyectos",
    navContact: "Contacto",

    heroTitle: "Hola, soy Leandro Calfin.",
    heroSubtitle: "Estudiante avanzado en Desarrollo de Software.",
    heroText: "Enfocado en el desarrollo web y en la construcción de APIs REST.",
    downloadCV: "Descargar CV",

    aboutTitle: "Sobre mí",
    aboutText1:
      "Me encuentro cursando el último año de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas, con interés en el desarrollo web, las APIs REST y las bases de datos.",
    aboutText2:
      "Durante más de 14 años me desempeñé como Oficial de la Fuerza Aérea Argentina, donde adquirí experiencia en liderazgo, trabajo en equipo, gestión de recursos, planificación y resolución de problemas en entornos de alta responsabilidad.",
    aboutText3:
      "Actualmente me encuentro ampliando mi perfil profesional hacia el sector tecnológico, desarrollando proyectos académicos y personales utilizando tecnologías como HTML, CSS, JavaScript, React, Node.js, MySQL, Git y herramientas de desarrollo web modernas.",
    aboutText4:
      "Mi objetivo es continuar creciendo como desarrollador, participando en proyectos que me permitan aplicar conocimientos técnicos, aprender nuevas tecnologías y aportar soluciones de valor.",
    technologiesTitle: "Tecnologías",

    projectsTitle: "Proyectos",
    filterAll: "Todos",
    filterWeb: "Web",
    filterBackend: "Backend",

    contactTitle: "Contacto",
    contactSubtitle: "Contactame",
    contactText:
      "Estoy abierto a nuevas oportunidades y proyectos. Si tenés alguna consulta, propuesta de trabajo o simplemente querés ponerte en contacto, no dudes en escribirme. Te responderé a la brevedad.",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    placeholderName: "Ingrese su nombre",
    placeholderEmail: "correo@ejemplo.com",
    placeholderMessage: "Escriba su mensaje...",
    sendMessage: "Enviar mensaje",
    messageSent: "Mensaje enviado correctamente.",

    footerText: "© 2026 Leandro Calfin. Todos los derechos reservados.",

    projectStatus: "En proceso",
    vetProjectTitle: "Sistema de Gestión Veterinaria",
    vetProjectDescription:
      "Actualmente me encuentro desarrollando un sistema de gestión veterinaria diseñado para optimizar la administración de turnos, pacientes, historiales clínicos y procesos internos del establecimiento. El proyecto se está construyendo con React, Next.js, Node.js, Express y MySQL, con el objetivo de centralizar la información y agilizar la operatoria diaria de una clínica veterinaria. Próximamente será publicado en esta sección con su correspondiente detalle funcional, técnico y visual.",

  },

  en: {
    navAbout: "About me",
    navProjects: "Projects",
    navContact: "Contact",

    heroTitle: "Hi, I'm Leandro Calfin.",
    heroSubtitle: "Advanced Software Development Student.",
    heroText: "Focused on web development and building REST APIs.",
    downloadCV: "Download CV",

    aboutTitle: "About me",
    aboutText1:
      "I am currently in the final year of the University Technical Degree in Computer Application Development, with an interest in web development, REST APIs, and databases.",
    aboutText2:
      "For more than 14 years, I served as an Officer in the Argentine Air Force, where I gained experience in leadership, teamwork, resource management, planning, and problem-solving in high-responsibility environments.",
    aboutText3:
      "I am currently expanding my professional profile into the technology sector, developing academic and personal projects using technologies such as HTML, CSS, JavaScript, React, Node.js, MySQL, Git, and modern web development tools.",
    aboutText4:
      "My goal is to continue growing as a developer, participating in projects where I can apply technical knowledge, learn new technologies, and contribute valuable solutions.",
    technologiesTitle: "Technologies",

    projectsTitle: "Projects",
    filterAll: "All",
    filterWeb: "Web",
    filterBackend: "Backend",

    contactTitle: "Contact",
    contactSubtitle: "Contact me",
    contactText:
      "I am open to new opportunities and projects. If you have a question, a job proposal, or simply want to get in touch, feel free to write to me. I will reply as soon as possible.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    placeholderName: "Enter your name",
    placeholderEmail: "email@example.com",
    placeholderMessage: "Write your message...",
    sendMessage: "Send message",
    messageSent: "Message sent successfully.",

    footerText: "© 2026 Leandro Calfin. All rights reserved.",
    projectStatus: "In progress",
    vetProjectTitle: "Veterinary Management System",
    vetProjectDescription:
      "I am currently developing a veterinary management system designed to optimize appointment scheduling, patient records, clinical histories, and internal operational processes. The project is being built with React, Next.js, Node.js, Express, and MySQL, with the goal of centralizing information and streamlining the daily operations of a veterinary clinic. It will be published in this section soon, along with its corresponding functional, technical, and visual details.",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}