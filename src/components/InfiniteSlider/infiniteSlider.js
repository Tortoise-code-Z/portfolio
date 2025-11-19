import { createDiv } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { validateProp } from "../../js/utils/utils";
import "./infiniteSlider.css";

export default function InfiniteSlider({
    slideComponent = ({ data }) => HTMLElement,
    dataSlides = [],
    duplicationSlides = 3,
    direction = "left",
} = {}) {
    // keys to receive
    const allowedKeys = [
        "slideComponent",
        "dataSlides",
        "duplicationSlides",
        "direction",
    ];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                `Propiedad desconocida: ${key} en slider. Será ignorada.`
            );
        }
    });

    // options of each prop
    const validDuplicationSlides = [3, 4, 5];
    const validDirections = ["right", "left"];

    // validations
    validateProp("slideComponent", slideComponent, "function");
    validateProp("dataSlides", dataSlides, "array");
    validateProp("direction", direction, "string", validDirections);
    validateProp(
        "duplicationSlides",
        duplicationSlides,
        "number",
        validDuplicationSlides
    );

    // slider
    const slider = createDiv({
        classNames: ["slider"].filter(Boolean),
    });

    // sliderTrack
    const sliderTrack = createDiv({
        classNames: [
            "slider__track",
            `slider__track--animation-${duplicationSlides}-${direction}`,
        ].filter(Boolean),
    });

    //   slides
    for (let index = 0; index < duplicationSlides; index++) {
        dataSlides.forEach((data) => {
            const slide = createDiv({
                classNames: ["slider__slide"].filter(Boolean),
            });

            const item = slideComponent({ data: data });

            append(slide, [item]);
            append(sliderTrack, [slide]);
        });
    }

    append(slider, [sliderTrack]);

    return slider;
}
