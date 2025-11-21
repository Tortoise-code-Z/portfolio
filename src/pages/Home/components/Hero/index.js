import cloneTemplate from "../../../../js/utils/cloneTemplate";
import {
    attachEvent,
    createIntersectionObserver,
    fadeInObserver,
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

    const title = hero.querySelector(".hero__title");
    const dev = hero.querySelector(".hero__dev");

    navbarObserver(hero);
    fadeInObserver(title, "animated-element--fade-in-right");
    fadeInObserver(dev, "animated-element--fade-in-left");

    return hero;
}
