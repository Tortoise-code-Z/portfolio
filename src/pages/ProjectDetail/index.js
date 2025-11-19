import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../js/utils/utils";
import AboutProject from "./About";
import Hero from "./Hero";
import "./index.css";
import TechStack from "./TechStack";

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

    append(fragment, [
        Hero({ id: params.id }),
        AboutProject({ id: params.id }),
        TechStack({ id: params.id }),
    ]);

    return fragment;
}
