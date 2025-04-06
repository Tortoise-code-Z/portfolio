export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
};

export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToRemove);
};

export const replaceClass = (element, newClass, classToReplace) => {
    element.classList.replace(newClass, classToReplace);
};
