/**
 * Toggles the visibility of an element based on the scroll direction.
 *
 * @function scrollVisibilitty
 * @param {HTMLElement} element - The target element to show/hide.
 * @param {string} classToHidden - The CSS class applied to hide the element.
 */
export function scrollVisibilitty(element, classToHidden) {
  if ((!element) instanceof HTMLElement && (!classToHidden) instanceof String)
    return;

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
  const { element, textToDelete, delayToDelete } = data;

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
  const { element, textToWrite, delayToWrite } = data;

  for (let i = 0; i < textToWrite.length; i++) {
    element.textContent += textToWrite[i];
    await new Promise((resolve) => setTimeout(resolve, delayToWrite));
  }
};

/**
 * Checks if a numeric value falls within a specific inclusive range.
 *
 * @function isOnRange
 * @param {number} valueToCheck - The value to validate.
 * @param {number} min - The lower bound.
 * @param {number} max - The upper bound.
 * @returns {boolean} True if the value is within range.
 */
export const isOnRange = (valueToCheck, min, max) => {
  return valueToCheck >= min && valueToCheck <= max;
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
  element.addEventListener(event, functionToAttach);
};

/**
 * Validates a property's type and value against allowed constraints.
 *
 * @function validateProp
 * @param {string} name - The name of the property (for error reporting).
 * @param {*} value - The actual value to validate.
 * @param {string|string[]} type - The expected type(s) (e.g., 'string', 'HTMLElement', 'array').
 * @param {*[]} [allowedValues=null] - An optional list of specific allowed values.
 * @throws {TypeError} If the type is incorrect.
 * @throws {RangeError} If the value is not in the allowedValues list.
 * @returns {boolean} Returns true if validation passes.
 */
export function validateProp(name, value, type, allowedValues = null) {
  const types = Array.isArray(type) ? type : [type];

  const isNullAllowed = types.includes("null");

  if (isNullAllowed && value === null) {
    return true; // ✅ Valor es null y está permitido.
  }

  const isHTMLElementType = types.includes("HTMLElement");

  if (isHTMLElementType) {
    const isHTMLElement =
      typeof HTMLElement !== "undefined" && value instanceof HTMLElement;

    if (!isHTMLElement) {
      throw new TypeError(
        `"${name}" → Debe ser de tipo HTMLElement. Recibido: ${
          value?.constructor?.name || typeof value
        }`,
      );
    }
  } else if (types.includes("array")) {
    if (!Array.isArray(value)) {
      throw new TypeError(
        `"${name}" → Debe ser un array. Recibido: ${typeof value}`,
      );
    }
  } else {
    const valueType = typeof value;

    if (!types.includes(valueType)) {
      throw new TypeError(
        `"${name}" → Debe ser de tipo ${types.join(
          " o ",
        )}. Recibido: ${valueType}`,
      );
    }
  }

  if (allowedValues && !allowedValues.includes(value)) {
    throw new RangeError(
      `"${name}" → Solo se permiten los valores: ${allowedValues.join(
        ", ",
      )}. Recibido: ${value}`,
    );
  }

  return true;
}

/**
 * Logs a warning in the console if unknown keys are passed in the arguments object.
 *
 * @function warningUnknownKeys
 * @param {Object[]} args - The arguments array to check (usually [props]).
 * @param {string[]} allowedKeys - The list of valid property names.
 */
export const warningUnknownKeys = (args, allowedKeys) => {
  Object.keys(args[0] || {}).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      console.warn("Propiedad desconocida: ", key, "en Home. Será ignorada.");
    }
  });
};
