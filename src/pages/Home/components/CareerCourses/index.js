import WritteMachineTitle from "../../../../components/WritteMachineTitle/writteMachineTitle";
import bbdd from "../../../../const/database/bbdd";
import { createElement } from "../../../../js/utils/createElementsHelper";
import { append } from "../../../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../../../js/utils/utils";
import CareerCourse from "./CareerCourse";
import "./index.css";

export default function Career({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    // const validProps = [];

    // validations
    // validateProp('prop', prop, 'string', validProps);

    const section = createElement({
        tag: "section",
        classNames: ["s-career"],
    });

    const title = WritteMachineTitle({
        fixText: "C",
        dinamicInitText: "reera",
        dinamicFinalText: "areer",
    });

    const courses = createElement({
        tag: "div",
        classNames: ["s-career__courses"],
    });

    bbdd.career.forEach((item) => {
        append(courses, [CareerCourse({ data: item })]);
    });

    append(section, [title, courses]);

    return section;
}
