/**
 * Minimal, dependency-free internationalization (i18n) module.
 *
 * The site is a static, render-once multipage app, so this module follows the
 * same model: the active locale is resolved once at page boot, the document
 * `lang` is set, and everything renders in that locale. Switching language is
 * done by persisting the choice and reloading the page (see `setLocale`).
 *
 * Two concerns are separated:
 * - UI chrome strings (fixed labels) → dictionaries in `./locales/*`, read via `t`.
 * - Page content (bbdd.js) → per-field locale objects, read via `localize`.
 *
 * @module i18n
 */

import { validateProps } from "../utils/argumentsValidation.js";
import { es } from "./locales/es.js";
import { en } from "./locales/en.js";

/**
 * A nested dictionary of UI strings. Leaves are strings; branches are objects.
 * @typedef {Object.<string, (string|Dictionary)>} Dictionary
 */

/**
 * A per-field translatable value: an object keyed by locale whose values are
 * the translated content (string, array, etc.). Example: `{ es: "Hola", en: "Hi" }`.
 * @typedef {Object.<string, *>} LocaleField
 */

/** Locales supported by the app, in display order. @type {string[]} */
export const SUPPORTED_LOCALES = ["es", "en"];

/** Locale used as the source of truth and as a fallback. @type {string} */
export const DEFAULT_LOCALE = "es";

/** localStorage key holding the user's language preference. @type {string} */
export const STORAGE_KEY = "portfolio-lang";

/** UI dictionaries by locale. @type {Object.<string, Dictionary>} */
const dictionaries = { es, en };

/**
 * Cached active locale for this page load. Resolved lazily on first read so
 * that helpers work even if `initI18n` was not called explicitly.
 * @type {string|null}
 */
let activeLocale = null;

/**
 * Checks whether a value is a supported locale code.
 *
 * @function isSupportedLocale
 * @param {*} value - The value to check.
 * @returns {boolean} True if `value` is one of `SUPPORTED_LOCALES`.
 */
export function isSupportedLocale(value) {
  return typeof value === "string" && SUPPORTED_LOCALES.includes(value);
}

/**
 * Reads the persisted locale from localStorage, guarding against environments
 * where storage is unavailable (private mode, blocked cookies).
 *
 * @function readStoredLocale
 * @returns {string|null} The stored locale if valid, otherwise null.
 */
function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Persists the locale to localStorage, ignoring storage failures.
 *
 * @function writeStoredLocale
 * @param {string} locale - The locale to persist.
 */
function writeStoredLocale(locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* Storage unavailable: preference simply won't persist. */
  }
}

/**
 * Resolves the initial locale for this page load, in priority order:
 * stored preference → browser language → default locale.
 *
 * @function resolveInitialLocale
 * @returns {string} A supported locale code.
 */
function resolveInitialLocale() {
  const stored = readStoredLocale();
  if (stored) return stored;

  const browser = typeof navigator !== "undefined" ? navigator.language : "";
  const base = (browser || "").slice(0, 2).toLowerCase();
  return isSupportedLocale(base) ? base : DEFAULT_LOCALE;
}

/**
 * Reflects the active locale on the document root (`<html lang>`), so that
 * assistive tech and the browser know the page language.
 *
 * @function applyDocumentLang
 * @param {string} locale - The active locale code.
 */
export function applyDocumentLang(locale) {
  validateProps({
    locale: { value: locale, type: "string", allowedValues: SUPPORTED_LOCALES },
  });
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", locale);
  }
}

/**
 * Returns the active locale for this page load, resolving it on first call.
 *
 * @function getLocale
 * @returns {string} The active locale code.
 */
export function getLocale() {
  if (activeLocale === null) activeLocale = resolveInitialLocale();
  return activeLocale;
}

/**
 * Sets the active locale: validates it, persists the preference and reloads
 * the page so every component re-renders in the new language. This matches the
 * app's render-once architecture (no in-place re-render).
 *
 * @function setLocale
 * @param {string} locale - The locale to switch to.
 * @param {boolean} [reload=true] - Whether to reload the page after persisting.
 */
