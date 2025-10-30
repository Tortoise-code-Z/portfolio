export const attachEvent = (element, event, functionToAttach) => {
    element.addEventListener(event, functionToAttach);
};

export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
};

export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToRemove);
};

export const replaceClass = (element, newClass, classToReplace) => {
    element.classList.replace(newClass, classToReplace);
};

export const containsClass = (element, classToReview) => {
    element.classList.contains(classToReview);
};

export const setStyle = (element, styleToApply, value) => {
    element.style[styleToApply] = value;
};

export const getWindowScrollTop = () => {
    return Math.floor(window.scrollY);
};

export const getOffsetTop = (element) => {
    return element.offsetTop;
};

export const getClientHeight = (element) => {
    return element.clientHeight;
};

export const getOffsetBottom = (element) => {
    return element.offsetTop + element.clientHeight;
};

export const isOnRange = (valueToCheck, min, max) => {
    return valueToCheck >= min && valueToCheck <= max;
};

export const isEqualMajor = (valueToCheck, valueToCompare) => {
    return valueToCheck >= valueToCompare;
};

export const isMajor = (valueToCheck, valueToCompare) => {
    return valueToCheck > valueToCompare;
};

export const isEqualMinor = (valueToCheck, valueToCompare) => {
    return valueToCheck <= valueToCompare;
};

export const isMinor = (valueToCheck, valueToCompare) => {
    return valueToCheck < valueToCompare;
};

export const setHTML = (element, htmlData) => {
    element.innerHTML = htmlData;
};

const writteMachineObserver = () => {
  const worksTitle = document.querySelector(".s-works .title-h2 span");
  const worksTextToDelete = worksTitle.textContent;
  const worksTextToWrite = "ORKS";
  const careerTitle = document.querySelector(".s-career .title-h2 span");
  const careerTextToDelete = careerTitle.textContent;
  const careerTextToWrite = "AREER";

  const parametersCallback = [
    {
      element: worksTitle,
      textToDelete: worksTextToDelete,
      textToWrite: worksTextToWrite,
      delayToWrite: 80,
      delayToDelete: 80,
    },
    {
      element: careerTitle,
      textToDelete: careerTextToDelete,
      textToWrite: careerTextToWrite,
      delayToWrite: 80,
      delayToDelete: 80,
    },
  ];

  createIntersectionObserver(
    [worksTitle, careerTitle],
    writteDeleteMachine,
    parametersCallback,
    {
      threshold: 1,
    },
    true
  );
};

export const createIntersectionObserver = (
    elements,
    callback,
    parametersCallback = [],
    options = {},
    observeOnce = false
) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const itemParametersCallback = parametersCallback.find(
                    (item) => item.element === entry.target
                );

                if (itemParametersCallback) {
                    callback(itemParametersCallback);
                } else {
                    callback(entry.target);
                }

                if (observeOnce) observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach((element) => observer.observe(element));
};

export const writteDeleteMachine = async (data) => {
    await deleteMachine(data);
    await writteMachine(data);
};

export const deleteMachine = async (data) => {
    const { element, textToDelete, delayToDelete } = data;

    for (let i = textToDelete.length; i >= 0; i--) {
        element.textContent = textToDelete.substring(0, i);
        await new Promise((resolve) => setTimeout(resolve, delayToDelete));
    }
};

export const writteMachine = async (data) => {
    const { element, textToWrite, delayToWrite } = data;

    for (let i = 0; i < textToWrite.length; i++) {
        element.textContent += textToWrite[i];
        await new Promise((resolve) => setTimeout(resolve, delayToWrite));
    }
};

export const appendElement = (child, parent) => {
    parent.appendChild(child);
};

export const setAttribute = (element, attribute, value) => {
    element.setAttribute(attribute, value);
};

export const setText = (element, value) => {
    element.innerText = value;
};

export const setClassName = (element, classNames = []) => {
    element.className = classNames.join(" ");
};

export const createeElement = ({
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

    for (const [event, handler] of Object.entries(events)) {
        attachEvent(element, event, handler);
    }

    if (innerText) setText(element, innerText);
    if (innerHTML) setHTML(element, innerHTML);

    if (parent) appendElement(element, parent);

    return element;
};

export const createLink = ({
    tag = "a",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createButton = ({
    tag = "button",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createFigure = ({
    tag = "figure",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createDiv = ({
    tag = "div",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createPar = ({
    tag = "p",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

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
    return createeElement({
        tag: `${tag}${level}`,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createImg = ({
    tag = "img",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createSpan = ({
    tag = "span",
    classNames = [],
    attributes = {},
    events = {},
    innerText = "",
    innerHTML = "",
    parent = null,
} = {}) => {
    return createeElement({
        tag,
        classNames,
        attributes,
        events,
        innerText,
        innerHTML,
        parent,
    });
};

export const createFragment = () => {
    return document.createDocumentFragment();
};
