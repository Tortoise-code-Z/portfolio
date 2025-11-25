import { createHtag, createSpan } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import {
    createIntersectionObserver,
    fadeInObserver,
    validateProp,
    writteDeleteMachine,
} from "../../js/utils/utils";
import "./writteMachineTitle.css";

export default function WritteMachineTitle({
    classNames = [],
    fixText = "",
    dinamicInitText = "",
    dinamicFinalText = "",
} = {}) {
    // keys to recibe
    const allowedKeys = [
        "fixText",
        "dinamicFinalText",
        "dinamicInitText",
        "classNames",
    ];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                `Propiedad desconocida: "${key}" en Button. Será ignorada.`
            );
        }
    });

    // validations
    validateProp("fixText", fixText, "string");
    validateProp("dinamicInitText", dinamicInitText, "string");
    validateProp("dinamicFinalText", dinamicFinalText, "string");
    validateProp("classNames", classNames, "array");

    const title = createHtag({
        level: 2,
        classNames: ["writte-machine-title", ...classNames],
    });

    fadeInObserver(title, "animated-element--fade-in-right");

    // fix-span
    const fixSpan = createSpan({
        classNames: ["writte-machine-title__fix-text"],
        innerText: fixText,
    });

    // dinamic-span
    const dinamicSpan = createSpan({
        classNames: ["writte-machine-title__dinamic-text"],
        innerText: dinamicInitText,
    });

    append(title, [fixSpan, dinamicSpan]);

    // create observer
    createIntersectionObserver(
        [dinamicSpan],
        (data, entry) => {
            if (entry.isIntersecting) {
                writteDeleteMachine(data);
            }
        },
        [
            {
                element: dinamicSpan,
                textToDelete: dinamicInitText,
                textToWrite: dinamicFinalText,
                delayToWrite: 80,
                delayToDelete: 80,
            },
        ],

        {
            threshold: 1,
        },
        true
    );

    return title;
}