export function setLocale(locale, reload = true) {
  validateProps({
    locale: { value: locale, type: "string", allowedValues: SUPPORTED_LOCALES },
    reload: { value: reload, type: "boolean" },
  });

  if (locale === getLocale() && reload) return;

  writeStoredLocale(locale);
  activeLocale = locale;
  applyDocumentLang(locale);

  if (reload && typeof window !== "undefined") window.location.reload();
}

/**
 * Initializes i18n for the current page: resolves the active locale and applies
 * `<html lang>`. Call once at the top of each page entry, before assembling
 * components.
 *
 * @function initI18n
 * @returns {string} The active locale code.
 */
export function initI18n() {
  const locale = getLocale();
  applyDocumentLang(locale);
  return locale;
}

/**
 * Looks up a nested value in an object using a dot-separated path.
 *
 * @function getByPath
 * @param {Object} source - The object to traverse.
 * @param {string} path - Dot-separated key path (e.g. "footer.thanks").
 * @returns {*} The value at the path, or undefined if not found.
 */
function getByPath(source, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), source);
}

/**
 * Translates a UI string by key, using the active locale. Falls back to the
 * default locale and, as a last resort, returns the key itself (and warns) so
 * a missing translation is visible but never crashes the render.
 *
 * @function t
 * @param {string} key - Dot-separated key into the UI dictionary (e.g. "nav.works").
 * @returns {string} The translated string, or the key if not found.
 */
export function t(key) {
  validateProps({
    key: { value: key, type: "string" },
  });

  const locale = getLocale();
  const value =
    getByPath(dictionaries[locale], key) ??
    getByPath(dictionaries[DEFAULT_LOCALE], key);

  if (typeof value !== "string") {
    console.warn(
      `[i18n] Missing translation for key "${key}" (locale "${locale}").`
    );
    return key;
  }
  return value;
}

/**
 * Determines whether a value is a per-field locale object (its own keys are all
 * supported locale codes), as opposed to a plain content value.
 *
 * @function isLocaleField
 * @param {*} value - The value to inspect.
 * @returns {boolean} True if `value` is a locale-keyed field.
 */
function isLocaleField(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const keys = Object.keys(value);
  return (
    keys.length > 0 && keys.every((key) => SUPPORTED_LOCALES.includes(key))
  );
}

/**
 * Resolves a translatable content field to the active locale. If the value is a
 * locale object (`{ es, en }`) it returns the entry for the active locale (or
 * the default locale as a fallback); otherwise it returns the value unchanged,
 * so non-translatable data passes through untouched.
 *
 * @function localize
 * @param {LocaleField|*} field - A locale object or any plain value.
 * @param {string} [locale=getLocale()] - Optional explicit locale (for tests).
 * @returns {*} The localized value, or the original value if not translatable.
 */
export function localize(field, locale = getLocale()) {
  if (!isLocaleField(field)) return field;
  const value = field[locale];
  return value !== undefined ? value : field[DEFAULT_LOCALE];
}

/**
 * Deeply resolves every per-field locale object within a data structure to the
 * active locale, leaving non-translatable values untouched.
 *
 * Walks objects and arrays recursively. At each node, if the value is a locale
 * field (`{ es, en }`) it is resolved with {@link localize}; otherwise the walk
 * continues into its children. Plain values (strings, numbers, code snippets,
 * URLs) pass through unchanged. Used to expose the content database (`bbdd.js`)
 * pre-resolved so consumers never deal with locale objects.
 *
 * @function localizeDeep
 * @param {*} value - Any value: a locale field, an object, an array, or a leaf.
 * @param {string} [locale=getLocale()] - Optional explicit locale (for tests).
 * @returns {*} A structurally-equivalent value with locale fields resolved.
 */
export function localizeDeep(value, locale = getLocale()) {
  if (isLocaleField(value)) return localize(value, locale);
  if (Array.isArray(value)) {
    return value.map((item) => localizeDeep(item, locale));
  }
  if (value !== null && typeof value === "object") {
    const result = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = localizeDeep(val, locale);
    }
    return result;
  }
  return value;
}
