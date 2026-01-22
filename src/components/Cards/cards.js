import { createDiv } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { fadeInObserver, validateProp } from "../../js/utils/utils";
import Card from "./Card/card";
import "./cards.css";

/**
 * @typedef {Object} CardData
 * @property {string} title - The title to be displayed on the card.
 * @property {string} svg - The HTML content of the icon or image in SVG format.
 */

/**
 * @typedef {Object} CardsProps
 * @property {CardData[]} [data=[]] - An array of objects containing the information for each card.
 * @property {string[]} [classNames=[]] - A list of additional CSS classes for the container.
 */

/**
 * Component that generates a section of cards with entrance animations.
 * * @function Cards
 * @param {CardsProps} [props={}] - Configuration properties for the component.
 * @returns {HTMLDivElement} The main container with the rendered cards.
 */

export default function Cards({ data = [], classNames = [] } = {}) {
  // keys to receive
  const allowedKeys = ["data", "classNames"];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: key en Cards. Será ignorada.`);
    }
  });

  // validations
  validateProp("data", data, "array");
  validateProp("classNames", classNames, "array");

  const container = createDiv({
    classNames: ["cards", ...classNames],
  });

  const cards = data.map((card, index) => {
    const cardItem = Card({
      text: card.title,
      icon: card.svg,
    });

    fadeInObserver(
      cardItem,
      `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`,
    );

    return cardItem;
  });

  cards.forEach((card) => append(container, [card]));

  return container;
}
