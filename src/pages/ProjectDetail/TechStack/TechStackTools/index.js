import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import { validateProp } from "../../../../js/utils/argumentsValidation";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { fadeInObserver } from "../../../../js/utils/utils";
import "./index.css";

/**
 * @typedef {Object} ToolItem
 * @property {string} tool - The name of the programming language or tool.
 * @property {string} icon - SVG string representing the tool's icon.
 */

/**
 * Component that renders the "Programming and Tools" subsection within the Tech Stack.
 * * This component displays an infinite horizontal slider with the section title
 * and a grid of icons representing the technical tools. Each icon includes
 * a native tooltip and staggered entrance animations (alternating top/bottom).
 * * @function TechStackTools
 * @param {Object} props - Component properties.
 * @param {ToolItem[]} props.tools - Array of tool objects to be displayed.
 * @returns {HTMLDivElement} The container element for the tools subsection.
 */

export default function TechStackTools({ tools } = {}) {
  // validations
  validateProp("tools", tools, "array");

  const container = createElement({
    tag: "div",
    classNames: ["pd-s-tech-stack__tools"],
  });

  const toolsTitle = InfiniteSlider({
    slideComponent: (data) => {
      return createElement({
        tag: "h3",
        classNames: ["tech-stack__tools-title"],
        innerText: data.data,
      });
    },
    dataSlides: ["Programación y herramientas"],
    duplicationSlides: 5,
  });

  fadeInObserver(toolsTitle, `animated-element--fade-in-left`);

  const toolsIcons = createElement({
    tag: "div",
    classNames: ["tech-stack__tools-icons"],
  });

  tools.forEach((tool, index) => {
    const span = createElement({
      tag: "span",
      classNames: ["tech-stack__tools-icon"],
      innerHTML: tool.icon,
      attributes: {
        title: tool.tool,
      },
    });

    fadeInObserver(
      span,
      `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`,
    );

    append(toolsIcons, [span]);
  });

  append(container, [toolsTitle, toolsIcons]);

  return container;
}
