import InfiniteSlider from "../../../../components/InfiniteSlider/infiniteSlider";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { validateProp, warningUnknownKeys } from "../../../../js/utils/utils";
import "./index.css";

export default function TechStackDesign({ designs } = {}) {
    warningUnknownKeys(arguments, ["designs"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("designs", designs, "array");

    const container = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__design"],
    });

    const designTitle = InfiniteSlider({
        slideComponent: (data) => {
            return createElement({
                tag: "h3",
                classNames: ["pd-s-tech-stack__design-title"],
                innerText: data.data,
            });
        },
        dataSlides: ["Estilos y diseño"],
        duplicationSlides: 5,
    });

    const designTargets = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__design-targets"],
    });

    designs.forEach((design) => {
        const target = createElement({
            tag: "div",
            classNames: ["tech-stack__design-target"],
        });

        const title = createElement({
            tag: "h4",
            classNames: ["tech-stack__design-title"],
            innerText: design.item,
            innerHTML: design.icon,
        });

        const span = createElement({
            tag: "span",
            classNames: ["tech-stack__design-icon"],
        });

        append(target, [title, span]);
        append(designTargets, [target]);
    });

    append(container, [designTitle, designTargets]);

    return container;
}
