import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import InfiniteSlider from "../../../components/InfiniteSlider/infiniteSlider";
import bbdd from "../../../const/database/bbdd";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import { append } from "../../../js/utils/domHelpers";
import {
    navbarObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../js/utils/utils";
import "./index.css";
import TechStackLibraries from "./TechStackLibraries";
import TechStackTools from "./TechStackTools";
import TechStackDesign from "./TechStackDesign";

export default function TechStack({ id } = {}) {
    warningUnknownKeys(arguments, ["id"]);
    const work = bbdd.works.find((work) => work.id === Number(id));

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("id", Number(id), "number");

    const section = createElement({
        tag: "section",
        classNames: ["pd-s-tech-stack"],
        attributes: {
            "data-navbar-color": "black",
            id: "tech-stack",
        },
    });

    navbarObserver(section);

    const title = FloatingTitle({
        text: "Stack Tecnológico",
        icon: svg.stack,
        theme: "light",
        iconPosition: "left",
        upperCase: true,
    });

    const techStackContainer = createElement({
        tag: "div",
        classNames: ["pd-s-tech-stack__container"],
    });

    append(techStackContainer, [
        TechStackTools({ tools: work.techStack.tools.allTools }),
        TechStackLibraries({ libraries: work.techStack.librariesUtils }),
        TechStackDesign({ designs: work.techStack.stylesDesign }),
    ]);

    append(section, [title, techStackContainer]);

    return section;
}
