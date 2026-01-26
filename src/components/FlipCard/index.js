import { attachEvent } from "../../js/utils/utils.js";
import "./index.css";
import template from "./index.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate.js";
import {
  addClass,
  append,
  getElement,
  toggleClass,
} from "../../js/utils/domHelpers.js";
import { validateProps } from "../../js/utils/argumentsValidation.js";

/**
 * @typedef {Object} FlipCardProps
 * @property {string} typeFlipCardClass - CSS class to identify the card and its flip style.
 * @property {HTMLElement} frontCard - The DOM element to be displayed on the front face.
 * @property {HTMLElement} backCard - The DOM element to be displayed on the back face.
 */

/**
 * Component that creates a card with a flip effect when clicked.
 *
 * @function FlipCard
 * @param {FlipCardProps} [props={}] - Configuration properties for the card.
 * @returns {HTMLElement} The DOM element containing the rotating card structure.
 */

export default function FlipCard({
  typeFlipCardClass,
  frontCard,
  backCard,
} = {}) {
  validateProps({
    typeFlipCardClass: { value: typeFlipCardClass, type: "string" },
    frontCard: { value: frontCard, type: "HTMLElement" },
    backCard: { value: backCard, type: "HTMLElement" },
  });

  const flipCard = getElement(
    ".flip-card",
    cloneTemplate(template, "flip-card-template"),
  );

  addClass(flipCard, typeFlipCardClass);

  const flipCardFront = getElement(".flip-card-front", flipCard);
  const flipCardBack = getElement(".flip-card-back", flipCard);

  append(flipCardFront, [frontCard]);
  append(flipCardBack, [backCard]);

  attachEvent(flipCard, "click", () => toggleClass(flipCard, "flipped"));

  return flipCard;
}
