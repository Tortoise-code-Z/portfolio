import { createElement } from "../../../../js/utils/createElementsHelper";
import {
    attachEvent,
    navbarObserver,
    warningUnknownKeys,
} from "../../../../js/utils/utils";
import WritteMachineTitle from "../../../../components/WritteMachineTitle/writteMachineTitle.js";
import "./index.css";
import { append } from "../../../../js/utils/domHelpers.js";
import WorkItemsContainer from "./WorkItemsContainer/index.js";

export default function Works({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    // const validProps = [];

    // validations
    // validateProp('prop', prop, 'string', validProps);

    const section = createElement({
        tag: "section",
        classNames: ["s-works"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    attachEvent(document, "DOMContentLoaded", () => navbarObserver(section));

    const title = WritteMachineTitle({
        classNames: ["s-works__title"],
        fixText: "W",
        dinamicInitText: "rkos",
        dinamicFinalText: "orks",
    });

    append(section, [title, WorkItemsContainer()]);

    return section;
}
