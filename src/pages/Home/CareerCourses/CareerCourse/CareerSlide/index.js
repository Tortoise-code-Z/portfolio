import { validateProps } from "../../../../../js/utils/argumentsValidation";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import "./index.css";

/**
 * @typedef {Object} DataProps
 * @property {string} title - Information about the title for the career course.
 */

/**
 * @typedef {Object} CareerSlideProps
 * @property {DataProps} data - Information about the career course for the infinite slider.
 */

/**
 * Component that renders the internal content of a career slider.
 * It displays the academy or institution name as a text-based slide.
 *
 * @function CareerSlide
 * @param {CareerSlideProps} [props={}] - Configuration properties.
 * @returns {HTMLParagraphElement} The paragraph element representing the slide content.
 */

export default function CareerSlide(props = {}) {
  const {
    data,
    data: { title },
  } = props;

  validateProps({
    data: { value: data, type: "object" },
    title: { value: title, type: "string" },
  });

  const container = createElement({
    tag: "p",
    classNames: ["s-career__course-slide"],
    innerText: title,
  });

  return container;
}
