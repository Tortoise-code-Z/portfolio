import {
  createPar,
  createSpan,
  createDiv,
} from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import { validateProp } from "../../../js/utils/utils";
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
  // keys to receive
  const allowedKeys = ["text", "icon"];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: key en Card. Será ignorada.`);
    }
  });

  // validations
  validateProp("text", text, "string");
  validateProp("icon", icon, "string");

  const container = createDiv({
    classNames: ["cards__card"],
  });

  const cardText = createPar({
    classNames: ["cards__card-text"],
    innerText: text,
  });

  const cardIcon = createSpan({
    classNames: ["cards__card-icon"],
    innerHTML: icon,
  });

  append(container, [cardText, cardIcon]);

  return container;
}
