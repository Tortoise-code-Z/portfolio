import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../js/utils/utils";
import AboutProject from "./About";
import AditionalConfigs from "./AditionalConfigs";
import DevelopmentProcess from "./DevelopmentProcess";
import Gallery from "./Gallery";
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

    // document.querySelector(".navbar").classList.add("navbar--color-black");

    append(fragment, [
        Hero(),
        AboutProject(),
        TechStack(),
        DevelopmentProcess(),
        Gallery(),
        AditionalConfigs(),
    ]);

    return fragment;
}
