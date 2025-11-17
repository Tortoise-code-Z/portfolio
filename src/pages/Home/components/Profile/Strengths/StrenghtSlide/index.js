import { createElement } from "../../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../../js/utils/domHelpers";
import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";

export default function StrengthSlide({ data } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

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
}
