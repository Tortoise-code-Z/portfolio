import { getImage } from "../../../../js/utils/images.js";
import "./index.css";
import { createElement } from "../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../js/utils/domHelpers.js";
import FlipCard from "../../../../components/FlipCard/index.js";
import WorkFrontFlipCard from "./WorkFrontFlipCard/index.js";
import WorkBackFlipCard from "./WorkBackFlipCard/index.js";
import FeaturedTag from "../../../../components/FeaturedTag/index.js";
import { validateProps } from "../../../../js/utils/argumentsValidation.js";

/**
 * @typedef {Object} WorkData
 * @property {Object} bgSrcImage - Src image data.
 * @property {Object} bgAltImage - Alt image data.
 * @property {Object} bgWidthImage - Width image data.
 * @property {Object} bgHeightImage - Height image data.
 * @property {boolean} featured - Is a featured project.
 * @property {WorkBackFlipData} backCard - Data of the back flip card.
 * @property {WorkFrontFlipCardProps} frontCard - Data of the front flip card.
 */

/**
 * @typedef {Object} WorkBackFlipData
 * @property {string} id - Unique identifier used for the project detail URL.
 * @property {string} name - The title of the project.
 * @property {string} visibility - The visibility status (e.g., "Public", "Private").
 * @property {string} projectRole - The role held during the project (e.g., "Frontend Developer").
 * @property {string} year - The year the project was completed.
 * @property {Object} bgSrcImage - Src image data.
 * @property {Object} bgAltImage - Alt image data.
 * @property {Object} bgWidthImage - Width image data.
 * @property {Object} bgHeightImage - Height image data.
 * @property {object[]} fastTools - List of fast tools to display.
 * @property {string} fastTools.tool - Tool icon to display.
 * @property {string} demoLink - URL for demo live project.
 * @property {string} githubLink - URL for github repo project.
 */

/**
 * @typedef {Object} WorkFrontFlipCardProps
 * @property {string} imgSrc - The filename for the foreground/logo image of the project.
 * @property {string} imgAlt - Alternative text description for the image.
 * @property {number} imgWidth - Natural width of the image.
 * @property {number} imgHeight - Natural height of the image.
 */

/**
 * Component that renders an individual work item (project) for the works gallery.
 * It consists of a background image container and a flip card interaction.
 * The flip card displays basic project info on the front and more details on the back.
 *
 * @function Work
 * @param {WorkData} props - Component properties.
 * @returns {HTMLDivElement} The container element for the specific work item.
 */

export default function Work(props = {}) {
  const {
    bgAltImage,
    bgHeightImage,
    bgSrcImage,
    bgWidthImage,
    backCard,
    frontCard,
    featured,
  } = props;

  validateProps({
    bgSrcImage: { value: bgSrcImage, type: "string" },
    bgAltImage: { value: bgAltImage, type: "string" },
    bgWidthImage: { value: bgWidthImage, type: "number" },
    bgHeightImage: { value: bgHeightImage, type: "number" },
    featured: { value: featured, type: "boolean" },
  });

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
      src: getImage(bgSrcImage),
      alt: bgAltImage,
      title: bgAltImage,
      width: bgWidthImage,
      height: bgHeightImage,
    },
  });

  const flipCard = FlipCard({
    typeFlipCardClass: "work-flip-card",
    frontCard: WorkFrontFlipCard(frontCard),
    backCard: WorkBackFlipCard(backCard),
  });

  append(bgImgContainer, [bgImg]);
  append(container, [flipCard, bgImgContainer]);

  if (featured) append(container, [FeaturedTag()]);

  return container;
}
