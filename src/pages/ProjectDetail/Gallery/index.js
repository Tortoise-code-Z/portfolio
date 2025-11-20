import FloatingTitle from "../../../components/FloatingTitle/floatingTitle";
import { svg } from "../../../const/database/bbdd_consts";
import { createElement } from "../../../js/utils/createElementsHelper";
import {
    navbarObserver,
    validateProp,
    warningUnknownKeys,
} from "../../../js/utils/utils";
import "./index.css";
import ImagesSlider from "../../../components/ImagesSlider/imagesSlider";
import bbdd from "../../../const/database/bbdd";
import { append } from "../../../js/utils/domHelpers";

export default function Gallery({ id } = {}) {
    warningUnknownKeys(arguments, ["id"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("id", Number(id), "number");

    const section = createElement({
        tag: "section",
        classNames: ["pd-s-gallery"],
        attributes: {
            "data-navbar-color": "white",
        },
    });

    navbarObserver(section);

    const title = FloatingTitle({
        text: "Gallery",
        icon: svg.gallery,
        theme: "light",
        iconPosition: "left",
        upperCase: true,
        top: 50,
    });

    const imagesCarrousel = ImagesSlider({
        images: bbdd.works[id - 1].images.screenshots,
    });

    append(section, [title, imagesCarrousel]);

    return section;
}
