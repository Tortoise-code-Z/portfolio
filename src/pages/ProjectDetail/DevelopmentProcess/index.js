import { createElement } from "../../../js/utils/createElementsHelper";
import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils";
import "./index.css";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";
import FloatingTitle from "../../../components/FloatingTitle";
import { svg } from "../../../const/database/bbdd_consts";
import Cards from "../../../components/Cards";
import NoteMsg from "../../../components/noteMsg";

/**
 * Renders the "Development Process" section for the project detail view.
 * * This component identifies the current project via URL parameters, generates
 * animated descriptive paragraphs, populates highlight cards, and conditionally
 * appends status messages (warnings or notes) based on the database content.
 * * @function DevelopmentProcess
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The section element containing the development process documentation.
 */

export default function DevelopmentProcess({} = {}) {
  const id = getQueryParams("id");
  const work = bbdd.works.find((work) => work.id === Number(id));

  const container = createElement({
    tag: "section",
    classNames: ["s-pd-dev-process"],
    attributes: {
      "data-navbar-color": "white",
    },
  });

  navbarObserver(container);

  const title = FloatingTitle({
    text: "Proceso de desarrollo",
    icon: svg.process,
    theme: "light",
    iconPosition: "left",
    upperCase: true,
  });

  const description = createElement({
    tag: "div",
    classNames: ["s-pd-dev-process__desc"],
  });

  work.development_process.description.forEach((desc, index) => {
    const item = createElement({
      tag: "p",
      classNames: ["dev-process__desc-paragraph"],
      innerText: desc,
    });

    fadeInObserver(
      item,
      `animated-element--fade-in-${index % 2 === 0 ? "left" : "right"}`,
    );

    append(description, [item]);
  });

  const cards = Cards({
    classNames: ["dev-process__cards"],
    data: work.development_process.cards,
  });

  append(container, [title, description, cards]);

  if (work.development_process.warningMsg) {
    const warningMsg = NoteMsg({
      type: "warning",
      desc: work.development_process.warningMsg.description,
    });

    append(container, [warningMsg]);
  }

  if (work.development_process.noteMsg) {
    const noteMsg = NoteMsg({
      desc: work.development_process.noteMsg.description,
    });

    append(container, [noteMsg]);
  }

  return container;
}
