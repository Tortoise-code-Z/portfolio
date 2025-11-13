import FloatingTitle from "../../../../components/FloatingTitle/floatingTitle";
import bbdd from "../../../../const/database/bbdd";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../../../js/utils/utils";
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
    });

    const title = FloatingTitle({
        text: "Skills",
        icon: "👨🏻‍💻",
        theme: "dark",
        iconPosition: "right",
    });

    const skillItemsContainer = createElement({
        tag: "div",
        classNames: ["s-skills__items-container"],
    });

    bbdd.skills.forEach((skill) =>
        append(skillItemsContainer, [Skill({ skill })])
    );

    append(section, [title, skillItemsContainer]);

    return section;
}
