import { createHtag, createSpan } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import {
    createIntersectionObserver,
    validateProp,
    writteDeleteMachine,
} from "../../js/utils/utils";
import "./writteMachineTitle.css";

export default function WritteMachineTitle({
    fixText = "",
    dinamicInitText = "",
    dinamicFinalText = "",
} = {}) {
    // keys to recibe
    const allowedKeys = ["fixText", "dinamicFinalText", "dinamicInitText"];

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

    const title = createHtag({
        level: 2,
        classNames: ["writte-machine-title"],
    });

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
        writteDeleteMachine,
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
