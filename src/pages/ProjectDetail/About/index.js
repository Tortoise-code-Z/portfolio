import "./index.css";
import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils.js";
import { createElement } from "../../../js/utils/createElementsHelper.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import FloatingTitle from "../../../components/FloatingTitle";
import bbdd from "../../../const/database/bbdd.js";
import { append } from "../../../js/utils/domHelpers.js";
import Cards from "../../../components/Cards";

/**
 * Renders the "About Project" section for the Project Detail page.
 * * Retrieves project details from the database using the 'id' URL parameter,
 * creates a section with scroll animations for text paragraphs, and
 * integrates information cards.
 * * @function AboutProject
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The constructed section element containing project details.
 */

export default function AboutProject({} = {}) {
  const id = getQueryParams("id");
  const work = bbdd.works.find((work) => work.id === Number(id));

  const section = createElement({
    tag: "section",
    classNames: ["pd-s-about"],
    attributes: {
      "data-navbar-color": "white",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    text: "Sobre el proyecto",
    icon: svg.info,
    theme: "light",
    iconPosition: "left",
    upperCase: true,
  });

  const description = createElement({
    tag: "div",
    classNames: ["pd-s-about__desc"],
  });

  work.about.description.forEach((paragraph, index) => {
    const paragraphElement = createElement({
      tag: "p",
      classNames: ["pd-s-about__desc-paragraph"],
      innerText: paragraph,
    });

    fadeInObserver(
      paragraphElement,
      `animated-element--fade-in-${index % 2 === 0 ? "left" : "right"}`,
    );

    append(description, [paragraphElement]);
  });

  const cards = Cards({
    classNames: ["pd-s-about__cards"],
    data: work.about.cards,
  });

  append(section, [title, description, cards]);

  return section;
}
