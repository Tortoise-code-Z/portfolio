import { appendElement, setAttribute, setClassName } from "./domHelpers";
import { attachEvent } from "./utils";

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

export const createLink = ({
  tag = "a",
  classNames = [],
  attributes = {},
  events = {},
  innerText = "",
  innerHTML = "",
  parent = null,
} = {}) => {
  return createElement({
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
  return createElement({
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
  return createElement({
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
  return createElement({
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
  return createElement({
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

export const createImg = ({
  tag = "img",
  classNames = [],
  attributes = {},
  events = {},
  innerText = "",
  innerHTML = "",
  parent = null,
} = {}) => {
  return createElement({
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
  return createElement({
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
