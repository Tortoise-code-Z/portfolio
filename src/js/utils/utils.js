import { validateProps } from "./argumentsValidation";

/**
 * Toggles the visibility of an element based on the scroll direction.
 *
 * @function scrollVisibilitty
 * @param {HTMLElement} element - The target element to show/hide.
 * @param {string} classToHidden - The CSS class applied to hide the element.
 */
export function scrollVisibilitty(element, classToHidden) {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToHidden: { value: classToHidden, type: "string" },
  });

  let lastScrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    const scrollMargin = 50;

    if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > scrollMargin
    ) {
      element.classList.add(classToHidden);
    } else if (currentScrollPosition < lastScrollPosition) {
      element.classList.remove(classToHidden);
    }

    lastScrollPosition = currentScrollPosition;
  });
}

/**
 * Retrieves one or all query parameters from the current URL.
 *
 * @function getQueryParams
 * @param {string|null} [param=null] - The name of the specific parameter to retrieve. If null, returns all parameters as an object.
 * @returns {string|Object|null} The parameter value, an object with all parameters, or null if not found.
 */
export const getQueryParams = (param = null) => {
  validateProps({
    param: { value: param, type: ["string", "null"] },
  });

  const params = new URLSearchParams(window.location.search);

  if (param) {
    return params.get(param);
  }

  return Object.fromEntries(params.entries());
};

/**
 * Creates and initializes an IntersectionObserver for a set of elements.
 *
 * @function createIntersectionObserver
 * @param {HTMLElement[]} elements - Array of elements to observe.
 * @param {Function} callback - Function to execute when an intersection occurs.
 * @param {Object[]} [parametersCallback=[]] - Custom parameters to pass to the callback for specific elements.
 * @param {IntersectionObserverInit} [options={}] - Configuration options for the observer (root, margin, threshold).
 * @param {boolean} [observeOnce=false] - If true, the observer stops watching the element after the first intersection.
 */
export const createIntersectionObserver = (
  elements,
  callback,
  parametersCallback = [],
  options = {},
  observeOnce = false,
) => {
  validateProps({
    elements: { value: elements, type: "array" },
    callback: { value: callback, type: "function" },
    parametersCallback: { value: parametersCallback, type: "array" },
    options: { value: options, type: "object" },
    observeOnce: { value: observeOnce, type: "boolean" },
  });
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const itemParametersCallback = parametersCallback.find(
        (item) => item?.element === entry?.target,
      );

      if (itemParametersCallback) {
        callback(itemParametersCallback, entry);
      } else {
        callback(entry);
      }

      if (observeOnce && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => observer.observe(element));
};

/**
 * Observes an element and triggers a fade-in animation when it enters the viewport.
 *
 * @function fadeInObserver
 * @param {HTMLElement} element - The element to animate.
 * @param {string} classToAdd - The CSS class that triggers the animation.
 * @param {string} [currentAnimatedClass] - An optional class to add after the initial animation ends.
 */
export const fadeInObserver = (element, classToAdd, currentAnimatedClass) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
    classToAdd: { value: classToAdd, type: "string" },
    currentAnimatedClass: { value: currentAnimatedClass, type: "string" },
  });

  element.classList.add("animated-element");

  createIntersectionObserver(
    [element],
    (entry) => {
      if (entry.isIntersecting) {
        element.classList.remove("animated-element");
        entry.target.classList.add(classToAdd);
        attachEvent(entry.target, "animationend", () => {
          entry.target.classList.remove(classToAdd);
          if (currentAnimatedClass)
            entry.target.classList.add(currentAnimatedClass);
        });
      }
    },
    [],
    {},
    true,
  );
};

/**
 * Initializes an IntersectionObserver specifically for the navbar logic.
 *
 * @function navbarObserver
 * @param {HTMLElement} element - The section element to observe to trigger navbar changes.
 */
