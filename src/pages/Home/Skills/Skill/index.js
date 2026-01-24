import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { fadeInObserver, validateProp } from "../../../../js/utils/utils";
import "./index.css";

/**
 * @typedef {Object} SkillData
 * @property {string} title - The category name of the skills (e.g., "Frontend", "Design").
 * @property {string[]} tools - An array of specific tools or technologies within this category.
 */

/**
 * @typedef {Object} SkillProps
 * @property {SkillData} skill - The data object containing the skill title and tools.
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

export default function Skill({ skill, flexReverse = false } = {}) {
  // validations
  validateProp("skill", skill, "object");
  validateProp("flexReverse", flexReverse, "boolean");

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

  const title = createElement({
    tag: "h3",
    classNames: ["s-skills__skill-title"],
    innerText: skill.title,
  });

  const description = createElement({
    tag: "div",
    classNames: ["s-skills__skill-desc"],
  });

  skill.tools.forEach((tool, index) => {
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

  append(container, [title, description]);

  return container;
}
