import { validateProps } from "../../../../js/utils/argumentsValidation";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { fadeInObserver } from "../../../../js/utils/utils";
import "./index.css";

/**
 * @typedef {Object} SkillProps
 * @property {string} title - The category name of the skills (e.g., "Frontend", "Design").
 * @property {string[]} tools - An array of specific tools or technologies within this category.
 * @property {boolean} [flexReverse=false] - If true, reverses the layout direction and changes the entrance animation side.
 */

/**
 * Component that renders a specific skill category with its associated tools.
 * Each tool is displayed as a hashtag-prefixed item with alternating opacities.
 * Includes a fade-in animation triggered by the intersection observer.
 *
 * @function Skill
 * @param {SkillProps} [props={}] - Configuration properties for the skill item.
 * @returns {HTMLDivElement} The container element for the skill row.
 */

export default function Skill(props = {}) {
  const { title, tools, flexReverse } = props;

  validateProps({
    title: { value: title, type: "string" },
    tools: { value: tools, type: "array" },
    flexReverse: { value: flexReverse, type: "boolean" },
  });

  tools.forEach((t) => validateProps({ tool: { value: t, type: "string" } }));

  const container = createElement({
    tag: "div",
    classNames: [
      "s-skills__skill",
      flexReverse ? "s-skills__skill--reverse" : null,
    ].filter(Boolean),
  });

  fadeInObserver(
    container,
    `animated-element--fade-in-${flexReverse ? "left" : "right"}`,
  );

  const titleNode = createElement({
    tag: "h3",
    classNames: ["s-skills__skill-title"],
    innerText: title,
  });

  const description = createElement({
    tag: "div",
    classNames: ["s-skills__skill-desc"],
  });

  tools.forEach((tool, index) => {
    const toolSpan = createElement({
      tag: "span",
      classNames: [
        "s-skills__skill-desc-item",
        index % 2 !== 0 ? "s-skills__skill-item--opacity0-7" : null,
      ].filter(Boolean),
      innerText: `#${tool}`,
    });

    append(description, [toolSpan]);
  });

  append(container, [titleNode, description]);

  return container;
}
