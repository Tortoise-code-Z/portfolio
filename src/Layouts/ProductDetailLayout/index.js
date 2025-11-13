import {
    createElement,
    createFragment,
} from "../../js/utils/createElementsHelper";
import { warningUnknownKeys } from "../../js/utils/utils";
import Navbar from "../../components/Navbar/navbar.js";
import { append } from "../../js/utils/domHelpers.js";

export function ProductDetailLayout({} = {}) {
    warningUnknownKeys(arguments, []);

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
