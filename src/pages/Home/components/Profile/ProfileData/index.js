import cloneTemplate from "../../../../../js/utils/cloneTemplate";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import template from "../profile.html?raw";
import bbdd from "../../../../../const/database/bbdd";
import AboutImg from "../../../../../assets/images/about.gif";

export default function ProfileData() {
    // keys to receive
    const allowedKeys = ["currentPath", "params", "queries", "navigate"];

    // warning unknown keys
    Object.keys(arguments[0] || {}).forEach((key) => {
        if (!allowedKeys.includes(key)) {
            console.warn(
                "Propiedad desconocida: ",
                key,
                "en ProfileData. Será ignorada."
            );
        }
    });

    const profile = cloneTemplate(template, "about-profile-template");

    profile.querySelector(".s-about__profile-image").src = AboutImg;

    const profileTextContainer = profile.querySelector(
        ".s-about__profile-text"
    );

    const profileText = bbdd.aboutDesc.map((text) => {
        return createElement({
            tag: "p",
            classNames: ["s-about__profile-text-item"],
            innerText: text,
        });
    });

    profileText.forEach((item) => {
        append(profileTextContainer, [item]);
    });

    return profile;
}
