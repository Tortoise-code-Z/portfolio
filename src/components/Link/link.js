import { createLink } from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import "../Button/button.css";
import "./link.css";

export default function Link({
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
} = {}) {
  // keys to recibe
  const allowedKeys = [
    "isButton",
    "variant",
    "theme",
    "flexReverse",
    "icon",
    "disabled",
    "target",
    "href",
    "title",
    "text",
  ];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Link. Será ignorada.`);
    }
  });

  const validVariants = ["primary", "secondary"];
  const validThemes = ["dark", "light"];
  const validTargets = ["_blank", "_self"];

  // validations
  validateProp("variant", variant, "string", validVariants);
  validateProp("theme", theme, "string", validThemes);
  validateProp("target", target, "string", validTargets);
  validateProp("text", text, "string");
  validateProp("href", href, "string");
  validateProp("title", title, "string");
  validateProp("icon", icon, "string");
  validateProp("disabled", disabled, "boolean");
  validateProp("isButton", isButton, "boolean");
  validateProp("flexReverse", flexReverse, "boolean");

  // Link
  return createLink({
    classNames: [
      "link",
      isButton ? "link--as-button" : "link--inline",
      isButton ? `button-${variant}` : null,
      isButton ? `button-${variant}--${theme}` : null,
      isButton && variant === "primary" ? "button-primary--transparent" : null,
      isButton && flexReverse ? "u-flex-row-reverse" : null,
      isButton && disabled ? `button-${variant}--disabled` : null,
    ].filter(Boolean),
    attributes: {
      title: title,
      href: href,
      target: target,
    },
    innerText: text,
    innerHTML: icon,
  });
}
