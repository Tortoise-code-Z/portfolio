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

export const scrollUp = () => {
    const scrollTop = getWindowScrollTop();

    if (prevScrollTop >= scrollTop) {
        return true;
    }

    return false;
};

export const offsetTopObserver = (coordY) => {
    const scrollTop = getWindowScrollTop();
    return scrollTop >= coordY;
};

export const offsetRangeObserver = (top, bottom) => {
    const scrollTop = getWindowScrollTop();
    return scrollTop > top && scrollTop < bottom;
};

export const offsetBottomObserver = (coordY) => {
    const scrollTop = getWindowScrollTop();
    return scrollTop >= coordY;
};

export const createIntersectionObserver = (
    elements,
    callback,
    parametersCallback = [],
    options = {},
    observeOnce = false
) => {
    console.log(options);
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

export const createElement = (type) => {
    return document.createElement(type);
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
