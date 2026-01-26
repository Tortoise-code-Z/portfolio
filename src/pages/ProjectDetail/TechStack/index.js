import FloatingTitle from "../../../components/FloatingTitle";
import bbdd from "../../../const/database/bbdd.js";
import { svg } from "../../../const/database/bbdd_consts.js";
import { createElement } from "../../../js/utils/createElementsHelper.js";
import { append } from "../../../js/utils/domHelpers.js";
import { getQueryParams, navbarObserver } from "../../../js/utils/utils.js";
import "./index.css";
import TechStackLibraries from "./TechStackLibraries";
import TechStackTools from "./TechStackTools";
import TechStackDesign from "./TechStackDesign";

/**
 * Renders the "Tech Stack" section for the project detail view.
 * * This component organizes the technological landscape of a project into three
 * main categories: Core Tools, Libraries/Utilities, and Design/Styles.
 * It uses the project ID from URL parameters to fetch the specific data
 * and initializes sub-components for each technology segment.
 * * @function TechStack
 * @param {Object} [props={}] - Component properties.
 * @returns {HTMLElement} The section element containing the categorized tech stack.
 */

export default function TechStack({} = {}) {
  const id = getQueryParams("id");
  const currentWork = bbdd.works.find((work) => work.id === Number(id));

  const section = createElement({
    tag: "section",
    classNames: ["pd-s-tech-stack"],
    attributes: {
      "data-navbar-color": "black",
      id: "tech-stack",
    },
  });

  navbarObserver(section);

  const title = FloatingTitle({
    text: "Stack Tecnológico",
    icon: svg.stack,
    theme: "light",
    iconPosition: "left",
    upperCase: true,
  });

  const techStackContainer = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__container"],
  });

  append(techStackContainer, [
    TechStackTools({ tools: currentWork.techStack.tools.allTools }),
    TechStackLibraries({ libraries: currentWork.techStack.librariesUtils }),
    TechStackDesign({ designs: currentWork.techStack.stylesDesign }),
  ]);

  append(section, [title, techStackContainer]);

  return section;
}
