import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import NoteMsg from "../../../components/NoteMsg/noteMsg";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import { validateProp, warningUnknownKeys } from "../../../js/utils/utils";
import "./index.css";

export default function AditionalConfigs({ id } = {}) {
    warningUnknownKeys(arguments, ["id"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("id", Number(id), "number");

    const section = createElement({
        tag: "section",
        classNames: ["pd-s-config"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    const title = FloatingTitle({
        text: "Configuraciones adicionales",
        icon: svg.key,
        theme: "dark",
        iconPosition: "left",
    });

    const description = createElement({
        tag: "div",
        classNames: ["pd-s-config__desc"],
    });

    bbdd.works[id - 1].config.description.forEach((desc) => {
        const item = createElement({
            tag: "p",
            classNames: ["pd-s-config__desc-item"],
            innerText: desc,
        });

        append(description, [item]);
    });

    append(section, [title, description]);

    bbdd.works[id - 1].config.steps.forEach((step, index) => {
        const item = createElement({
            tag: "div",
            classNames: ["config__desc-item"],
        });

        const icon = createElement({
            tag: "span",
            classNames: ["config__desc-title-icon"],
            innerHTML: svg.padlock,
        });
        const titleText = createElement({
            tag: "span",
            classNames: ["config__desc-title-text"],
            innerText: step.title,
        });

        const title = createElement({
            tag: "h3",
            classNames: ["config__desc-item-title"],
        });

        const description = createElement({
            tag: "p",
            classNames: ["config__desc-item-desc"],
            innerText: step.description,
        });

        append(title, [icon, titleText]);
        append(item, [title, description]);
        append(section, [item]);
    });

    if (bbdd.works[id - 1].config.warningMsg) {
        const warningMsg = NoteMsg({
            type: "warning",
            desc: bbdd.works[id - 1].config.warningMsg.description,
        });

        append(container, [warningMsg]);
    }

    if (bbdd.works[id - 1].config.noteMsg) {
        const noteMsg = NoteMsg({
            desc: bbdd.works[id - 1].config.noteMsg.description,
        });

        append(section, [noteMsg]);
    }

    return section;
}
