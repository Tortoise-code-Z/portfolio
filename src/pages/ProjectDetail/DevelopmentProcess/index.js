import { createElement } from "../../../js/utils/createElementsHelper";
import {
    fadeInObserver,
    navbarObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../js/utils/utils";
import "./index.css";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";
import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import { svg } from "../../../const/database/bbdd_consts";
import Cards from "../../../components/Cards/cards";
import NoteMsg from "../../../components/NoteMsg/noteMsg";
import { router } from "../../../../main";

export default function DevelopmentProcess({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    //   const validProps = [];

    // validations

    const id = router.getParams().id;
    const work = bbdd.works.find((work) => work.id === Number(id));

    const container = createElement({
        tag: "section",
        classNames: ["s-pd-dev-process"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    navbarObserver(container);

    const title = FloatingTitle({
        text: "Proceso de desarrollo",
        icon: svg.process,
        theme: "light",
        iconPosition: "left",
        upperCase: true,
    });

    const description = createElement({
        tag: "div",
        classNames: ["s-pd-dev-process__desc"],
    });

    work.development_process.description.forEach((desc, index) => {
        const item = createElement({
            tag: "p",
            classNames: ["dev-process__desc-paragraph"],
            innerText: desc,
        });

        fadeInObserver(
            item,
            `animated-element--fade-in-${index % 2 === 0 ? "left" : "right"}`
        );

        append(description, [item]);
    });

    const cards = Cards({
        classNames: ["dev-process__cards"],
        data: work.development_process.cards,
    });

    append(container, [title, description, cards]);

    if (work.development_process.warningMsg) {
        const warningMsg = NoteMsg({
            type: "warning",
            desc: work.development_process.warningMsg.description,
        });

        append(container, [warningMsg]);
    }

    if (work.development_process.noteMsg) {
        const noteMsg = NoteMsg({
            desc: work.development_process.noteMsg.description,
        });

        append(container, [noteMsg]);
    }

    return container;
}
