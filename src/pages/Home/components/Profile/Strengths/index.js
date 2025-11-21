import InfiniteSlider from "../../../../../components/InfiniteSlider/infiniteSlider";
import bbdd from "../../../../../const/database/bbdd";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import {
    fadeInObserver,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import StrengthSlide from "./StrenghtSlide";
import "./index.css";

export default function Strengths() {
    warningUnknownKeys(arguments, []);

    const strengthsContainer = createElement({
        tag: "div",
        classNames: ["s-about__strengths"],
    });

    const strengthsTitle = createElement({
        tag: "h4",
        classNames: ["s-about__strengths-title"],
        innerText: "Strengths",
    });

    fadeInObserver(strengthsTitle, "animated-element--fade-in-top");

    const strengthsSlider = InfiniteSlider({
        dataSlides: bbdd.strengths,
        slideComponent: StrengthSlide,
        duplicationSlides: 5,
        direction: "left",
    });

    fadeInObserver(strengthsSlider, "animated-element--fade-in-left");

    append(strengthsContainer, [strengthsTitle, strengthsSlider]);

    return strengthsContainer;
}
