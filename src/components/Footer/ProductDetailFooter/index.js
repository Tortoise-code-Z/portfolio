import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
  warningUnknownKeys,
} from "../../../js/utils/utils.js";
import { append } from "../../../js/utils/domHelpers.js";
import cloneTemplate from "../../../js/utils/cloneTemplate.js";
import Link from "../../../components/Link/link.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import bbdd from "../../../const/database/bbdd.js";
import template from "./index.html?raw";
import "./index.css";

export function ProductDetailFooter({} = {}) {
  warningUnknownKeys(arguments, []);

  const footer = cloneTemplate(
    template,
    "proyect-detail-footer-template",
  ).querySelector(".footer-proyect-detail");

  const thanks = footer.querySelector(".footer-proyect-detail__thanks");
  const readme = footer.querySelector(".footer-proyect-detail__readme");

  fadeInObserver(thanks, "animated-element--fade-in-right");
  fadeInObserver(readme, "animated-element--fade-in-left");

  navbarObserver(footer);

  const actions = footer.querySelector(".footer-proyect-detail__actions");

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
