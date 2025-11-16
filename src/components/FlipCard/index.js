import { validateProp, warningUnknownKeys } from "../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";
import cloneTemplate from "../../js/utils/cloneTemplate";

import { append } from "../../js/utils/domHelpers";

export default function FlipCard({
    typeFlipCardClass,
    frontCard,
    backCard,
} = {}) {
    warningUnknownKeys(arguments, [
        "frontCard",
        "backCard",
        "typeFlipCardClass",
    ]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("typeFlipCardClass", typeFlipCardClass, "string");
    validateProp("frontCard", frontCard, "HTMLElement");
    validateProp("backCard", backCard, "HTMLElement");

    const flipCard = cloneTemplate(
        template,
        "flip-card-template"
    ).querySelector(".flip-card");

    flipCard.classList.add(typeFlipCardClass);

    const flipCardFront = flipCard.querySelector(".flip-card-front");
    const flipCardBack = flipCard.querySelector(".flip-card-back");

    append(flipCardFront, [frontCard]);
    append(flipCardBack, [backCard]);

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped");
    });

    return flipCard;
}
