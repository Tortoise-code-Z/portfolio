import { createLink } from "../../js/utils/createElementsHelper";
import { validateProp } from "../../js/utils/utils";
import "../Button/button.css";
import "./link.css";

/**
 * @typedef {Object} LinkProps
 * @property {string[]} [classNames=[]] - Lista de clases CSS adicionales para el enlace.
 * @property {boolean} [isButton=false] - Indica si el enlace debe estilizarse visualmente como un botón.
 * @property {"primary"|"secondary"} [variant="primary"] - Variante de estilo (aplicable si isButton es true).
 * @property {"dark"|"light"} [theme="dark"] - Esquema de colores para el componente.
 * @property {boolean} [flexReverse=false] - Invierte el orden de los elementos internos (icono y texto).
 * @property {string} [icon=""] - Fragmento HTML que representa el icono.
 * @property {boolean} [disabled=false] - Estado deshabilitado (aplicable si isButton es true).
 * @property {"_self"|"_blank"} [target="_self"] - Atributo target para definir dónde abrir el enlace.
 * @property {string} [href=""] - URL de destino del enlace.
 * @property {string} [title=""] - Texto descriptivo para el atributo 'title' de accesibilidad.
 * @property {string} [text=""] - Texto visible del enlace.
 * @property {"all"|"none"} [pointerEvents="all"] - Define si el elemento responde a eventos del ratón.
 * @property {Object.<string, string|number>} [params={}] - Parámetros de consulta (query params) para añadir a la URL.
 */

/**
 * Componente que genera un elemento de hipervínculo (anchor) con soporte para estilos de botón y parámetros de URL.
 * * @function Link
 * @param {LinkProps} [props={}] - Propiedades de configuración del enlace.
 * @returns {HTMLAnchorElement} El elemento del DOM del enlace configurado.
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
    "classNames",
    "pointerEvents",
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
  const validPointerEvents = ["all", "none"];

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
  validateProp("classNames", classNames, "array");
  validateProp("pointerEvents", pointerEvents, "string", validPointerEvents);

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
  return createLink({
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
