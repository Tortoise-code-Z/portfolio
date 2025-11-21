import {
    createElement,
    createFragment,
} from "../../js/utils/createElementsHelper";
import {
    attachEvent,
    fadeInObserver,
    navbarObserver,
    warningUnknownKeys,
} from "../../js/utils/utils";
import Navbar from "../../components/Navbar/navbar.js";
import { append } from "../../js/utils/domHelpers.js";
import cloneTemplate from "../../js/utils/cloneTemplate.js";
import template from "./defaultFooter.html?raw";
import Link from "../../components/Link/link.js";
import { svg } from "../../const/database/bbdd_consts.js";
import "./defaultFooter.css";

export default function DefaultLayout({} = {}) {
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

    const defaultFooter = cloneTemplate(
        template,
        "default-footer-template"
    ).querySelector(".default-fouter");

    const thanks = defaultFooter.querySelector(".default-footer__thanks");
    const nick = defaultFooter.querySelector(".default-footer__nick");
    const occupation = defaultFooter.querySelector(
        ".default-footer__occupation"
    );
    const year = defaultFooter.querySelector(".default-footer__year");
    const signature = defaultFooter.querySelector(".default-footer__signature");

    fadeInObserver(thanks, `animated-element--fade-in-right`);
    fadeInObserver(nick, `animated-element--fade-in-left`);
    fadeInObserver(signature, `animated-element--fade-in-right`);
    fadeInObserver(occupation, `animated-element--fade-in-left`);
    fadeInObserver(year, `animated-element--fade-in-right`);

    navbarObserver(defaultFooter);

    const actions = defaultFooter.querySelector(".default-footer__actions");
    fadeInObserver(actions, `animated-element--fade-in-top`);
    const github = Link({
        isButton: true,
        variant: "secondary",
        theme: "dark",
        icon: svg.github,
        target: "_blank",
        href: "https://github.com/Tortoise-code-Z",
        title: "Github",
        text: "Github",
    });

    const email = Link({
        classNames: ["default-footer__email"],
        isButton: true,
        variant: "secondary",
        theme: "dark",
        icon: svg.email,
        href: "",
        title: "Email",
        text: "victorperez.brmte@passmail.com",
        pointerEvents: "none",
    });

    const linkedin = Link({
        isButton: true,
        variant: "secondary",
        theme: "dark",
        icon: svg.linkedin,
        target: "_blank",
        href: "https://www.linkedin.com/in/víctor-pérez-developer",
        title: "Linkedin",
        text: "Linkedin",
    });

    append(actions, [github, linkedin, email]);

    append(fragment, [header, main, defaultFooter]);

    return fragment;
}
