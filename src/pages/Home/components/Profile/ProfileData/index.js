import cloneTemplate from "../../../../../js/utils/cloneTemplate";
import { createElement } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import template from "./profile.html?raw";
import bbdd from "../../../../../const/database/bbdd";
import AboutImg from "../../../../../assets/images/about.gif";
import {
    fadeInObserver,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import "./index.css";

export default function ProfileData() {
    warningUnknownKeys(arguments, []);

    const profile = cloneTemplate(template, "about-profile-template");

    const image = profile.querySelector(".s-about__profile-image");

    image.src = AboutImg;

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
        fadeInObserver(item, "animated-element--fade-in-top");
    });

    const aboutText = profile.querySelector(".s-about__profile-about");
    const devName = profile.querySelector(".s-about__profile-name");

    fadeInObserver(aboutText, "animated-element--fade-in-right");
    fadeInObserver(devName, "animated-element--fade-in-left");
    fadeInObserver(image, "animated-element--fade-in-top");

    return profile;
}
