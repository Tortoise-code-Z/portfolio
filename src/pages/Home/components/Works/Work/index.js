import cloneTemplate from "../../../../../js/utils/cloneTemplate.js";
import { getImage } from "../../../../../js/utils/images.js";
import {
    validateProp,
    warningUnknownKeys,
} from "../../../../../js/utils/utils";
import template from "./work.html?raw";
import "./index.css";

export default function Work({ data } = {}) {
    warningUnknownKeys(arguments, ["data"]);

    // options of each prop
    // const validProps = [];

    // validations
    validateProp("data", data, "object");

    const container = cloneTemplate(template, "work-template").querySelector(
        ".s-works__item"
    );

    const bgImg = container.querySelector(".s-works__item-bg-img");
    const link = container.querySelector(".s-works__item-link");
    const linkImg = container.querySelector(".s-works__item-link-img");
    const date = container.querySelector(".s-works__item-date");
    const title = container.querySelector(".s-works__item-title");
    const type = container.querySelector(".s-works__item-type");
    const tools = container.querySelector(".s-works__item-tools");

    bgImg.src = getImage(data.images.backgroundImg.src);
    bgImg.alt = data.images.backgroundImg.alt;
    bgImg.title = data.images.backgroundImg.alt;
    bgImg.width = data.images.backgroundImg.width;
    bgImg.height = data.images.backgroundImg.heigth;

    link.href = `/project-detail/${data.id}`;
    link.title = data.name;
    link.alt = data.name;

    linkImg.src = getImage(data.images.workImg.src);
    linkImg.alt = data.images.workImg.alt;
    linkImg.title = data.images.workImg.alt;
    linkImg.width = data.images.workImg.width;
    linkImg.height = data.images.workImg.heigth;

    date.innerText = data.year;
    title.innerText = data.name;
    type.innerText = data.visibility;
    tools.innerText = data.techStack.tools.fastTools
        .map((tool) => tool.tool)
        .join(" · ");

    return container;
}
