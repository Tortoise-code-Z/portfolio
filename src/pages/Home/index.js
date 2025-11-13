import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../js/utils/utils";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./index.css";

export default function Home({ ...props } = {}) {
    warningUnknownKeys(arguments, [
        "currentPath",
        "params",
        "queries",
        "navigate",
    ]);

    const fragment = createFragment();

    let manolo = "manolo";

    append(fragment, [Hero(), Profile(), Works(), Skills()]);

    return fragment;
}
