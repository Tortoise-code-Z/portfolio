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

append(document.querySelector("#app-project-detail"), [
    Hero(),
    AboutProject(),
    TechStack(),
    DevelopmentProcess(),
    Gallery(),
    AditionalConfigs(),
]);
