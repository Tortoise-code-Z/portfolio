import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../../js/utils/utils";
import "./index.css";
import { createElement } from "../../../../../../js/utils/createElementsHelper";
import { getImage } from "../../../../../../js/utils/images";
import { append } from "../../../../../../js/utils/domHelpers";
import template from "./index.html?raw";
import cloneTemplate from "../../../../../../js/utils/cloneTemplate";
import { svg } from "../../../../../../const/database/bbdd_consts";
import Link from "../../../../../../components/Link/link";

export default function WorkBackFlipCard({ data = {} } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = cloneTemplate(
        template,
        "back-flip-card-template"
    ).querySelector(".s-works__back-card");

    const image = container.querySelector(".s-works__back-card-image");
    const title = container.querySelector(".s-works__back-card-title");
    const type = container.querySelector(".s-works__back-card-type");
    const tools = container.querySelector(".s-works__back-card-tools");
    const year = container.querySelector(".s-works__back-card-year");

    image.src = getImage(data.images.backgroundImg.src);
    image.alt = data.images.backgroundImg.alt;
    image.title = data.images.backgroundImg.alt;
    image.width = data.images.backgroundImg.width;
    image.height = data.images.backgroundImg.height;

    title.innerText = data.name;
    type.innerText = `${data.visibility} project · ${data.projectRole}`;
    tools.innerText = data.techStack.tools.fastTools
        .map((tool) => tool.tool)
        .join(" · ")
        .toUpperCase();
    year.innerText = data.year;

    const actions = container.querySelector(".s-works__back-card-actions");

    const code = Link({
        classNames: ["s-works__back-card-action"],
        isButton: true,
        theme: "light",
        variant: "secondary",
        text: "Code",
        href: data.links.github,
        target: "_blank",
        icon: svg.code,
    });

    const moreInfo = Link({
        classNames: ["s-works__back-card-action"],
        isButton: true,
        theme: "light",
        variant: "secondary",
        text: "More Info",
        href: `${import.meta.env.BASE_URL}/project-detail/${data.id}`,
        icon: svg.info,
    });

    let demo;
    if (data.links.demo) {
        demo = Link({
            classNames: ["s-works__back-card-action"],
            isButton: true,
            theme: "light",
            variant: "secondary",
            text: "Demo",
            href: data.links.demo,
            target: "_blank",
            icon: svg.demo,
        });
    }

    append(actions, [code, demo, moreInfo]);

    return container;
}
