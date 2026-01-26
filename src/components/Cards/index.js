import { validateProps } from "../../js/utils/argumentsValidation";
import { createElement } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { fadeInObserver } from "../../js/utils/utils";
import Card from "./Card";
import "./index.css";

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
  validateProps({
    data: { value: data, type: "array" },
    classNames: { value: classNames, type: "array" },
  });

  const container = createElement({
    tag: "div",
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
