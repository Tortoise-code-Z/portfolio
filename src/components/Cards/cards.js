import { createDiv } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { fadeInObserver, validateProp } from "../../js/utils/utils";
import Card from "./Card/card";
import "./cards.css";

/**
 * @typedef {Object} CardData
 * @property {string} title - Título que se mostrará en la tarjeta.
 * @property {string} svg - Contenido HTML del icono o imagen en formato SVG.
 */

/**
 * @typedef {Object} CardsProps
 * @property {CardData[]} [data=[]] - Array de objetos con la información de cada tarjeta.
 * @property {string[]} [classNames=[]] - Lista de clases CSS adicionales para el contenedor.
 */

/**
 * Componente que genera una sección de tarjetas con animación de entrada.
 * * @param {CardsProps} [props={}] - Propiedades de configuración del componente.
 * @returns {HTMLDivElement} El contenedor principal con las tarjetas renderizadas.
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
