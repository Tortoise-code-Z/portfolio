import bbdd from "../../const/bbdd.js";
import { createPar } from "../utils/utils.js";

export const createAboutDesc = (parent) => {
    const descriptions = bbdd.aboutDesc;
    descriptions.forEach((data) => {
        createAboutDescItem(parent, data);
    });
};

const createAboutDescItem = (parent, data) => {
    createPar({
        parent: parent,
        innerText: data,
    });
};
