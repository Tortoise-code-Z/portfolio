import { createDiv } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { fadeInObserver, validateProp } from "../../js/utils/utils";
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

    const cards = data.map((card, index) => {
        const cardItem = Card({
            text: card.title,
            icon: card.svg,
        });

        fadeInObserver(
            cardItem,
            `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`
        );

        return cardItem;
    });

    cards.forEach((card) => append(container, [card]));

    return container;
}
