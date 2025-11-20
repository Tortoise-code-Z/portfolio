import {
    createDiv,
    createHtag,
    createSpan,
} from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { validateProp } from "../../js/utils/utils";
import "./floatingTitle.css";

export default function FloatingTitle({
    upperCase = false,
    text = "",
    icon = "",
    level = 2,
    theme = "dark",
    iconPosition = "right",
    top = null,
    left = null,
} = {}) {
    // keys to recibe
    const allowedKeys = [
        "text",
        "icon",
        "level",
        "theme",
        "iconPosition",
        "upperCase",
        "top",
        "left",
    ];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                `Propiedad desconocida: "${key}" en Button. Será ignorada.`
            );
        }
    });

    console.log("typeof top", typeof top, 0);

    // options of each props
    const validHTags = [1, 2, 3, 4, 5, 6];
    const validThemes = ["dark", "light"];
    const validIconPositions = ["left", "right"];

    // validations
    validateProp("text", text, "string");
    validateProp("icon", icon, "string");
    validateProp("upperCase", upperCase, "boolean");
    validateProp("level", level, "number", validHTags);
    validateProp("theme", theme, "string", validThemes);
    validateProp("iconPosition", iconPosition, "string", validIconPositions);
    validateProp("top", top, ["number", "null"]);
    validateProp("left", left, ["number", "null"]);

    const container = createDiv({
        classNames: [
            "floating-title",
            "floating-title--animation",
            upperCase ? "floating-title__text--upperCase" : null,
        ].filter(Boolean),
    });

    if (top || top === 0 || left || left === 0) {
        container.style.position = "absolute";
        container.style.top = `${top}px`;
        container.style.left = `${left}px`;
        container.style.zIndex = 99999;
    }

    const title = createHtag({
        level: level,
        classNames: [
            "floating-title__text",
            theme === "dark"
                ? "floating-title__text--dark"
                : "floating-title__text--light",
        ],
        innerText: text,
    });

    const span = createSpan({
        classNames: [
            "floating-title__icon",
            theme === "dark"
                ? "floating-title__icon--dark"
                : "floating-title__icon--light",
        ],
        innerHTML: icon,
    });

    if (iconPosition === "left") {
        append(container, [span, title]);
    } else {
        append(container, [title, span]);
    }

    return container;
}
