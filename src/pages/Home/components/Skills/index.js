import FloatingTitle from "../../../../components/FloatingTitle/floatingTitle";
import bbdd from "../../../../const/database/bbdd";
import { svg } from "../../../../const/database/bbdd_consts";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import {
    attachEvent,
    navbarObserver,
    warningUnknownKeys,
} from "../../../../js/utils/utils";
import "./index.css";
import Skill from "./Skill";

export default function Skills({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    // const validProps = [];

    // validations
    // validateProp('prop', prop, 'string', validProps);

    const section = createElement({
        tag: "section",
        classNames: ["s-skills"],
        attributes: {
            "data-navbar-color": "black",
        },
    });

    navbarObserver(section);

    const title = FloatingTitle({
        upperCase: true,
        text: "Skills",
        icon: svg.arrowRightDown,
        theme: "dark",
        iconPosition: "right",
    });

    const skillItemsContainer = createElement({
        tag: "div",
        classNames: ["s-skills__items-container"],
    });

    bbdd.skills.forEach((skill, index) =>
        append(skillItemsContainer, [
            Skill({ skill, flexReverse: index % 2 !== 0 }),
        ])
    );

    append(section, [title, skillItemsContainer]);

    return section;
}
