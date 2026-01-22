import bbdd from "../../../../../const/database/bbdd";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../../../../js/utils/utils";
import Work from "../Work";
import "./index.css";

/**
 * Component that serves as the grid container for all project entries.
 * It iterates through the projects listed in the database and initializes
 * a Work component for each entry, appending them to a central flex/grid wrapper.
 *
 * @function WorkItemsContainer
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLDivElement} The container element holding the collection of project cards.
 */

export default function WorkItemsContainer({} = {}) {
  const container = createElement({
    tag: "div",
    classNames: ["s-works__items-container"],
  });

  bbdd.works.forEach((work) => {
    append(container, [Work({ data: work })]);
  });

  return container;
}
