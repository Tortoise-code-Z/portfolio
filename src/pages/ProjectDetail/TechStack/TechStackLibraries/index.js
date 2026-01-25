import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import { validateProp } from "../../../../js/utils/argumentsValidation";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { fadeInObserver } from "../../../../js/utils/utils";
import "./index.css";

/**
 * @typedef {Object} LibraryItem
 * @property {string} item - The name of the library or utility (e.g., "React", "Axios").
 */

/**
 * Component that renders the "Libraries and Utilities" subsection within the Tech Stack.
 * * This component displays an infinite scrolling title moving to the right and
 * a collection of tags representing the libraries used. Each tag includes
 * entrance animations that alternate between fading in from the top or bottom.
 * * @function TechStackLibraries
 * @param {Object} props - Component properties.
 * @param {LibraryItem[]} props.libraries - Array of library objects used in the project.
 * @returns {HTMLDivElement|null} The container element or null if the libraries array is empty.
 */

export default function TechStackLibraries({ libraries } = {}) {
  // validations
  validateProp("libraries", libraries, "array");

  if (libraries.length === 0) return null;

  const container = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__libraries"],
  });

  const librariesTitle = InfiniteSlider({
    slideComponent: (data) => {
      return createElement({
        tag: "h3",
        classNames: ["pd-s-tech-stack__libraries-title"],
        innerText: data.data,
      });
    },
    dataSlides: ["Librerías y utilidades"],
    duplicationSlides: 5,
    direction: "right",
  });

  fadeInObserver(librariesTitle, `animated-element--fade-in-right`);

  const librariesTags = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__libraries-tags"],
  });

  libraries.forEach((librarie, index) => {
    const span = createElement({
      tag: "span",
      classNames: ["pd-s-tech-stack__libraries-tag"],
      innerText: librarie.item,
    });

    fadeInObserver(
      span,
      `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`,
    );

    append(librariesTags, [span]);
  });

  append(container, [librariesTitle, librariesTags]);

  return container;
}
