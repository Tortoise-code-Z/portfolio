import { createFragment } from "../../js/utils/createElementsHelper";
import { append } from "../../js/utils/domHelpers";
import { warningUnknownKeys } from "../../js/utils/utils";
import Career from "./components/CareerCourses";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./index.css";

append(document.querySelector("#app-home"), [
    Hero(),
    Profile(),
    Works(),
    Skills(),
    Career(),
]);
