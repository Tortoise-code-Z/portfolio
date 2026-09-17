/**
 * Inline flag SVGs for the language switcher, one per supported locale.
 *
 * They are id-free (no `<clipPath>`/`id` references) on purpose: the same flag
 * is injected in more than one place (the trigger and its menu option), and
 * duplicated element ids in the document would break `url(#id)` references.
 * Colors are literal (not `currentColor`) so the flags keep their real colors
 * regardless of the navbar's white/black theme flip.
 *
 * @module components/LanguageSwitcher/flags
 */

/** Spain flag (red–yellow–red bands), simplified without the coat of arms. */
const es = `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="3" height="2" fill="#AA151B"/><rect y="0.5" width="3" height="1" fill="#F1BF00"/></svg>`;

/** United Kingdom flag (Union Jack), simplified for a small icon size. */
const en = `<svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2"/><path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>`;

/**
 * Flag SVG markup keyed by locale code.
 * @type {Object.<string, string>}
 */
export const flags = { es, en };

/** Down chevron used by the trigger; uses `currentColor` so it follows the theme. */
export const chevron = `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
