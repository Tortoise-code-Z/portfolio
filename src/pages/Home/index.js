import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import {
    createIntersectionObserver,
    warningUnknownKeys,
} from "../../js/utils/utils";
import Career from "./components/CareerCourses";
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

    append(fragment, [Hero(), Profile(), Works(), Skills(), Career()]);

    return fragment;
}
