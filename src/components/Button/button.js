import { createButton } from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import "./button.css";

export default function Button({
  variant = "primary",
  theme = "dark",
  disabled = false,
  title = "Click",
  text = "Button",
  flexReverse = false,
  onClick = () => {},
  icon = "",
} = {}) {
  // keys to recibe
  const allowedKeys = [
    "variant",
    "theme",
    "disabled",
    "title",
    "onClick",
    "text",
    "icon",
    "flexReverse",
  ];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Button. Será ignorada.`);
    }
  });

  // options of each prop
  const validVariants = ["primary", "secondary"];
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
  return createButton({
    tag: "button",
    classNames: [
      `button-${variant}`,
      `button-${variant}--${theme}`,
      variant === "primary" ? "button-primary--transparent" : null,
      flexReverse ? "u-flex-row-reverse" : null,
      disabled ? `button-${variant}--disabled` : null,
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
