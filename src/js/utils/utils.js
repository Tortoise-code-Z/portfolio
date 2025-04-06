export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
};

export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToAdd);
};

export const replaceClass = (element, newClass, classToReplace) => {
    element.classList.replace(newClass, classToReplace);
};
