import { fadeInObserver, navbarObserver } from "../../../js/utils/utils.js";
import { append, getElement } from "../../../js/utils/domHelpers.js";
import cloneTemplate from "../../../js/utils/cloneTemplate.js";
import template from "./defaultFooter.html?raw";
import Link from "../../../components/Link/link.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import "./defaultFooter.css";

/**
 * Component that generates the site's default footer.
 * Includes acknowledgments, personal information, animation observers,
 * and links to social media or contact information.
 *
 * @function DefaultFooter
 * @param {Object} [props={}] - Properties object (currently empty but maintained for consistency).
 * @returns {HTMLElement} The DOM element representing the footer.
 */

export default function DefaultFooter({} = {}) {
  const defaultFooter = getElement(
    ".default-fouter",
    cloneTemplate(template, "default-footer-template"),
  );

  const thanks = getElement(".default-footer__thanks", defaultFooter);
  const nick = getElement(".default-footer__nick", defaultFooter);
  const occupation = getElement(".default-footer__occupation", defaultFooter);
  const year = getElement(".default-footer__year", defaultFooter);
  const signature = getElement(".default-footer__signature", defaultFooter);

  fadeInObserver(thanks, `animated-element--fade-in-right`);
  fadeInObserver(nick, `animated-element--fade-in-left`);
  fadeInObserver(signature, `animated-element--fade-in-right`);
  fadeInObserver(occupation, `animated-element--fade-in-left`);
  fadeInObserver(year, `animated-element--fade-in-right`);

  navbarObserver(defaultFooter);

  const actions = getElement(".default-footer__actions", defaultFooter);
  fadeInObserver(actions, `animated-element--fade-in-top`);

  const github = Link({
    isButton: true,
    variant: "secondary",
    theme: "dark",
    icon: svg.github,
    target: "_blank",
    href: "https://github.com/Tortoise-code-Z",
    title: "Github",
    text: "Github",
  });

  const email = Link({
    classNames: ["default-footer__email"],
    isButton: true,
    variant: "secondary",
    theme: "dark",
    icon: svg.email,
    href: "",
    title: "Email",
    text: "victorperez.brmte@passmail.com",
    pointerEvents: "none",
  });

  const linkedin = Link({
    isButton: true,
    variant: "secondary",
    theme: "dark",
    icon: svg.linkedin,
    target: "_blank",
    href: "https://www.linkedin.com/in/víctor-pérez-developer",
    title: "Linkedin",
    text: "Linkedin",
  });

  append(actions, [github, linkedin, email]);

  return defaultFooter;
}
