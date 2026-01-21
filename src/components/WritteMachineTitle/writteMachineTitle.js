import { createHtag, createSpan } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import {
  createIntersectionObserver,
  fadeInObserver,
  validateProp,
  writteDeleteMachine,
} from "../../js/utils/utils";
import "./writteMachineTitle.css";

/**
 * @typedef {Object} WritteMachineTitleProps
 * @property {string[]} [classNames=[]] - Lista de clases CSS adicionales para el título.
 * @property {string} [fixText=""] - Texto estático que precede a la animación de escritura.
 * @property {string} [dinamicInitText=""] - Texto inicial que será borrado por la máquina de escribir.
 * @property {string} [dinamicFinalText=""] - Texto final que será escrito tras borrar el texto inicial.
 */

/**
 * Componente que genera un título con efecto de "máquina de escribir" que se activa al entrar en el viewport.
 * Realiza una transición de borrado del texto inicial y escritura del texto final.
 * * @function WritteMachineTitle
 * @param {WritteMachineTitleProps} [props={}] - Propiedades de configuración del título animado.
 * @returns {HTMLHeadingElement} El elemento de encabezado (H2) con la animación configurada.
 */

export default function WritteMachineTitle({
  classNames = [],
  fixText = "",
  dinamicInitText = "",
  dinamicFinalText = "",
} = {}) {
  // keys to recibe
  const allowedKeys = [
    "fixText",
    "dinamicFinalText",
    "dinamicInitText",
    "classNames",
  ];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Button. Será ignorada.`);
    }
  });

  // validations
  validateProp("fixText", fixText, "string");
  validateProp("dinamicInitText", dinamicInitText, "string");
  validateProp("dinamicFinalText", dinamicFinalText, "string");
  validateProp("classNames", classNames, "array");

  const title = createHtag({
    level: 2,
    classNames: ["writte-machine-title", ...classNames],
  });

  fadeInObserver(title, "animated-element--fade-in-right");

  // fix-span
  const fixSpan = createSpan({
    classNames: ["writte-machine-title__fix-text"],
    innerText: fixText,
  });

  // dinamic-span
  const dinamicSpan = createSpan({
    classNames: ["writte-machine-title__dinamic-text"],
    innerText: dinamicInitText,
  });

  append(title, [fixSpan, dinamicSpan]);

  // create observer
  createIntersectionObserver(
    [dinamicSpan],
    (data, entry) => {
      if (entry.isIntersecting) {
        writteDeleteMachine(data);
      }
    },
    [
      {
        element: dinamicSpan,
        textToDelete: dinamicInitText,
        textToWrite: dinamicFinalText,
        delayToWrite: 80,
        delayToDelete: 80,
      },
    ],

    {
      threshold: 1,
    },
    true,
  );

  return title;
}
