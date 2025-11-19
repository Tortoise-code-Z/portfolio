import "./index.css";
import {
    attachEvent,
    validateProp,
    warningUnknownKeys,
} from "../../../js/utils/utils";
import { createElement } from "../../../js/utils/createElementsHelper";
import { svg } from "../../../const/database/bbdd_consts";
import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";
import Cards from "../../../components/Cards/cards.js";

export default function AboutProject({ id } = {}) {
    warningUnknownKeys(arguments, ["id"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("id", Number(id), "number");

    const work = bbdd.works.find((work) => work.id === Number(id));

    const section = createElement({
        tag: "section",
        classNames: ["pd-s-about"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    // attachEvent(document, "DOMContentLoaded", () => navbarObserver(section));

    const title = FloatingTitle({
        text: "About proyect",
        icon: svg.info,
        theme: "dark",
        iconPosition: "left",
    });

    const description = createElement({
        tag: "div",
        classNames: ["pd-s-about__desc"],
    });

    work.about.description.forEach((paragraph) => {
        const paragraphElement = createElement({
            tag: "p",
            classNames: ["pd-s-about__desc-paragraph"],
            innerText: paragraph,
        });

        append(description, [paragraphElement]);
    });

    const cards = Cards({
        data: work.about.cards,
    });

    append(section, [title, description, cards]);

    return section;
}
