import {
  createDiv,
  createHtag,
  createSpan,
} from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { fadeInObserver, validateProp } from "../../js/utils/utils";
import "./floatingTitle.css";

/**
 * @typedef {Object} FloatingTitleProps
 * @property {boolean} [upperCase=false] - Indicates whether the text should be displayed in uppercase.
 * @property {string} [text=""] - The textual content of the title.
 * @property {string} [icon=""] - HTML fragment for the accompanying icon.
 * @property {1|2|3|4|5|6} [level=2] - The heading tag level (h1-h6).
 * @property {"dark"|"light"} [theme="dark"] - The color scheme of the component.
 * @property {"left"|"right"} [iconPosition="right"] - The position of the icon relative to the text.
 * @property {number|null} [top=null] - Vertical position in pixels (enables absolute positioning).
 * @property {number|null} [left=null] - Horizontal position in pixels (enables absolute positioning).
 */

/**
 * Component that generates a title with an icon, theme support, and floating positioning.
 *
 * @function FloatingTitle
 * @param {FloatingTitleProps} [props={}] - Configuration properties for the title.
 * @returns {HTMLDivElement} Container element of the floating title.
 */

export default function FloatingTitle({
  upperCase = false,
  text = "",
  icon = "",
  level = 2,
  theme = "dark",
  iconPosition = "right",
  top = null,
  left = null,
} = {}) {
  // keys to recibe
  const allowedKeys = [
    "text",
    "icon",
    "level",
    "theme",
    "iconPosition",
    "upperCase",
    "top",
    "left",
  ];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Button. Será ignorada.`);
    }
  });

  // options of each props
  const validHTags = [1, 2, 3, 4, 5, 6];
  const validThemes = ["dark", "light"];
  const validIconPositions = ["left", "right"];

  // validations
  validateProp("text", text, "string");
  validateProp("icon", icon, "string");
  validateProp("upperCase", upperCase, "boolean");
  validateProp("level", level, "number", validHTags);
  validateProp("theme", theme, "string", validThemes);
  validateProp("iconPosition", iconPosition, "string", validIconPositions);
  validateProp("top", top, ["number", "null"]);
  validateProp("left", left, ["number", "null"]);

  const container = createDiv({
    classNames: [
      "floating-title",
      upperCase ? "floating-title__text--upperCase" : null,
    ].filter(Boolean),
  });

  fadeInObserver(
    container,
    "animated-element--fade-in-right",
    "floating-title--animation",
  );

  if (top || top === 0 || left || left === 0) {
    container.style.position = "absolute";
    container.style.top = `${top}px`;
    container.style.left = `${left}px`;
    container.style.zIndex = 99999;
  }

  const title = createHtag({
    level: level,
    classNames: [
      "floating-title__text",
      theme === "dark"
        ? "floating-title__text--dark"
        : "floating-title__text--light",
    ],
    innerText: text,
  });

  const span = createSpan({
    classNames: [
      "floating-title__icon",
      theme === "dark"
        ? "floating-title__icon--dark"
        : "floating-title__icon--light",
    ],
    innerHTML: icon,
  });

  if (iconPosition === "left") {
    append(container, [span, title]);
  } else {
    append(container, [title, span]);
  }

  return container;
}
