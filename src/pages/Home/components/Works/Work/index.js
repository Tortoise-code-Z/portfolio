import { getImage } from "../../../../../js/utils/images.js";
import {
    fadeInObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../js/utils/createElementsHelper.js";
import { append } from "../../../../../js/utils/domHelpers.js";
import FlipCard from "../../../../../components/FlipCard/index.js";
import WorkFrontFlipCard from "./WorkFrontFlipCard/index.js";
import WorkBackFlipCard from "./WorkBackFlipCard/index.js";
import { svg } from "../../../../../const/database/bbdd_consts.js";

export default function Work({ data } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = createElement({
        tag: "div",
        classNames: ["s-works__item"],
    });

    const bgImgContainer = createElement({
        tag: "figure",
        classNames: ["s-works__item-bg-img-container"],
    });

    const bgImg = createElement({
        tag: "img",
        classNames: ["s-works__item-bg-img"],
        attributes: {
            src: getImage(data.images.backgroundImg.src),
            alt: data.images.backgroundImg.alt,
            title: data.images.backgroundImg.alt,
            width: data.images.backgroundImg.width,
            height: data.images.backgroundImg.heigth,
        },
    });

    const flipCard = FlipCard({
        typeFlipCardClass: "work-flip-card",
        frontCard: WorkFrontFlipCard({ data: data }),
        backCard: WorkBackFlipCard({ data: data }),
    });

    append(bgImgContainer, [bgImg]);
    append(container, [flipCard, bgImgContainer]);

    return container;
}
