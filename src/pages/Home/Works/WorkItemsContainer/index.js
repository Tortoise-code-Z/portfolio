import bbdd from "../../../../const/database/bbdd";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
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

  const bgImageData = (work) => ({
    bgAltImage: work.images.backgroundImg.alt,
    bgSrcImage: work.images.backgroundImg.src,
    bgHeightImage: Number(work.images.backgroundImg.height),
    bgWidthImage: Number(work.images.backgroundImg.width),
  });

  bbdd.works.forEach((work) => {
    append(container, [
      Work({
        ...bgImageData(work),
        featured: work.featured,
        frontCard: {
          imgAlt: work.images.workImg.alt,
          imgSrc: work.images.workImg.src,
          imgHeight: Number(work.images.workImg.height),
          imgWidth: Number(work.images.workImg.width),
        },
        backCard: {
          ...bgImageData(work),
          demoLink: work.links.demo,
          githubLink: work.links.github,
          fastTools: work.techStack.tools.fastTools,
          id: work.id,
          name: work.name,
          projectRole: work.projectRole,
          visibility: work.visibility,
          year: work.year,
        },
      }),
    ]);
  });

  return container;
}
