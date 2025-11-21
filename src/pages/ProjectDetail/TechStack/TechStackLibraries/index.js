import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import {
    fadeInObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../../js/utils/utils";
import "./index.css";

export default function TechStackLibraries({ libraries } = {}) {
    warningUnknownKeys(arguments, ["libraries"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("libraries", libraries, "array");

    if (libraries.length === 0) return null;

    const container = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__libraries"],
    });

    const librariesTitle = InfiniteSlider({
        slideComponent: (data) => {
            return createElement({
                tag: "h3",
                classNames: ["pd-s-tech-stack__libraries-title"],
                innerText: data.data,
            });
        },
        dataSlides: ["Librerías y utilidades"],
        duplicationSlides: 5,
        direction: "right",
    });

    fadeInObserver(librariesTitle, `animated-element--fade-in-right`);

    const librariesTags = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__libraries-tags"],
    });

    libraries.forEach((librarie, index) => {
        const span = createElement({
            tag: "span",
            classNames: ["pd-s-tech-stack__libraries-tag"],
            innerText: librarie.item,
        });

        fadeInObserver(
            span,
            `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`
        );

        append(librariesTags, [span]);
    });

    append(container, [librariesTitle, librariesTags]);

    return container;
}
