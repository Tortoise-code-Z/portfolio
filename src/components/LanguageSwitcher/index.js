import { createElement } from "../../js/utils/createElementsHelper.js";
import {
  SUPPORTED_LOCALES,
  getLocale,
  setLocale,
  t,
} from "../../js/i18n/index.js";
import { flags, chevron } from "./flags.js";
import "./index.css";

const OPEN_CLASS = "lang-switcher--open";

/**
 * Language switcher rendered as a custom, accessible select-like dropdown.
 *
 * A native `<select>` cannot render SVG flags inside its options, so this is a
 * hand-built listbox styled to look like a select: the trigger shows the active
 * locale's flag and code, and the menu lists every supported locale with its
 * flag. Choosing an inactive locale persists the choice and reloads the page
 * (handled by `setLocale`), matching the site's render-once architecture.
 *
 * The trigger inherits the navbar's color (white/black flip via the scroll
 * observer); the open menu carries its own dark background so it stays legible
 * over any section.
 *
 * @function LanguageSwitcher
 * @returns {HTMLElement} The DOM element containing the dropdown.
 */
export default function LanguageSwitcher() {
  const active = getLocale();

  const container = createElement({
    tag: "div",
    classNames: ["lang-switcher"],
  });

  const trigger = createElement({
    tag: "button",
    classNames: ["lang-switcher__trigger"],
    attributes: {
      type: "button",
      "aria-haspopup": "listbox",
      "aria-expanded": "false",
      "aria-label": t("language.label"),
      title: t("language.label"),
    },
    parent: container,
  });

  createElement({
    tag: "span",
    classNames: ["lang-switcher__flag"],
    innerHTML: flags[active] ?? "",
    parent: trigger,
  });
  createElement({
    tag: "span",
    classNames: ["lang-switcher__code"],
    innerText: t(`language.${active}`),
    parent: trigger,
  });
  createElement({
    tag: "span",
    classNames: ["lang-switcher__chevron"],
    innerHTML: chevron,
    parent: trigger,
  });

  const menu = createElement({
    tag: "ul",
    classNames: ["lang-switcher__menu"],
    attributes: { role: "listbox", "aria-label": t("language.label") },
    parent: container,
  });

  const setOpen = (open) => {
    container.classList.toggle(OPEN_CLASS, open);
    trigger.setAttribute("aria-expanded", String(open));
  };

  SUPPORTED_LOCALES.forEach((locale) => {
    const isActive = locale === active;

    const choose = () => {
      if (isActive) return;
      setOpen(false);
      setLocale(locale);
    };

    const option = createElement({
      tag: "li",
      classNames: [
        "lang-switcher__option",
        isActive ? "lang-switcher__option--active" : "",
      ].filter(Boolean),
      attributes: {
        role: "option",
        "aria-selected": String(isActive),
        tabindex: isActive ? "-1" : "0",
        "data-locale": locale,
      },
      events: isActive
        ? {}
        : {
            click: choose,
            keydown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose();
              }
            },
          },
      parent: menu,
    });

    createElement({
      tag: "span",
      classNames: ["lang-switcher__flag"],
      innerHTML: flags[locale] ?? "",
      parent: option,
    });
    createElement({
      tag: "span",
      classNames: ["lang-switcher__code"],
      innerText: t(`language.${locale}`),
      parent: option,
    });
  });

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!container.classList.contains(OPEN_CLASS));
  });

  document.addEventListener("click", (event) => {
    if (!container.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  return container;
}
