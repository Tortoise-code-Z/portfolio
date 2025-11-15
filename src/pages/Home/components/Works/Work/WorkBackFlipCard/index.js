import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../../js/utils/createElementsHelper";

export default function WorkBackFlipCard({ data = {} } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = createElement({
        tag: "div",
        classNames: ["s-works__back-card"],
    });

    return container;
}
