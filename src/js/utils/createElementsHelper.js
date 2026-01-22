import { appendElement, setAttribute, setClassName } from "./domHelpers";
import { attachEvent } from "./utils";

/**
 * @typedef {Object} ElementConfig
 * @property {string} tag - The HTML tag name to create (e.g., 'div', 'span').
 * @property {string[]} [classNames=[]] - An array of CSS class names to apply to the element.
 * @property {Object.<string, string>} [attributes={}] - An object containing attribute keys and values.
 * @property {Object.<string, Function>} [events={}] - An object mapping event types (e.g., 'click') to handler functions.
 * @property {string} [innerText=""] - The text content to be assigned to the element.
 * @property {string} [innerHTML=""] - A string of HTML to be inserted into the element.
 * @property {HTMLElement|null} [parent=null] - An optional parent element to which the new element will be appended.
 */

/**
 * Creates an HTML element with the specified configuration, including attributes, events, and classes.
 * * @function createElement
 * @param {ElementConfig} [config={}] - The configuration object for the new element.
 * @returns {HTMLElement} The newly created and configured DOM element.
 */

export const createElement = ({
  tag = "",
  classNames = [],
  attributes = {},
  events = {},
  innerText = "",
  innerHTML = "",
  parent = null,
} = {}) => {
  const element = document.createElement(tag);

  if (classNames.length) setClassName(element, classNames);

  for (const [key, value] of Object.entries(attributes)) {
    setAttribute(element, key, value);
  }

  if (innerText) element.textContent = innerText;
  if (innerHTML) element.insertAdjacentHTML("beforeend", innerHTML);

  for (const [event, handler] of Object.entries(events)) {
    attachEvent(element, event, handler);
  }

  if (parent) appendElement(element, parent);

  return element;
};

/**
 * Creates a heading element (h1-h6) based on the provided level.
 *
 * @function createHtag
 * @param {ElementConfig & {level?: number}} [props={}] - Configuration properties, including the heading level.
 * @returns {HTMLHeadingElement} The configured heading element.
 */

export const createHtag = ({
  level = 1,
  tag = "h",
  classNames = [],
  attributes = {},
  events = {},
  innerText = "",
  innerHTML = "",
  parent = null,
} = {}) => {
  return createElement({
    tag: `${tag}${level}`,
    classNames,
    attributes,
    events,
    innerText,
    innerHTML,
    parent,
  });
};

/**
 * Creates a new empty DocumentFragment.
 * Useful for appending multiple elements to the DOM at once to improve performance.
 *
 * @function createFragment
 * @returns {DocumentFragment} The newly created document fragment.
 */

export const createFragment = () => {
  return document.createDocumentFragment();
};
