import bbdd from "../../../../../const/database/bbdd";
import { createDiv } from "../../../../../js/utils/createElementsHelper";
import { append } from "../../../../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../../../../js/utils/utils";
import Work from "../Work";
// import { validateProp } from "../../js/utils/utils";

export default function WorkItemsContainer({} = {}) {
    warningUnknownKeys(arguments, []);

    // options of each prop
    // const validProps = [];

    // validations
    // validateProp('prop', prop, 'string', validProps);

    const container = createDiv({
        classNames: ["s-works__items-container"],
    });

    bbdd.works.forEach((work) => {
        append(container, [Work({ data: work })]);
    });

    return container;
}
