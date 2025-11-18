import { createDiv, createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { validateProp, warningUnknownKeys } from "../../js/utils/utils";
import Hero from "./Hero";
import "./index.css";

export default function ProjectDetail({
    currentPath,
    params,
    queries,
    navigate,
} = {}) {
    warningUnknownKeys(arguments, [
        "currentPath",
        "params",
        "queries",
        "navigate",
    ]);

    const fragment = createFragment();

    append(fragment, [Hero({ id: params.id })]);

    return fragment;
}
