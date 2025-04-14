import {
    addClass,
    appendElement,
    attachEvent,
    createDiv,
    createFragment,
    createPar,
    removeClass,
} from "../utils/utils";

export const createTemporalPopup = (parent, data, type = "", button) => {
    const fragment = createFragment();

    const popup = createDiv({
        parent: fragment,
        classNames: ["pop-up", "temporal-pop-up", `${type}-pop-up`],
    });

    if (button) {
        // Evitar que se vuelva a ejecutar mientras no desaparezca el popup
        addClass(button, "pe-none");

        attachEvent(popup, "animationend", (event) => {
            handleAnimationEndTempPopup(event.target, button, parent);
        });
    }

    createPar({
        parent: popup,
        innerText: data,
    });

    appendElement(fragment, parent);
};

const handleAnimationEndTempPopup = (popup, button, parent) => {
    removeClass(button, "pe-none");
    parent.removeChild(popup);
};
