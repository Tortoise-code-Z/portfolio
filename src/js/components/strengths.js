import bbdd from "../../json/bbdd.json";
import {
    appendElement,
    createDiv,
    createFragment,
    createPar,
} from "../utils/utils.js";

export const createStrengths = (parent) => {
    const strengths = bbdd.strengths;
    for (let i = 0; i < 3; i++) {
        createStrengthItem(parent, strengths);
    }
};

const createStrengthItem = (parent, data) => {
    const fragment = createFragment();

    const slide = createDiv({
        parent: fragment,
        classNames: ["sa-absolute"],
    });

    data.forEach((strength) => {
        const { name, iconRef } = strength;
        const slideChild = createDiv({
            parent: slide,
            classNames: ["strengths-item"],
            innerHTML: iconRef,
        });

        createPar({
            parent: slideChild,
            classNames: ["sa-item-desc"],
            innerText: name,
        });
    });

    appendElement(fragment, parent);
};
