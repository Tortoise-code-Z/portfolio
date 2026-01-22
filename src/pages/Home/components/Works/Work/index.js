import { getImage } from "../../../../../js/utils/images.js";
import {
  validateProp,
  warningUnknownKeys,
} from "../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../../js/utils/domHelpers.js";
import FlipCard from "../../../../../components/FlipCard/index.js";
import WorkFrontFlipCard from "./WorkFrontFlipCard/index.js";
import WorkBackFlipCard from "./WorkBackFlipCard/index.js";

/**
 * @typedef {Object} WorkImageData
 * @property {string} src - The filename of the background image.
 * @property {string} alt - The alternative text for the image.
 * @property {number} width - The width of the image.
 * @property {number} heigth - The height of the image (property matches database key).
 */

/**
 * @typedef {Object} WorkData
 * @property {Object} images - Object containing image data for the project.
 * @property {WorkImageData} images.backgroundImg - Data for the background preview image.
 * @property {Object} [others] - Other project-specific data passed to sub-components.
 */

/**
 * Component that renders an individual work item (project) for the works gallery.
 * It consists of a background image container and a flip card interaction.
 * The flip card displays basic project info on the front and more details on the back.
 *
 * @function Work
 * @param {Object} props - Component properties.
 * @param {WorkData} props.data - The data object representing the project.
 * @returns {HTMLDivElement} The container element for the specific work item.
 */

export default function Work({ data } = {}) {
  warningUnknownKeys(arguments, ["data"]);

  // validations
  validateProp("data", data, "object");

  const container = createElement({
    tag: "div",
    classNames: ["s-works__item"],
  });

  const bgImgContainer = createElement({
    tag: "figure",
    classNames: ["s-works__item-bg-img-container"],
  });

  const bgImg = createElement({
    tag: "img",
    classNames: ["s-works__item-bg-img"],
    attributes: {
      src: getImage(data.images.backgroundImg.src),
      alt: data.images.backgroundImg.alt,
      title: data.images.backgroundImg.alt,
      width: data.images.backgroundImg.width,
      height: data.images.backgroundImg.heigth,
    },
  });

  const flipCard = FlipCard({
    typeFlipCardClass: "work-flip-card",
    frontCard: WorkFrontFlipCard({ data: data }),
    backCard: WorkBackFlipCard({ data: data }),
  });

  append(bgImgContainer, [bgImg]);
  append(container, [flipCard, bgImgContainer]);

  return container;
}
