/**
 * English UI strings (application chrome, not page content).
 *
 * Must mirror the shape of `es.js` exactly. Page content is resolved from
 * `src/const/database/bbdd.js` via `localize`, not from this dictionary.
 *
 * @module i18n/locales/en
 */

/** @type {import("../index.js").Dictionary} */
export const en = {
  nav: {
    works: "PROJECTS",
    techStack: "TECH STACK",
  },
  hero: {
    title: "Frontend web developer",
    subtitle: "Víctor Pérez Portfolio",
  },
  footer: {
    thanks: "Thanks for visiting",
    role: "frontend web developer",
    readme:
      "*Check the README on GitHub for technical details and installation steps.",
  },
  sections: {
    profile: "Profile",
    strengths: "Strengths",
    skills: "Skills",
    about: "About the project",
    techStack: "Tech Stack",
    developmentProcess: "Development process",
    gallery: "Gallery",
    additionalConfigs: "Additional settings",
  },
  // Typewriter titles: final word is fix + final ("Projects", "Career").
  machineTitle: {
    works: { fix: "Proj", init: "cset", final: "ects" },
    career: { fix: "Car", init: "ree", final: "eer" },
  },
  techStackSlides: {
    design: "Styles & design",
    libraries: "Libraries & utilities",
    tools: "Programming & tools",
  },
  actions: {
    code: "Code",
    moreDetails: "More details",
    demo: "Demo",
    github: "Github",
    linkedin: "Linkedin",
    email: "Email",
    viewOnGithub: "View on Github",
    goToCode: "Go to code",
  },
  featured: {
    tag: "Featured Project!",
  },
  note: {
    note: "Note",
    important: "Important",
  },
  slider: {
    next: "Next",
    previous: "Previous",
  },
  misc: {
    noDescription: "No description",
  },
  meta: {
    title: "Portfolio - Frontend Web Developer",
    description:
      "Welcome to my web portfolio. I'm Víctor David Pérez Alarcón, a frontend developer. I design and build fast, responsive and attractive websites. Explore my projects and skills!",
  },
  language: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
};
