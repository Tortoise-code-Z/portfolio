import { fadeInObserver } from "../../js/utils/utils";
import "./index.css";
import { svg } from "../../const/database/bbdd_consts";
import { append } from "../../js/utils/domHelpers";
import { createElement } from "../../js/utils/createElementsHelper";
import { validateProps } from "../../js/utils/argumentsValidation";

/**
 * @typedef {Object} NoteMsgProps
 * @property {"warning"|"note"} [type="note"] - The severity level or type of message to display.
 * @property {string} [desc=""] - The descriptive text or body of the message.
 */

/**
 * Component that generates an information or warning message box with icons and animations.
 *
 * @function NoteMsg
 * @param {NoteMsgProps} [props={}] - Configuration properties for the message.
 * @returns {HTMLDivElement} The DOM element containing the structured note.
 */

export default function NoteMsg({ type = "note", desc = "" } = {}) {
  validateProps({
    desc: { value: desc, type: "string" },
    type: { value: type, type: "string", allowedValues: ["warning", "note"] },
  });

  const note = createElement({
    tag: "div",
    classNames: [
      "note-msg",
      type === "warning" ? "note-msg--warning" : "note-msg--info",
    ].filter(Boolean),
  });

  const titleContainer = createElement({
    tag: "div",
    classNames: ["note-msg__title-container"].filter(Boolean),
  });

  fadeInObserver(titleContainer, "animated-element--fade-in-right");

  const icon = createElement({
    tag: "span",
    classNames: ["note-msg__icon"].filter(Boolean),
    innerHTML: type === "note" ? svg.info : svg.warning,
  });

  const titleNode = createElement({
    tag: "p",
    classNames: ["note-msg__title"].filter(Boolean),
    innerText: type === "note" ? "Nota" : "Importante",
  });

  const description = createElement({
    tag: "p",
    classNames: ["note-msg__desc"].filter(Boolean),
    innerText: desc,
  });

  fadeInObserver(description, "animated-element--fade-in-left");

  append(titleContainer, [icon, titleNode]);
  append(note, [titleContainer, description]);

  return note;
}
