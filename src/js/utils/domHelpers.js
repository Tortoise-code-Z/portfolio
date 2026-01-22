/**
 * Adds a specific class to a DOM element.
 * * @function addClass
 * @param {HTMLElement} element - The target element.
 * @param {string} classToAdd - The name of the class to add.
 */
export const addClass = (element, classToAdd) => {
  element.classList.add(classToAdd);
};

/**
 * Removes a specific class from a DOM element.
 * * @function removeClass
 * @param {HTMLElement} element - The target element.
 * @param {string} classToRemove - The name of the class to remove.
 */
export const removeClass = (element, classToRemove) => {
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
  element.style[styleToApply] = value;
};

/**
 * Gets the current vertical scroll position of the window.
 * * @function getWindowScrollTop
 * @returns {number} The floor value of window.scrollY.
 */
export const getWindowScrollTop = () => {
  return Math.floor(window.scrollY);
};

/**
 * Gets the distance from the top of the element to its positioned ancestor.
 * * @function getOffsetTop
 * @param {HTMLElement} element - The target element.
 * @returns {number} The offsetTop value.
 */
export const getOffsetTop = (element) => {
  return element.offsetTop;
};

/**
 * Gets the internal height of an element (including padding, but excluding borders/scrollbars).
 * * @function getClientHeight
 * @param {HTMLElement} element - The target element.
 * @returns {number} The clientHeight value.
 */
export const getClientHeight = (element) => {
  return element.clientHeight;
};

/**
 * Calculates the position of the bottom edge of an element.
 * * @function getOffsetBottom
 * @param {HTMLElement} element - The target element.
 * @returns {number} The sum of offsetTop and clientHeight.
 */
export const getOffsetBottom = (element) => {
  return element.offsetTop + element.clientHeight;
};

/**
 * Inserts HTML content inside an element.
 * * @function setHTML
 * @param {HTMLElement} element - The target element.
 * @param {string} htmlData - The HTML string to insert.
 */
export const setHTML = (element, htmlData) => {
  element.innerHTML = htmlData;
};

/**
 * Inserts a child node at the end of a parent node.
 * * @function appendElement
 * @param {Node} child - The node to append.
 * @param {HTMLElement} parent - The parent element.
 */
export const appendElement = (child, parent) => {
  parent.appendChild(child);
};

/**
 * Sets the value of a specific attribute on an element.
 * * @function setAttribute
 * @param {HTMLElement} element - The target element.
 * @param {string} attribute - The attribute name.
 * @param {string|number} value - The value to set.
 */
export const setAttribute = (element, attribute, value) => {
  element.setAttribute(attribute, value);
};

/**
 * Sets the text content of an element.
 * * @function setText
 * @param {HTMLElement} element - The target element.
 * @param {string} value - The text to display.
 */
export const setText = (element, value) => {
  element.innerText = value;
};

/**
 * Sets multiple classes for an element from an array.
 * * @function setClassName
 * @param {HTMLElement} element - The target element.
 * @param {string[]} [classNames=[]] - Array of class names to apply.
 */
export const setClassName = (element, classNames = []) => {
  element.className = classNames.join(" ");
};

/**
 * Appends one or more nodes to the end of a parent element.
 * * @function append
 * @param {HTMLElement} parent - The parent element.
 * @param {...Node} children - Child nodes to be appended.
 */
export function append(parent, children) {
  children.forEach((child) => {
    if (child instanceof Node) parent.appendChild(child);
  });
}
