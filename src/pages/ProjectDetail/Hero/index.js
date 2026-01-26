import Link from "../../../components/Link";
import bbdd from "../../../const/database/bbdd.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import cloneTemplate from "../../../js/utils/cloneTemplate.js";
import {
  append,
  getElement,
  setHTML,
  setText,
} from "../../../js/utils/domHelpers.js";
import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils.js";
import "./index.css";
import template from "./index.html?raw";

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
  const currentWork = bbdd.works.find((work) => work.id === Number(id));

  const hero = getElement(".pd-hero", cloneTemplate(template, "hero-template"));

  const title = getElement(".pd-hero__title", hero);
  const descTypeWeb = getElement(".pd-hero__desc-type-web", hero);
  const typeProyectYear = getElement(".pd-hero__type-proyect-year", hero);
  const actions = getElement(".pd-hero__actions", hero);

  fadeInObserver(title, `animated-element--fade-in-right`);
  fadeInObserver(descTypeWeb, `animated-element--fade-in-left`);
  fadeInObserver(typeProyectYear, `animated-element--fade-in-right`);
  fadeInObserver(actions, `animated-element--fade-in-top`);

  setHTML(
    title,
    `${currentWork.emphasisName.name[0]}<span style= "color: ${currentWork.emphasisName.color}" class="pd-hero__title-accent">${currentWork.emphasisName.name[1]}</span>`,
  );

  setText(
    descTypeWeb,
    `${currentWork.shortDescription} · ${currentWork.projectRole}`,
  );

  setText(typeProyectYear, `${currentWork.visibility} · ${currentWork.year}`);

  let demo;

  if (currentWork.links.demo)
    demo = Link({
      title: "Ir a demo",
      isButton: true,
      icon: svg.demo,
      variant: "primary",
      theme: "dark",
      classNames: ["pd-hero__actions-demo"],
      href: currentWork.links.demo,
      target: "_blank",
      text: "Demo",
    });

  const github = Link({
    title: "Ir a código",
    isButton: true,
    icon: svg.code,
    variant: "primary",
    theme: "dark",
    classNames: ["pd-hero__actions-code"],
    href: currentWork.links.github,
    target: "_blank",
    text: "Código",
  });

  navbarObserver(hero);

  append(actions, [github]);
  if (demo) append(actions, [demo]);

  return hero;
}
