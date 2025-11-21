import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import {
    fadeInObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import "./index.css";

export default function Skill({ skill, flexReverse = false } = {}) {
    warningUnknownKeys(arguments, ["skill", "flexReverse"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("skill", skill, "object");
    validateProp("flexReverse", flexReverse, "boolean");

    const container = createElement({
        tag: "div",
        classNames: [
            "s-skills__skill",
            flexReverse ? "s-skills__skill--reverse" : null,
        ].filter(Boolean),
    });

    fadeInObserver(
        container,
        `animated-element--fade-in-${flexReverse ? "left" : "right"}`
    );

    const title = createElement({
        tag: "h3",
        classNames: ["s-skills__skill-title"],
        innerText: skill.title,
    });

    const description = createElement({
        tag: "div",
        classNames: ["s-skills__skill-desc"],
    });

    skill.tools.forEach((tool, index) => {
        const toolSpan = createElement({
            tag: "span",
            classNames: [
                "s-skills__skill-desc-item",
                index % 2 !== 0 ? "s-skills__skill-item--opacity0-7" : null,
            ].filter(Boolean),
            innerText: `#${tool}`,
        });

        append(description, [toolSpan]);
    });

    append(container, [title, description]);

    return container;
}
