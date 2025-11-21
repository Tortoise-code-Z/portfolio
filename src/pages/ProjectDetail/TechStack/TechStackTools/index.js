import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import {
    fadeInObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../../js/utils/utils";
import "./index.css";

export default function TechStackTools({ tools } = {}) {
    warningUnknownKeys(arguments, ["tools"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("tools", tools, "array");

    const container = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__tools"],
    });

    const toolsTitle = InfiniteSlider({
        slideComponent: (data) => {
            return createElement({
                tag: "h3",
                classNames: ["tech-stack__tools-title"],
                innerText: data.data,
            });
        },
        dataSlides: ["Programación y herramientas"],
        duplicationSlides: 5,
    });

    fadeInObserver(toolsTitle, `animated-element--fade-in-left`);

    const toolsIcons = createElement({
        tag: "div",
        classNames: ["tech-stack__tools-icons"],
    });

    tools.forEach((tool, index) => {
        const span = createElement({
            tag: "span",
            classNames: ["tech-stack__tools-icon"],
            innerHTML: tool.icon,
            attributes: {
                title: tool.tool,
            },
        });

        fadeInObserver(
            span,
            `animated-element--fade-in-${index % 2 === 0 ? "top" : "bottom"}`
        );

        append(toolsIcons, [span]);
    });

    append(container, [toolsTitle, toolsIcons]);

    return container;
}
