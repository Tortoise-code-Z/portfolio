import {
    attachEvent,
    validateProp,
    warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../../js/utils/domHelpers";
import { getImage } from "../../../../../../js/utils/images";
import ColorThief from "colorthief";
import { svg } from "../../../../../../const/database/bbdd_consts";

export default function WorkFlipCard({ data = {} } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = createElement({
        tag: "div",
        classNames: ["s-works__front-card"],
    });

    const image = createElement({
        tag: "img",
        classNames: ["s-works__front-card-image"],
        attributes: {
            src: getImage(data.images.workImg.src),
            alt: data.images.workImg.alt,
            title: data.images.workImg.alt,
            width: data.images.workImg.width,
            height: data.images.workImg.height,
        },
    });

    const span = createElement({
        tag: "span",
        classNames: ["s-works__item-click-span"],
        innerHTML: `${svg.click}`,
    });

    append(container, [image, span]);

    return container;
}
