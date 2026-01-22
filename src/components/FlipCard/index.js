import {
  attachEvent,
  validateProp,
  warningUnknownKeys,
} from "../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate";
import { append } from "../../js/utils/domHelpers";

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
  validateProp("typeFlipCardClass", typeFlipCardClass, "string");
  validateProp("frontCard", frontCard, "HTMLElement");
  validateProp("backCard", backCard, "HTMLElement");

  const flipCard = cloneTemplate(template, "flip-card-template").querySelector(
    ".flip-card",
  );

  flipCard.classList.add(typeFlipCardClass);

  const flipCardFront = flipCard.querySelector(".flip-card-front");
  const flipCardBack = flipCard.querySelector(".flip-card-back");

  append(flipCardFront, [frontCard]);
  append(flipCardBack, [backCard]);

  attachEvent(flipCard, "click", () => flipCard.classList.toggle("flipped"));

  return flipCard;
}
