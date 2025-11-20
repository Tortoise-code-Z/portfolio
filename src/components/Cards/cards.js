import { createDiv } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { validateProp } from "../../js/utils/utils";
import Card from "./Card/card";
import "./cards.css";
export default function Cards({ data = [], classNames = [] } = {}) {
    // keys to receive
    const allowedKeys = ["data", "classNames"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(`Propiedad desconocida: key en Cards. Será ignorada.`);
        }
    });

    // options of each prop
    const validProps = [];

    // validations
    validateProp("data", data, "array");
    validateProp("classNames", classNames, "array");

    const container = createDiv({
        classNames: ["cards", ...classNames],
    });

    const cards = data.map((card) =>
        Card({
            text: card.title,
            icon: card.svg,
        })
    );

    cards.forEach((card) => append(container, [card]));

    return container;
}
