import { validateProp } from "../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import { getImage } from "../../../../../js/utils/images";
import { svg } from "../../../../../const/database/bbdd_consts";

/**
 * @typedef {Object} WorkFrontImageData
 * @property {string} src - The filename for the foreground/logo image of the project.
 * @property {string} alt - Alternative text description for the image.
 * @property {number} width - Natural width of the image.
 * @property {number} height - Natural height of the image.
 */

/**
 * @typedef {Object} WorkFrontFlipCardProps
 * @property {Object} data - The project data object.
 * @property {Object} data.images - Image collection for the project.
 * @property {WorkFrontImageData} data.images.workImg - Metadata for the front-facing project image.
 */

/**
 * Component that renders the front side of a project flip card.
 * It displays the main project image (typically a logo or representative graphic)
 * and an interactive "click" icon indicator to suggest the card can be flipped.
 *
 * @function WorkFlipCard
 * @param {WorkFrontFlipCardProps} [props={}] - Configuration properties for the front card.
 * @returns {HTMLDivElement} The container element for the front side of the card.
 */

export default function WorkFlipCard({ data = {} } = {}) {
  // validations
  validateProp("data", data, "object");

  const container = createElement({
    tag: "div",
    classNames: ["s-works__front-card"],
  });

  const image = createElement({
    tag: "img",
    classNames: ["s-works__front-card-image"],
    attributes: {
      src: getImage(data.images.workImg.src),
      alt: data.images.workImg.alt,
      title: data.images.workImg.alt,
      width: data.images.workImg.width,
      height: data.images.workImg.height,
    },
  });

  const span = createElement({
    tag: "span",
    classNames: ["s-works__item-click-span"],
    innerHTML: `${svg.click}`,
  });

  append(container, [image, span]);

  return container;
}
