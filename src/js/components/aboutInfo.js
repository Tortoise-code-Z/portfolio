import bbdd from "../../json/bbdd.json";
import { createPar } from "../utils/utils";

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
