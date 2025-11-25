import { createElement } from "../../../../../../js/utils/createElementsHelper";
import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";

export default function CareerSlide({ data } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "string");

    const container = createElement({
        tag: "p",
        classNames: ["s-career__course-slide"],
        innerText: data,
    });

    return container;
}
