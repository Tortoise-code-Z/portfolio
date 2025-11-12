import { createElement } from "../../../../js/utils/createElementsHelper.js";
import FloatingTitle from "../../../../components/FloatingTitle/floatingTitle.js";
import { append } from "../../../../js/utils/domHelpers.js";
import ProfileData from "./ProfileData/index.js";
import Strengths from "./Strengths/index.js";
import "./index.css";

export default function Profile({ ...props } = {}) {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en Profile. Será ignorada."
            );
        }
    });

    // section container

    const section = createElement({
        tag: "section",
        classNames: ["s-about"],
    });

    // title

    const title = FloatingTitle({
        text: "Profile",
        icon: "👨🏻‍💻",
        theme: "dark",
        iconPosition: "right",
    });

    append(section, [title, ProfileData(), Strengths()]);

    return section;
}
