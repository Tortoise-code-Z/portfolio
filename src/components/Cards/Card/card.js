import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import { validateProp, warningUnknownKeys } from "../../../js/utils/utils";
import "./card.css";

/**
 * @typedef {Object} CardProps
 * @property {string} text - The textual content to be displayed on the card.
 * @property {string} icon - The HTML content or class representing the card's icon.
 */

/**
 * Component that creates an individual card with text and an icon.
 *
 * @function Card
 * @param {CardProps} [props={}] - Configuration properties for the card.
 * @returns {HTMLDivElement} The container element of the card.
 */

export default function Card({ text, icon } = {}) {
  // validations
  validateProp("text", text, "string");
  validateProp("icon", icon, "string");

  const container = createElement({
    tag: "div",
    classNames: ["cards__card"],
  });

  const cardText = createElement({
    tag: "p",
    classNames: ["cards__card-text"],
    innerText: text,
  });

  const cardIcon = createElement({
    tag: "span",
    classNames: ["cards__card-icon"],
    innerHTML: icon,
  });

  append(container, [cardText, cardIcon]);

  return container;
}
