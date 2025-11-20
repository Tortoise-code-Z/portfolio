import cloneTemplate from "../../../../js/utils/cloneTemplate";
import {
    attachEvent,
    navbarObserver,
    warningUnknownKeys,
} from "../../../../js/utils/utils";
import "./index.css";
import template from "./index.html?raw";

export default function Hero({} = {}) {
    warningUnknownKeys(arguments, []);

    const hero = cloneTemplate(template, "home-hero-template").querySelector(
        ".hero"
    );

    navbarObserver(hero);

    return hero;
}
