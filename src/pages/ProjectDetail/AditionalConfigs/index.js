import FloatingTitle from "../../../components/FloatingTitle";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import {
  fadeInObserver,
  getQueryParams,
  navbarObserver,
} from "../../../js/utils/utils";
import "./index.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-twilight.css";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import NoteMsg from "../../../components/noteMsg";

/**
 * Renders the "Additional Configurations" section for a project.
 * * This component fetches project-specific technical setup data, renders steps
 * as either plain text or syntax-highlighted code blocks using Prism.js,
 * and handles conditional display of warning and note messages.
 * * @function AditionalConfigs
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The section element containing the technical documentation and steps.
 */

export default function AditionalConfigs({} = {}) {
  const id = getQueryParams("id");
  const currentWork = bbdd.works.find((w) => w.id === Number(id));

  const section = createElement({
    tag: "section",
    classNames: ["pd-s-config"],
    attributes: {
      "data-navbar-color": "black",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    text: "Configuraciones adicionales",
    icon: svg.config,
    iconPosition: "left",
    theme: "dark",
    upperCase: true,
  });

  const description = createElement({
    tag: "div",
    classNames: ["pd-s-config__desc"],
  });

  const workDescription = currentWork.config.description;

  workDescription.forEach((desc, index) => {
    const item = createElement({
      tag: "p",
      classNames: ["pd-s-config__desc-paragraph"],
      innerText: desc,
    });

    fadeInObserver(
      item,
      `animated-element--fade-in-${index % 2 === 0 ? "left" : "right"}`,
    );

    append(description, [item]);
  });

  append(section, [title, description]);

  const steps = createElement({
    tag: "div",
    classNames: ["pd-s-config__steps"],
  });

  append(section, [steps]);

  const workSteps = currentWork.config.steps;

  workSteps.forEach((step, index) => {
    const item = createElement({
      tag: "div",
      classNames: ["pd-s-config__step"],
    });

    const icon = createElement({
      tag: "span",
      classNames: ["config__step-title-icon"],
      innerHTML: svg.wrench,
    });

    const titleText = createElement({
      tag: "span",
      classNames: ["config__step-title-text"],
      innerText: `Paso ${index + 1}: ${step.title}`,
    });

    const title = createElement({
      tag: "h3",
      classNames: ["config__step-title"],
    });

    fadeInObserver(title, `animated-element--fade-in-bottom`);
    fadeInObserver(item, `animated-element--fade-in-bottom`);

    if (step.type === "code") {
      const pre = createElement({
        tag: "pre",
        classNames: ["config__step-pre", "language-javascript"],
      });

      const code = createElement({
        tag: "code",
        classNames: ["config__step-code", "language-javascript"],
        innerText: step.description,
      });

      append(pre, [code]);
      append(item, [pre]);
    } else {
      const description = createElement({
        tag: "p",
        classNames: ["config__step-desc", "language-javascript"],
        innerText: step.description,
      });

      append(item, [description]);
    }

    append(title, [icon, titleText]);
    append(steps, [title, item]);
  });

  const workWarningMsg = currentWork.config?.warningMsg;

  if (workWarningMsg) {
    const warningMsg = NoteMsg({
      type: "warning",
      desc: workWarningMsg.description,
    });

    append(container, [warningMsg]);
  }

  const workNoteMsg = currentWork.config?.noteMsg;

  if (workNoteMsg) {
    const noteMsg = NoteMsg({
      desc: workNoteMsg.description,
    });

    append(section, [noteMsg]);
  }

  setTimeout(() => {
    Prism.highlightAll();
  }, 50);

  return section;
}
