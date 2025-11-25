import "./index.css";
import {
    attachEvent,
    fadeInObserver,
    navbarObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../js/utils/utils";
import { createElement } from "../../../js/utils/createElementsHelper";
import { svg } from "../../../const/database/bbdd_consts";
import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";
import Cards from "../../../components/Cards/cards.js";
import { router } from "../../../../main.js";

export default function AboutProject({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    // const validProps = [];

    // validations
    const id = router.getParams().id;
    const work = bbdd.works.find((work) => work.id === Number(id));

    const section = createElement({
        tag: "section",
        classNames: ["pd-s-about"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    navbarObserver(section);

    const title = FloatingTitle({
        text: "About proyect",
        icon: svg.info,
        theme: "light",
        iconPosition: "left",
        upperCase: true,
    });

    const description = createElement({
        tag: "div",
        classNames: ["pd-s-about__desc"],
    });

    work.about.description.forEach((paragraph, index) => {
        const paragraphElement = createElement({
            tag: "p",
            classNames: ["pd-s-about__desc-paragraph"],
            innerText: paragraph,
        });

        fadeInObserver(
            paragraphElement,
            `animated-element--fade-in-${index % 2 === 0 ? "left" : "right"}`
        );

        append(description, [paragraphElement]);
    });

    const cards = Cards({
        classNames: ["pd-s-about__cards"],
        data: work.about.cards,
    });

    append(section, [title, description, cards]);

    return section;
}
