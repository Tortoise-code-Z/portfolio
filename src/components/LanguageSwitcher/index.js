import { createElement } from "../../js/utils/createElementsHelper.js";
import { append } from "../../js/utils/domHelpers.js";
import {
  SUPPORTED_LOCALES,
  getLocale,
  setLocale,
  t,
} from "../../js/i18n/index.js";
import "./index.css";

/**
 * Language switcher control. Renders one button per supported locale and marks
 * the active one. Clicking an inactive locale persists the choice and reloads
 * the page (handled by `setLocale`), so the whole site re-renders translated.
 *
 * @function LanguageSwitcher
 * @returns {HTMLElement} The DOM element containing the language buttons.
 */
export default function LanguageSwitcher() {
  const active = getLocale();

  const container = createElement({
    tag: "div",
    classNames: ["lang-switcher"],
    attributes: { role: "group", "aria-label": t("language.label") },
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    const isActive = locale === active;

    createElement({
      tag: "button",
      classNames: [
        "lang-switcher__btn",
        isActive ? "lang-switcher__btn--active" : "",
      ].filter(Boolean),
      innerText: t(`language.${locale}`),
      attributes: {
        type: "button",
        "aria-pressed": String(isActive),
        title: `${t("language.label")}: ${t(`language.${locale}`)}`,
      },
      events: isActive ? {} : { click: () => setLocale(locale) },
      parent: container,
    });
  });

  return container;
}