export const navbarObserver = (element) => {
  validateProps({
    element: { value: element, type: "HTMLElement" },
  });

  setTimeout(() => {
    createIntersectionObserver(
      [element],
      (entry) => navbarObserverCallback(entry),
      [],
      { threshold: 0, rootMargin: "-100px 0px -90% 0px" },
      false,
    );
  }, 0);
};

/**
 * Callback handled by the navbar observer to change navbar colors based on section attributes.
 *
 * @function navbarObserverCallback
 * @param {IntersectionObserverEntry} entry - The intersection entry object.
 */
export const navbarObserverCallback = (entry) => {
  validateProps({
    entry: { value: entry, type: "object" },
  });

  const navbar = document.querySelector(".navbar");
  const requiredColor = entry.target.getAttribute("data-navbar-color");

  const colorClass = `navbar--color-${requiredColor}`;

  const oppositeColorClass =
    requiredColor === "white" ? "navbar--color-black" : "navbar--color-white";

  if (entry.isIntersecting) {
    if (navbar.classList.contains(oppositeColorClass)) {
      navbar.classList.remove(oppositeColorClass);
    }

    navbar.classList.add(colorClass);
  }
};

/**
 * Orchestrates a typewriter effect by first deleting text and then writing new text.
 *
 * @function writteDeleteMachine
 * @param {Object} data - Configuration object containing element, texts, and delays.
 * @returns {Promise<void>}
 */
export const writteDeleteMachine = async (data) => {
  await deleteMachine(data);
  await writteMachine(data);
};

/**
 * Deletes text from an element character by character to simulate a backspace effect.
 *
 * @function deleteMachine
 * @param {Object} data - Configuration object.
 * @param {HTMLElement} data.element - The target element.
 * @param {string} data.textToDelete - The string to be erased.
 * @param {number} data.delayToDelete - Milliseconds to wait between each character deletion.
 * @returns {Promise<void>}
 */
export const deleteMachine = async (data) => {
  validateProps({
    data: { value: data, type: "object" },
  });

  const { element, textToDelete, delayToDelete } = data;

  validateProps({
    element: { value: element, type: "HTMLElement" },
    textToDelete: { value: textToDelete, type: "string" },
    delayToDelete: { value: delayToDelete, type: "number" },
  });

  for (let i = textToDelete.length; i >= 0; i--) {
    element.textContent = textToDelete.substring(0, i);
    await new Promise((resolve) => setTimeout(resolve, delayToDelete));
  }
};

/**
 * Writes text into an element character by character to simulate a typing effect.
 *
 * @function writteMachine
 * @param {Object} data - Configuration object.
 * @param {HTMLElement} data.element - The target element.
 * @param {string} data.textToWrite - The string to be typed.
 * @param {number} data.delayToWrite - Milliseconds to wait between each character.
 * @returns {Promise<void>}
 */
export const writteMachine = async (data) => {
  validateProps({
    data: { value: data, type: "object" },
  });
  const { element, textToWrite, delayToWrite } = data;
  validateProps({
    element: { value: element, type: "HTMLElement" },
    textToWrite: { value: textToWrite, type: "string" },
    delayToWrite: { value: delayToWrite, type: "number" },
  });

  for (let i = 0; i < textToWrite.length; i++) {
    element.textContent += textToWrite[i];
    await new Promise((resolve) => setTimeout(resolve, delayToWrite));
  }
};

/**
 * Attaches an event listener to a DOM element.
 *
 * @function attachEvent
 * @param {HTMLElement} element - The target element.
 * @param {string} event - The event type (e.g., 'click').
 * @param {EventListenerOrEventListenerObject} functionToAttach - The handler function.
 */

export const attachEvent = (element, event, functionToAttach) => {
  validateProps({
    element: { value: element, type: "number" },
    number: { value: number, type: "string" },
    functionToAttach: { value: functionToAttach, type: "function" },
  });
  element.addEventListener(event, functionToAttach);
};
