import { createButton } from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import "./button.css";

/**
 * @typedef {Object} ButtonProps
 * @property {"primary"|"secondary"|"arrow"} [variant="primary"] - Estilo visual del botón.
 * @property {"dark"|"light"} [theme="dark"] - Tema de color del componente.
 * @property {boolean} [disabled=false] - Estado de habilitación del botón.
 * @property {string} [title="Click"] - Texto para el atributo de accesibilidad title.
 * @property {string} [text=""] - Contenido textual del botón.
 * @property {boolean} [flexReverse=false] - Invierte el orden de los elementos internos (icon/text).
 * @property {Function} [onClick] - Función callback para el evento click.
 * @property {string} [icon=""] - Fragmento HTML o clase para el icono.
 * @property {string[]} [classNames=[]] - Array de clases CSS adicionales.
 */

/**
 * Genera un componente de botón con validaciones de propiedades.
 * * @param {ButtonProps} [props={}] - Propiedades de configuración del botón.
 * @returns {HTMLElement} El elemento del DOM creado.
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
    "classNames",
  ];

  // warning unknown keys
  Object.keys(arguments[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn(`Propiedad desconocida: "${key}" en Button. Será ignorada.`);
    }
  });

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
  return createButton({
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
