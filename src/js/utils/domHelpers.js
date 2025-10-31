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

export const setHTML = (element, htmlData) => {
  element.innerHTML = htmlData;
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
