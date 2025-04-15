import bbdd from "../../json/bbdd.json";
import {
    appendElement,
    createLink,
    createFigure,
    createDiv,
    createImg,
    createPar,
    createHtag,
    createFragment,
} from "../utils/utils";

export const createWorkItems = (parent) => {
    const works = bbdd.works;
    works.forEach((data) => {
        createWorkItem(parent, data);
    });
};

const createWorkItem = (parent, data) => {
    const { name, year, type, tools, backgroundImg, githubURL, workImg } = data;

    // Temporal box
    const fragment = createFragment();

    const workContainer = createDiv({
        parent: fragment,
        classNames: ["sw-work-item-container"],
    });

    const work = createDiv({
        parent: workContainer,
        classNames: ["sw-work-item"],
    });

    const workLink = createLink({
        classNames: ["sw-proyect-link"],
        parent: work,
        attributes: {
            target: "_blank",
            href: githubURL || "#",
            title: `${name} Proyect`,
        },
    });

    const workLinkFigure = createFigure({
        classNames: ["sw-item-img"],
        parent: workLink,
    });

    // workLink image
    createImg({
        parent: workLinkFigure,
        attributes: {
            src: workImg.src,
            title: `${name} Proyect`,
            alt: `${name} Proyect`,
            width: workImg.width,
            heigth: workImg.heigth,
        },
    });

    // Background work image
    createImg({
        parent: work,
        classNames: ["sw-wi-bccimg"],
        attributes: {
            src: backgroundImg.src,
            width: backgroundImg.width,
            heigth: backgroundImg.heigth,
        },
    });

    const workData = createDiv({
        parent: work,
        classNames: ["sw-item-data"],
    });

    // Proyect year
    createPar({
        parent: workData,
        classNames: ["sw-item-date"],
        innerText: year,
    });

    // Proyect name
    createHtag({
        parent: workData,
        level: 3,
        classNames: ["title-h3"],
        innerText: name,
    });

    // Proyect type
    createDiv({
        parent: workData,
        classNames: ["sw-item-type"],
        innerText: type,
    });

    // Proyect tools
    createDiv({
        parent: workData,
        classNames: ["sw-item-tools"],
        innerText: tools.join(" · "),
    });

    appendElement(fragment, parent);
};
