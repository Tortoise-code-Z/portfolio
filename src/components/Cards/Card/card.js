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
 * @property {string} text - El contenido textual que se mostrará en la tarjeta.
 * @property {string} icon - El contenido HTML o clase que representa el icono de la tarjeta.
 */

/**
 * Componente que crea una tarjeta individual con texto e icono.
 * * @param {CardProps} [props={}] - Propiedades de configuración de la tarjeta.
 * @returns {HTMLDivElement} El elemento contenedor de la tarjeta.
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
