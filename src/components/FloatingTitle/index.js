import { validateProps } from "../../js/utils/argumentsValidation.js";
import {
  createElement,
  createHtag,
} from "../../js/utils/createElementsHelper.js";
import { append, setStyles } from "../../js/utils/domHelpers.js";
import { fadeInObserver } from "../../js/utils/utils.js";
import "./index.css";

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
  validateProps({
    text: { value: text, type: "string" },
    icon: { value: icon, type: "string" },
    upperCase: { value: upperCase, type: "boolean" },
    level: { value: level, type: "number", allowedValues: [1, 2, 3, 4, 5, 6] },
    theme: { value: theme, type: "string", allowedValues: ["dark", "light"] },
    iconPosition: {
      value: iconPosition,
      type: "string",
      allowedValues: ["left", "right"],
    },
    top: { value: top, type: ["number", "null"] },
    left: { value: left, type: ["number", "null"] },
  });

  const container = createElement({
    tag: "div",
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
    setStyles(container, {
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      zIndex: 99999,
    });
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

  const span = createElement({
    tag: "span",
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
