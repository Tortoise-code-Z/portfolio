import { validateProp, warningUnknownKeys } from "../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate";
import { append } from "../../js/utils/domHelpers";

/**
 * @typedef {Object} FlipCardProps
 * @property {string} typeFlipCardClass - Clase CSS para identificar la card.
 * @property {HTMLElement} frontCard - Elemento del DOM que se mostrará en la cara frontal.
 * @property {HTMLElement} backCard - Elemento del DOM que se mostrará en la cara posterior.
 */

/**
 * Componente que crea una tarjeta con efecto de giro (flip) al hacer clic.
 * * @param {FlipCardProps} [props={}] - Propiedades de configuración de la tarjeta.
 * @returns {HTMLElement} El elemento del DOM que contiene la estructura de la tarjeta giratoria.
 */
export default function FlipCard({
  typeFlipCardClass,
  frontCard,
  backCard,
} = {}) {
  warningUnknownKeys(arguments, ["frontCard", "backCard", "typeFlipCardClass"]);

  // validations
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

  flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
  });

  return flipCard;
}
