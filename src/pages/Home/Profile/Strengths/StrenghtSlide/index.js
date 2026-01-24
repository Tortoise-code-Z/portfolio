import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import { validateProp } from "../../../../../js/utils/utils";
import "./index.css";

/**
 * Component that renders an individual strength slide for the infinite slider.
 * Each slide displays a professional competency with its corresponding name and icon.
 *
 * @function StrengthSlide
 * @param {Object} [props={}] - Configuration properties.
 * @param {Object} props.data - The data object for the strength.
 * @param {string} props.data.name - The title or name of the strength.
 * @param {string} props.data.iconRef - The SVG string or reference for the strength's icon.
 * @returns {HTMLDivElement} The container element for the specific strength slide.
 */

export default function StrengthSlide({ data } = {}) {
  // validations
  validateProp("data", data, "object");

  const container = createElement({
    tag: "div",
    classNames: ["s-about__strengths-item"],
  });

  const title = createElement({
    tag: "h5",
    classNames: ["s-about__strengths-item-title"],
    innerText: data.name,
  });

  const icon = createElement({
    tag: "span",
    classNames: ["s-about__strengths-item-icon"],
    innerHTML: data.iconRef,
  });

  append(container, [icon, title]);

  return container;
}
