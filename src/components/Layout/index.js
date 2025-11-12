import {
    createElement,
    createFragment,
} from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import Navbar from "../Navbar/navbar.js";

export default function DefaultLayout({ ...props } = {}) {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en DefaultLayout. Será ignorada."
            );
        }
    });

    const fragment = createFragment();

    const header = createElement({
        tag: "header",
        classNames: ["header"],
    });

    append(header, [Navbar()]);

    const main = createElement({
        tag: "main",
        classNames: ["main-content"],
    });

    const footer = createElement({
        tag: "footer",
        classNames: ["footer"],
    });

    append(fragment, [header, main, footer]);

    return fragment;
}

export function ProductDetailLayout({ ...props } = {}) {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Layout. Será ignorada."
            );
        }
    });

    const fragment = createFragment();

    const header = createElement({
        tag: "header",
        classNames: ["header"],
    });

    append(header, [Navbar()]);

    const main = createElement({
        tag: "main",
        classNames: ["main-content"],
    });

    const footer = createElement({
        tag: "footer",
        classNames: ["footer"],
        innerText: "footer productos",
    });

    append(fragment, [header, main, footer]);

    return fragment;
}
