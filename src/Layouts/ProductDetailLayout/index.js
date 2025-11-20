import {
    createElement,
    createFragment,
} from "../../js/utils/createElementsHelper";
import { warningUnknownKeys } from "../../js/utils/utils";
import Navbar from "../../components/Navbar/navbar.js";
import { append } from "../../js/utils/domHelpers.js";
import cloneTemplate from "../../js/utils/cloneTemplate.js";
import Link from "../../components/Link/link.js";
import { svg } from "../../const/database/bbdd_consts.js";
import "./index.css";
import template from "./index.html?raw";
import bbdd from "../../const/database/bbdd.js";

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

    const footer = cloneTemplate(
        template,
        "proyect-detail-footer-template"
    ).querySelector(".footer-proyect-detail");

    const actions = footer.querySelector(".footer-proyect-detail__actions");
    const id = window.location.href.split("/").pop();

    const github = Link({
        isButton: true,
        variant: "secondary",
        theme: "light",
        icon: svg.github,
        target: "_blank",
        href: bbdd.works[id - 1].links.github,
        title: "Github",
        text: "Ver en Github",
    });

    const linkedin = Link({
        isButton: true,
        variant: "secondary",
        theme: "light",
        icon: svg.linkedin,
        target: "_blank",
        href: "https://www.linkedin.com/in/víctor-pérez-developer",
        title: "Linkedin",
        text: "Linkedin",
    });

    let demo;
    if (bbdd.works[id - 1].links.demo !== null) {
        demo = Link({
            isButton: true,
            variant: "secondary",
            theme: "light",
            icon: svg.demo,
            target: "_blank",
            href: bbdd.works[id - 1].links.demo,
            title: "Demo",
            text: "Demo",
        });
    }

    const email = Link({
        classNames: ["default-footer__email"],
        isButton: true,
        variant: "secondary",
        theme: "light",
        icon: svg.email,
        href: "",
        title: "Email",
        text: "victorperez.brmte@passmail.com",
        pointerEvents: "none",
    });

    append(actions, [github, linkedin, demo, email]);

    append(fragment, [header, main, footer]);

    return fragment;
}
