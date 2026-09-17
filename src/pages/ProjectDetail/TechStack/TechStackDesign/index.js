import InfiniteSlider from "../../../../components/InfiniteSlider/index.js";
import { validateProps } from "../../../../js/utils/argumentsValidation.js";
import { createElement } from "../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../js/utils/domHelpers.js";
import { fadeInObserver } from "../../../../js/utils/utils.js";
import "./index.css";

/**
 * @typedef {Object} DesignItem
 * @property {string} item - The name of the styling or design tool (e.g., "SASS", "Figma").
 * @property {string} icon - SVG string representing the tool's icon.
 */

/**
 * Component that renders the "Styles and Design" subsection within the Tech Stack.
 * * It features an infinite scrolling title and a grid of design tool targets.
 * Each target includes the tool's name and its corresponding icon, with staggered
 * entrance animations (alternating top and bottom fade-ins).
 * * @function TechStackDesign
 * @param {Object} props - Component properties.
 * @param {DesignItem[]} props.designs - Array of design tools used in the project.
 * @returns {HTMLDivElement|null} The container element or null if no designs are provided.
 */

export default function TechStackDesign(props = {}) {
  const { designs } = props;

  validateProps({
    designs: { value: designs, type: "array" },
  });

  if (designs.length === 0) return undefined;

  designs.forEach(({ icon, item }) =>
    validateProps({
      icon: { value: icon, type: "string" },
      item: { value: item, type: "string" },
    }),
  );

  const container = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__design"],
  });

  const designTitle = InfiniteSlider({
    slideComponent: (data) => {
      return createElement({
        tag: "h3",
        classNames: ["pd-s-tech-stack__design-title"],
        innerText: data.data,
      });
    },
    dataSlides: ["Estilos y diseño"],
    duplicationSlides: 5,
  });

  fadeInObserver(designTitle, `animated-element--fade-in-left`);

  const designTargets = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__design-targets"],
  });

  designs.forEach(({ icon, item }, index) => {
    const target = createElement({
      tag: "div",
      classNames: ["tech-stack__design-target"],
    });

    const title = createElement({
      tag: "h4",
      classNames: ["tech-stack__design-title"],
      innerText: item,
    });

    const span = createElement({
      tag: "span",
      classNames: ["tech-stack__design-icon"],
      innerHTML: icon,
    });

    fadeInObserver(
      target,
      `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`,
    );

    append(target, [title, span]);
    append(designTargets, [target]);
  });

  append(container, [designTitle, designTargets]);

  return container;
}
