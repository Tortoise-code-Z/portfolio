/**
 * Spanish UI strings (application chrome, not page content).
 *
 * Page content (about, works, skills, courses...) lives in
 * `src/const/database/bbdd.js` as per-field locale objects and is resolved
 * with `localize`, not from this dictionary. This file only holds the fixed
 * UI labels rendered by components and page templates.
 *
 * @module i18n/locales/es
 */

/** @type {import("../index.js").Dictionary} */
export const es = {
  nav: {
    works: "PROYECTOS",
    techStack: "STACK TECNOLÓGICO",
  },
  hero: {
    title: "Frontend web developer",
    subtitle: "Víctor Pérez Portfolio",
  },
  footer: {
    thanks: "Gracias por su visita",
    role: "frontend web developer",
    readme:
      "*Consulta el README en GitHub para detalles técnicos y pasos de instalación.",
  },
  sections: {
    profile: "Perfil",
    strengths: "Fortalezas",
    skills: "Habilidades",
    about: "Sobre el proyecto",
    techStack: "Stack Tecnológico",
    developmentProcess: "Proceso de desarrollo",
    gallery: "Galería",
    additionalConfigs: "Configuraciones adicionales",
  },
  // Typewriter titles: the word is split into a fixed stem plus a wrong suffix
  // that self-corrects into the final one (see WritteMachineTitle).
  machineTitle: {
    works: { fix: "Proy", init: "stoec", final: "ectos" },
    career: { fix: "Car", init: "arer", final: "rera" },
  },
  techStackSlides: {
    design: "Estilos y diseño",
    libraries: "Librerías y utilidades",
    tools: "Programación y herramientas",
  },
  actions: {
    code: "Código",
    moreDetails: "Más detalles",
    demo: "Demo",
    github: "Github",
    linkedin: "Linkedin",
    email: "Email",
    viewOnGithub: "Ver en Github",
    goToCode: "Ir a código",
  },
  featured: {
    tag: "¡Proyecto Destacado!",
  },
  note: {
    note: "Nota",
    important: "Importante",
  },
  slider: {
    next: "Siguiente",
    previous: "Anterior",
  },
  misc: {
    noDescription: "Sin descripción",
  },
  config: {
    step: "Paso",
  },
  meta: {
    title: "Portfolio - Desarrollador Frontend Web",
    description:
      "Bienvenido a mi portfolio web. Soy Víctor David Pérez Alarcón, desarrollador frontend. Diseño y desarrollo sitios webs rápidos, responsivos y atractivos. ¡Explora mis proyectos y habilidades!",
  },
  language: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
};
