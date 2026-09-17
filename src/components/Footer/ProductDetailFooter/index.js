import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils.js";
import { append, getElement } from "../../../js/utils/domHelpers.js";
import cloneTemplate from "../../../js/utils/cloneTemplate.js";
import Link from "../../Link/index.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import bbdd from "../../../const/database/bbdd.js";
import template from "./index.html?raw";
import "./index.css";

/**
 * Component that generates the specific footer for project details.
 * Extracts project information via URL parameters, manages entry animations,
 * and renders dynamic links to repositories, demos, and social media.
 *
 * @function ProductDetailFooter
 * @param {Object} [props={}] - Properties object (currently does not use external properties).
 * @returns {HTMLElement} The DOM element representing the product detail footer.
 */

export function ProductDetailFooter({} = {}) {
  const footer = getElement(
    ".footer-proyect-detail",
    cloneTemplate(template, "proyect-detail-footer-template"),
  );

  const thanks = getElement(".footer-proyect-detail__thanks", footer);
  const readme = getElement(".footer-proyect-detail__readme", footer);

  fadeInObserver(thanks, "animated-element--fade-in-right");
  fadeInObserver(readme, "animated-element--fade-in-left");

  navbarObserver(footer);

  const actions = getElement(".footer-proyect-detail__actions", footer);

  fadeInObserver(actions, "animated-element--fade-in-top");

  const id = getQueryParams("id");

  const github = Link({
    isButton: true,
    variant: "secondary",
    theme: "light",
    icon: svg.github,
    target: "_blank",
    href: bbdd.works[id - 1].links.github,
    title: "Github",
    text: "Ver en Github",
  });

  const linkedin = Link({
    isButton: true,
    variant: "secondary",
    theme: "light",
    icon: svg.linkedin,
    target: "_blank",
    href: "https://www.linkedin.com/in/víctor-pérez-developer",
    title: "Linkedin",
    text: "Linkedin",
  });

  let demo;
  if (bbdd.works[id - 1].links.demo !== null) {
    demo = Link({
      isButton: true,
      variant: "secondary",
      theme: "light",
      icon: svg.demo,
      target: "_blank",
      href: bbdd.works[id - 1].links.demo,
      title: "Demo",
      text: "Demo",
    });
  }

  const email = Link({
    classNames: ["default-footer__email"],
    isButton: true,
    variant: "secondary",
    theme: "light",
    icon: svg.email,
    href: "",
    title: "Email",
    text: "victorperez.brmte@passmail.com",
    pointerEvents: "none",
  });

  append(actions, [github, linkedin, demo, email]);

  return footer;
}
