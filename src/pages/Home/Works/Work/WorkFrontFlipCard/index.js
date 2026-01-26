import "./index.css";
import { createElement } from "../../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../../js/utils/domHelpers.js";
import { getImage } from "../../../../../js/utils/images.js";
import { svg } from "../../../../../const/database/bbdd_consts.js";
import { validateProps } from "../../../../../js/utils/argumentsValidation.js";

/**
 * @typedef {Object} WorkFrontFlipCardProps
 * @property {string} imgSrc - The filename for the foreground/logo image of the project.
 * @property {string} imgAlt - Alternative text description for the image.
 * @property {number} imgWidth - Natural width of the image.
 * @property {number} imgHeight - Natural height of the image.
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

export default function WorkFlipCard(props = {}) {
  const { imgAlt, imgHeight, imgSrc, imgWidth } = props;

  validateProps({
    imgSrc: { value: imgSrc, type: "string" },
    imgAlt: { value: imgAlt, type: "string" },
    imgWidth: { value: imgWidth, type: "number" },
    imgHeight: { value: imgHeight, type: "number" },
  });

  const container = createElement({
    tag: "div",
    classNames: ["s-works__front-card"],
  });

  const image = createElement({
    tag: "img",
    classNames: ["s-works__front-card-image"],
    attributes: {
      src: getImage(imgSrc),
      alt: imgAlt,
      title: imgAlt,
      width: imgWidth,
      height: imgHeight,
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
