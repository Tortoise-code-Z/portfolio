import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import {
  getQueryParams,
  navbarObserver,
  validateProp,
} from "../../../js/utils/utils";
import "./index.css";
import TechStackLibraries from "./TechStackLibraries";
import TechStackTools from "./TechStackTools";
import TechStackDesign from "./TechStackDesign";

/**
 * @typedef {Object} TechStackData
 * @property {Object} tools - Main development tools.
 * @property {Object[]} tools.allTools - Detailed list of all specialized tools used.
 * @property {Object[]} librariesUtils - Utility libraries and frameworks.
 * @property {Object[]} stylesDesign - Design systems and styling technologies.
 */

/**
 * @typedef {Object} WorkTechData
 * @property {TechStackData} techStack - The complete technological breakdown of the project.
 */

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
  const work = bbdd.works.find((work) => work.id === Number(id));

  // validations
  validateProp("id", Number(id), "number");

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
    TechStackTools({ tools: work.techStack.tools.allTools }),
    TechStackLibraries({ libraries: work.techStack.librariesUtils }),
    TechStackDesign({ designs: work.techStack.stylesDesign }),
  ]);

  append(section, [title, techStackContainer]);

  return section;
}
