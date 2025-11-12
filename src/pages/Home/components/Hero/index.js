import cloneTemplate from "../../../../js/utils/cloneTemplate";
import "./index.css";
import template from "./index.html?raw";

export default function Hero({ ...props } = {}) {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Hero. Será ignorada."
            );
        }
    });

    // options of each prop
    const validProps = [];

    // box
    const hero = cloneTemplate(template, "home-hero-template");
    return hero;
}
