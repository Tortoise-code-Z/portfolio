import Link from "../../../components/Link/link";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import cloneTemplate from "../../../js/utils/cloneTemplate";
import { append } from "../../../js/utils/domHelpers";
import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";

/**
 * @typedef {Object} WorkEmphasisName
 * @property {string[]} name - Array containing the parts of the name (index 0 for main, 1 for accent).
 * @property {string} color - Hex or CSS color string for the name accent.
 */

/**
 * @typedef {Object} WorkLinks
 * @property {string} github - URL to the source code repository.
 * @property {string} [demo] - URL to the live demonstration of the project.
 */

/**
 * @typedef {Object} HeroWorkData
 * @property {WorkEmphasisName} emphasisName - Project name with specific coloring data.
 * @property {string} shortDescription - Brief summary of the project.
 * @property {string} projectRole - Role held during development.
 * @property {string} visibility - Project status (e.g., "Public", "Private").
 * @property {string} year - Completion year.
 * @property {WorkLinks} links - External project resources.
 */

/**
 * Renders the Hero section for the Project Detail page.
 * * It clones a template, populates project metadata (title, role, year),
 * applies specific entrance animations (fade-in directions), and generates
 * action buttons for demo and code links.
 * * @function Hero
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The populated Hero section element.
 */

export default function Hero({} = {}) {
  const id = getQueryParams("id");
  const work = bbdd.works.find((work) => work.id === Number(id));

  const hero = cloneTemplate(template, "hero-template").querySelector(
    ".pd-hero",
  );

  const title = hero.querySelector(".pd-hero__title");
  const descTypeWeb = hero.querySelector(".pd-hero__desc-type-web");
  const typeProyectYear = hero.querySelector(".pd-hero__type-proyect-year");
  const actions = hero.querySelector(".pd-hero__actions");

  fadeInObserver(title, `animated-element--fade-in-right`);
  fadeInObserver(descTypeWeb, `animated-element--fade-in-left`);
  fadeInObserver(typeProyectYear, `animated-element--fade-in-right`);
  fadeInObserver(actions, `animated-element--fade-in-top`);

  title.innerHTML = `${work.emphasisName.name[0]}<span style= "color: ${work.emphasisName.color}" class="pd-hero__title-accent">${work.emphasisName.name[1]}</span>`;
  descTypeWeb.innerText = `${work.shortDescription} · ${work.projectRole}`;
  typeProyectYear.innerText = `${work.visibility} Project · ${work.year}`;

  let demo;

  if (work.links.demo)
    demo = Link({
      isButton: true,
      icon: svg.demo,
      variant: "primary",
      theme: "dark",
      classNames: ["pd-hero__actions-demo"],
      href: work.links.demo,
      target: "_blank",
      text: "Demo",
    });

  const github = Link({
    isButton: true,
    icon: svg.code,
    variant: "primary",
    theme: "dark",
    classNames: ["pd-hero__actions-code"],
    href: work.links.github,
    target: "_blank",
    text: "Code",
  });

  navbarObserver(hero);

  append(actions, [demo, github]);

  return hero;
}
