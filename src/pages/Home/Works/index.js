import { createElement } from "../../../js/utils/createElementsHelper";
import { navbarObserver } from "../../../js/utils/utils";
import WritteMachineTitle from "../../../components/WritteMachineTitle";
import "./index.css";
import { append } from "../../../js/utils/domHelpers.js";
import WorkItemsContainer from "./WorkItemsContainer";

/**
 * Component that generates the main Projects (Works) section of the portfolio.
 * Contain an animated "typewriter" title
 * that corrects itself from "Wrkos" to "Works", and a container for the project items.
 *
 * @function Works
 * @param {Object} [props={}] - Properties object (currently unused).
 * @returns {HTMLElement} The section element containing the project gallery.
 */

export default function Works({} = {}) {
  const section = createElement({
    tag: "section",
    classNames: ["s-works"],
    attributes: {
      "data-navbar-color": "white",
      id: "works",
    },
  });

  navbarObserver(section);

  const title = WritteMachineTitle({
    classNames: ["s-works__title"],
    fixText: "W",
    dinamicInitText: "rkos",
    dinamicFinalText: "orks",
  });

  append(section, [title, WorkItemsContainer()]);

  return section;
}
