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
 * @property {string[]} [classNames=[]] - List of additional CSS classes for the title.
 * @property {string} [fixText=""] - Static text that precedes the typing animation.
 * @property {string} [dinamicInitText=""] - Initial text that will be deleted by the typewriter effect.
 * @property {string} [dinamicFinalText=""] - Final text that will be written after deleting the initial text.
 */

/**
 * Component that generates a title with a "typewriter" effect triggered when entering the viewport.
 * Performs a transition by deleting the initial text and typing the final text.
 *
 * @function WritteMachineTitle
 * @param {WritteMachineTitleProps} [props={}] - Configuration properties for the animated title.
 * @returns {HTMLHeadingElement} The H2 heading element with the configured animation.
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
