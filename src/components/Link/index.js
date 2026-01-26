import { validateProps } from "../../js/utils/argumentsValidation";
import { createElement } from "../../js/utils/createElementsHelper";
import "../Button/index.css";
import "./index.css";

/**
 * @typedef {Object} LinkProps
 * @property {string[]} [classNames=[]] - List of additional CSS classes for the link.
 * @property {boolean} [isButton=false] - Indicates whether the link should be visually styled as a button.
 * @property {"primary"|"secondary"} [variant="primary"] - Style variant (applicable if isButton is true).
 * @property {"dark"|"light"} [theme="dark"] - Color scheme for the component.
 * @property {boolean} [flexReverse=false] - Reverses the order of internal elements (icon and text).
 * @property {string} [icon=""] - HTML fragment representing the icon.
 * @property {boolean} [disabled=false] - Disabled state (applicable if isButton is true).
 * @property {"_self"|"_blank"} [target="_self"] - Target attribute to define where to open the link.
 * @property {string} [href=""] - Destination URL of the link.
 * @property {string} [title=""] - Descriptive text for the accessibility 'title' attribute.
 * @property {string} [text=""] - Visible text of the link.
 * @property {"all"|"none"} [pointerEvents="all"] - Defines whether the element responds to mouse events.
 * @property {Object.<string, string|number>} [params={}] - Query parameters to be appended to the URL.
 */

/**
 * Component that generates a hyperlink (anchor) element with support for button styles and URL parameters.
 *
 * @function Link
 * @param {LinkProps} [props={}] - Configuration properties for the link.
 * @returns {HTMLAnchorElement} The configured DOM element for the link.
 */

export default function Link({
  classNames = [],
  isButton = false,
  variant = "primary",
  theme = "dark",
  flexReverse = false,
  icon = "",
  disabled = false,
  target = "_self",
  href = "",
  title = "",
  text = "",
  pointerEvents = "all",
  params = {},
} = {}) {
  validateProps({
    variant: {
      value: variant,
      type: "string",
      allowedValues: ["primary", "secondary"],
    },
    theme: { value: theme, type: "string", allowedValues: ["dark", "light"] },
    target: {
      value: target,
      type: "string",
      allowedValues: ["_blank", "_self"],
    },
    text: { value: theme, type: "string" },
    href: { value: href, type: "string" },
    title: { value: title, type: "string" },
    icon: { value: icon, type: "string" },
    disabled: { value: disabled, type: "boolean" },
    isButton: { value: isButton, type: "boolean" },
    flexReverse: { value: flexReverse, type: "boolean" },
    classNames: { value: classNames, type: "array" },
    params: { value: params, type: "object" },
    pointerEvents: {
      value: pointerEvents,
      type: "string",
      allowedValues: ["all", "none"],
    },
  });

  // Si hay parámetros, los añadimos a la URL
  let finalHref = href;
  if (Object.keys(params).length > 0) {
    const urlObj = new URL(href, window.location.origin);
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.append(key, value);
    });
    finalHref = urlObj.pathname + urlObj.search;
  }

  // Link
  return createElement({
    tag: "a",
    classNames: [
      "link",
      isButton ? "link--as-button" : "link--inline",
      isButton ? `button-${variant}` : null,
      isButton ? `button-${variant}--${theme}` : null,
      isButton && variant === "primary" ? "button-primary--transparent" : null,
      isButton && flexReverse ? "u-flex-row-reverse" : null,
      isButton && disabled ? `button-${variant}--disabled` : null,
      pointerEvents === "none" ? "link--events-none" : null,
      ...classNames,
    ].filter(Boolean),
    attributes: {
      title: title,
      href: finalHref,
      target: target,
    },
    innerText: text,
    innerHTML: icon,
  });
}
