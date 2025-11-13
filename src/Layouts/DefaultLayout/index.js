import {
    createElement,
    createFragment,
} from "../../js/utils/createElementsHelper";
import { warningUnknownKeys } from "../../js/utils/utils";
import Navbar from "../../components/Navbar/navbar.js";
import { append } from "../../js/utils/domHelpers.js";
import cloneTemplate from "../../js/utils/cloneTemplate.js";
import template from "./defaultFooter.html?raw";
import Link from "../../components/Link/link.js";
import { svg } from "../../const/database/bbdd_consts.js";

export default function DefaultLayout({ ...props } = {}) {
    warningUnknownKeys(arguments, [
        "currentPath",
        "params",
        "queries",
        "navigate",
    ]);

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

    const actions = defaultFooter.querySelector(".default-footer__actions");
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
        icon: svg.calendar,
        href: "#",
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

    append(actions, [github, email, linkedin]);

    append(fragment, [header, main, defaultFooter]);

    return fragment;
}
