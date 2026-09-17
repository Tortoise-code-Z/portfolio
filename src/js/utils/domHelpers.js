import { validateProps } from "./argumentsValidation.js";

/**
 * Adds a specific class to a DOM element.
 * * @function addClass
 * @param {HTMLElement} element - The target element.
 * @param {string} classToAdd - The name of the class to add.
 */
export const addClass = (element, classToAdd) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToAdd: { value: classToAdd, type: "string" },
  });

  element.classList.add(classToAdd);
};

/**
 * Toggles a specific class on a DOM element.
 * * @function toggleClass
 * @param {HTMLElement} element - The target element.
 * @param {string} classToToggle - The name of the class to toggle.
 */
export const toggleClass = (element, classToToggle) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToToggle: { value: classToToggle, type: "string" },
  });
  element.classList.toggle(classToToggle);
};

/**
 * Removes a specific class from a DOM element.
 * * @function removeClass
 * @param {HTMLElement} element - The target element.
 * @param {string} classToRemove - The name of the class to remove.
 */
export const removeClass = (element, classToRemove) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToRemove: { value: classToRemove, type: "string" },
  });
  element.classList.remove(classToRemove);
};

/**
 * Replaces an existing class with a new one on an element.
 * * @function replaceClass
 * @param {HTMLElement} element - The target element.
 * @param {string} newClass - The class to be added.
 * @param {string} classToReplace - The class to be removed.
 */
export const replaceClass = (element, newClass, classToReplace) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    newClass: { value: newClass, type: "string" },
    classToReplace: { value: classToReplace, type: "string" },
  });
  element.classList.replace(newClass, classToReplace);
};

/**
 * Checks if an element contains a specific class. Returns a boolean.
 * * @function containsClass
 * @param {HTMLElement} element - The element to check.
 * @param {string} classToReview - The class name to search for.
 * @returns {boolean} True if the class exists, false otherwise.
 */
export const containsClass = (element, classToReview) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToReview: { value: classToReview, type: "string" },
  });
  return element.classList.contains(classToReview);
};

/**
 * Applies a CSS style value directly to an element's property.
 * * @function setStyle
 * @param {HTMLElement} element - The target element.
 * @param {string} styleToApply - The CSS property name.
 * @param {string|number} value - The value to assign to the property.
 */
export const setStyle = (element, styleToApply, value) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    styleToApply: { value: styleToApply, type: "string" },
    value: { value: value, type: ["string", "number"] },
  });
  element.style[styleToApply] = value;
};

/**
 * Applies multiple CSS styles to an element simultaneously.
 * * This function iterates through an object of styles and assigns each property
 * and value to the target element's style object.
 *
 * @function setStyles
 * @param {HTMLElement} element - The target element to style.
 * @param {Object.<string, string|number>} styles - An object where keys are CSS properties and values are their settings.
 * * @example
 * setStyles(myElement, {
 * backgroundColor: 'red',
 * marginTop: '20px',
 * opacity: 0.5
 * });
 */
export const setStyles = (element, styles) => {
  Object.entries(styles).forEach(([property, value]) => {
    setStyle(element, property, value);
  });
};

/**
 * Sets the value of a specific attribute on an element.
 * * @function setAttribute
 * @param {HTMLElement} element - The target element.
 * @param {string} attribute - The attribute name.
 * @param {string|number} value - The value to set.
 */
export const setAttribute = (element, attribute, value) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    attribute: { value: attribute, type: "string" },
    value: { value: value, type: ["string", "number"] },
  });
  element.setAttribute(attribute, value);
};

/**
 * Sets multiple attributes on a DOM element.
 * * This utility iterates over an object of attributes and applies them to the element.
 * If a value is null or undefined, it removes the attribute.
 *
 * @function setAttributes
 * @param {HTMLElement} element - The target element to modify.
 * @param {Object.<string, string|number|boolean>} attributes - An object where keys are attribute names and values are their values.
 * * @example
 * setAttributes(myElement, {
 * id: 'main-container',
 * 'data-navbar-color': 'white',
 * role: 'button'
 * });
 */
export const setAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    setAttribute(element, key, value);
  });
};

/**
 * Sets the text content of an element.
 * * @function setText
 * @param {HTMLElement} element - The target element.
 * @param {string} value - The text to display.
 */
export const setText = (element, value) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    value: { value: value, type: "string" },
  });
  element.innerText = value;
};

/**
 * Appends one or more nodes to the end of a parent element.
 * * @function append
 * @param {HTMLElement} parent - The parent element.
 * @param {...Node|undefined[]} children - Child nodes to be appended.
 */
export function append(parent, children) {
  validateProps({
    parent: { value: parent, type: "HTMLElement" },
    children: { value: children, type: "array" },
  });

  children.forEach((child) => {
    validateProps({
      child: { value: child, type: ["Node", "undefined"] },
    });

    if (!child) return;

    parent.appendChild(child);
  });
}

/**
 * Sets the inner HTML of an element after validating the input.
 * * This utility serves as a controlled wrapper for `innerHTML`. It is useful for
 * injecting strings of HTML into a container, typically for templates or
 * dynamic content generated from trusted sources.
 *
 * @function setHTML
 * @param {HTMLElement} element - The target element where the HTML will be injected.
 * @param {string} htmlString - The string of HTML to be rendered.
 * @throws {TypeError} If the element is not an HTMLElement or the htmlString is not a string.
 * * @example
 * const container = getElement('#container');
 * setHTML(container, '<h1>Hola Mundo</h1><p>Esto es contenido dinámico.</p>');
 */
export const setHTML = (element, htmlString) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    htmlString: { value: htmlString, type: "string" },
  });

  element.innerHTML = htmlString;
};

/**
 * Finds the first element within the document or a specific container that matches the given CSS selector.
 * * @function getElement
 * @param {string} selector - A valid CSS selector string (e.g., '.class', '#id', 'tag').
 * @param {HTMLElement|Document} [parent=document] - The DOM element or document to search within.
 * @returns {HTMLElement|null} The first matching element or null if no match is found.
 * @throws {TypeError} If the selector is not a valid string.
 * * @example
 * const submitBtn = getElement('#submit-form');
 * const item = getElement('.list-item', container);
 */
export const getElement = (selector, parent = document) => {
  validateProps({
    selector: { value: selector, type: "string" },
    parent: { value: parent, type: ["HTMLElement", "Document"] },
  });

  return parent.querySelector(selector);
};

/**
 * Selects all elements within the document or a specific container that match the given CSS selector.
 * * This utility returns a static NodeList representing a list of the document's elements
 * that match the specified group of selectors.
 *
 * @function getElements
 * @param {string} selector - A valid CSS selector string (e.g., '.class', 'tag', '[attribute]').
 * @param {HTMLElement|Document} [parent=document] - The DOM element or document to search within.
 * @returns {NodeList} A non-live NodeList of all matching HTMLElements.
 * @throws {TypeError} If the selector is not a valid string.
 * * @example
 * const allCards = getElements('.card');
 * const listItems = getElements('li', menuContainer);
 */
export const getElements = (selector, parent = document) => {
  validateProps({
    selector: { value: selector, type: "string" },
    parent: { value: parent, type: ["HTMLElement", "Document"] },
  });

  return Array.from(parent.querySelectorAll(selector));
};
