import { createElement } from "../../../../../../js/utils/createElementsHelper";
import {
  validateProp,
  warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";

/**
 * Component that renders the internal content of a career slider.
 * It displays the academy or institution name as a text-based slide.
 *
 * @function CareerSlide
 * @param {Object} [props={}] - Configuration properties.
 * @param {string} props.data - The text string (usually the academy name) to display in the slide.
 * @returns {HTMLParagraphElement} The paragraph element representing the slide content.
 */

export default function CareerSlide({ data } = {}) {
  warningUnknownKeys(arguments, ["data"]);

  // validations
  validateProp("data", data, "string");

  const container = createElement({
    tag: "p",
    classNames: ["s-career__course-slide"],
    innerText: data,
  });

  return container;
}
