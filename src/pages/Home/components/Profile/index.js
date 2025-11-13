import { createElement } from "../../../../js/utils/createElementsHelper.js";
import FloatingTitle from "../../../../components/FloatingTitle/floatingTitle.js";
import { append } from "../../../../js/utils/domHelpers.js";
import ProfileData from "./ProfileData/index.js";
import Strengths from "./Strengths/index.js";
import "./index.css";
import { warningUnknownKeys } from "../../../../js/utils/utils.js";
import { svg } from "../../../../const/database/bbdd_consts.js";

export default function Profile({} = {}) {
    warningUnknownKeys(arguments, []);

    // section container

    const section = createElement({
        tag: "section",
        classNames: ["s-about"],
    });

    // title

    const title = FloatingTitle({
        text: "PROFILE",
        icon: svg.arrowRightDown,
        theme: "dark",
        iconPosition: "right",
    });

    append(section, [title, ProfileData(), Strengths()]);

    return section;
}
