import { createElement } from "../../js/utils/createElementsHelper";
import { validateProp, warningUnknownKeys } from "../../js/utils/utils";
import "./button.css";
/**
 * @typedef {Object} ButtonProps
 * @property {"primary"|"secondary"|"arrow"} [variant="primary"] - The visual style of the button.
 * @property {"dark"|"light"} [theme="dark"] - The color theme of the component.
 * @property {boolean} [disabled=false] - Whether the button is disabled.
 * @property {string} [title="Click"] - Description for the accessibility 'title' attribute.
 * @property {string} [text=""] - The text content to be displayed inside the button.
 * @property {boolean} [flexReverse=false] - If true, reverses the order of the icon and text.
 * @property {Function} [onClick] - Callback function executed on click events.
 * @property {string} [icon=""] - HTML string or class representing the icon.
 * @property {string[]} [classNames=[]] - List of additional CSS classes.
 */

/**
 * Generates a button component with property validations.
 *
 * @function Button
 * @param {ButtonProps} [props={}] - Configuration properties for the button.
 * @returns {HTMLElement} The created DOM element.
 */

export default function Button({
  variant = "primary",
  theme = "dark",
  disabled = false,
  title = "Click",
  text = "",
  flexReverse = false,
  onClick = () => {},
  icon = "",
  classNames = [],
} = {}) {
  // options of each prop
  const validVariants = ["primary", "secondary", "arrow"];
  const validThemes = ["dark", "light"];

  // validations
  validateProp("variant", variant, "string", validVariants);
  validateProp("theme", theme, "string", validThemes);
  validateProp("text", text, "string");
  validateProp("title", title, "string");
  validateProp("icon", icon, "string");
  validateProp("disabled", disabled, "boolean");
  validateProp("flexReverse", flexReverse, "boolean");
  validateProp("onClick", onClick, "function");

  // button
  return createElement({
    tag: "button",
    classNames: [
      `button-${variant}`,
      `button-${variant}--${theme}`,
      variant === "primary" ? "button-primary--transparent" : null,
      flexReverse ? "u-flex-row-reverse" : null,
      disabled ? `button-${variant}--disabled` : null,
      ...classNames,
    ].filter(Boolean),
    attributes: {
      title: title,
    },
    events: {
      click: onClick,
    },
    innerText: text,
    innerHTML: icon,
  });
}
