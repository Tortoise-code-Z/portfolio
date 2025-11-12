import InfiniteSlider from "../../../../../components/InfiniteSlider/infiniteSlider";
import bbdd from "../../../../../const/database/bbdd";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";

export default function Strengths() {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Strengths. Será ignorada."
            );
        }
    });

    const strengthsContainer = createElement({
        tag: "div",
        classNames: ["s-about__strengths"],
    });

    const strengthsTitle = createElement({
        tag: "h4",
        classNames: ["s-about__strengths-title"],
        innerText: "Strengths",
    });

    const strengthsSlide = ({ data } = {}) => {
        const container = createElement({
            tag: "div",
            classNames: ["s-about__strengths-item"],
        });

        const title = createElement({
            tag: "h5",
            classNames: ["s-about__strengths-item-title"],
            innerText: data.name,
        });

        const icon = createElement({
            tag: "span",
            classNames: ["s-about__strengths-item-icon"],
            innerHTML: data.iconRef,
        });

        append(container, [icon, title]);

        return container;
    };

    const strengthsSlider = InfiniteSlider({
        dataSlides: bbdd.strengths,
        slideComponent: strengthsSlide,
        duplicationSlides: 3,
        direction: "left",
    });

    append(strengthsContainer, [strengthsTitle, strengthsSlider]);

    return strengthsContainer;
}
