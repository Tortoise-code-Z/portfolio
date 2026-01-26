import { validateProps } from "../../js/utils/argumentsValidation.js";
import { createElement } from "../../js/utils/createElementsHelper.js";
import "./index.css";
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
  validateProps({
    variant: {
      value: variant,
      type: "string",
      allowedValues: ["primary", "secondary", "arrow"],
    },
    theme: { value: theme, type: "string", allowedValues: ["dark", "light"] },
    text: { value: text, type: "string" },
    title: { value: title, type: "string" },
    icon: { value: icon, type: "string" },
    disabled: { value: disabled, type: "boolean" },
    flexReverse: { value: flexReverse, type: "boolean" },
    onClick: { value: onClick, type: "function" },
  });

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
