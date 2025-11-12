import cloneTemplate from "../../../../js/utils/cloneTemplate";
import { warningUnknownKeys } from "../../../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";

export default function Hero({} = {}) {
    warningUnknownKeys(arguments, [
        "currentPath",
        "params",
        "queries",
        "navigate",
    ]);

    // box
    const hero = cloneTemplate(template, "home-hero-template");
    return hero;
}
