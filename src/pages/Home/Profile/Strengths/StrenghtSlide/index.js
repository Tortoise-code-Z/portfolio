import { validateProps } from "../../../../../js/utils/argumentsValidation.js";
import { createElement } from "../../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../../js/utils/domHelpers.js";
import "./index.css";

/**
 * @typedef {Object} DataProps
 * @property {Object} name - Information about the academy for the infinite slider.
 * @property {Object} iconRef - Information about the academy for the infinite slider.
 */

/**
 * @typedef {Object} StrengthSlideProps
 * @property {DataProps} data - Information about the academy for the infinite slider.
 */

/**
 * Component that renders an individual strength slide for the infinite slider.
 * Each slide displays a professional competency with its corresponding name and icon.
 *
 * @function StrengthSlide
 * @param {StrengthSlideProps} [props={}] - Configuration properties.
 * @returns {HTMLDivElement} The container element for the specific strength slide.
 */

export default function StrengthSlide(props = {}) {
  const {
    data,
    data: { iconRef, name },
  } = props;

  validateProps({
    data: { value: data, type: "object" },
    iconRef: { value: iconRef, type: "string" },
    name: { value: name, type: "string" },
  });

  const container = createElement({
    tag: "div",
    classNames: ["s-about__strengths-item"],
  });

  const title = createElement({
    tag: "h5",
    classNames: ["s-about__strengths-item-title"],
    innerText: name,
  });

  const icon = createElement({
    tag: "span",
    classNames: ["s-about__strengths-item-icon"],
    innerHTML: iconRef,
  });

  append(container, [icon, title]);

  return container;
}
